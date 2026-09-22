# Phase 02: Core Layout, Navigation & Shell

## Context
Build the global application frame including the sticky glass navigation bar, mobile drawer, and footer.

## Objectives
1. Implement `src/components/layout/Navbar.tsx` with sticky scroll detection, pulsing availability beacon, active route states, and responsive mobile menu.
2. Implement `src/components/layout/Footer.tsx` with category navigation, quick social links, studio copyright, and direct quote trigger.
3. Configure `src/app/layout.tsx` with root HTML shell, viewport settings, and global metadata.

## Allowed Files
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/app/layout.tsx`

## Acceptance Criteria
- Navigation shrinks and increases glass backdrop blur upon scrolling past 20px.
- Mobile menu opens smoothly and closes on route change.
- Footer displays active social channels and links.
