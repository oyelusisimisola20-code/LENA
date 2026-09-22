# Phase 05: Dynamic Project Pages & Case Studies

## Context
Implement dynamic static-site-generated routes (`/portfolio/[id]`) to present deep-dive case studies for each creative project.

## Objectives
1. Implement `generateStaticParams()` to pre-render all 16 projects at build time.
2. Build video showcase container with support for horizontal and vertical 9:16 aspect ratios.
3. Display project metrics, client background, technical specifications, tool tags, and storyboard prompt notes.
4. Render automated related projects grid based on matching category.

## Allowed Files
- `src/app/portfolio/[id]/page.tsx`

## Acceptance Criteria
- All 16 project URLs are pre-rendered into static HTML.
- Dynamic OpenGraph and Twitter card metadata generated per project.
- 404 handler triggers if an invalid project ID is requested.
