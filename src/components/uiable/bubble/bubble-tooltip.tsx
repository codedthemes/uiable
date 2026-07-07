// shadcn
import { Bubble, BubbleContent, BubbleReactions } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// assets
import { CheckIcon } from "lucide-react"

//  ------------------------------ | BUBBLE - TOOLTIP | ------------------------------  //

export function BubbleTooltip() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Bubble variant="secondary">
        <BubbleContent>Did you remove the stale route?</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent className="dark:text-white">
          Yes, removed it from the registry.
        </BubbleContent>
        <BubbleReactions>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button variant="ghost" size="icon-xs">
                  <CheckIcon />
                </Button>
              }
            />
            <TooltipContent>Read on Jan 5, 2026 at 4:32 PM</TooltipContent>
          </Tooltip>
        </BubbleReactions>
      </Bubble>
    </div>
  )
}
