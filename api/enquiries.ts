import type { VercelRequest, VercelResponse } from '@vercel/node';
import { verifyToken } from '../lib/auth.js';
import { getDb } from '../lib/db.js';

const COLLECTION = 'contacts';

function getBearerToken(req: VercelRequest): string | undefined {
  const auth = req.headers.authorization;
  if (typeof auth === 'string' && auth.startsWith('Bearer ')) {
    return auth.slice(7);
  }
  return undefined;
}

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const token = getBearerToken(req);
  if (!verifyToken(token)) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  try {
    const db = await getDb();
    const list = await db.collection(COLLECTION).find({}).sort({ createdAt: -1 }).toArray();
    res.status(200).json({ enquiries: list });
  } catch (err) {
    console.error('Enquiries API error:', err);
    res.status(500).json({ error: 'Failed to load enquiries' });
  }
}
