import { escapeHtml } from './seo-metadata.mjs';

/** Follow only static imports of this page, never other lazy pages or widgets. */
export function routeAssets(manifest, entry) {
  if (!manifest[entry]) return [];
  const seen = new Set();
  const assets = new Map();
  function visit(key) {
    if (seen.has(key)) return;
    seen.add(key);
    const chunk = manifest[key];
    if (!chunk) throw new Error(`Missing manifest dependency: ${key}`);
    for (const file of chunk.css || []) assets.set(file, 'stylesheet');
    if (chunk.file.endsWith('.js')) assets.set(chunk.file, 'modulepreload');
    for (const imported of chunk.imports || []) visit(imported);
  }
  visit(entry);
  return [...assets].map(([file, rel]) => ({ file, rel }));
}

export function addRoutePreloads(html, manifest, entry, { preloadModules = true } = {}) {
  const existing = new Set([...html.matchAll(/<(?:link|script)\b[^>]*\b(?:href|src)="([^"]+)"[^>]*>/g)].map(match => match[1]));
  const tags = routeAssets(manifest, entry).filter(asset => (preloadModules || asset.rel === 'stylesheet') && !existing.has(`/${asset.file}`))
    .map(({ file, rel }) => `<link rel="${rel}" crossorigin href="/${escapeHtml(file)}" />`);
  return html.replace('</head>', `${tags.join('\n')}\n</head>`);
}

/** React's rendered attributes are already HTML-escaped; preserve them verbatim. */
export function addHeroPreload(html, body) {
  const hero = [...body.matchAll(/<img\b[^>]*>/g)].find(([tag]) => /\bfetchpriority="high"/i.test(tag))?.[0];
  if (!hero) return html;
  const attributes = Object.fromEntries([...hero.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value]));
  if (!attributes.src) return html;
  const srcset = attributes.srcSet || attributes.srcset;
  const responsive = srcset ? ` imagesrcset="${srcset}"${attributes.sizes ? ` imagesizes="${attributes.sizes}"` : ''}` : '';
  const tag = `<link rel="preload" as="image" href="${attributes.src}"${responsive} fetchpriority="high" />`;
  // Discover the image before page-module preloads compete for the connection.
  return html.replace(/(?=<script\b|<link\b|<\/head>)/, `${tag}\n`);
}
