# UNITOTS Preschool – Website

A joyful, playful website for UNITOTS Preschool, Day Care, and Activity Centre.

## Prerequisites

- **Node.js** (v18 or later)

## Run locally

1. Copy [.env.example](.env.example) to `.env.local` and set:
   - **MONGODB_URI** – MongoDB Atlas connection string (contact form + gallery).
   - **ADMIN_USERNAME** and **ADMIN_PASSWORD** – dashboard login.
   - **JWT_SECRET** – any long random string (for dashboard session).

2. Start the app:
```bash
npm install
npm run dev
```

Open the URL shown (e.g. `http://localhost:3000`). The contact form and gallery work locally and when deployed. **Dashboard** (hidden, not in the main nav): go to `/#/dashboard` to log in with ADMIN_USERNAME/ADMIN_PASSWORD. There you can view **Enquiries** (contact form submissions) and **Manage Gallery** (add/delete/reorder images and videos, stored as base64 in MongoDB; max 5 MB per file).

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deploy to Vercel

1. Connect your repo to Vercel (GitHub / GitLab / Bitbucket) and deploy.

2. In the project: **Settings → Environment Variables** add:
   - **`MONGODB_URI`** – MongoDB Atlas connection string (contact form + gallery).
   - **`ADMIN_USERNAME`** and **`ADMIN_PASSWORD`** – dashboard login.
   - **`JWT_SECRET`** – a long random string for dashboard sessions.
   - Optional: **`MONGODB_DB_NAME`** (default: `unitots`).

3. Redeploy after saving the variables.

The `api/` folder is used by Vercel as serverless functions. The contact form will work in production once `MONGODB_URI` is set.
