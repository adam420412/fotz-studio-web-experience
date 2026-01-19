import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Gzip compression
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024, // Only compress files > 1KB
    }),
    // Brotli compression (better compression ratio)
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024,
    }),
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
          // Core React
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          // UI libraries - separate chunks
          motion: ["framer-motion"],
          // Supabase
          supabase: ["@supabase/supabase-js"],
          // Heavy libraries
          charts: ["recharts"],
          lottie: ["@lottiefiles/dotlottie-react"],
        },
      },
    },
    minify: "esbuild",
    chunkSizeWarningLimit: 1500,
    assetsInlineLimit: 4096,
    target: "esnext",
    cssCodeSplit: true,
  },
}));
