import { PlaceholderButton } from "../ui/PlaceholderButton";
import { PlaceholderCard } from "../ui/PlaceholderCard";
import { PlaceholderField } from "../ui/PlaceholderField";
import { StatusPill } from "../ui/StatusPill";

export function ShareControlsPlaceholder() {
  return (
    <PlaceholderCard className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base font-medium text-slate-900">Share Controls (Placeholder)</h3>
        <StatusPill label="Disabled" />
      </div>
      <PlaceholderField label="Public share URL" value="https://app.example/s/<generated-token>" />
      <div className="flex flex-wrap gap-2">
        <PlaceholderButton label="Enable share" />
        <PlaceholderButton label="Disable share" tone="secondary" />
      </div>
    </PlaceholderCard>
  );
}
