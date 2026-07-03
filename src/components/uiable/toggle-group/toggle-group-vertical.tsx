// shadcn
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

// assets
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

//  ------------------------------ | TOGGLE GROUP - VERTICAL | ------------------------------  //

export function ToggleGroupVertical() {
  return (
    <ToggleGroup
      multiple
      orientation="vertical"
      spacing={1}
      defaultValue={["bold", "italic"]}
    >
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
