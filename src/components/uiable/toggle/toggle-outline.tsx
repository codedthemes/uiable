// shadcn
import { Toggle } from "@/components/ui/toggle";

// assets
import { BoldIcon, ItalicIcon } from "lucide-react";

//  ------------------------------ | TOGGLE - OUTLINE | ------------------------------  //

export function ToggleOutline() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle variant="outline" aria-label="Toggle italic">
        <ItalicIcon />
        Italic
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle bold">
        <BoldIcon />
        Bold
      </Toggle>
    </div>
  );
}
