"use client";
type AppErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};
export default function AppError({ error, reset }: AppErrorProps) {
  return (
    <section className="space-y-3 rounded-2xl border border-red-400/30 bg-slate-900/70 p-8">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-red-300">Error</p>
      <h1 className="text-3xl font-semibold tracking-tight text-slate-100">Something went wrong</h1>
      <p className="max-w-2xl text-sm text-slate-300">
        {error.message || "A route-level error happened while rendering this page."}
      </p>
      <button
        type="button"
        onClick={reset}
        className="inline-flex rounded-lg bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
      >
        Try again
      </button>
    </section>
  );
}
