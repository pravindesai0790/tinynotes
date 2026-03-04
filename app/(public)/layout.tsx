import type { ReactNode } from "react";
import { PublicShell } from "@/src/components/layout/PublicShell";

type PublicLayoutProps = {
  children: ReactNode;
};

export default function PublicLayout({ children }: PublicLayoutProps) {
  return <PublicShell>{children}</PublicShell>;
}
