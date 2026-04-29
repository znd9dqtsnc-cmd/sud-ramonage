// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.sud-ramonage.fr',
  output: 'static',
  adapter: vercel(),
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        if (item.url === 'https://www.sud-ramonage.fr/')
          return { ...item, changefreq: 'weekly', priority: 1.0 };
        if (['/ramonage', '/debistrage', '/inspection-camera', '/entretien-poele', '/tubage'].some(p => item.url.endsWith(p)))
          return { ...item, changefreq: 'monthly', priority: 0.9 };
        if (item.url.includes('/conseils/') && item.url !== 'https://www.sud-ramonage.fr/conseils/')
          return { ...item, changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() };
        if (['/statistiques-securite', '/guide-conformite-rsd13', '/normes'].some(p => item.url.includes(p)))
          return { ...item, changefreq: 'monthly', priority: 0.8 };
        if (item.url.includes('/villes/'))
          return { ...item, changefreq: 'monthly', priority: 0.75 };
        return item;
      },
    }),
  ],
  compressHTML: true,
  image: {
    domains: ['images.unsplash.com'],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
