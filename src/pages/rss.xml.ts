import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
import { getPublishedPosts } from "@utils/posts";
const parser = new MarkdownIt();

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  return rss({
    title: "Elijah Lewis | Writing",
    description: "Essays and notes by Elijah Lewis.",
    site: context.site!,
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
