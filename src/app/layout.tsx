import { Inter, Lexend } from "next/font/google";
import clsx from "clsx";

import "@/styles/tailwind.css";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Slug Path",
    default: "SlugPath - UCSC Course Planning Made Simple",
  },
  description:
    "Degree planning can be a pain. SlugPath makes it easy to plan your courses and graduate on time.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "h-full scroll-smooth bg-white antialiased",
        inter.variable,
        lexend.variable,
      )}
    >
      <link rel="icon" href="/icon.svg" type="image/svg" sizes="any" />
      <body className="flex h-full flex-col">{children}</body>
    </html>
  );
}
