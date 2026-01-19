import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
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
