// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  image: {
    domains: ['images.unsplash.com'],
  },
  vite: {
    plugins: [tailwindcss()]
  },
});
