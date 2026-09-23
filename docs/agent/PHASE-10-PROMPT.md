# Phase 10: Performance & Media Delivery Optimization

## Context
Ensure sub-second page loads, instant video hover responsiveness, and low memory consumption across devices.

## Objectives
1. Verify 3-tier media delivery: high-res poster -> lightweight hover loop -> full-res player.
2. Ensure lazy loading on video elements (`preload="none"` on background previews).
3. Set aggressive immutable cache-control headers for static videos and images in `netlify.toml`.
4. Minimize First Load JS bundle size.

## Allowed Files
- `netlify.toml`
- `src/components/portfolio/VideoCard.tsx`
- `src/components/ui/VideoModal.tsx`

## Acceptance Criteria
- First load JS remains under 120 kB shared.
- Video preview scrubbing initiates without UI stutter.

