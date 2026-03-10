import Link from "next/link";
export default function NotFound() {
  return (
    <section className="space-y-3 rounded-2xl border border-dashed border-cyan-400/25 bg-slate-900/70 p-8">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200/80">404</p>
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="max-w-2xl text-sm text-slate-300">
        This route does not have a page yet in the simplified TinyNotes app structure.
      </p>
      <Link
        href="/"
        className="inline-flex text-sm font-medium text-cyan-300 underline underline-offset-4 transition-colors hover:text-cyan-200"
      >
        Go back home
      </Link>
    </section>
  );
}
