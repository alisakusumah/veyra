import { defineConfig } from 'astro/config';

// Veyra is intentionally static-first for fast review, easy hosting, and a calm build surface.
export default defineConfig({
  output: 'static'
});
