import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { workImages } from '../src/data/selected-work.mjs';

const output = new URL('../public/work/', import.meta.url);
await mkdir(output, { recursive: true });
const manifest = {};
for (const [id, image] of Object.entries(workImages)) {
  const source = new URL(`../src/assets/${image.source}`, import.meta.url);
  const variants = [];
  for (const width of [480, 800, 1200]) {
    const filename = `${id}-${width}.webp`;
    const info = await sharp(fileURLToPath(source)).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toFile(fileURLToPath(new URL(filename, output)));
    if (!variants.some(variant => variant.width === info.width)) variants.push({ src: `/work/${filename}`, width: info.width, height: info.height, bytes: info.size });
  }
  manifest[id] = variants;
}
await writeFile(new URL('../src/data/selected-work-images.json', import.meta.url), JSON.stringify(manifest, null, 2) + '\n');
console.log(JSON.stringify({ images: Object.keys(manifest).length, bytes: Object.values(manifest).flat().reduce((sum, item) => sum + item.bytes, 0) }));
