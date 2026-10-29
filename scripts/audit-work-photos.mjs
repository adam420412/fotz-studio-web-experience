import { readdir, readFile, mkdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { getWorkCollection } from '../src/lib/selected-work.mjs';
import { workCollections } from '../src/data/selected-work.mjs';
import { getIndustry } from '../src/data/industries.mjs';
import { industryWork } from '../src/data/industry-work.mjs';
import { getServiceWork, serviceWork, serviceWorkRoutes } from '../src/data/service-work.mjs';

const serviceImages = { ...JSON.parse(await readFile(new URL('../src/data/industry-work-images.json', import.meta.url))), ...JSON.parse(await readFile(new URL('../src/data/service-work-images.json', import.meta.url))) };

const root = path.resolve(process.env.FOTZ_BUILD_DIR || 'dist');
const output = path.resolve(process.env.FOTZ_QA_DIR || 'docs/seo/qa-2026-10-08/photos');
const report = { pages: 0, galleryPages: 0, industryPages: 0, servicePages: 0, collections: {}, errors: [] };
async function inspect(dir) {
  for (const file of await readdir(dir, { withFileTypes: true })) {
    const filename = path.join(dir, file.name);
    if (file.isDirectory()) { await inspect(filename); continue; }
    if (file.name !== 'index.html') continue;
    report.pages++;
    const route = '/' + path.relative(root, dir).split(path.sep).join('/');
    const html = await readFile(filename, 'utf8');
    const industry = getIndustry(route);
    const industrySlug = route.startsWith('/dla-kogo/') ? route.slice('/dla-kogo/'.length) : '';
    if (industryWork[industrySlug]) {
      report.industryPages++;
      const galleries = [...html.matchAll(/<section\b[^>]*data-industry-work="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g)];
      if (galleries.length !== 1 || galleries[0]?.[1] !== industrySlug) report.errors.push({ route, issue: 'missing industry portfolio' });
      const body = galleries[0]?.[2] || '';
      const projects = industryWork[industrySlug].projects;
      if ((body.match(/<(?:img|video)\b/g) || []).length !== projects.length) report.errors.push({ route, issue: 'wrong industry media count' });
      for (const project of projects) if (!body.includes(`/work/industries/${project.image}-`)) report.errors.push({ route, issue: `missing project image: ${project.image}` });
      for (const match of body.matchAll(/<video\b([^>]+)>/g)) {
        const attrs = Object.fromEntries([...match[1].matchAll(/([\w-]+)="([^"]*)"/g)].map(m => [m[1], m[2]]));
        if (attrs.preload !== 'none' || !('controls' in attrs) || !('playsinline' in attrs) || 'autoplay' in attrs || !attrs.poster || !attrs['aria-label']) report.errors.push({ route, issue: 'video must be labelled, controlled and not preload or autoplay' });
        for (const file of [attrs.src, attrs.poster]) {
          if (!file?.startsWith('/') || !await stat(path.join(root, file)).then(s => s.size > 0).catch(() => false)) report.errors.push({ route, issue: `missing video asset: ${file}` });
        }
      }
      if (industry && !html.includes('aria-controls="industries-menu"')) report.errors.push({ route, issue: 'missing industry navigation' });
    }
    const serviceId = getServiceWork(route);
    const serviceGalleries = [...html.matchAll(/<section\b[^>]*data-service-work="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g)];
    if (serviceGalleries.length !== (serviceId ? 1 : 0)) report.errors.push({ route, issue: 'incorrect number of service galleries' });
    if (serviceId) {
      report.servicePages++;
      const body = serviceGalleries[0]?.[2] || '';
      if (serviceGalleries[0]?.[1] !== serviceId) report.errors.push({ route, issue: 'wrong service collection' });
      const projects = serviceWork[serviceId].projects;
      if ((body.match(/<figure\b/g) || []).length !== projects.length) report.errors.push({ route, issue: 'wrong service project count' });
      for (const project of projects) {
        const variants = serviceImages[project.image];
        if (!variants?.length || !body.includes(variants.at(-1).src)) report.errors.push({ route, issue: `missing service image: ${project.image}` });
        for (const file of [...(variants || []).map(v => v.src), ...(project.video ? [project.video] : [])]) {
          if (!file.startsWith('/') || !await stat(path.join(root, file)).then(s => s.size > 0).catch(() => false)) report.errors.push({ route, issue: `missing service asset: ${file}` });
        }
        if (project.video && !body.includes(`src="${project.video}"`)) report.errors.push({ route, issue: `missing service film: ${project.video}` });
      }
      for (const match of body.matchAll(/<video\b([^>]+)>/g)) {
        const attrs = Object.fromEntries([...match[1].matchAll(/([\w-]+)="([^"]*)"/g)].map(m => [m[1], m[2]]));
        if (attrs.preload !== 'none' || !('controls' in attrs) || !('playsinline' in attrs) || 'autoplay' in attrs || !attrs.poster || !attrs['aria-label']) report.errors.push({ route, issue: 'service video must not autoplay or preload' });
      }
    }
    const expected = getWorkCollection(route);
    const sections = [...html.matchAll(/<section\b[^>]*data-work-collection="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g)];
    if (sections.length !== (expected ? 1 : 0)) { report.errors.push({ route, issue: `expected ${expected ? 1 : 0} gallery, found ${sections.length}` }); continue; }
    if (!expected) continue;
    report.galleryPages++;
    report.collections[expected] = (report.collections[expected] || 0) + 1;
    const [, actual, body] = sections[0];
    if (actual !== expected) report.errors.push({ route, issue: 'incorrect topic selection' });
    const images = [...body.matchAll(/<img\b([^>]+)>/g)];
    const collectionImages = workCollections[expected].images;
    // A two-image gallery is valid when the first project is already shown in the hero.
    // Read the rendered hero independently so a missing or unrelated image still fails.
    const hero = html.match(/<figure\b[^>]*class="offer-visual [^"]*"[^>]*>[\s\S]*?<img\b[^>]*src="([^"]+)"/);
    const firstImageInHero = hero?.[1].startsWith(`/work/${collectionImages[0]}-`);
    const expectedImages = images.length === 2 && firstImageInHero ? collectionImages.slice(1) : collectionImages;
    if (images.length !== expectedImages.length) report.errors.push({ route, issue: 'expected three portfolio projects across hero and gallery' });
    for (let i = 0; i < images.length; i++) {
      const attributes = Object.fromEntries([...images[i][1].matchAll(/([\w-]+)="([^"]*)"/g)].map(match => [match[1], match[2]]));
      if (!attributes.src?.startsWith(`/work/${expectedImages[i]}-`)) report.errors.push({ route, issue: 'wrong source image' });
      for (const field of ['alt', 'width', 'height', 'srcSet', 'sizes']) if (!attributes[field]) report.errors.push({ route, issue: `missing image ${field}` });
      if (attributes.loading !== 'lazy') report.errors.push({ route, issue: 'below-fold image is not lazy' });
    }
  }
}
await inspect(root);
if (report.industryPages !== Object.keys(industryWork).length) report.errors.push({ issue: 'not all industry portfolio routes were built' });
if (report.servicePages !== Object.keys(serviceWorkRoutes).length) report.errors.push({ issue: 'not all service portfolio routes were built' });
await mkdir(output, { recursive: true });
await writeFile(path.join(output, 'photo-coverage.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report));
if (report.errors.length) process.exitCode = 1;
