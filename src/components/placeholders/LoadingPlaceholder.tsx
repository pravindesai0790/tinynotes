import { PlaceholderCard } from "../ui/PlaceholderCard";
import { StatusPill } from "../ui/StatusPill";

type LoadingPlaceholderProps = {
  title: string;
};

export function LoadingPlaceholder({ title }: LoadingPlaceholderProps) {
  return (
    <PlaceholderCard className="space-y-3">
      <StatusPill label="Loading placeholder" />
      <h2 className="text-base font-medium text-slate-900">{title}</h2>
      <p className="text-sm text-slate-600">Data fetch/loading UI will be implemented in a later phase.</p>
    </PlaceholderCard>
  );
}
