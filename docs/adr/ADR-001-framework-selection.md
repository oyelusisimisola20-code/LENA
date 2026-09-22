# ADR-001: Framework Selection (Next.js App Router + React + TypeScript)

- **Status:** Accepted
- **Context:** We need a modern, high-performance web framework for LENA that supports static page generation, dynamic routes (`/portfolio/[id]`), robust SEO metadata capabilities, and seamless Netlify integration.
- **Decision:** Use Next.js with TypeScript and the App Router architecture.
- **Alternatives Considered:**
  - *Plain HTML/JS:* Lacks component reusability and dynamic routing.
  - *Vite SPA:* Good performance, but inferior server-side SEO metadata generation compared to Next.js.
  - *Astro:* Excellent for static content, but Next.js provides superior React ecosystem ergonomics for rich interactive components (video players, modals, filters).
- **Consequences:** Provides pre-rendered static performance, clean file-based routing, native image optimization, and type safety across the entire application.
- **Date:** 2026-09-22
