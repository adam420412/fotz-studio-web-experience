import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import { fileURLToPath } from 'node:url';
import { readSource, literal } from './lib/seo-metadata.mjs';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const app = fs.readFileSync(path.join(root, 'src/App.tsx'), 'utf8');
const routes = new Set([...app.matchAll(/<Route\s+path="([^"]+)"/g)].map(m => m[1]));
const config = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
for (const redirect of config.redirects) routes.add(redirect.source);
for (const rewrite of config.rewrites) if (!/[():*]/.test(rewrite.source)) routes.add(rewrite.source);
const clusters = readSource(path.join(root, 'src/data/socialMediaClusters.ts'));
for (const cluster of literal(clusters.scope.get('SOCIAL_MEDIA_CLUSTERS'), clusters)) routes.add(cluster.path);
function files(dir) { return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? files(path.join(dir,e.name)) : /\.tsx?$/.test(e.name) ? [path.join(dir,e.name)] : []); }
const broken = [], all = [];
for (const file of files(path.join(root, 'src'))) {
  const ctx = readSource(file);
  function inspect(value, node) {
    if (typeof value !== 'string') return;
    if (value.startsWith('https://www.fotz-studio.pl/')) value = value.slice('https://www.fotz-studio.pl'.length);
    if (!value.startsWith('/') || value.startsWith('//')) return;
    const target = decodeURI(value.split(/[?#]/)[0]).replace(/\/$/, '') || '/';
    const row = { file: path.relative(root, file), line: ctx.source.getLineAndCharacterOfPosition(node.getStart()).line + 1, target };
    all.push(row);
    if (routes.has(target) || fs.existsSync(path.join(root, 'public', target))) return;
    // Academy content routes are database-driven; a static check cannot resolve them.
    if (target.startsWith('/akademia/')) return;
    broken.push(row);
  }
  function visit(node) {
    if (ts.isJsxAttribute(node) && ['href', 'to'].includes(node.name.text)) inspect(literal(node.initializer, ctx), node);
    if (ts.isPropertyAssignment(node) && ['href', 'to', 'link'].includes(node.name.getText(ctx.source).replace(/["']/g,''))) inspect(literal(node.initializer, ctx), node);
    ts.forEachChild(node, visit);
  }
  visit(ctx.source);
}
const out = path.join(root, 'docs/seo/qa-2026-10-01/source-links.json');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify({ checked: all.length, broken }, null, 2));
console.log(JSON.stringify({ checked: all.length, broken }, null, 2));
if (broken.length) process.exitCode = 1;
