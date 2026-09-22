# ADR-007: Analytics & Conversion Tracking Strategy

- **Status:** Accepted
- **Context:** The studio needs to track visitor funnels (Video previews played, full case studies viewed, services explored, and quote inquiries submitted) without bloating bundle sizes with invasive third-party trackers.
- **Decision:** Implement a lightweight, privacy-conscious event dispatch layer (`trackEvent()`) that can effortlessly plug into Google Analytics 4, Plausible, or Netlify Analytics.
- **Key Conversion Events:**
  - `portfolio_project_view`
  - `video_play_start`
  - `service_inquiry_click`
  - `contact_form_submit`
  - `social_channel_click`
- **Consequences:** Clean conversion telemetry without sacrificing user privacy or page performance.
- **Date:** 2026-09-22
