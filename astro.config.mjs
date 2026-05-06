import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://broadsheet.netlify.app',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
});
