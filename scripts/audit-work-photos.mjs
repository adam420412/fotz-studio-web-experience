import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { getWorkCollection } from '../src/lib/selected-work.mjs';
import { workCollections } from '../src/data/selected-work.mjs';

const root = path.resolve(process.env.FOTZ_BUILD_DIR || 'dist');
const output = path.resolve(process.env.FOTZ_QA_DIR || 'docs/seo/qa-2026-10-08/photos');
const report = { pages: 0, galleryPages: 0, collections: {}, errors: [] };
async function inspect(dir) {
  for (const file of await readdir(dir, { withFileTypes: true })) {
    const filename = path.join(dir, file.name);
    if (file.isDirectory()) { await inspect(filename); continue; }
    if (file.name !== 'index.html') continue;
    report.pages++;
    const route = '/' + path.relative(root, dir).split(path.sep).join('/');
    const html = await readFile(filename, 'utf8');
    const expected = getWorkCollection(route);
    const sections = [...html.matchAll(/<section\b[^>]*data-work-collection="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g)];
    if (sections.length !== (expected ? 1 : 0)) { report.errors.push({ route, issue: `expected ${expected ? 1 : 0} gallery, found ${sections.length}` }); continue; }
    if (!expected) continue;
    report.galleryPages++;
    report.collections[expected] = (report.collections[expected] || 0) + 1;
    const [, actual, body] = sections[0];
    if (actual !== expected) report.errors.push({ route, issue: 'incorrect topic selection' });
    const images = [...body.matchAll(/<img\b([^>]+)>/g)];
    if (images.length !== 3) report.errors.push({ route, issue: 'expected three portfolio images' });
    for (let i = 0; i < images.length; i++) {
      const attributes = Object.fromEntries([...images[i][1].matchAll(/([\w-]+)="([^"]*)"/g)].map(match => [match[1], match[2]]));
      if (!attributes.src?.startsWith(`/work/${workCollections[expected].images[i]}-`)) report.errors.push({ route, issue: 'wrong source image' });
      for (const field of ['alt', 'width', 'height', 'srcSet', 'sizes']) if (!attributes[field]) report.errors.push({ route, issue: `missing image ${field}` });
      if (attributes.loading !== 'lazy') report.errors.push({ route, issue: 'below-fold image is not lazy' });
    }
  }
}
await inspect(root);
await mkdir(output, { recursive: true });
await writeFile(path.join(output, 'photo-coverage.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report));
if (report.errors.length) process.exitCode = 1;
