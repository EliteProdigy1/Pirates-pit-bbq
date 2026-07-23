/**
 * Asset optimizer for the Smoked Gouda Mac card.
 * Square WebP crop to match the other Heavy Hitters cards (object-cover crops
 * without distortion). Run from the project root:
 *   node scripts/optimize-gouda-mac.mjs
 */
import sharp from "sharp";

const SRC =
  "/root/.claude/uploads/968851fd-97a0-514b-8a76-ad24921cd578/fe53469f-31588FBF17D44D048F7253BAA024B6AD.png";

await sharp(SRC)
  .resize({ width: 900, height: 900, fit: "cover", position: "centre" })
  .webp({ quality: 72 })
  .toFile("public/images/food/gouda-mac.webp");

console.log("wrote public/images/food/gouda-mac.webp");
