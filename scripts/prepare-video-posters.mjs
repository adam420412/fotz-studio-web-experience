// Real responsive derivatives of the existing film cover; no video re-encoding.
import sharp from 'sharp';
for (const width of [480, 800]) {
  const output = `public/videos/enea-stadion-cover-${width}.webp`;
  const info = await sharp('public/videos/enea-stadion-cover.webp').resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toFile(output);
  console.log(`${output}: ${info.size} bytes`);
}
