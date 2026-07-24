/**
 * Agency review / handoff banner.
 *
 * This is NOT part of the Pirates Pit restaurant site — it's an Elite Prodigy
 * overlay shown while the preview is out for the client to review, so they can
 * purchase the website. Turn it OFF before the site goes live for the client:
 *
 *   set `enabled: false`  →  the purchase bar disappears entirely.
 *
 * (Or override at build time with NEXT_PUBLIC_REVIEW_MODE="false".)
 */
export const reviewConfig = {
  enabled: process.env.NEXT_PUBLIC_REVIEW_MODE !== "false",

  agency: "Elite Prodigy",
  headline: "Website preview by Elite Prodigy",
  subtext: "Love it? Make this site yours.",
  ctaLabel: "Purchase Website",

  /**
   * Where the Purchase button goes.
   * TODO: replace with your Stripe / PayPal / checkout link when ready.
   * For now it opens an email to Elite Prodigy so the client can start the
   * purchase. An http(s) URL opens in a new tab automatically.
   */
  purchaseUrl:
    "mailto:eliteprodigyway@gmail.com?subject=Purchase%20Pirates%20Pit%20Website&body=Hi%20Elite%20Prodigy%2C%20I%27d%20like%20to%20purchase%20the%20Pirates%20Pit%20Barbeque%20website.",
} as const;
