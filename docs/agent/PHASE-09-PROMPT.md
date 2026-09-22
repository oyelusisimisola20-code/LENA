# Phase 09: SEO, Metadata & OpenGraph Architecture

## Context
Optimize the website for personal brand authority and commercial AI video search visibility according to Section 15 of the master plan.

## Objectives
1. Configure comprehensive Next.js `metadata` on root layout and individual pages.
2. Implement dynamic XML sitemap in `src/app/sitemap.ts` covering static pages and all 16 dynamic `/portfolio/[id]` routes.
3. Configure `public/robots.txt`.
4. Ensure rich OpenGraph cards and Twitter cards are embedded.

## Allowed Files
- `src/app/layout.tsx`
- `src/app/sitemap.ts`
- `public/robots.txt`
- `src/app/portfolio/[id]/page.tsx`

## Acceptance Criteria
- `/sitemap.xml` generates a valid XML response with all routes.
- Social share preview tags render accurate titles, summaries, and images.
