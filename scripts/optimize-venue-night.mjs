/**
 * Asset optimizer for the night establishing shot of the venue.
 * Produces a landscape WebP plus a 16:9 poster crop (useful for the media
 * section). Run from root:  node scripts/optimize-venue-night.mjs
 */
import sharp from "sharp";

const SRC =
  "/root/.claude/uploads/968851fd-97a0-514b-8a76-ad24921cd578/f4902e1a-4C704661331A42AC8B6C30158E3CB9CF.png";
const OUT = "public/images/restaurant";

// Full landscape (supporting photography)
await sharp(SRC)
  .resize({ width: 1600, withoutEnlargement: true })
  .webp({ quality: 72 })
  .toFile(`${OUT}/venue-night.webp`);

// 16:9 poster crop (for the "You Can't Fake the Smoke" media frame)
await sharp(SRC)
  .resize({ width: 1600, height: 900, fit: "cover", position: "centre" })
  .webp({ quality: 72 })
  .toFile(`${OUT}/venue-night-16x9.webp`);

console.log("wrote venue-night.webp and venue-night-16x9.webp");
