"use client";

import { useState } from "react";
import { reviewConfig, SITE_ON_HOLD } from "@/data/review.config";

/**
 * Elite Prodigy "purchase this website" bar for the review/handoff phase.
 *
 * Fixed to the bottom of the viewport, visually distinct from the Pirates Pit
 * brand (it's an agency overlay). Dismissible for the current session, and
 * removed entirely when reviewConfig.enabled is false.
 */
export function ReviewPurchaseBar() {
  const [dismissed, setDismissed] = useState(false);

  // Hidden while the site is on hold — the hold screen carries its own CTA.
  if (SITE_ON_HOLD || !reviewConfig.enabled || dismissed) return null;

  const isExternal = /^https?:\/\//.test(reviewConfig.purchaseUrl);

  return (
    <div
      role="region"
      aria-label="Website purchase"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-gold/40 bg-black/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/50 font-display text-xs font-bold text-gold sm:flex"
          >
            EP
          </span>
          <p className="font-sans text-sm text-bone/90">
            <span className="font-accent uppercase tracking-widest text-gold">
              {reviewConfig.headline}
            </span>
            <span className="hidden text-bone/60 sm:inline"> — {reviewConfig.subtext}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={reviewConfig.purchaseUrl}
            {...(isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="inline-flex items-center justify-center rounded-sm bg-gold px-5 py-2.5 font-accent text-sm font-semibold uppercase tracking-widest text-charcoal transition-colors hover:bg-[#c99a45]"
          >
            {reviewConfig.ctaLabel}
          </a>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss purchase banner"
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-white/10 text-bone/70 transition-colors hover:text-bone"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewPurchaseBar;
