/**
 * Central image registry for section artwork (non-menu).
 *
 * Every entry currently has `src: null`, so a branded placeholder renders in
 * its place with the temp `file` name shown. To go live with EP Media assets:
 *
 *   1. Drop the file into the indicated /public folder.
 *   2. Change `src: null` → `src: "/images/.../<file>"`.
 *
 * That single edit is the entire swap. Filenames intentionally match the
 * temporary naming scheme agreed for Phase 2.
 */
export interface AssetRef {
  /** Real path once supplied, else null (placeholder). */
  src: string | null;
  /** Temp filename shown on the placeholder. */
  file: string;
  /** Descriptive alt text. */
  alt: string;
}

export const assets = {
  // ✅ Live EP Media hero assets (Phase 3A).
  heroBuilding: {
    src: "/images/restaurant/hero-building.webp",
    file: "hero-building.webp",
    alt: "Pirates Pit Barbeque smokehouse at dusk — the skull-and-cutlery mural on charred wood, chimney smoke rising, string lights glowing over the patio.",
  },
  heroBuildingMobile: {
    src: "/images/restaurant/hero-building-mobile.webp",
    file: "hero-building-mobile.webp",
    alt: "Pirates Pit Barbeque skull mural and lit ordering window at dusk.",
  },
  patioNight: {
    src: "/images/restaurant/patio-night.webp",
    file: "patio-night.webp",
    alt: "Pirates Pit Barbeque patio after dark, lit by string lights and a lantern on a wooden table.",
  },
  heroLogo: {
    src: null,
    file: "hero-logo.webp",
    alt: "Pirates Pit Barbeque skull logo with crossed antique-gold knife and fork.",
  },
  storyBrisket: {
    src: "/images/food/brisket-story.webp",
    file: "brisket-story.webp",
    alt: "A whole Pirates Pit smoked brisket, sliced to show a deep bark and pink smoke ring, resting on a board in front of the fire.",
  },
  smokeFilmPoster: {
    src: null,
    file: "smoke-film-poster.webp",
    alt: "Close-up of smoked ribs being sliced, wreathed in smoke.",
  },
  cateringSpread: {
    src: null,
    file: "catering.webp",
    alt: "Catering pans filled with smoked meats and sides.",
  },
  building: {
    src: null,
    file: "building.webp",
    alt: "Pirates Pit Barbeque building exterior with the smoke-and-skull mural.",
  },
  outdoor: {
    src: null,
    file: "outdoor.webp",
    alt: "Outdoor patio seating at Pirates Pit Barbeque.",
  },
  // ✅ Live — night establishing shot of the whole venue.
  venueNight: {
    src: "/images/restaurant/venue-night.webp",
    file: "venue-night.webp",
    alt: "Pirates Pit Barbeque at night — the lit smokehouse with the skull mural, smoker glowing, string lights over the patio, and a lantern-lit table.",
  },
} as const satisfies Record<string, AssetRef>;

export type AssetKey = keyof typeof assets;
