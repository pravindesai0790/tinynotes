import { PlaceholderButton } from "../ui/PlaceholderButton";
import { PlaceholderCard } from "../ui/PlaceholderCard";
import { StatusPill } from "../ui/StatusPill";

export function NotFoundPlaceholder() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16">
      <div className="mx-auto w-full max-w-2xl">
        <PlaceholderCard className="space-y-3 text-center">
          <StatusPill label="404 placeholder" tone="warning" />
          <h1 className="text-2xl font-semibold text-slate-900">Page Not Found</h1>
          <p className="text-sm text-slate-700">
            Custom not-found scaffolding is active. Resource checks and navigation behavior will be wired later.
          </p>
          <div className="flex justify-center">
            <PlaceholderButton label="Return to notes (inactive)" />
          </div>
        </PlaceholderCard>
      </div>
    </main>
  );
}
