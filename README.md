# Malamen — Cinematic Redesign Concept

A speculative, conversion-focused homepage concept for Malamen Kitchen & Bar, New Delhi.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`. Run `npm run lint` for static checks.

## Content and imagery

- Business details, links, menu preview data, and the demo badge switch live in `src/data/site.ts`.
- Set `SHOW_DEMO_BADGE` to `false` for a clean owner presentation.
- The menu preview is explicitly concept content; official prices and dishes must be confirmed before launch.
- Prototype images are generated placeholders, not photographs of Malamen. See `public/assets/PROVENANCE.md`.
- Reservation and event forms prepare a WhatsApp message for the visitor to review; the site does not submit requests directly.

## Stack

React, TypeScript, Vite, Tailwind CSS, GSAP ScrollTrigger, Lenis, Lucide React, Instrument Serif, and Manrope.
