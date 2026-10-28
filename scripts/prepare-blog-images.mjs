import { readFile, writeFile } from 'node:fs/promises';
import { getOwnPhoto, ownPhotos } from '../src/lib/own-photos.mjs';
// Rebuild assignments from our reviewed catalogue. CMS image URLs are not downloaded.
const { articles } = JSON.parse(await readFile(new URL('../src/data/blog-content.json', import.meta.url), 'utf8'));
const results = articles.map(article => {
  const image = getOwnPhoto(`${article.slug} ${article.title || ''}`);
  const photo = Object.values(ownPhotos).find(photo => photo.variants.some(variant => variant.src === image.src));
  return [article.slug, { source: photo.source, alt: photo.alt, variants: photo.variants }];
});
await writeFile(new URL('../src/data/blog-images.json', import.meta.url), JSON.stringify(Object.fromEntries(results), null, 2) + '\n');
console.log(`Assigned ${results.length} article covers to verified FOTZ photographs.`);
