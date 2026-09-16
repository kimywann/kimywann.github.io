// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import { SITE_URL } from "./site.config.mjs";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  markdown: {
    syntaxHighlight: "prism",
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx()]
});
