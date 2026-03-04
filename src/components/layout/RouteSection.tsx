import type { ReactNode } from "react";

type RouteSectionProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function RouteSection({ title, description, children }: RouteSectionProps) {
  return (
    <section className="space-y-4">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h1>
        <p className="text-sm text-slate-600">{description}</p>
      </header>
      {children}
    </section>
  );
}
