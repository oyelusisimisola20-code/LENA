# ADR-002: Styling System (Tailwind CSS + Custom Futuristic Tokens)

- **Status:** Accepted
- **Context:** The design requires a dark obsidian visual aesthetic with glassmorphism, glowing borders, custom typography, and responsive grid layouts.
- **Decision:** Use Tailwind CSS with extended theme variables (deep darks `#08080A`, cyber cyan `#00F0FF`, cyber amber `#FFB800`) and custom utility classes for glass backdrop filters.
- **Alternatives Considered:**
  - *Styled Components / Emotion:* Slower runtime CSS-in-JS parsing.
  - *Vanilla CSS Modules:* Higher maintenance overhead for responsive design tokens.
- **Consequences:** Zero runtime CSS overhead, maximum performance, rapid component styling, and consistent token usage.
- **Date:** 2026-09-22
