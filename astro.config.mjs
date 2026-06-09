import { defineConfig } from 'astro/config';

export default defineConfig({
  // Public canonical face of the broadsheet (Vercel). Also served privately
  // over Tailscale via apphost; Vercel is the canonical URL for RSS/links.
  site: 'https://newsletter-pink-beta.vercel.app',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
});
