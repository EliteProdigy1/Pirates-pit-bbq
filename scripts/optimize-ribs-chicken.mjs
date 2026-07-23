/**
 * Asset optimizer for the Ribs and Smoked Chicken cards.
 * Square WebP crops matching the other Heavy Hitters cards. Run from root:
 *   node scripts/optimize-ribs-chicken.mjs
 */
import sharp from "sharp";

const U = "/root/.claude/uploads/968851fd-97a0-514b-8a76-ad24921cd578";
const OUT = "public/images/food";

const jobs = [
  { src: `${U}/5ea980f7-71FA02BE5C2C47E28D676FBF7578C858.png`, out: "ribs.webp" },
  { src: `${U}/c75a7922-0EE8E44BC9B34889BB20F4E11B81D189.png`, out: "smoked-chicken.webp" },
];

for (const job of jobs) {
  await sharp(job.src)
    .resize({ width: 900, height: 900, fit: "cover", position: "centre" })
    .webp({ quality: 72 })
    .toFile(`${OUT}/${job.out}`);
  console.log("wrote", `${OUT}/${job.out}`);
}
