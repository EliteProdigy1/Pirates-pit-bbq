/**
 * Pirates Pit Barbeque — full menu data (SINGLE SOURCE OF TRUTH).
 *
 * ⚠️  PRICES & ITEMS REQUIRE RESTAURANT VERIFICATION.
 *     Transcribed from the current menu-board photograph as a starting point.
 *     Do NOT treat this as the final published menu until the client confirms.
 *     Every price below should be re-checked. The `MENU_VERIFIED` flag gates
 *     any "official" presentation and drives the on-page verification notice.
 */

export const MENU_VERIFIED = false; // flip to true only after client sign-off

export interface MenuItem {
  name: string;
  /** Display price, e.g. "$7", "$20 / $35", or "MP" (market price). */
  price: string;
  /** Optional supporting line (protein options, portioning, etc.). */
  note?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  /** Optional line shown under the category title. */
  subtitle?: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    id: "munchies",
    title: "Munchies",
    items: [
      { name: "Pita Chip & Queso", price: "$7" },
      { name: "Country Cornbread", price: "$8" },
      { name: "Slider Trio", price: "$15" },
      {
        name: "Cowboy Nacho",
        price: "$15",
        note: "Pulled Pork $14 · Smoked Chicken $15 · Brisket $17",
      },
      {
        name: "Rodeo French Fry",
        price: "$14",
        note: "Pulled Pork $14 · Smoked Chicken $15 · Brisket $15",
      },
    ],
  },
  {
    id: "sammiches",
    title: "Sammiches",
    subtitle: "Served with 1 side",
    items: [
      { name: "Smoked Sausage", price: "$12" },
      { name: "Pulled Pork", price: "$13" },
      { name: "Smoked Chicken", price: "$13" },
      { name: "Chopped Rib", price: "$14" },
      { name: "Brisket", price: "$16" },
      {
        name: "Twin Beech Style",
        price: "",
        note: "Sausage $13 · Pulled Pork $14 · Smoked Chicken $14 · Rib $15 · Brisket $17",
      },
    ],
  },
  {
    id: "dinners",
    title: "Dinners",
    subtitle: "Served with 2 sides, cornbread or dinner roll",
    items: [
      { name: "Smothered Smoked Sausage", price: "$16" },
      { name: "Pulled Pork", price: "$18" },
      { name: "Elite Smoked Chicken", price: "$18" },
      { name: "Smoked Rib", price: "$20" },
      { name: "Brisket", price: "$22" },
      { name: "2 Meat", price: "MP", note: "Market price" },
    ],
  },
  {
    id: "pound-4-pound",
    title: "Pound 4 Pound",
    items: [
      { name: "Smoked Sausage", price: "$17" },
      { name: "Pulled Pork", price: "$19" },
      { name: "Sliced Chicken Breast", price: "$19" },
      { name: "Wings w/ Side", price: "$20" },
      { name: "½ Slab or Slab", price: "$20 / $35" },
      { name: "Brisket", price: "$27" },
      { name: "Sampler", price: "$55" },
      { name: "Hog Heaven", price: "$120" },
    ],
  },
  {
    id: "side-pieces",
    title: "Side Pieces",
    items: [
      { name: "BBQ Baked Beans", price: "$5" },
      { name: "Loaded Green Beans", price: "$5" },
      { name: "Smoked Gouda Mac", price: "$5" },
      { name: "Kickin Yella Rice", price: "$5" },
      { name: "Taters & Gravy", price: "$5" },
      { name: "Potato Salad", price: "$5" },
      { name: "Good Ole Slaw", price: "$5" },
      { name: "Seasoned Fries", price: "$5" },
      { name: "Make Any Side a Pint", price: "$10" },
    ],
  },
  {
    id: "mimis-favorites",
    title: "Mimi’s Favorites",
    subtitle: "12 & under",
    items: [
      { name: "Grilled Cheese", price: "$8" },
      { name: "Pig N A Blanket", price: "$8" },
      { name: "Lil Oink", price: "$8" },
      { name: "Chicken Tender Bites", price: "$8" },
    ],
  },
  {
    id: "sweet-mouth",
    title: "Sweet Mouth",
    items: [
      { name: "Banana Puddin", price: "$6" },
      { name: "Officer Miller # Cake", price: "$6", note: "VERIFY item name" },
      { name: "Banana Puddin # Cake", price: "$8", note: "VERIFY item name" },
      { name: "Southern Fried Banana", price: "$8" },
      { name: "Puddin Nachos", price: "$8" },
    ],
  },
  {
    id: "cold-beverages",
    title: "Cold Beverages",
    items: [
      { name: "Water", price: "$3" },
      { name: "Coke", price: "$3" },
      { name: "Diet Coke", price: "$3" },
      { name: "Sprite", price: "$3" },
      { name: "Dr. Pepper", price: "$3" },
      { name: "Sweet Tea", price: "$3" },
      { name: "Unsweet Tea", price: "$3" },
      { name: "Arnold Palmer", price: "$3" },
      { name: "Lemonade", price: "$3" },
      { name: "Koolaid of the Day", price: "$3" },
    ],
  },
];
