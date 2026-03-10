import { LogoutButton } from "@/app/components/LogoutButton";
import { auth } from "@/lib/auth";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TinyNotes",
  description: "TinyNotes route scaffold with a single global layout",
};

const guestNavigationLinks = [
  { href: "/", label: "Home" },
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
];

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <html lang="en">
      <body
        className={[inter.variable, "min-h-screen bg-slate-950 text-slate-100 antialiased"].join(
          " ",
        )}
      >
        <div className="min-h-screen">
          <header className="border-b border-cyan-400/25 bg-gradient-to-r from-slate-950 via-blue-950 to-cyan-950">
            <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
              <Link href="/" className="text-lg font-semibold tracking-tight text-cyan-100">
                TinyNotes
              </Link>

              {session ? (
                <nav className="flex flex-wrap items-center justify-end gap-3 text-sm font-medium text-cyan-200/90">
                  <Link href="/notes" className="transition-colors hover:text-cyan-100">
                    Notes
                  </Link>
                  <LogoutButton />
                </nav>
              ) : (
                <nav className="flex flex-wrap items-center justify-end gap-4 text-sm font-medium text-cyan-200/90">
                  {guestNavigationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="transition-colors hover:text-cyan-100"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              )}
            </div>
          </header>
          <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
