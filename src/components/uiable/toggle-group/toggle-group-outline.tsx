// shadcn
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

//  ------------------------------ | TOGGLE GROUP - OUTLINE | ------------------------------  //

export function ToggleGroupOutline() {
  return (
    <ToggleGroup variant="outline" defaultValue={["all"]}>
      <ToggleGroupItem value="all" aria-label="Toggle all">
        All
      </ToggleGroupItem>
      <ToggleGroupItem value="missed" aria-label="Toggle missed">
        Missed
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
