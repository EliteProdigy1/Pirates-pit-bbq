# Public assets

Drop supplied assets into the matching folder. **Do not permanently rename
files until they've been inspected** — inspect first, then rename to the
conventions below.

```
images/
  brand/        Pirates Pit logo, skull mark, wordmark, favicon source
  food/         Food photography (brisket, ribs, wings, sides, desserts…)
  restaurant/   Exterior mural, patio, pit/smoker shots
  textures/     Transparent smoke WebP layers, film grain, butcher paper
video/          Short optimized pit/smoke clip(s) + poster frame
icons/          Social + UI SVG icons
og/             Open Graph share image (1200×630)
```

## Naming (apply AFTER inspection)

- Brand: `logo-skull.svg`, `wordmark.svg`, `logo-full.png`
- Food: `brisket.webp`, `pulled-pork.webp`, `ribs.webp`, … (lowercase, hyphenated)
- Restaurant: `exterior-mural.webp`, `patio.webp`, `pit.webp`
- Textures: `smoke-01.webp`, `grain.png`, `butcher-paper.webp`
- Video: `pit-loop.mp4` + `pit-loop-poster.webp`
- OG: `pirates-pit-og.jpg`

## Formats & sizes

- Photography → **WebP/AVIF**, sized to display need (hero ≤ 2000px wide).
- Smoke layers → transparent **WebP**, kept small; avoid full-res video per section.
- Every video needs a **poster** image and must pause when offscreen.
