type StatusPillProps = {
  label: string;
  tone?: "neutral" | "success" | "warning";
};

export function StatusPill({ label, tone = "neutral" }: StatusPillProps) {
  const toneClasses =
    tone === "success"
      ? "bg-emerald-100 text-emerald-700"
      : tone === "warning"
        ? "bg-amber-100 text-amber-700"
        : "bg-slate-100 text-slate-700";

  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${toneClasses}`}>
      {label}
    </span>
  );
}
