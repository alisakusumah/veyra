import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// Veyra is intentionally static-first for fast review, easy hosting, and a calm build surface.
export default defineConfig({
  output: 'static',
  integrations: [tailwind()]
});
