import { PlaceholderButton } from "../ui/PlaceholderButton";
import { PlaceholderCard } from "../ui/PlaceholderCard";
import { StatusPill } from "../ui/StatusPill";

type ErrorPlaceholderProps = {
  title: string;
  description: string;
};

export function ErrorPlaceholder({ title, description }: ErrorPlaceholderProps) {
  return (
    <PlaceholderCard className="space-y-3">
      <StatusPill label="Error boundary placeholder" tone="warning" />
      <h1 className="text-xl font-semibold text-slate-900">{title}</h1>
      <p className="text-sm text-slate-700">{description}</p>
      <PlaceholderButton label="Try again (inactive)" tone="secondary" />
    </PlaceholderCard>
  );
}
