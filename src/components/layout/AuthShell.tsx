import type { ReactNode } from "react";
import { PageContainer } from "./PageContainer";

type AuthShellProps = {
  children: ReactNode;
};

export function AuthShell({ children }: AuthShellProps) {
  return (
    <main className="min-h-screen bg-slate-100">
      <PageContainer className="max-w-lg space-y-6">{children}</PageContainer>
    </main>
  );
}
