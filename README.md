# Pirates Pit Barbeque

Premium, cinematic, scroll-driven website for **Pirates Pit Barbeque** —
Fairhope, Alabama. Dark pirate smokehouse: smoke, charred wood, darkened
steel, bone-white artwork, antique gold, and embers.

## Tech stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS** v4
- **GSAP** + **ScrollTrigger** (scroll animation)
- **Lenis** (smooth scrolling)
- Deployed to **Netlify**

> One animation system only — GSAP. No Framer Motion.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Project structure

```
public/            Static assets (images/{brand,food,restaurant,textures}, video, icons, og)
src/
  app/             App Router entry, layout, global styles
  components/      layout / sections / ui / smoke / forms
  data/            site.config.ts · menu.ts · featured.ts  ← single sources of truth
  lib/             gsap + lenis + reduced-motion helpers, scroll timelines
  types/
.claude/skills/pirates-pit-scroll/SKILL.md   Cinematic scroll skill (governs all animation)
```

## Brand tokens

Defined in `src/app/globals.css` as Tailwind theme colors:
`charcoal #0B0B0C` · `smoked #151619` · `smoke #565A61` · `bone #E8E3D9` ·
`gold #B58A3B` · `ember #B94A22` (used sparingly).

Fonts: **Cinzel** (display), **Oswald** (accents), **Inter** (body).

## Data & verification

- **Menu** (`src/data/menu.ts`) is transcribed from the menu board and marked
  `MENU_VERIFIED = false`. Prices/items require restaurant sign-off.
- **Business info** (`src/data/site.config.ts`) uses `TODO: VERIFY` markers for
  anything unconfirmed. Verified: phone, street, hours, catering email. We do
  not invent business details or publish unverified data in structured data.

## Build phases

Foundation → static sections → scroll infra → hero → pinned/food motion →
smoke/cinematic → menu/catering/business → performance → cross-device QA →
Netlify. See project notes for the full plan and scroll storyboard.
