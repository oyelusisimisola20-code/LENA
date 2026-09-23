# NETLIFY DEPLOYMENT & RELEASE CHECKLIST

## Pre-Flight Build Verification
- [x] TypeScript strict compilation passes without errors (`npm run build`).
- [x] All 25 static and SSG routes pre-rendered successfully.
- [x] `netlify.toml` configured with Next.js plugin and media caching headers.
- [x] `.gitignore` excludes `.next/`, `node_modules/`, and local build artifacts.

## Git & Netlify Setup Steps
1. Push local repository to GitHub:
   ```bash
   git remote add origin https://github.com/your-username/lena-portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. In Netlify Dashboard:
   - Click **Add new site** > **Import an existing project**.
   - Select your GitHub repository.
   - Build Command: `npm run build`
   - Publish Directory: `.next`
3. Domain & SSL:
   - Link custom domain (e.g. `lenacreative.studio`).
   - Netlify will automatically provision Let's Encrypt SSL certificate.

