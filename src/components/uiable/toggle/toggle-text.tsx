// shadcn
import { Toggle } from "@/components/ui/toggle";

// assets
import { ItalicIcon } from "lucide-react";

//  ------------------------------ | TOGGLE - TEXT | ------------------------------  //

export function ToggleText() {
  return (
    <Toggle aria-label="Toggle italic">
      <ItalicIcon />
      Italic
    </Toggle>
  );
}
