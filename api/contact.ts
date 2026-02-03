import type { VercelRequest, VercelResponse } from '@vercel/node';
import { submitContact, type ContactBody } from '../lib/contactSubmit.js';

function parseBody(req: VercelRequest): ContactBody | null {
  if (req.body == null) return null;
  if (typeof req.body === 'object') return req.body as ContactBody;
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body) as ContactBody;
    } catch {
      return null;
    }
  }
  return null;
}

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const body = parseBody(req);
  if (!body) {
    res.status(400).json({ error: 'Invalid JSON body' });
    return;
  }

  const result = await submitContact(body);

  if (result.success) {
    res.status(200).json({ success: true, message: 'Thank you for reaching out. We will get back to you shortly.' });
    return;
  }

  res.status(result.statusCode).json({ error: result.error });
}
