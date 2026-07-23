/**
 * Asset optimizer for the Smoked Sausage card.
 * Square WebP crop matching the other Heavy Hitters cards. Run from root:
 *   node scripts/optimize-smoked-sausage.mjs
 */
import sharp from "sharp";

const SRC =
  "/root/.claude/uploads/968851fd-97a0-514b-8a76-ad24921cd578/ffa7e72f-6DE4998C54644FFEA892E637030DA268.png";

await sharp(SRC)
  .resize({ width: 900, height: 900, fit: "cover", position: "centre" })
  .webp({ quality: 72 })
  .toFile("public/images/food/smoked-sausage.webp");

console.log("wrote public/images/food/smoked-sausage.webp");
