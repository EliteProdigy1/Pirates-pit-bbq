/**
 * Optimizer for the final-CTA feast background photo.
 * Full-bleed landscape WebP. Run from root:
 *   node scripts/optimize-feast.mjs
 */
import sharp from "sharp";

const SRC =
  "/root/.claude/uploads/968851fd-97a0-514b-8a76-ad24921cd578/9b33312e-603272A85A034357B77B0CEA7BFB8E52.png";

await sharp(SRC)
  .resize({ width: 1600, withoutEnlargement: true })
  .webp({ quality: 72 })
  .toFile("public/images/food/feast.webp");

console.log("wrote public/images/food/feast.webp");
