type SharedNotePageProps = {
  params: {
    token: string;
  };
};
export default function SharedNotePage({ params }: SharedNotePageProps) {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight">Shared Note</h1>
      <p className="max-w-2xl text-sm text-slate-300">
        Dummy shared-note page for token {params.token}. This route now lives directly under
        app/s/[token].
      </p>
    </section>
  );
}
