import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "TinyNotes",
  description: "TinyNotes route scaffold with a single global layout",
};
const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/notes", label: "Notes" },
  { href: "/notes/new", label: "New Note" },
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={[inter.variable, "min-h-screen bg-slate-50 text-slate-900 antialiased"].join(
          " ",
        )}
      >
        <div className="min-h-screen">
          <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
              <Link href="/" className="text-lg font-semibold tracking-tight">
                TinyNotes
              </Link>
              <nav className="flex flex-wrap items-center justify-end gap-4 text-sm font-medium text-slate-600">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>
          <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
