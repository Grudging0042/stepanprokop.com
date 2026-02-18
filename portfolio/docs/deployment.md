# Deployment Guide

Fully describe current deployment setup for the Next.js portfolio running on Coolify with Nixpacks and Cloudflare.

## Table of Contents
- [Architecture](#architecture)
- [Build and Runtime Configuration](#build-and-runtime-configuration)
- [Coolify Settings](#coolify-settings)
- [Deployment Workflow](#deployment-workflow)
- [Monitoring and Rollback](#monitoring-and-rollback)
- [Troubleshooting](#troubleshooting)
- [Resources](#resources)

## Architecture
```
User → Cloudflare → Traefik (Coolify) → Docker Container (Next.js)
```
- **Cloudflare** provides DNS, proxy and TLS termination.
- **Coolify** manages the application container behind Traefik.
- **Docker/Nixpacks** build and run the app with Node.js 20.
- **Next.js** serves the site using `next start`.

## Build and Runtime Configuration
- **Repository:** `Grudging0042/stepanprokop.com`
- **Branch:** `main`
- **Framework:** Next.js 16 (App Router)
- **Node version:** 20 (set in `nixpacks.toml`)

### Nixpacks (`nixpacks.toml`)
```toml
[phases.setup]
nixPkgs = ['nodejs_20']

[phases.install]
cmds = ['npm ci']

[phases.build]
cmds = ['npm run build']

[start]
cmd = 'npm start'

[variables]
PORT = '3300'
```
- The app listens on port **3300** in production. Coolify must expose the same port.

### Next.js (`next.config.ts`)
```ts
const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
};
```
- Standalone output keeps the container small and self-contained.
- MDX page extensions are enabled because content lives in `/content`.

## Coolify Settings
- **Build Pack:** Nixpacks
- **Build Command:** `npm run build`
- **Start Command:** `npm start`
- **Container Port:** `3300` (must match `PORT` in `nixpacks.toml`)
- **Environment Variables:**
  ```bash
  NODE_ENV=production
  PORT=3300  # optional override, matches default
  ```
- **Domain:** `portfolio.stepanprokop.com`
- **SSL:** Enabled through Let's Encrypt via Coolify/Traefik
- **Auto Deploy:** Optional but recommended for `main`

> **Important:** In Coolify UI, set *Settings → Port Exposes* to **3300**. Mismatched ports are the most common cause of Cloudflare 502 errors.

## Deployment Workflow
1. **Commit & Push**
   ```bash
   npm run lint
   npm run build
   git add .
   git commit -m "Describe change"
   git push origin main
   ```
2. **Coolify Auto-Deploy** (if enabled) or trigger a manual deploy from the Coolify dashboard.
3. **Build Phase** – Nixpacks runs `npm ci` then `npm run build`.
4. **Runtime** – Container launches `next start` on port 3300.
5. **Verify** – Open https://portfolio.stepanprokop.com and confirm analytics/events load.

## Monitoring and Rollback
- **Logs:**
  - Build logs in Coolify
  - Runtime logs via `docker logs <container_id>`
  - Traefik dashboard for routing status
- **Health Checks:** Configure Coolify health check `GET /` on port `3300`.
- **Analytics:**
  - Umami instance: https://umami.stepanprokop.com
  - Cloudflare analytics for traffic
- **Rollback:**
  - Redeploy a previous successful build from Coolify history, or
  - `git revert` the offending commit and push to `main`.

## Troubleshooting
- **Cloudflare 502 / Port issues:** See [docs/deployment-fix.md](deployment-fix.md) for the historical debugging steps.
- **Build failures:** Run `npm run lint` and `npm run build` locally to surface TypeScript or dependency errors.
- **Missing assets:** Ensure images and videos live under `public/` and use `/images/...` paths in content.
- **Environment variables:** Update in Coolify, then restart the container.

## Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Coolify Documentation](https://coolify.io/docs)
- [Nixpacks Documentation](https://nixpacks.com/docs)
- [Cloudflare Documentation](https://developers.cloudflare.com)
