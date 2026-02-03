import type { VercelRequest, VercelResponse } from '@vercel/node';
import { ObjectId } from 'mongodb';
import { verifyToken } from '../lib/auth';
import { getDb } from '../lib/db';
import { GALLERY_MEDIA } from '../constants';

const COLLECTION = 'gallery';
const MAX_FILE_BYTES = 5 * 1024 * 1024; // 5 MB

function getBearerToken(req: VercelRequest): string | undefined {
  const auth = req.headers.authorization;
  if (typeof auth === 'string' && auth.startsWith('Bearer ')) return auth.slice(7);
  return undefined;
}

function base64Size(base64: string): number {
  const padding = base64.endsWith('==') ? 2 : base64.endsWith('=') ? 1 : 0;
  return Math.floor((base64.length * 3) / 4) - padding;
}

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'GET') {
    try {
      const db = await getDb();
      const collection = db.collection(COLLECTION);

      // Seed initial gallery from constants when collection is empty
      const existingCount = await collection.countDocuments();
      if (existingCount === 0) {
        const seedDocs = GALLERY_MEDIA.map((item, index) => ({
          type: item.type,
          // Use existing remote URLs for initial items
          url: item.url,
          order: index,
          createdAt: new Date(),
        }));
        if (seedDocs.length > 0) {
          await collection.insertMany(seedDocs);
        }
      }

      const raw = await collection.find({}).sort({ order: 1 }).toArray();
      const items = raw.map((doc) => ({ ...doc, _id: String(doc._id) }));
      res.status(200).json({ items });
    } catch (err) {
      console.error('Gallery GET error:', err);
      res.status(500).json({ error: 'Failed to load gallery' });
    }
    return;
  }

  const token = getBearerToken(req);
  if (!verifyToken(token)) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  if (req.method === 'POST') {
    const body = req.body as { type?: string; data?: string; mimeType?: string } | null;
    const type = body?.type === 'video' ? 'video' : 'image';
    const data = typeof body?.data === 'string' ? body.data : '';
    const mimeType = typeof body?.mimeType === 'string' ? body.mimeType : (type === 'video' ? 'video/mp4' : 'image/jpeg');
    if (!data) {
      res.status(400).json({ error: 'Missing data (base64)' });
      return;
    }
    if (base64Size(data) > MAX_FILE_BYTES) {
      res.status(400).json({ error: 'File must be 5 MB or smaller' });
      return;
    }
    try {
      const db = await getDb();
      const collection = db.collection(COLLECTION);

      // New items should appear at the top: shift existing orders down
      await collection.updateMany({}, { $inc: { order: 1 } });

      const { insertedId } = await collection.insertOne({
        type,
        mimeType,
        data,
        order: 0,
        createdAt: new Date(),
      });
      res.status(200).json({ success: true, id: String(insertedId) });
    } catch (err) {
      console.error('Gallery POST error:', err);
      res.status(500).json({ error: 'Failed to add item' });
    }
    return;
  }

  if (req.method === 'PUT') {
    const body = req.body as { orderedIds?: string[] } | null;
    const orderedIds = Array.isArray(body?.orderedIds) ? body.orderedIds : [];
    if (orderedIds.length === 0) {
      res.status(400).json({ error: 'Missing orderedIds' });
      return;
    }
    try {
      const db = await getDb();
      const bulk = orderedIds.map((id, index) => ({
        updateOne: { filter: { _id: new ObjectId(id) }, update: { $set: { order: index } } },
      }));
      await db.collection(COLLECTION).bulkWrite(bulk);
      res.status(200).json({ success: true });
    } catch (err) {
      console.error('Gallery PUT error:', err);
      res.status(500).json({ error: 'Failed to reorder' });
    }
    return;
  }

  if (req.method === 'DELETE') {
    const id = typeof req.query.id === 'string' ? req.query.id : '';
    if (!id) {
      res.status(400).json({ error: 'Missing id' });
      return;
    }
    try {
      const db = await getDb();
      await db.collection(COLLECTION).deleteOne({ _id: new ObjectId(id) });
      res.status(200).json({ success: true });
    } catch (err) {
      console.error('Gallery DELETE error:', err);
      res.status(500).json({ error: 'Failed to delete' });
    }
    return;
  }

  res.status(405).json({ error: 'Method not allowed' });
}
