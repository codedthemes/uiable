// shadcn
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// assets
import { Clock, Lightbulb, Zap } from "lucide-react"

//  ------------------------------ | TOOLTIP - CUSTOM DELAY | ------------------------------  //

export function TooltipCustomDelay() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Instant Tooltip */}
      <TooltipProvider delay={0}>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="outline"
                className="gap-2 border-primary/30 hover:border-primary dark:border-primary/30"
              />
            }
          >
            <Zap className="size-3.5 text-yellow-500" />
            <span>Instant Hover (0ms)</span>
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-64 p-2.5 shadow-md">
            <div className="flex items-start gap-2">
              <Zap className="mt-0.5 size-3.5 shrink-0 text-yellow-500" />
              <p className="text-xs leading-normal text-background">
                Appears immediately on hover without any delay. Ideal for
                high-speed power users.
              </p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Delayed Tooltip */}
      <TooltipProvider delay={700}>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="outline" className="gap-2 dark:border-border" />
            }
          >
            <Clock className="size-3.5 text-primary" />
            <span>Intentional Delay (700ms)</span>
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-64 p-2.5 shadow-md">
            <div className="flex items-start gap-2">
              <Clock className="mt-0.5 size-3.5 shrink-0 text-primary" />
              <p className="text-xs leading-normal text-background">
                Requires holding hover for 700ms before appearing. Prevents UI
                distraction when moving across elements.
              </p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Spotlight Tour Tooltip */}
      <TooltipProvider delay={100}>
        <Tooltip defaultOpen>
          <TooltipTrigger
            render={
              <Button
                variant="default"
                className="relative gap-2 bg-primary text-white shadow-sm"
              />
            }
          >
            <span className="absolute -top-1 -right-1 flex size-3">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-yellow-500 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-yellow-500"></span>
            </span>
            <Lightbulb className="size-3.5" />
            <span>Feature Tour Spotlight</span>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            className="max-w-72 border border-background/20 p-3.5 shadow-lg"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Badge className="border-background/20 bg-background/15 px-1.5 py-0 text-[10px] text-background hover:bg-background/25">
                  Step 2 of 4
                </Badge>
                <span className="text-[10px] font-medium text-background/80">
                  Quick Guide
                </span>
              </div>
              <h6 className="text-xs font-semibold text-background">
                Customizing Workspace Layouts
              </h6>
              <p className="text-xs leading-relaxed text-background/80">
                Drag and drop widget panels to rearrange your dashboard. Click
                the gear icon to configure alert triggers.
              </p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
