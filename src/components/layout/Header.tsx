"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/data/nav";
import { siteConfig } from "@/data/site.config";
import { SHOW_DEPOSIT_BUTTON, depositConfig } from "@/data/review.config";
import { DepositModal } from "@/components/DepositModal";

/** Sticky site header with a wordmark, in-page nav, and an accessible
 *  mobile menu. Static (no scroll animation) — motion arrives in Phase 3+. */
export function Header() {
  const [open, setOpen] = useState(false);
  const [depositOpen, setDepositOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-charcoal/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6"
      >
        <Link
          href="#top"
          className="font-display text-lg font-bold uppercase tracking-wide text-bone"
        >
          Pirates Pit
          <span className="ml-1 text-gold">·</span>
          <span className="ml-1 hidden font-accent text-xs tracking-[0.3em] text-smoke sm:inline">
            BBQ
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-accent text-sm uppercase tracking-widest text-bone/80 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
          {SHOW_DEPOSIT_BUTTON && (
            <li>
              {/* Temporary, discreet deposit button (outlined so it doesn't
                  overpower the Inquire CTA or the restaurant branding). */}
              <button
                type="button"
                onClick={() => setDepositOpen(true)}
                className="rounded-sm border border-gold/60 px-4 py-2 font-accent text-xs uppercase tracking-widest text-gold transition-colors hover:bg-gold/10"
              >
                {depositConfig.label}
              </button>
            </li>
          )}
          <li>
            <Link
              href="#catering"
              className="rounded-sm bg-gold px-5 py-2.5 font-accent text-sm font-semibold uppercase tracking-widest text-charcoal transition-colors hover:bg-[#c99a45]"
            >
              Inquire
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 text-bone md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">
            {open ? "Close menu" : "Open menu"}
          </span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul
          id="mobile-menu"
          className="flex flex-col gap-1 border-t border-white/5 bg-smoked px-4 py-3 md:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-sm px-3 py-3 font-accent text-sm uppercase tracking-widest text-bone/90 hover:bg-white/5 hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={siteConfig.contact.phoneHref}
              onClick={() => setOpen(false)}
              className="block rounded-sm px-3 py-3 font-accent text-sm uppercase tracking-widest text-gold hover:bg-white/5"
            >
              Call {siteConfig.contact.phone}
            </Link>
          </li>
          {SHOW_DEPOSIT_BUTTON && (
            <li>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setDepositOpen(true);
                }}
                className="mt-1 block w-full rounded-sm border border-gold/60 px-3 py-3 text-left font-accent text-sm uppercase tracking-widest text-gold hover:bg-gold/10"
              >
                {depositConfig.label}
              </button>
            </li>
          )}
        </ul>
      )}

      {SHOW_DEPOSIT_BUTTON && (
        <DepositModal open={depositOpen} onClose={() => setDepositOpen(false)} />
      )}
    </header>
  );
}

export default Header;
