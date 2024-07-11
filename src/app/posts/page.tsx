const posts = [
  {
    title: "AI Will Change UI Development",
    href: "https://www.roze.dev/writing/ai-will-change-ui-development",
    date: "04-30-2024",
  },
  {
    title: "Coding as Gardening — A Journey into SaaS Productivity",
    href: "https://www.roze.dev/writing/coding-as-gardening",
    date: "12-12-2023",
  },
  {
    title: "Use Astro and Solid to Build a Portfolio",
    href: "https://www.roze.dev/writing/use-astro-and-solid-to-build-a-portfolio",
    date: "09-17-2023",
  },
];
export default function Page() {
  return (
    <main>
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <h1 className="text-2xl font-bold">Recent Posts</h1>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.href} className="flex items-center justify-between">
              <a href={post.href} target="_blank" className="hover:underline">
                {post.title}
              </a>
              <p className="text-gray-500">
                {new Date(post.date).toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
