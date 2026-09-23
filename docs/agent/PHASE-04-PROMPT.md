# Phase 04: Portfolio Grid, Filtering & Lightbox Player

## Context
Build the complete portfolio archive interface allowing prospective clients to filter, preview, and play 16+ curated generative video projects.

## Objectives
1. Implement `CategoryFilter.tsx`: Tabbed category filter (All, AI Ads, Product Videos, UGC, Cinematic, Social, Animation) with dynamic count badges.
2. Implement `VideoCard.tsx`: Muted MP4 hover preview, poster image fallback, aspect ratio preservation (16:9 vs 9:16), and duration badges.
3. Implement `VideoModal.tsx`: Interactive full-screen video lightbox with custom playback controls, ESC/spacebar keyboard shortcuts, and "Request Similar" CTA.
4. Implement `ProjectGrid.tsx`: Responsive grid with seamless category switching and empty states.

## Allowed Files
- `src/app/portfolio/page.tsx`
- `src/components/portfolio/*`
- `src/components/ui/VideoModal.tsx`

## Acceptance Criteria
- Filtering immediately updates the grid in real-time.
- Hover previews smoothly stream without flickering or crashing the video buffer.
- Modal opens on card click and closes on backdrop click or ESC key.

