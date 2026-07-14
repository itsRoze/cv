// @ts-check
import { defineConfig } from "astro/config";
import remarkSmartypants from "remark-smartypants";
import { remarkReadingTime } from "./remark-reading-time.mjs";

import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://elijahlewis.dev",
  output: "static",
  integrations: [expressiveCode()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    // `markdown.remarkPlugins` is the supported injection point on Astro 7.0.3
    // (roze.dev runs the same reading-time plugin this way). The newer
    // `markdown.processor` API is deprecation-adjacent for this use and does not
    // cleanly surface remark frontmatter for reading-time, so we stay on this.
    remarkPlugins: [remarkSmartypants, remarkReadingTime],
  },
});
