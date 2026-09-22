# DEVELOPMENT & QA CHECKLISTS

## Development Checklist
- [x] Next.js App Router scaffold with TypeScript strict mode.
- [x] Tailwind CSS configured with custom theme colors and glassmorphism.
- [x] Decoupled JSON data model with 15+ curated projects in `projects.json`.
- [x] Responsive layout with dynamic header, mobile navigation, and footer.
- [x] Dynamic project routing (`/portfolio/[id]`).
- [x] Video modal player with play/pause and fullscreen capabilities.
- [x] Contact page with interactive quote generator and direct links.

## QA & Performance Checklist
- [x] All routes (`/`, `/portfolio`, `/portfolio/[id]`, `/services`, `/about`, `/contact`) load without errors.
- [x] Hover preview video plays smoothly without unhandled promise exceptions.
- [x] Category filtering accurately updates project grid in real time.
- [x] Netlify configuration and build passes without errors.
- [x] Lighthouse optimization (lazy loading, optimized SVG/WebP assets, semantic HTML).
