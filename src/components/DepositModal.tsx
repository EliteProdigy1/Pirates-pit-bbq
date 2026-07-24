"use client";

import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { depositConfig } from "@/data/review.config";

/**
 * "Reserve This Website" modal for the temporary $500 deposit button.
 *
 * No payment information is collected and there are no card fields — the CTA
 * simply opens EP Media's configured contact method. Accessible dialog:
 * labelled/described, Escape to close, focus trapped inside, focus restored
 * to the trigger on close, backdrop click closes.
 */
export function DepositModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const isExternal = /^https?:\/\//.test(depositConfig.contactUrl);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    // Focus the close button once the dialog is mounted.
    const id = window.setTimeout(() => closeRef.current?.focus(), 0);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(id);
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused.current?.focus?.();
    };
  }, [open, handleKeyDown]);

  // `open` only becomes true from a client-side click, so this never runs
  // during SSR; the document guard is a belt-and-suspenders safeguard.
  if (!open || typeof document === "undefined") return null;

  // Rendered into <body> so it escapes the header's backdrop-filter
  // containing block and covers the full viewport.
  return createPortal(
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center px-4 py-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="deposit-title"
      aria-describedby="deposit-desc"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-sm border border-gold/40 bg-smoked shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-4">
          <h2
            id="deposit-title"
            className="font-display text-xl font-bold uppercase tracking-wide text-gold"
          >
            {depositConfig.modalTitle}
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="-mr-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-white/10 text-bone/70 transition-colors hover:text-bone"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div id="deposit-desc" className="space-y-4 px-6 py-6">
          {depositConfig.modalBody.map((para, i) => (
            <p key={i} className="font-sans text-sm leading-relaxed text-bone/85">
              {para}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-3 px-6 pb-6 sm:flex-row-reverse">
          <a
            href={depositConfig.contactUrl}
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex flex-1 items-center justify-center rounded-sm bg-gold px-6 py-3 font-accent text-sm font-semibold uppercase tracking-widest text-charcoal transition-colors hover:bg-[#c99a45]"
          >
            {depositConfig.ctaLabel}
          </a>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-sm border border-white/15 px-6 py-3 font-accent text-sm uppercase tracking-widest text-bone/80 transition-colors hover:border-bone/50 hover:text-bone"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default DepositModal;
