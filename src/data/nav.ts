/** Primary navigation — in-page anchors to the eight sections. */
export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Story", href: "#story" },
  { label: "Featured", href: "#featured" },
  { label: "Menu", href: "#menu" },
  { label: "Catering", href: "#catering" },
  { label: "Find Us", href: "#find" },
];

/** Section id constants, shared so anchors and sections never drift. */
export const SECTION_IDS = {
  top: "top",
  story: "story",
  featured: "featured",
  menu: "menu",
  smokeFilm: "smoke-film",
  catering: "catering",
  find: "find",
  visit: "visit",
} as const;
