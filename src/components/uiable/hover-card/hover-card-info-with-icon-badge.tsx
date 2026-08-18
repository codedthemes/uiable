// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

// assets
// lucide-react
import { Cloud } from "lucide-react"

//  ------------------------------ | HOVER CARD - INFO WITH ICON BADGE | ------------------------------  //

export default function HoverCardInfoWithIconBadge() {
  return (
    <div className="flex items-center justify-center py-6">
      <HoverCard>
        <HoverCardTrigger
          delay={150}
          closeDelay={150}
          render={
            <Badge variant="secondary" className="ml-0.5 cursor-pointer">
              <Cloud className="size-4 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span>Cloud Storage</span>
            </Badge>
          }
        ></HoverCardTrigger>
        <HoverCardContent side="bottom" align="center" className="w-80 p-4">
          <div className="flex items-start gap-3.5">
            <Avatar className="size-10 rounded-lg border border-primary/20 bg-primary/10 text-primary shadow-xs after:border-none">
              <AvatarFallback className="rounded-lg bg-transparent">
                <Cloud className="size-5 text-primary" />
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <h4 className="text-sm leading-none font-semibold tracking-tight text-foreground">
                  Pro Storage Plan
                </h4>
                <Badge
                  variant="outline"
                  className="border-primary/30 bg-primary/10 px-1.5 py-0 text-[10px] font-medium text-primary"
                >
                  Active
                </Badge>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Your workspace includes 500 GB of secure online storage with
                automatic daily backups and instant file sharing across all your
                devices.
              </p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
