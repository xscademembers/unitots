import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import type { Connect } from 'vite';
import { submitContact } from './lib/contactSubmit';
import { isApiRoute, handleDevApi } from './lib/devApi';

function contactApiMiddleware(): Connect.NextHandleFunction {
  return (req, res, next) => {
    if (req.url !== '/api/contact' || req.method !== 'POST') {
      return next();
    }
    let body = '';
    req.on('data', (chunk) => { body += typeof chunk === 'string' ? chunk : chunk.toString(); });
    req.on('end', async () => {
      try {
        const data = JSON.parse(body || '{}');
        const result = await submitContact(data);
        res.setHeader('Content-Type', 'application/json');
        if (result.success) {
          res.statusCode = 200;
          res.end(JSON.stringify({ success: true, message: 'Thank you for reaching out. We will get back to you shortly.' }));
        } else {
          res.statusCode = result.statusCode;
          res.end(JSON.stringify({ error: result.error }));
        }
      } catch {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Invalid JSON body' }));
      }
    });
    req.on('error', () => { res.statusCode = 500; res.end(); });
  };
}

function devApiMiddleware(): Connect.NextHandleFunction {
  return (req, res, next) => {
    const pathname = (req.url || '').split('?')[0];
    const method = req.method || 'GET';
    if (!isApiRoute(pathname, method)) return next();
    let body = '';
    req.on('data', (chunk) => { body += typeof chunk === 'string' ? chunk : chunk.toString(); });
    req.on('end', () => {
      handleDevApi(req, res, method, pathname, body);
    });
    req.on('error', () => { res.statusCode = 500; res.end(); });
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  if (env.MONGODB_URI) process.env.MONGODB_URI = env.MONGODB_URI;
  if (env.MONGODB_DB_NAME) process.env.MONGODB_DB_NAME = env.MONGODB_DB_NAME;
  if (env.ADMIN_USERNAME) process.env.ADMIN_USERNAME = env.ADMIN_USERNAME;
  if (env.ADMIN_PASSWORD) process.env.ADMIN_PASSWORD = env.ADMIN_PASSWORD;
  if (env.JWT_SECRET) process.env.JWT_SECRET = env.JWT_SECRET;

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [
      react(),
      {
        name: 'contact-api',
        configureServer(server) {
          server.middlewares.use(contactApiMiddleware());
          server.middlewares.use(devApiMiddleware());
        },
      },
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
