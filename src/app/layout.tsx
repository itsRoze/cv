import "@/styles/globals.css";

import { Inter } from "next/font/google";

export const metadata = {
  title: "Elijah Lewis | Web Technologies & Machine Intelligence",
  description:
    "I'm a fullstack engineer, with a product-oriented mindset, and experience with AI and ML",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
