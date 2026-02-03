import { MongoClient, type Db } from 'mongodb';

const DB_NAME = process.env.MONGODB_DB_NAME ?? 'unitots';
const COLLECTION_NAME = 'contacts';

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function getClient(uri: string): Promise<MongoClient> {
  if (global._mongoClientPromise) {
    return global._mongoClientPromise;
  }
  global._mongoClientPromise = new MongoClient(uri).connect();
  return global._mongoClientPromise;
}

async function getDb(uri: string): Promise<Db> {
  const client = await getClient(uri);
  return client.db(DB_NAME);
}

export interface ContactBody {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export type SubmitResult =
  | { success: true }
  | { success: false; statusCode: number; error: string };

function validate(body: ContactBody): { ok: true; name: string; email: string; phone: string; message: string } | { ok: false; error: string } {
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name) return { ok: false, error: 'Parent\'s name is required' };
  if (!email) return { ok: false, error: 'Email is required' };
  if (!phone) return { ok: false, error: 'Phone number is required' };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return { ok: false, error: 'Invalid email address' };

  return { ok: true, name, email, phone, message };
}

export async function submitContact(body: ContactBody): Promise<SubmitResult> {
  const validation = validate(body);
  if (!validation.ok) {
    return { success: false, statusCode: 400, error: validation.error };
  }

  const { name, email, phone, message } = validation;
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    return { success: false, statusCode: 500, error: 'Server configuration error. Please try again later.' };
  }

  try {
    const db = await getDb(uri);
    const collection = db.collection(COLLECTION_NAME);
    const phoneDigits = phone.replace(/\D/g, '').slice(-10);

    const emailRegex = new RegExp(`^${email.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'i');
    const duplicateQuery: Record<string, unknown>[] = [{ email: emailRegex }];
    if (phoneDigits.length >= 10) {
      duplicateQuery.push({ phone: { $regex: phoneDigits } });
    }
    const existing = await collection.findOne({ $or: duplicateQuery });

    if (existing) {
      return {
        success: false,
        statusCode: 409,
        error: 'A message with this email or phone has already been submitted. We will get back to you shortly.',
      };
    }

    await collection.insertOne({
      name,
      email,
      phone,
      message,
      createdAt: new Date(),
    });

    return { success: true };
  } catch (err) {
    console.error('Contact submit error:', err);
    return { success: false, statusCode: 500, error: 'Failed to save your message. Please try again later.' };
  }
}
