# LENA AI Creative Studio — Technical Requirements Document (TRD)

## 1. Technology Stack
- **Framework:** Next.js (App Router, TypeScript, React 18/19).
- **Styling:** Tailwind CSS with custom theme extensions and `@tailwindcss/forms`.
- **Icons:** `lucide-react`.
- **Animation & Transitions:** `framer-motion` for fluid reveals and layout animations.
- **Data Store:** Structured JSON Schema (`src/data/projects.json`, `services.json`, `testimonials.json`, `tools.json`).
- **Hosting & Deployment:** Netlify (configured via `netlify.toml` with Static Export or Next.js Runtime plugin).

## 2. Directory & Component Architecture
```text
src/
├── app/
│   ├── layout.tsx                # Root HTML, SEO metadata, Navbar & Footer wrapper
│   ├── page.tsx                  # Home Page (Hero, Featured, Reel, Testimonials)
│   ├── portfolio/
│   │   ├── page.tsx              # Portfolio Grid with category filters
│   │   └── [id]/
│   │       └── page.tsx          # Dynamic Project Details & Case Study
│   ├── services/
│   │   └── page.tsx              # Services Catalog & Deliverables
│   ├── about/
│   │   └── page.tsx              # Bio, Tools (Veo, Kling, Runway), Pipeline
│   ├── contact/
│   │   └── page.tsx              # Interactive Quote Builder & Inquiries
│   ├── sitemap.ts                # Dynamic Sitemap generation
│   └── not-found.tsx             # 404 handler
├── components/
│   ├── ui/                       # Button, Badge, Modal, Input, GlassCard
│   ├── layout/                   # Navbar, Footer, MobileMenu, SectionWrapper
│   ├── portfolio/                # VideoCard, ProjectGrid, CategoryFilter, VideoModal
│   ├── home/                     # HeroSection, FeaturedWork, ProcessSection, StatsReel
│   └── contact/                  # ContactForm, BudgetSelector, ProjectTypePicker
├── data/
│   ├── projects.json             # 15+ Rich AI Video Projects
│   ├── services.json             # Service offerings
│   ├── testimonials.json         # Client reviews
│   └── tools.json                # GenAI tool stack data
├── types/
│   └── index.ts                  # TypeScript types for all entities
└── styles/
    └── globals.css               # Base reset, custom scrollbars, glowing utilities
```

## 3. Data Models
### Project Entity
```typescript
export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'AI Ads' | 'Product Videos' | 'UGC' | 'Cinematic' | 'Social' | 'Animation' | 'Other';
  featured: boolean;
  thumbnail: string;
  previewVideo: string;
  fullVideo: string;
  aspectRatio: '16:9' | '9:16' | '1:1';
  duration: string;
  client?: string;
  year: string;
  summary: string;
  description: string;
  tools: string[];
  metrics?: { label: string; value: string }[];
  storyboard?: { title: string; promptNote: string; image: string }[];
  tags: string[];
}
```

## 4. Video & Media Delivery Strategy
1. **Poster Images First:** Fast-loading WebP poster loaded synchronously for instant visual presentation.
2. **Hover Previews:** Small lightweight MP4 loop initialized on pointer-enter, stopped on pointer-leave to minimize GPU/network overhead.
3. **Full Video Playback:** Loaded asynchronously in full resolution only upon user click or inside the modal/project page.
4. **Fallback Handling:** Graceful poster display when media autoplay is restricted by low-power modes or mobile browsers.

## 5. Deployment & CI/CD Pipeline
- **Platform:** Netlify.
- **Build Command:** `npm run build`
- **Publish Directory:** `.next` (or `out` if static export).
- **Environment Support:** Zero-config runtime fallback with custom header configurations in `netlify.toml` for aggressive static asset caching (`Cache-Control: public, max-age=31536000, immutable`).

