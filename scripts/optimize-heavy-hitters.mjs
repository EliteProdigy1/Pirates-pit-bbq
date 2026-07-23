/**
 * Asset optimizer for the Heavy Hitters cards (Phase 3B).
 * Produces square WebP crops (cards are square; object-cover crops the source
 * without distortion). Run from the project root:
 *   node scripts/optimize-heavy-hitters.mjs
 *
 * Only the four cards named in Phase 3B are processed (Brisket, Pulled Pork,
 * Wings, Sampler). Ribs / Chicken / Gouda Mac are intentionally NOT touched.
 */
import sharp from "sharp";

const U = "/root/.claude/uploads/968851fd-97a0-514b-8a76-ad24921cd578";
const OUT = "public/images/food";

const jobs = [
  { src: `${U}/f5e208eb-B6812E83E1FD42C6AEDB0B46B25FE6EB.png`, out: "brisket.webp" },
  { src: `${U}/cc9c71a4-4F366741DEAC4C41AC67A04AAA209E9E.png`, out: "pulled-pork.webp" },
  { src: `${U}/30d2279e-2D174A59CB3F4AC09CF09753B62EB710.png`, out: "wings.webp" },
  { src: `${U}/de172bd5-50131D7FF6A84D23B540FD7FDD12F488.png`, out: "sampler.webp" },
];

for (const job of jobs) {
  await sharp(job.src)
    .resize({ width: 900, height: 900, fit: "cover", position: "centre" })
    .webp({ quality: 72 })
    .toFile(`${OUT}/${job.out}`);
  console.log("wrote", `${OUT}/${job.out}`);
}
