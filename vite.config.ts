import { defineConfig, type PreviewServer } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { existsSync } from "node:fs";
import { componentTagger } from "lovable-tagger";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => ({
  // Reduce build output verbosity
  logLevel: "warn",
  publicDir: isSsrBuild ? false : "public",
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  plugins: [
    react(),
    {
      name: "prerender-preview",
      configurePreviewServer(server: PreviewServer) {
        // Vite otherwise serves the homepage for extensionless subpage URLs.
        // Match the deployed directory indexes, including alternate QA outDirs.
        const output = path.resolve(server.config.root, server.config.build.outDir);
        server.middlewares.use((req, _res, next) => {
          try {
            const url = new URL(req.url || "/", "http://localhost");
            const pathname = decodeURIComponent(url.pathname);
            const file = path.resolve(output, `.${pathname}`, "index.html");
            if (!pathname.endsWith("/") && file.startsWith(`${output}${path.sep}`) && existsSync(file)) {
              req.url = `${url.pathname}/index.html${url.search}`;
            }
          } catch { /* Let Vite handle malformed URLs. */ }
          next();
        });
      },
    },
    mode === "development" && componentTagger(),
    // Gzip compression
    !isSsrBuild && viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024,
    }),
    // Brotli compression
    !isSsrBuild && viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024,
    }),
    // PWA disabled — was caching stale index.html that referenced removed JS hashes
    // Resulted in infinite "preloading" for returning visitors after each deploy.
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssr: { noExternal: ["react-helmet-async"] },
  build: {
    manifest: !isSsrBuild,
    rollupOptions: {
      output: {
        // Assign the underlying CJS/runtime files too. Entry-only assignments put
        // JSX helpers inside the animation chunk and loaded it on every page.
        manualChunks: isSsrBuild ? undefined : (id) => {
          if (id.includes('commonjsHelpers') || id.includes('/node_modules/tslib/')) return 'shared';
          if (/\/node_modules\/(react|react-dom|scheduler)\//.test(id)) return 'vendor';
          if (/\/node_modules\/(react-router|react-router-dom|@remix-run\/router)\//.test(id)) return 'router';
          if (/\/node_modules\/(framer-motion|motion-dom|motion-utils)\//.test(id)) return 'motion';
          if (id.includes('/node_modules/@supabase/')) return 'supabase';
          if (id.includes('/node_modules/recharts/')) return 'charts';
        },
        // Suppress asset size warnings in console
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
    minify: "esbuild",
    // Increase chunk warning limit to 3MB to avoid build interruptions
    chunkSizeWarningLimit: 3000,
    assetsInlineLimit: 4096,
    target: "esnext",
    cssCodeSplit: true,
    // Suppress large asset warnings
    reportCompressedSize: false,
  },
}));
