import fs from 'node:fs';
import path from 'node:path';
import { renderPage } from '../../.ssr/entry-server.js';
import { serveBlogArticle } from '../lib/live-blog.mjs';

const config = JSON.parse(fs.readFileSync(path.join(process.cwd(), '.ssr/public-cms.json'), 'utf8'));
const template = fs.readFileSync(path.join(process.cwd(), '.ssr/blog-template.html'), 'utf8');
export const GET = request => serveBlogArticle(request, { config, template, renderPage });
export const HEAD = GET;
