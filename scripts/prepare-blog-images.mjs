import sharp from 'sharp';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { getBlogMetadata } from '../src/lib/blog-seo.mjs';

// Explicit maintenance command; builds use committed variants, never downloads.
const articles = JSON.parse(await readFile(new URL('../src/data/blog-content.json', import.meta.url), 'utf8')).articles
  .filter(article => article.hero_image_url && !getBlogMetadata(article).noIndex);
const output = new URL('../public/blog-images/', import.meta.url);
const cache = new URL('../node_modules/.cache/fotz-blog-images/', import.meta.url);
await mkdir(output, { recursive: true });
await mkdir(cache, { recursive: true });
const results = [];
let index = 0;
async function worker() {
  while (index < articles.length) {
    const article = articles[index++];
    const source = article.hero_image_url;
    const hash = createHash('sha256').update(source).digest('hex').slice(0, 12);
    const cached = new URL(hash, cache);
    let buffer;
    try { buffer = await readFile(cached); } catch {
      for (let attempt = 0; attempt < 3; attempt++) {
        try {
          const response = await fetch(source, { signal: AbortSignal.timeout(45000) });
          if (!response.ok) throw new Error(`HTTP ${response.status}: ${source}`);
          buffer = Buffer.from(await response.arrayBuffer());
          await sharp(buffer).metadata();
          await writeFile(cached, buffer);
          break;
        } catch (error) { if (attempt === 2) throw error; }
      }
    }
    const variants = [];
    for (const width of [480, 800, 1200]) {
      const filename = `${article.slug}-${hash}-${width}.webp`;
      const info = await sharp(buffer).rotate().resize({ width, withoutEnlargement: true })
        .webp({ quality: 78 }).toFile(fileURLToPath(new URL(filename, output)));
      if (!variants.some(variant => variant.width === info.width)) {
        variants.push({ src: `/blog-images/${filename}`, width: info.width, height: info.height, bytes: info.size });
      }
    }
    results.push([article.slug, { source, sourceBytes: buffer.length, variants }]);
  }
}
await Promise.all(Array.from({ length: 3 }, worker));
results.sort(([a], [b]) => a.localeCompare(b));
await writeFile(new URL('../src/data/blog-images.json', import.meta.url), JSON.stringify(Object.fromEntries(results), null, 2) + '\n');
console.log(JSON.stringify({ covers: results.length, sourceBytes: results.reduce((sum, [, image]) => sum + image.sourceBytes, 0), variantBytes: results.reduce((sum, [, image]) => sum + image.variants.reduce((bytes, variant) => bytes + variant.bytes, 0), 0) }));
