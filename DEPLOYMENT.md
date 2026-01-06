# Deployment Guide for Vercel

To ensure your application connects to the Database (Neon) and Cloudinary when deployed to Vercel, you must configure the **Environment Variables** in your Vercel project settings.

## 1. Environment Variables

Go to your Vercel Project Dashboard > **Settings** > **Environment Variables** and add the following keys. You can copy the values from your local `.env` file.

| Variable Key | Description |
| :--- | :--- |
| `DATABASE_URL` | The connection string for your Neon/PostgreSQL database. |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Your Cloudinary Cloud Name. |
| `NEXT_PUBLIC_CLOUDINARY_API_KEY` | Your Cloudinary API Key. |
| `CLOUDINARY_API_SECRET` | Your Cloudinary API Secret. |
| `CLOUDINARY_URL` | The full Cloudinary URL (cloudinary://...). |
| `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`| The **Unsigned** Upload Preset name (e.g., `kkosm_unsigned`). |

> **Important**: Do not wrap values in quotes when adding them to Vercel.

## 2. Build Settings

Vercel automatically detects Next.js. Ensure your "Build and Output Settings" are default:
- **Build Command**: `next build` (or `npm run build`)
- **Install Command**: `npm install` (or `yarn install` / `pnpm install`)

## 3. Post-Deploy Database Migration

Prisma Client generates automatically during build, but if you make schema changes, you might need to run migrations.
For this setup, since we are using `prisma db push` for prototyping:
- The build process usually handles generating the client.
- If you change the schema later using `prisma db push` locally, the remote database updates immediately (since `DATABASE_URL` points to the cloud DB). You don't strictly need to run a migration command during build for this simple setup.

## 4. Verify

After deployment, check the **Logs** tab in Vercel. If the build fails, it is often due to missing Environment Variables.
