type PlaceholderFieldProps = {
  label: string;
  value: string;
};

export function PlaceholderField({ label, value }: PlaceholderFieldProps) {
  return (
    <label className="block space-y-1">
      <span className="text-xs font-medium uppercase tracking-wide text-slate-600">{label}</span>
      <div className="rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-500">
        {value}
      </div>
    </label>
  );
}
