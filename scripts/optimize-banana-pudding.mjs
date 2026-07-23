/**
 * Asset optimizer for the Banana Puddin card.
 * Square WebP crop matching the other Heavy Hitters cards. Run from root:
 *   node scripts/optimize-banana-pudding.mjs
 */
import sharp from "sharp";

const SRC =
  "/root/.claude/uploads/968851fd-97a0-514b-8a76-ad24921cd578/4b6c01c4-AE0DDCB1DC954CF69F7884165D3FFCD5.png";

await sharp(SRC)
  .resize({ width: 900, height: 900, fit: "cover", position: "centre" })
  .webp({ quality: 72 })
  .toFile("public/images/food/banana-pudding.webp");

console.log("wrote public/images/food/banana-pudding.webp");
