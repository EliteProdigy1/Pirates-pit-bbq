/**
 * One-off asset optimizer for the Hero (Phase 3A).
 * Converts the supplied EP Media PNGs into compressed WebP crops.
 * Run from the project root:  node scripts/optimize-hero.mjs
 */
import sharp from "sharp";

const SRC_HERO =
  "/root/.claude/uploads/968851fd-97a0-514b-8a76-ad24921cd578/e5329b9c-9F51526144104D86B633283BC0E0EA80.png";
const SRC_PATIO =
  "/root/.claude/uploads/968851fd-97a0-514b-8a76-ad24921cd578/27b7476a-4C704661331A42AC8B6C30158E3CB9CF.png";

const OUT = "public/images/restaurant";

// Desktop hero — preserve full composition (smoker + mural + patio).
await sharp(SRC_HERO)
  .resize({ width: 1600, withoutEnlargement: true })
  .webp({ quality: 72 })
  .toFile(`${OUT}/hero-building.webp`);

// Mobile hero — portrait-friendly crop that keeps the skull mural and the
// lit ordering window in frame (source is 1672x940).
await sharp(SRC_HERO)
  .extract({ left: 360, top: 40, width: 780, height: 880 })
  .resize({ width: 800, withoutEnlargement: true })
  .webp({ quality: 70 })
  .toFile(`${OUT}/hero-building-mobile.webp`);

// Patio at night — supporting photography for lower sections (staged for later).
await sharp(SRC_PATIO)
  .resize({ width: 1600, withoutEnlargement: true })
  .webp({ quality: 72 })
  .toFile(`${OUT}/patio-night.webp`);

console.log("hero assets written to", OUT);
