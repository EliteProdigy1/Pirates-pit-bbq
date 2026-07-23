/**
 * Asset optimizer for the Cornbread card.
 * Square WebP crop matching the other Heavy Hitters cards. Run from root:
 *   node scripts/optimize-cornbread.mjs
 */
import sharp from "sharp";

const SRC =
  "/root/.claude/uploads/968851fd-97a0-514b-8a76-ad24921cd578/370b1e75-DEEF27A82C414B5087C4D8443CA0B564.png";

await sharp(SRC)
  .resize({ width: 900, height: 900, fit: "cover", position: "centre" })
  .webp({ quality: 72 })
  .toFile("public/images/food/cornbread.webp");

console.log("wrote public/images/food/cornbread.webp");
