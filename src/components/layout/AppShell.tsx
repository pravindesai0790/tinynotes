import type { ReactNode } from "react";
import Link from "next/link";
import { PageContainer } from "./PageContainer";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <PageContainer className="flex items-center justify-between py-4">
          <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
            TinyNotes
          </Link>
          <nav className="flex items-center gap-5 text-sm font-medium text-slate-700">
            <Link href="/login" className="transition-colors hover:text-slate-900">
              Login
            </Link>
            <Link href="/register" className="transition-colors hover:text-slate-900">
              Register
            </Link>
          </nav>
        </PageContainer>
      </header>
      <main>
        <PageContainer className="space-y-6">{children}</PageContainer>
      </main>
    </div>
  );
}
