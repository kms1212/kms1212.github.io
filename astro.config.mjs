import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kms1212.github.io',
  trailingSlash: 'always',
  redirects: {
    '/work/': '/#other',
  },
});
