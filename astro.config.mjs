// @ts-check
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time.mjs";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), expressiveCode(), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});

