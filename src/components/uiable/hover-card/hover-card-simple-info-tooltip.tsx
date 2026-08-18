// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

// assets
// lucide-react
import { Info, Sparkles } from "lucide-react"

//  ------------------------------ | HOVER CARD - SIMPLE INFO TOOLTIP | ------------------------------  //

export default function HoverCardSimpleInfoTooltip() {
  return (
    <div className="flex items-center justify-center py-6">
      <div className="flex items-center gap-2 text-sm font-medium text-foreground">
        <span>Dynamic Burst Caching</span>
        <HoverCard>
          <HoverCardTrigger
            delay={100}
            closeDelay={100}
            render={
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="More information about Dynamic Burst Caching"
                className="group size-5 rounded-full bg-muted p-0 text-muted-foreground transition-colors hover:bg-primary/15 hover:text-primary focus-visible:outline-none"
              />
            }
          >
            <Info className="size-3.5 transition-transform duration-200 group-hover:scale-110" />
          </HoverCardTrigger>
          <HoverCardContent side="top" className="w-72 p-4 shadow-lg">
            <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
              <Avatar className="size-5 rounded bg-primary/10 text-primary after:border-none">
                <AvatarFallback className="rounded bg-transparent">
                  <Sparkles className="size-3 text-primary" />
                </AvatarFallback>
              </Avatar>
              <span>How burst caching works</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Frequently requested endpoints are temporarily cached at the edge
              locations for up to 60 seconds, reducing database load by over 80%
              during traffic spikes.
            </p>
            <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-2.5 text-[11px] text-muted-foreground">
              <span>Edge location: All regions</span>
              <a href="#" className="font-medium text-primary hover:underline">
                Docs &rarr;
              </a>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  )
}
