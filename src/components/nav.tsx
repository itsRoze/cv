import Link from "next/link";

const links = [{ href: "/posts", label: "posts" }];

const Nav = () => {
  return (
    <nav className="mx-auto w-full max-w-2xl bg-white ">
      <ul className="flex gap-x-4 text-sm">
        <li>
          <Link
            href="/"
            className="font-medium hover:underline hover:underline-offset-4"
          >
            elijahlewis.dev
          </Link>
        </li>
        {links.map(({ href, label }) => (
          <li key={label}>
            <Link
              href={href}
              className="hover:underline hover:underline-offset-4"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
