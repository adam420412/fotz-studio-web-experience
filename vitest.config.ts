import { defineConfig } from 'vitest/config';
import { fileURLToPath, URL } from 'node:url';
export default defineConfig({ resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)), 'npm:@supabase/supabase-js@2': fileURLToPath(new URL('./node_modules/@supabase/supabase-js/dist/index.mjs', import.meta.url)) } }, test: { include: ['tests/**/*.test.ts'], environment: 'jsdom' } });
