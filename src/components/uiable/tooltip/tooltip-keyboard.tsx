// shadcn

// assets
import { SaveIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

//  ------------------------------ | TOOLTIP - KEYBOARD | ------------------------------  //

export function TooltipKeyboard() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button size="icon-lg" />}>
        <SaveIcon />
      </TooltipTrigger>
      <TooltipContent className="pr-2.5">
        <div className="flex items-center gap-2">
          Save Changes <Kbd>S</Kbd>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}
