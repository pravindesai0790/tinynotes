type PlaceholderButtonProps = {
  label: string;
  tone?: "primary" | "secondary" | "danger";
};

export function PlaceholderButton({ label, tone = "primary" }: PlaceholderButtonProps) {
  const toneClasses =
    tone === "danger"
      ? "border-rose-300 bg-rose-50 text-rose-700"
      : tone === "secondary"
        ? "border-slate-300 bg-white text-slate-700"
        : "border-cyan-300 bg-cyan-50 text-cyan-800";

  return (
    <div className={`inline-flex rounded-md border px-3 py-2 text-sm font-medium ${toneClasses}`}>
      {label}
    </div>
  );
}
