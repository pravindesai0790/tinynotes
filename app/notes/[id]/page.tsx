type NoteDetailPageProps = {
  params: {
    id: string;
  };
};
export default function NoteDetailPage({ params }: NoteDetailPageProps) {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight">Note {params.id}</h1>
      <p className="max-w-2xl text-sm text-slate-300">
        Dummy note detail page for the {params.id} route segment. Real note content can replace this
        text later.
      </p>
    </section>
  );
}
