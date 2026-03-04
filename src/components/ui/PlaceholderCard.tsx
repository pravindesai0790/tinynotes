import type { ReactNode } from "react";

type PlaceholderCardProps = {
  children: ReactNode;
  className?: string;
};

export function PlaceholderCard({ children, className = "" }: PlaceholderCardProps) {
  const classes = `rounded-xl border border-slate-200 bg-white p-5 shadow-sm ${className}`.trim();
  return <div className={classes}>{children}</div>;
}
