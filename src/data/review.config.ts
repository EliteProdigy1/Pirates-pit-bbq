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

/**
 * Temporary "$500 DEPOSIT" navigation button + reservation modal.
 *
 * Feature flag — set to false (or NEXT_PUBLIC_SHOW_DEPOSIT_BUTTON="false")
 * after the website is sold and BOTH the nav button and its modal disappear.
 */
export const SHOW_DEPOSIT_BUTTON =
  process.env.NEXT_PUBLIC_SHOW_DEPOSIT_BUTTON !== "false"; // default: true

/**
 * Site hold / lock.
 *
 * When ON, the ENTIRE site is replaced by a branded "on hold" screen — the
 * real restaurant site is not rendered or served, so the preview can't be
 * viewed or copied while a deal is undecided.
 *
 * Currently ON. To unlock (deal is a go): set this to false, OR set the
 * Netlify env var NEXT_PUBLIC_SITE_ON_HOLD="false" and redeploy.
 */
export const SITE_ON_HOLD =
  process.env.NEXT_PUBLIC_SITE_ON_HOLD !== "false"; // default: on hold

export const holdConfig = {
  eyebrow: "Pirates Pit Barbeque",
  headline: "This Preview Is On Hold",
  message:
    "This website is reserved by EP Media and is temporarily unavailable. If you'd like to move forward and make it yours, get in touch.",
  ctaLabel: "Contact EP Media",
} as const;

export const depositConfig = {
  label: "$500 Deposit",
  modalTitle: "Reserve This Website",
  modalBody: [
    "A $500 deposit reserves the Pirates Pit website and begins final revisions, ownership setup, and launch preparation.",
    "Payment can be completed directly with EP Media through an agreed method such as Venmo, Cash App, cash, or another arrangement.",
  ],
  ctaLabel: "Contact EP Media",

  /**
   * Existing EP Media contact method (same address the purchase bar uses).
   * ⚠️ TEMPORARY PLACEHOLDER — confirm/replace this with EP Media's preferred
   * contact. No payment details are collected here; this only opens a message.
   */
  contactUrl:
    "mailto:eliteprodigyway@gmail.com?subject=Pirates%20Pit%20Website%20%E2%80%94%20%24500%20Deposit&body=Hi%20EP%20Media%2C%20I%27d%20like%20to%20place%20the%20%24500%20deposit%20to%20reserve%20the%20Pirates%20Pit%20website.",
} as const;
