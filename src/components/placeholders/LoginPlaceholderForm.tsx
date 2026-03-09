import { RouteSection } from "../layout/RouteSection";
import { PlaceholderButton } from "../ui/PlaceholderButton";
import { PlaceholderCard } from "../ui/PlaceholderCard";
import { PlaceholderField } from "../ui/PlaceholderField";
import { StatusPill } from "../ui/StatusPill";

export function LoginPlaceholderForm() {
  return (
    <RouteSection
      title="Login"
      description="Credentials form placeholder. No authentication logic is wired."
    >
      <PlaceholderCard className="space-y-4">
        <StatusPill label="UI scaffold" />
        <PlaceholderField label="Email" value="you@example.com" />
        <PlaceholderField label="Password" value="••••••••" />
        <div>
          <PlaceholderButton label="Sign in (disabled placeholder)" />
        </div>
      </PlaceholderCard>
    </RouteSection>
  );
}
