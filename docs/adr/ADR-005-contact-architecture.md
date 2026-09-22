# ADR-005: Contact Form Architecture & Multi-Channel Client Inquiries

- **Status:** Accepted
- **Context:** The site must capture qualified client leads with structured project details (budget tier, project category, timeline, vision) while also providing instantaneous direct messaging channels (WhatsApp, Calendly, Email, Instagram).
- **Decision:** Implement a dual-tier inquiry approach:
  1. An interactive quote builder / inquiry form with Netlify Forms support and client-side mailto / webhook fallback.
  2. One-click direct channels (Calendly for discovery calls, WhatsApp for immediate brand chats, LinkedIn for B2B outreach).
- **Alternatives Considered:**
  - *Custom Node/Express backend with database:* Introduces unnecessary maintenance, security surface, and hosting costs.
  - *Generic mailto link only:* High drop-off rate, unstructured inquiry data.
- **Consequences:** Maximizes conversion rates by catering to both structured corporate RFPs and informal mobile inquiries.
- **Date:** 2026-09-22
