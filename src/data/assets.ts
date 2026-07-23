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
  heroSmoke: {
    src: null,
    file: "hero-smoke.webp",
    alt: "Drifting smoke across a near-black smokehouse backdrop.",
  },
  heroLogo: {
    src: null,
    file: "hero-logo.webp",
    alt: "Pirates Pit Barbeque skull logo with crossed antique-gold knife and fork.",
  },
  storyBrisket: {
    src: null,
    file: "brisket.webp",
    alt: "Sliced smoked brisket resting on a wood board with a deep smoke ring.",
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
} as const satisfies Record<string, AssetRef>;

export type AssetKey = keyof typeof assets;
