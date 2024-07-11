import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";
import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "Elijah Lewis | Web Technologies & Machine Intelligence",
  description:
    "I'm a fullstack engineer, with a product-oriented mindset, and experience in AI/ML integration",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

// If loading a variable font, you don't need to specify the font weight
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
      <body>
        <header className="container mx-auto p-4 pt-4 print:p-12 print:pt-8 md:p-16 md:pt-8">
          <Nav />
        </header>
        {children}
      </body>
      <Analytics />
    </html>
  );
}
