type EmptyStateBlockProps = {
  title: string;
  description: string;
};

export function EmptyStateBlock({ title, description }: EmptyStateBlockProps) {
  return (
    <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
      <h3 className="text-base font-medium text-slate-800">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div>
  );
}
