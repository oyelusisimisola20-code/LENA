# QA & ACCESSIBILITY CHECKLIST

## Visual & Layout Verification
- [x] Responsive layout tested on Mobile (375px), Tablet (768px), and Desktop (1440px+).
- [x] Obsidian dark theme contrast ratios meet WCAG AA standards.
- [x] Navigation bar transitions smoothly between transparent and frosted glass states.
- [x] Mobile drawer opens and closes without layout shift or lingering backdrops.

## Video & Media Functionality
- [x] Video preview cards auto-play muted on hover and pause on mouse leave.
- [x] Video player modal opens on card click and plays full audio/video stream.
- [x] Modal closes on backdrop click, close icon, or ESC keypress.
- [x] Spacebar toggles video play/pause while modal is active.
- [x] Both 16:9 widescreen and 9:16 vertical video ratios render without black bar distortion.

## Functional & Interactive Elements
- [x] Category filter buttons update project grid in real-time.
- [x] Project count badge accurately reflects number of items in active category.
- [x] Dynamic `/portfolio/[id]` routes load correct case study data and prompt notes.
- [x] Related projects section displays relevant same-category items.
- [x] Interactive quote form updates project type, budget, and timeline selections.
- [x] Contact submission displays confirmation card with reset capability.
- [x] Direct external links (WhatsApp, Calendly, LinkedIn, Instagram) open in new tabs with secure `rel` attributes.

