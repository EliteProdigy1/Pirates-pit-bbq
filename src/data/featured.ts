/**
 * "The Heavy Hitters" — featured items for the homepage showcase.
 *
 * Images are PLACEHOLDERS until final restaurant photography is supplied.
 * `image: null` renders a branded placeholder tile; swap in real photos under
 * /public/images/food/ and set the path here.
 */

export interface FeaturedItem {
  id: string;
  name: string;
  /** One-line tasting note; keep it short and physical. */
  blurb: string;
  /** Path under /public, or null for a branded placeholder. */
  image: string | null;
  /** Descriptive alt text for the real photo (accessibility). */
  alt: string;
}

export const featured: FeaturedItem[] = [
  {
    id: "brisket",
    name: "Brisket",
    blurb: "Low and slow until the bark gives way to smoke ring and butter.",
    image: null,
    alt: "Sliced smoked beef brisket showing a deep bark and pink smoke ring.",
  },
  {
    id: "pulled-pork",
    name: "Pulled Pork",
    blurb: "Pulled by hand, piled high, kissed by hickory.",
    image: null,
    alt: "Pulled pork sandwich stacked high on a toasted bun.",
  },
  {
    id: "ribs",
    name: "Smoked Ribs",
    blurb: "Tender to the tug, never falling off the bone.",
    image: null,
    alt: "Rack of smoked pork ribs with a glossy, charred glaze.",
  },
  {
    id: "smoked-chicken",
    name: "Smoked Chicken",
    blurb: "Crisp skin, juicy pull, all-day pit flavor.",
    image: null,
    alt: "Smoked chicken quarters with crisp, mahogany skin.",
  },
  {
    id: "wings",
    name: "Wings",
    blurb: "Smoked then finished hot — heat, smoke, and snap.",
    image: null,
    alt: "Plate of smoked chicken wings with a glossy sauce.",
  },
  {
    id: "smoked-sausage",
    name: "Smoked Sausage",
    blurb: "Snappy casing, coarse grind, deep smoke.",
    image: null,
    alt: "Sliced smoked sausage links on a dark board.",
  },
  {
    id: "sampler",
    name: "Sampler Platter",
    blurb: "A little of everything the pit does best.",
    image: null,
    alt: "Barbecue sampler platter with brisket, ribs, and sausage.",
  },
  {
    id: "gouda-mac",
    name: "Smoked Gouda Mac",
    blurb: "Creamy, smoky, and unashamedly rich.",
    image: null,
    alt: "Bowl of smoked gouda macaroni and cheese.",
  },
  {
    id: "cornbread",
    name: "Country Cornbread",
    blurb: "Golden edges, tender crumb, a little sweet.",
    image: null,
    alt: "Wedge of golden country cornbread.",
  },
  {
    id: "banana-pudding",
    name: "Banana Puddin",
    blurb: "Cold, creamy, and the right way to end a plate.",
    image: null,
    alt: "Cup of Southern banana pudding topped with wafers.",
  },
];
