# ADR-008: Cinematic Motion & Animation Architecture

- **Status:** Accepted
- **Context:** An AI filmmaker's website must feel cinematic, responsive, and tactile. Heavy WebGL or full-screen three.js can cause sluggish scrolling and poor battery life on mobile devices.
- **Decision:** Use `framer-motion` paired with CSS hardware-accelerated transforms (`will-change-transform`, smooth cubic-bezier easing). Focus animation on:
  - Scroll-triggered subtle section reveals (`opacity` + `translateY(20px)`).
  - Hover zoom scaling on video thumbnails (`scale-[1.03]`).
  - Sleek modal expand/collapse transitions.
  - Glowing ambient gradient pulses.
- **Rules of Restraint:** Avoid heavy particle canvas loops, complex cursor followers, or slow artificial page loaders that impede immediate exploration.
- **Consequences:** Ultra-smooth 60fps experience across desktop and mobile while conveying a premium cinematic feel.
- **Date:** 2026-09-22

