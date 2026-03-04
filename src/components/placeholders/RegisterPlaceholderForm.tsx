import { RouteSection } from "../layout/RouteSection";
import { PlaceholderButton } from "../ui/PlaceholderButton";
import { PlaceholderCard } from "../ui/PlaceholderCard";
import { PlaceholderField } from "../ui/PlaceholderField";
import { StatusPill } from "../ui/StatusPill";

export function RegisterPlaceholderForm() {
  return (
    <RouteSection title="Register" description="Account creation form placeholder. No submission logic exists yet.">
      <PlaceholderCard className="space-y-4">
        <StatusPill label="UI scaffold" />
        <PlaceholderField label="Name" value="Ada Lovelace" />
        <PlaceholderField label="Email" value="you@example.com" />
        <PlaceholderField label="Password" value="••••••••" />
        <div>
          <PlaceholderButton label="Create account (disabled placeholder)" />
        </div>
      </PlaceholderCard>
    </RouteSection>
  );
}
