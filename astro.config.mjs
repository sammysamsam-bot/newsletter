import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://broadsheet-news.netlify.app',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
});
