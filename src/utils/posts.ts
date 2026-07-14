import { getCollection, render, type CollectionEntry } from "astro:content";

export interface PostRow {
  href: string;
  title: string;
  excerpt: string;
  year: number;
  meta: string;
}

/**
 * Published blog posts (drafts filtered out), newest first. The shared source
 * for the writing list, the RSS feed, and the post routes so draft state and
 * ordering stay consistent everywhere.
 */
export async function getPublishedPosts(): Promise<CollectionEntry<"blog">[]> {
  return (await getCollection("blog"))
    .filter((p) => !p.data.isDraft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/**
 * Published posts shaped for <IndexRow>. Pass a limit to cap the count, and
 * featuredOnly to restrict to posts flagged `featured` in frontmatter (the home
 * page's curated list). Home and the writing index share this so the two stay
 * in sync.
 */
export async function getPostRows(
  limit?: number,
  featuredOnly = false,
): Promise<PostRow[]> {
  const posts = (await getPublishedPosts()).filter((p) =>
    featuredOnly ? p.data.featured : true,
  );

  const selected = limit !== undefined ? posts.slice(0, limit) : posts;

  return Promise.all(
    selected.map(async (p) => {
      const { remarkPluginFrontmatter } = await render(p);
      return {
        href: `/posts/${p.id}`,
        title: p.data.title,
        excerpt: p.data.excerpt,
        year: new Date(p.data.date).getUTCFullYear(),
        meta: remarkPluginFrontmatter.minutesRead as string,
      };
    }),
  );
}
