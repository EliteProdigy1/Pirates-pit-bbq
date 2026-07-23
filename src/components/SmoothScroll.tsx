"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Lenis smooth scrolling, driven by the GSAP ticker and synced to
 * ScrollTrigger. Renders nothing.
 *
 * Accessibility: if the user prefers reduced motion we never initialise Lenis,
 * so native (instant) scrolling is preserved. ScrollTrigger is refreshed once
 * fonts and media settle so trigger positions are accurate.
 */
export function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });

    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    if (document.fonts?.ready) void document.fonts.ready.then(refresh);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
      window.removeEventListener("load", refresh);
    };
  }, []);

  return null;
}

export default SmoothScroll;
