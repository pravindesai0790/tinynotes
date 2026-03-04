import type { ReactNode } from "react";
import { PageContainer } from "./PageContainer";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-200 bg-slate-50">
        <PageContainer className="py-4">
          <p className="text-sm font-medium text-slate-700">TinyNotes App Area (Placeholder)</p>
        </PageContainer>
      </header>
      <main>
        <PageContainer className="space-y-6">{children}</PageContainer>
      </main>
    </div>
  );
}
