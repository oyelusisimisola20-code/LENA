# ADR-004: Portfolio Data Architecture (Structured JSON Repository)

- **Status:** Accepted
- **Context:** The creator needs to easily add, modify, reorder, and tag projects without touching React component markup or managing a complex headless CMS for V1.
- **Decision:** Store all project data in `src/data/projects.json` governed by strict TypeScript interfaces. Supporting data like services, testimonials, and tools are similarly decoupled in JSON files.
- **Alternatives Considered:**
  - *Headless CMS (Sanity / Strapi / Contentful):* Unnecessary operational complexity, network latency, and cost for V1.
  - *Hardcoded JSX:* Extremely brittle, error-prone, and violates separation of concerns.
- **Consequences:** Adding a new project is as simple as adding an entry to `projects.json`. Type safety guarantees all required fields (thumbnails, video URLs, categories, tools) are validated at build time.
- **Date:** 2026-09-22

