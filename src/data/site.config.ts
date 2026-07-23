/**
 * Pirates Pit Barbeque — central site configuration.
 *
 * SINGLE SOURCE OF TRUTH for business information and SEO.
 *
 * Verification status:
 *   ✅ VERIFIED  — confirmed by the client (safe for structured data / public display)
 *   ⚠️ TODO      — NOT yet verified. Do NOT publish in JSON-LD or as fact until confirmed.
 *
 * We never invent business details. Anything marked TODO stays a placeholder.
 */

export interface BusinessHours {
  /** Human-readable label, e.g. "Tuesday – Saturday" */
  label: string;
  /** Opening time, 24h "HH:MM" or null if closed */
  opens: string | null;
  /** Closing time, 24h "HH:MM" or null if closed */
  closes: string | null;
  /** schema.org dayOfWeek values this row covers */
  days: string[];
}

export const siteConfig = {
  // ── Identity ────────────────────────────────────────────────
  name: "Pirates Pit Barbeque",
  shortName: "Pirates Pit",
  tagline: "Smoke Rules the Pit",
  description:
    "Slow-smoked barbecue, stacked sandwiches, and Gulf Coast flavor served from the heart of Fairhope, Alabama.",

  // ── Contact ─────────────────────────────────────────────────
  contact: {
    // ✅ VERIFIED by client
    phone: "(251) 229-6229",
    phoneHref: "tel:+12512296229",
    // ✅ VERIFIED — from menu board (catering inquiries)
    cateringEmail: "piratesbbqpit@gmail.com",
    // ⚠️ TODO: confirm a general contact email (may be same as catering)
    generalEmail: "piratesbbqpit@gmail.com", // TODO: VERIFY
  },

  // ── Location ────────────────────────────────────────────────
  address: {
    // ✅ VERIFIED by client
    street: "18974 Section St",
    city: "Fairhope",
    region: "AL",
    regionName: "Alabama",
    postalCode: "36532", // TODO: VERIFY zip
    country: "US",
    // ⚠️ TODO: confirm exact Google Maps / directions URL for the pin
    mapLink: "https://maps.google.com/?q=18974+Section+St+Fairhope+AL", // TODO: VERIFY
    // ⚠️ TODO: precise coordinates for LocalBusiness schema
    geo: { lat: null as number | null, lng: null as number | null }, // TODO: VERIFY
  },

  // ── Hours ───────────────────────────────────────────────────
  // ✅ VERIFIED by client: Tue–Sat 11:00–19:00, Sun & Mon closed
  hours: [
    {
      label: "Tuesday – Saturday",
      opens: "11:00",
      closes: "19:00",
      days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    },
    { label: "Sunday", opens: null, closes: null, days: ["Sunday"] },
    { label: "Monday", opens: null, closes: null, days: ["Monday"] },
  ] as BusinessHours[],

  // ── External links ──────────────────────────────────────────
  links: {
    ordering: null as string | null, // TODO: VERIFY online ordering URL
    social: {
      facebook: null as string | null, // TODO: VERIFY
      instagram: null as string | null, // TODO: VERIFY
      tiktok: null as string | null, // TODO: VERIFY
    },
  },

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    // ⚠️ TODO: confirm final production domain before launch
    domain: "https://piratespitbbq.com", // TODO: VERIFY
    ogImage: "/og/pirates-pit-og.jpg", // placeholder until final art supplied
    twitterHandle: null as string | null, // TODO: VERIFY
    // Restaurant cuisine keywords for schema.org
    servesCuisine: ["Barbecue", "American", "Southern"],
    priceRange: "$$",
  },
} as const;

export type SiteConfig = typeof siteConfig;
