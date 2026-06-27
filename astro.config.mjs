import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.yosin-tv.net',
  output: 'static',
  integrations: [
    react(),
    sitemap(),
  ],
  vite: {},
});
