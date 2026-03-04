import type { ReactNode } from "react";
import { PageContainer } from "./PageContainer";

type PublicShellProps = {
  children: ReactNode;
};

export function PublicShell({ children }: PublicShellProps) {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageContainer className="space-y-6">{children}</PageContainer>
    </main>
  );
}
