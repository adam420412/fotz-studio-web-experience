import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { VitePWA } from "vite-plugin-pwa";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Image processing with automatic WebP and resizing
    imagetools({
      defaultDirectives: (url) => {
        // Auto-convert large images to WebP and resize
        if (url.pathname.match(/\.(png|jpg|jpeg)$/i)) {
          return new URLSearchParams({
            format: 'webp',
            quality: '75',
            w: '1600', // Max width
          });
        }
        return new URLSearchParams();
      },
    }),
    // Additional image optimization
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|webp)$/i,
      exclude: undefined,
      include: undefined,
      includePublic: true,
      logStats: true,
      ansiColors: true,
      png: {
        quality: 70,
      },
      jpeg: {
        quality: 70,
      },
      jpg: {
        quality: 70,
      },
      gif: {},
      webp: {
        lossless: false,
        quality: 70,
        alphaQuality: 70,
        force: false,
      },
      cache: true,
      cacheLocation: "node_modules/.cache/vite-plugin-image-optimizer",
    }),
    // PWA configuration
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "logo-fotz.jpg", "hero-poster.jpg"],
      manifest: {
        name: "Fotz Studio - Agencja Marketingowa",
        short_name: "Fotz Studio",
        description: "Agencja marketingowa nowej generacji. Projektujemy marketing, który realnie pozyskuje klientów.",
        theme_color: "#A11B52",
        background_color: "#0E0E0E",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        lang: "pl",
        categories: ["business", "marketing"],
        icons: [
          {
            src: "/logo-fotz.jpg",
            sizes: "192x192",
            type: "image/jpeg",
            purpose: "any maskable"
          },
          {
            src: "/logo-fotz.jpg",
            sizes: "512x512",
            type: "image/jpeg",
            purpose: "any maskable"
          }
        ],
        screenshots: [
          {
            src: "/hero-poster.jpg",
            sizes: "1920x1080",
            type: "image/jpeg",
            form_factor: "wide"
          }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,jpg,jpeg,webp,svg,woff,woff2}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30
              }
            }
          },
          {
            urlPattern: /\.(?:mp4|webm)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "videos-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 7
              }
            }
          }
        ]
      }
    })
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
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["framer-motion"],
        },
      },
    },
    minify: "esbuild",
    chunkSizeWarningLimit: 1000,
    // Reduce asset inline limit for smaller bundles
    assetsInlineLimit: 4096,
  },
}));
