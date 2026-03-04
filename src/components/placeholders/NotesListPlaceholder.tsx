import { RouteSection } from "../layout/RouteSection";
import { EmptyStateBlock } from "../ui/EmptyStateBlock";
import { PlaceholderButton } from "../ui/PlaceholderButton";
import { PlaceholderCard } from "../ui/PlaceholderCard";
import { StatusPill } from "../ui/StatusPill";

export function NotesListPlaceholder() {
  return (
    <RouteSection
      title="Your Notes"
      description="Notes list scaffold for /notes. No data reads are connected in this phase."
    >
      <div className="flex items-center justify-between gap-3">
        <StatusPill label="Sorted by updated_at (planned)" />
        <PlaceholderButton label="New note" />
      </div>

      <div className="grid gap-3">
        <PlaceholderCard className="space-y-1">
          <p className="text-sm font-medium text-slate-900">Demo note row (placeholder)</p>
          <p className="text-xs text-slate-600">updated_at: 2026-03-04T00:00:00Z</p>
        </PlaceholderCard>
        <PlaceholderCard className="space-y-1">
          <p className="text-sm font-medium text-slate-900">Another placeholder row</p>
          <p className="text-xs text-slate-600">share_enabled: false</p>
        </PlaceholderCard>
      </div>

      <EmptyStateBlock
        title="Empty state placeholder"
        description="When no notes exist, this block represents the final empty-list UI state."
      />
    </RouteSection>
  );
}
