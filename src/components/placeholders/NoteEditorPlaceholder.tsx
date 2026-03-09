import { RouteSection } from "../layout/RouteSection";
import { PlaceholderButton } from "../ui/PlaceholderButton";
import { PlaceholderCard } from "../ui/PlaceholderCard";
import { PlaceholderField } from "../ui/PlaceholderField";
import { StatusPill } from "../ui/StatusPill";
import { ShareControlsPlaceholder } from "./ShareControlsPlaceholder";

type NoteEditorPlaceholderProps = {
  mode: "new" | "edit";
};

export function NoteEditorPlaceholder({ mode }: NoteEditorPlaceholderProps) {
  const isEditMode = mode === "edit";
  const title = isEditMode ? "Edit Note" : "Create Note";
  const description = isEditMode
    ? "Note editor placeholder for /notes/[id]. No fetching, save, or share actions are connected."
    : "Note creation placeholder for /notes/new. No create action is connected.";

  return (
    <RouteSection title={title} description={description}>
      <PlaceholderCard className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <StatusPill
            label={isEditMode ? "Edit mode placeholder" : "Create mode placeholder"}
            tone="warning"
          />
          <StatusPill label="Autosave inactive" />
        </div>
        <PlaceholderField label="Title" value="Untitled note" />
        <PlaceholderField
          label="Rich text editor"
          value="TipTap editor will be mounted here later."
        />
        <div className="flex flex-wrap gap-2">
          <PlaceholderButton label="Save draft (inactive)" />
          <PlaceholderButton label="Delete note (inactive)" tone="danger" />
        </div>
      </PlaceholderCard>

      {isEditMode ? <ShareControlsPlaceholder /> : null}
    </RouteSection>
  );
}
