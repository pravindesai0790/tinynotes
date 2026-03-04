import { RouteSection } from "../layout/RouteSection";
import { PlaceholderCard } from "../ui/PlaceholderCard";
import { StatusPill } from "../ui/StatusPill";

type SharedNotePlaceholderProps = {
  tokenLabel?: string;
};

export function SharedNotePlaceholder({ tokenLabel = "[token]" }: SharedNotePlaceholderProps) {
  return (
    <RouteSection
      title="Shared Note View"
      description="Public note page scaffold for /s/[token]. Token resolution and sanitization are not implemented here."
    >
      <PlaceholderCard className="space-y-3">
        <StatusPill label="Public placeholder" tone="warning" />
        <p className="text-sm text-slate-700">
          Route token parameter: <code>{tokenLabel}</code>
        </p>
        <div className="rounded-md bg-slate-50 p-4 text-sm text-slate-600">
          Sanitized HTML output will be rendered here in the implementation phase.
        </div>
      </PlaceholderCard>
    </RouteSection>
  );
}
