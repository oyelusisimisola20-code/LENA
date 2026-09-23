# Phase 08: Interactive Inquiries & Quote Generator

## Context
Implement the client acquisition system on `/contact`, facilitating structured quote requests and direct communication.

## Objectives
1. Build `ContactForm.tsx`:
   - Step 1: Project Type multi-choice selector
   - Step 2: Budget bracket range picker ($1.5k–$3k, $3k–$7.5k, $7.5k–$15k, $15k+)
   - Step 3: Delivery timeframe picker
   - Step 4: Contact details and creative brief input
2. Add direct channel cards: WhatsApp Brand Line, Calendly 15-min call booking, LinkedIn, and Direct Email.
3. Show studio availability status beacon.

## Allowed Files
- `src/app/contact/page.tsx`
- `src/components/contact/ContactForm.tsx`

## Acceptance Criteria
- Form validates required fields before submission.
- Confirmation screen renders cleanly after inquiry is sent.
- Direct external links open in new tabs with appropriate `rel="noopener noreferrer"`.

