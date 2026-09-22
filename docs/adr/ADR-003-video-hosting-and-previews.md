# ADR-003: Video Hosting, Previews, and Media Optimization Strategy

- **Status:** Accepted
- **Context:** An AI video creator portfolio contains numerous video deliverables. Serving uncompressed video streams simultaneously risks significant bandwidth choke, laggy interactions, and poor mobile scores.
- **Decision:** Implement a three-tier media loading strategy:
  1. *Poster Level:* Static high-quality WebP thumbnail served immediately.
  2. *Hover Preview Level:* Micro MP4/WebM loops (sub-2MB) dynamically mounted only on pointer hover.
  3. *Full Showcase Level:* Full-resolution video loaded on-demand in the interactive Video Lightbox modal or project detail page.
- **Alternatives Considered:**
  - *Full video auto-play everywhere:* Severe performance degradation and mobile data drain.
  - *YouTube / Vimeo embeds only:* Non-customizable branding, third-party tracking scripts, slower rendering.
- **Consequences:** Near-instant initial page loads, fluid hover preview interactions, and minimal bandwidth consumption.
- **Date:** 2026-09-22
