// shadcn
import { Button } from "@/components/ui/button"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

//  ------------------------------ | KBD - TOOLTIP | ------------------------------  //

export default function KbdTooltip() {
  return (
    <div className="flex flex-wrap gap-4">
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          Save
        </TooltipTrigger>
        <TooltipContent className="pr-1.5">
          <div className="flex items-center gap-2">
            Save Changes <Kbd>S</Kbd>
          </div>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          Print
        </TooltipTrigger>
        <TooltipContent className="pr-1.5">
          <div className="flex items-center gap-2">
            Print Document{" "}
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>P</Kbd>
            </KbdGroup>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
