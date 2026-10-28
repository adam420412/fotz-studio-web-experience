import fs from 'node:fs';
import path from 'node:path';
import { serveBlogSitemap } from '../src/lib/live-blog.mjs';

const config = JSON.parse(fs.readFileSync(path.join(process.cwd(), '.ssr/public-cms.json'), 'utf8'));
const baseXml = fs.readFileSync(path.join(process.cwd(), 'public/sitemap-blog.xml'), 'utf8');
export const GET = request => serveBlogSitemap(request, { config, baseXml });
export const HEAD = GET;
