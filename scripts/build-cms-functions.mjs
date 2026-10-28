import { build } from 'esbuild';

// Vercel's function loader cannot require the ESM-only htmlparser2 dependency
// from sanitize-html. Bundle the current sanitizer (including its security
// fixes) and the renderer into CJS instead of downgrading either dependency.
await build({
  entryPoints: ['src/server/blog-article.mjs', 'src/server/blog-sitemap.mjs'],
  outdir: '.ssr',
  outExtension: { '.js': '.cjs' },
  bundle: true,
  platform: 'node',
  format: 'cjs',
  target: 'node22',
  define: { 'process.env.NODE_ENV': '"production"' },
  // Vite emits harmless side-effect-only imports in split SSR chunks.
  logOverride: { 'ignored-bare-import': 'silent' },
  logLevel: 'info',
});
