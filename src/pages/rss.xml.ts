import rss from "@astrojs/rss";
import type { AstroConfig } from "astro";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context: AstroConfig) {
  const posts = (await getCollection("blog"))
    .filter((p) => !p.data.isDraft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: "Elijah Lewis | Writing",
    description: "Essays and notes by Elijah Lewis.",
    site: context.site as string,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: `/posts/${post.id}`,
      content: sanitizeHtml(parser.render(post.body ?? "")),
    })),
    customData: `<language>en-us</language>`,
  });
}
