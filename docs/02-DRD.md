# LENA AI Creative Studio — Design Requirements Document (DRD)

## 1. Visual Identity & Brand Philosophy
- **Aesthetic Direction:** *Futuristic, Cinematic, High-End Luxury, Editorial Minimalism.*
- **Mood & Atmosphere:** Deep obsidian dark mode, crisp typography, sleek glassmorphism, subtle neon luminescence (Electric Cyan / Cyber Amber accents), and high-framerate visual smoothness.
- **Rule of Restraint:** Avoid gratuitous particle storms or excessive neon glows. Let the AI video creative assets command center stage.

## 2. Color System
| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| `background-base` | `#08080A` | Deep obsidian canvas (pure dark mode) |
| `background-surface` | `#111116` | Elevated cards, navigation bar, modals |
| `background-card` | `#181820` | Interactive card surfaces |
| `border-subtle` | `rgba(255, 255, 255, 0.08)` | Glass border outlines and dividers |
| `border-glow` | `rgba(0, 240, 255, 0.25)` | Active state highlights & hover accents |
| `text-primary` | `#F4F4F6` | High-contrast headings and body titles |
| `text-secondary` | `#9E9EA8` | Descriptions, metadata, and subtitles |
| `text-muted` | `#636370` | Timestamps, tags, footnotes |
| `accent-cyan` | `#00F0FF` | Primary action accent, futuristic vibrancy |
| `accent-amber` | `#FFB800` | Secondary highlight, rating stars, award tags |
| `accent-crimson` | `#FF2A54` | Live indicator badges, video record dots |

## 3. Typography Hierarchy
- **Display / Headers:** Modern Geometric Grotesk / Sans-serif (`Space Grotesk` or `Syne` feel via Tailwind `font-sans` & `tracking-tight`).
- **Body & Captions:** Clean, neutral sans (`Inter` / system-ui stack for ultra-sharp legibility across resolutions).
- **Monospace Accents:** High-tech timestamps, tool badges, and prompt tags (`JetBrains Mono` or `ui-monospace`).

## 4. UI Component Specifications
### A. Navigation Bar
- Fixed top, sticky with `backdrop-blur-md` and `bg-black/40` semi-transparency.
- Logo: Bold minimalist wordmark `LENA` with a pulsing ambient status beacon.
- Navigation links with animated underline hover indicators.
- Quick action CTA button: "Start a Project".

### B. Video Showcase Cards
- Aspect ratio: `16:9` (Cinematic/Ads) and `9:16` (Social/UGC grid variants).
- Rounded corners (`rounded-2xl`) with subtle border gradient.
- Muted auto-play on hover with smooth transition from poster image to 60fps MP4 loop.
- Floating category pill badge and duration tag.
- One-click trigger for full HD lightbox / detailed case study navigation.

### C. Video Lightbox / Modal
- Centered modal with backdrop blur `rgba(0, 0, 0, 0.85)`.
- Custom playback controls: Play/Pause, Mute/Unmute, Timeline, Fullscreen, and Direct "Inquire About This Style" CTA.

### D. Buttons & Interactions
- Primary: Gradient border with high-contrast text and micro-glow on hover.
- Secondary: Glassmorphic surface with translucent white border.
- Magnetic or subtle scale (`scale-[1.02]`) on hover with smooth spring easing.

## 5. Motion Design Guidelines
- **Enter Transitions:** `fade-in-up` with staggered delays (`50ms - 150ms`).
- **Video Scrub / Preview:** Instant 150ms crossfade on hover.
- **Micro-Interactions:** Subtle button click ripples and smooth accordion animations for FAQs.
