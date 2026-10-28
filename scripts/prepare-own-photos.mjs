import sharp from 'sharp';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// Originals downloaded from the user's connected Drive; no external image search.
const inputs = [
  ['fotz-work', 'DSC00789.JPG', '1CCpG8bXpaHyRhm9xZu-5q8j8sF4bUzIS', 'Praca przy komputerze — zdjęcie z sesji FOTZ'],
  ['fotz-presentation', 'DSC00837.JPG', '1mTFriDh0CNtkRglVEhMNyZLlEhY48uQz', 'Prezentacja projektu na ekranie — zdjęcie z sesji FOTZ'],
  ['fotz-portrait', 'DSC00894.JPG', '1OMOkOs9WvZOc6VuPoSWPrtQCwKO3Gu9s', 'Portret z sesji fotograficznej FOTZ'],
];
const sourceDir = process.argv[2];
if (!sourceDir) throw new Error('Provide the directory containing the three Drive originals.');
const output = new URL('../public/work/', import.meta.url);
await mkdir(output, { recursive: true });
const photos = {};
for (const [key, filename, driveId, alt] of inputs) {
  const buffer = await readFile(`${sourceDir}/${filename}`);
  const variants = [];
  for (const width of [480, 800, 1200]) {
    const name = `${key}-${width}.webp`;
    const info = await sharp(buffer).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toFile(fileURLToPath(new URL(name, output)));
    variants.push({ src: `/work/${name}`, width: info.width, height: info.height, bytes: info.size });
  }
  photos[key] = { alt, source: `https://drive.google.com/file/d/${driveId}/view`, filename, variants };
}
await writeFile(new URL('../src/data/own-drive-photos.json', import.meta.url), JSON.stringify(photos, null, 2) + '\n');
console.log(`Prepared ${inputs.length} verified Drive photographs.`);
