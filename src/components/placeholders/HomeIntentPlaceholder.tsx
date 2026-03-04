import { RouteSection } from "../layout/RouteSection";
import { PlaceholderCard } from "../ui/PlaceholderCard";
import { StatusPill } from "../ui/StatusPill";

export function HomeIntentPlaceholder() {
  return (
    <RouteSection
      title="Home Route Placeholder"
      description="This page intentionally contains no redirect logic yet."
    >
      <PlaceholderCard className="space-y-3">
        <StatusPill label="Scaffold only" tone="warning" />
        <p className="text-sm text-slate-700">
          Intended behavior later: if authenticated, redirect to <code>/notes</code>; otherwise redirect to{" "}
          <code>/login</code>.
        </p>
      </PlaceholderCard>
    </RouteSection>
  );
}
