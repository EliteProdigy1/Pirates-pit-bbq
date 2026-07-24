/**
 * Optimizer for the "Built by Smoke" section brisket photo.
 * Landscape WebP (the section frame is 4:3 with object-cover, so no crop is
 * forced here — CSS handles framing without distortion). Run from root:
 *   node scripts/optimize-brisket-story.mjs
 */
import sharp from "sharp";

const SRC =
  "/root/.claude/uploads/968851fd-97a0-514b-8a76-ad24921cd578/fab84388-CA2215DBC28847ED96B2F21EE8CA4F6B.png";

await sharp(SRC)
  .resize({ width: 1400, withoutEnlargement: true })
  .webp({ quality: 74 })
  .toFile("public/images/food/brisket-story.webp");

console.log("wrote public/images/food/brisket-story.webp");
