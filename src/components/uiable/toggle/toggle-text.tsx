// shadcn

// assets
import { ItalicIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

//  ------------------------------ | TOGGLE - TEXT | ------------------------------  //

export function ToggleText() {
  return (
    <Toggle aria-label="Toggle italic">
      <ItalicIcon />
      Italic
    </Toggle>
  )
}
