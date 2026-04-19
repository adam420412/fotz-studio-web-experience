import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Reduce build output verbosity
  logLevel: "warn",
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Gzip compression
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024,
    }),
    // Brotli compression
    viteCompression({
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
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          motion: ["framer-motion"],
          supabase: ["@supabase/supabase-js"],
          charts: ["recharts"],
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
