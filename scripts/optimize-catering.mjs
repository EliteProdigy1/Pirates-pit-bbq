/**
 * Optimizer for the "Bring the Pit" catering spread photo.
 * Landscape WebP (the section frame is 4:3 with object-cover — CSS handles
 * framing, no distortion). Run from root:
 *   node scripts/optimize-catering.mjs
 */
import sharp from "sharp";

const SRC =
  "/root/.claude/uploads/968851fd-97a0-514b-8a76-ad24921cd578/7a5b0aca-54B5BFFFFDB04983800D0B19639E9EC1.png";

await sharp(SRC)
  .resize({ width: 1400, withoutEnlargement: true })
  .webp({ quality: 74 })
  .toFile("public/images/food/catering.webp");

console.log("wrote public/images/food/catering.webp");
