# DEPLOYMENT CHECKLIST (NETLIFY & GITHUB)

- [x] **Repository Status:** Clean Git working tree with initial commit.
- [x] **Build Validation:** `npm run build` succeeds locally with all 25 SSG routes generated.
- [x] **Netlify Configuration:** `netlify.toml` configured with `@netlify/plugin-nextjs` and caching headers for `/videos/*` and `/images/*`.
- [x] **Environment Variables:** None required for baseline static build (optional Netlify forms/webhook tokens).
- [x] **Sitemap & Robots:** `sitemap.xml` generated with priority tags, `robots.txt` set to allow search indexing.
- [x] **OpenGraph & Social Assets:** OpenGraph title, description, and preview image defined in `src/app/layout.tsx`.

## Steps to Deploy on Netlify:
1. Push local repository to GitHub:
   ```bash
   git remote add origin https://github.com/your-username/lena-ai-portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Log in to [Netlify](https://app.netlify.com).
3. Click **Add new site** > **Import an existing project** > Select **GitHub**.
4. Choose the `lena-ai-portfolio` repository.
5. Netlify will auto-detect Next.js and use settings from `netlify.toml`.
6. Click **Deploy Site**.
