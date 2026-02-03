import type { IncomingMessage, ServerResponse } from 'http';
import { createToken, getAdminCredentials, verifyToken } from './auth';
import { getDb } from './db';
import { ObjectId } from 'mongodb';
import { GALLERY_MEDIA } from '../constants';

const GALLERY_COLLECTION = 'gallery';
const CONTACTS_COLLECTION = 'contacts';
const MAX_FILE_BYTES = 5 * 1024 * 1024;

function base64Size(base64: string): number {
  const padding = base64.endsWith('==') ? 2 : base64.endsWith('=') ? 1 : 0;
  return Math.floor((base64.length * 3) / 4) - padding;
}

function getAuthHeader(req: IncomingMessage): string | undefined {
  const auth = req.headers.authorization;
  if (typeof auth === 'string' && auth.startsWith('Bearer ')) return auth.slice(7);
  return undefined;
}

function parseQuery(url: string): Record<string, string> {
  const i = url.indexOf('?');
  if (i === -1) return {};
  const out: Record<string, string> = {};
  new URLSearchParams(url.slice(i)).forEach((v, k) => { out[k] = v; });
  return out;
}

function send(res: ServerResponse, status: number, data: object) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}

export function isApiRoute(url: string, method: string): boolean {
  const path = url.split('?')[0];
  if (path === '/api/login' && method === 'POST') return true;
  if (path === '/api/enquiries' && method === 'GET') return true;
  if (path === '/api/gallery') return ['GET', 'POST', 'PUT', 'DELETE'].includes(method);
  return false;
}

export async function handleDevApi(
  req: IncomingMessage,
  res: ServerResponse,
  method: string,
  path: string,
  body: string
): Promise<void> {
  if (path === '/api/login' && method === 'POST') {
    const creds = getAdminCredentials();
    if (!creds) {
      send(res, 500, { error: 'Admin login not configured' });
      return;
    }
    try {
      const data = JSON.parse(body || '{}');
      const username = typeof data.username === 'string' ? data.username.trim() : '';
      const password = typeof data.password === 'string' ? data.password : '';
      if (username !== creds.username || password !== creds.password) {
        send(res, 401, { error: 'Invalid username or password' });
        return;
      }
      send(res, 200, { success: true, token: createToken() });
    } catch {
      send(res, 400, { error: 'Invalid JSON' });
    }
    return;
  }

  if (path === '/api/enquiries' && method === 'GET') {
    if (!verifyToken(getAuthHeader(req))) {
      send(res, 401, { error: 'Unauthorized' });
      return;
    }
    try {
      const db = await getDb();
      const list = await db.collection(CONTACTS_COLLECTION).find({}).sort({ createdAt: -1 }).toArray();
      send(res, 200, { enquiries: list });
    } catch (err) {
      console.error('Enquiries error:', err);
      send(res, 500, { error: 'Failed to load enquiries' });
    }
    return;
  }

  if (path === '/api/gallery') {
    if (method === 'GET') {
      try {
        const db = await getDb();
        const collection = db.collection(GALLERY_COLLECTION);

        // Seed initial gallery from constants when collection is empty
        const existingCount = await collection.countDocuments();
        if (existingCount === 0) {
          const seedDocs = GALLERY_MEDIA.map((item, index) => ({
            type: item.type,
            url: item.url,
            order: index,
            createdAt: new Date(),
          }));
          if (seedDocs.length > 0) {
            await collection.insertMany(seedDocs);
          }
        }

        const raw = await collection.find({}).sort({ order: 1 }).toArray();
        const items = raw.map((doc: { _id: unknown; [k: string]: unknown }) => ({
          ...doc,
          _id: String(doc._id),
        }));
        send(res, 200, { items });
      } catch (err) {
        console.error('Gallery GET error:', err);
        send(res, 500, { error: 'Failed to load gallery' });
      }
      return;
    }

    if (!verifyToken(getAuthHeader(req))) {
      send(res, 401, { error: 'Unauthorized' });
      return;
    }

    if (method === 'POST') {
      try {
        const data = JSON.parse(body || '{}');
        const type = data.type === 'video' ? 'video' : 'image';
        const rawData = typeof data.data === 'string' ? data.data : '';
        const mimeType = typeof data.mimeType === 'string' ? data.mimeType : (type === 'video' ? 'video/mp4' : 'image/jpeg');
        if (!rawData) {
          send(res, 400, { error: 'Missing data (base64)' });
          return;
        }
        if (base64Size(rawData) > MAX_FILE_BYTES) {
          send(res, 400, { error: 'File must be 5 MB or smaller' });
          return;
        }
        const db = await getDb();
        const collection = db.collection(GALLERY_COLLECTION);

        // New items should appear at the top: shift existing orders down
        await collection.updateMany({}, { $inc: { order: 1 } });

        const { insertedId } = await collection.insertOne({
          type,
          mimeType,
          data: rawData,
          order: 0,
          createdAt: new Date(),
        });
        send(res, 200, { success: true, id: String(insertedId) });
      } catch (err) {
        console.error('Gallery POST error:', err);
        send(res, 500, { error: 'Failed to add item' });
      }
      return;
    }

    if (method === 'PUT') {
      try {
        const data = JSON.parse(body || '{}');
        const orderedIds = Array.isArray(data.orderedIds) ? data.orderedIds : [];
        if (orderedIds.length === 0) {
          send(res, 400, { error: 'Missing orderedIds' });
          return;
        }
        const db = await getDb();
        const bulk = orderedIds.map((id: string, index: number) => ({
          updateOne: { filter: { _id: new ObjectId(id) }, update: { $set: { order: index } } },
        }));
        await db.collection(GALLERY_COLLECTION).bulkWrite(bulk);
        send(res, 200, { success: true });
      } catch (err) {
        console.error('Gallery PUT error:', err);
        send(res, 500, { error: 'Failed to reorder' });
      }
      return;
    }

    if (method === 'DELETE') {
      const query = parseQuery(req.url || '');
      const id = query.id;
      if (!id) {
        send(res, 400, { error: 'Missing id' });
        return;
      }
      try {
        const db = await getDb();
        await db.collection(GALLERY_COLLECTION).deleteOne({ _id: new ObjectId(id) });
        send(res, 200, { success: true });
      } catch (err) {
        console.error('Gallery DELETE error:', err);
        send(res, 500, { error: 'Failed to delete' });
      }
      return;
    }
  }

  send(res, 405, { error: 'Method not allowed' });
}
