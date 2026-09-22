# ADR-006: Hosting and Deployment Strategy (Netlify Edge & Static Generation)

- **Status:** Accepted
- **Context:** We require seamless Git-triggered automated deployments, preview environments for PRs, instant global CDN caching for media files, and serverless edge delivery.
- **Decision:** Deploy to Netlify using `netlify.toml` with Next.js Essential Runtime / Next plugin and custom asset caching rules.
- **Alternatives Considered:**
  - *Self-hosted VPS:* High DevOps maintenance overhead.
  - *Vercel:* Great for Next.js, but user specified Netlify as primary target in the project requirements.
- **Consequences:** Zero-maintenance automated deployments, preview links for client review, and sub-100ms global TTFB (Time to First Byte).
- **Date:** 2026-09-22
