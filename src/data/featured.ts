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
    image: "/images/food/brisket.webp",
    alt: "Slices of Pirates Pit smoked brisket with a peppery black bark and pink smoke ring, resting by a cup of barbecue sauce.",
  },
  {
    id: "pulled-pork",
    name: "Pulled Pork",
    blurb: "Pulled by hand, piled high, kissed by hickory.",
    image: "/images/food/pulled-pork.webp",
    alt: "Pirates Pit pulled pork sandwich piled high on a glossy brioche bun with pickles and red onion.",
  },
  {
    id: "ribs",
    name: "Smoked Ribs",
    blurb: "Tender to the tug, never falling off the bone.",
    image: "/images/food/ribs.webp",
    alt: "Racks of Pirates Pit smoked pork ribs with a glossy, peppery glaze and a basting brush alongside.",
  },
  {
    id: "smoked-chicken",
    name: "Smoked Chicken",
    blurb: "Crisp skin, juicy pull, all-day pit flavor.",
    image: "/images/food/smoked-chicken.webp",
    alt: "Pirates Pit smoked chicken thighs and drumsticks with crisp, peppery mahogany skin.",
  },
  {
    id: "wings",
    name: "Wings",
    blurb: "Smoked then finished hot — heat, smoke, and snap.",
    image: "/images/food/wings.webp",
    alt: "A tray of Pirates Pit smoked chicken wings on butcher paper with a peppery, mahogany glaze.",
  },
  {
    id: "smoked-sausage",
    name: "Smoked Sausage",
    blurb: "Snappy casing, coarse grind, deep smoke.",
    image: "/images/food/smoked-sausage.webp",
    alt: "A ring of Pirates Pit smoked sausage with thick sliced rounds on a wooden board over a warm fire.",
  },
  {
    id: "sampler",
    name: "Sampler Platter",
    blurb: "A little of everything the pit does best.",
    image: "/images/food/sampler.webp",
    alt: "Pirates Pit sampler tray with wings, pulled pork, a pulled-pork sandwich, sliced brisket, smoked ribs, and gouda mac.",
  },
  {
    id: "gouda-mac",
    name: "Smoked Gouda Mac",
    blurb: "Creamy, smoky, and unashamedly rich.",
    image: "/images/food/gouda-mac.webp",
    alt: "Cast-iron dish of Pirates Pit smoked gouda macaroni with a toasted breadcrumb crust, beside a wedge of gouda.",
  },
  {
    id: "cornbread",
    name: "Country Cornbread",
    blurb: "Golden edges, tender crumb, a little sweet.",
    image: "/images/food/cornbread.webp",
    alt: "Squares of golden Pirates Pit country cornbread with crisp tops and a tender crumb on a wooden board.",
  },
  {
    id: "banana-pudding",
    name: "Banana Puddin",
    blurb: "Cold, creamy, and the right way to end a plate.",
    image: "/images/food/banana-pudding.webp",
    alt: "Dish of Pirates Pit banana pudding layered with vanilla wafers and banana slices, topped with crumbled wafers.",
  },
];
