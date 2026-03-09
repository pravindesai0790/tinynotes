"use client";
type AppErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};
export default function AppError({ error, reset }: AppErrorProps) {
  return (
    <section className="space-y-3 rounded-2xl border border-red-200 bg-white p-8">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-red-600">Error</p>
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Something went wrong</h1>
      <p className="max-w-2xl text-sm text-slate-600">
        {error.message || "A route-level error happened while rendering this page."}
      </p>
      <button
        type="button"
        onClick={reset}
        className="inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
      >
        Try again
      </button>
    </section>
  );
}
