import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    coverImage: z.string().optional(),
    ogImage: z.string().optional(),
    date: z.date(),
    isDraft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
};
