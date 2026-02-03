import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createToken, getAdminCredentials } from '../lib/auth';

interface LoginBody {
  username?: string;
  password?: string;
}

function parseBody(req: VercelRequest): LoginBody | null {
  if (req.body == null) return null;
  if (typeof req.body === 'object') return req.body as LoginBody;
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body) as LoginBody;
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

  const creds = getAdminCredentials();
  if (!creds) {
    res.status(500).json({ error: 'Admin login is not configured. Set ADMIN_USERNAME and ADMIN_PASSWORD in environment.' });
    return;
  }

  const body = parseBody(req);
  const username = typeof body?.username === 'string' ? body.username.trim() : '';
  const password = typeof body?.password === 'string' ? body.password : '';

  if (username !== creds.username || password !== creds.password) {
    res.status(401).json({ error: 'Invalid username or password' });
    return;
  }

  const token = createToken();
  res.status(200).json({ success: true, token });
}
