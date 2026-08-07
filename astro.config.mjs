import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  site: 'https://alexvaquero19.github.io',
  base: '/portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});
