// lucide-react
import { Download, ExternalLink, Eye, Image as ImageIcon } from "lucide-react"

// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

//  ------------------------------ | HOVER CARD - IMAGE PREVIEW | ------------------------------  //

export default function HoverCardImagePreview() {
  return (
    <div className="flex items-center justify-center py-6">
      <HoverCard>
        <HoverCardTrigger
          delay={150}
          closeDelay={150}
          render={
            <Button
              variant="outline"
              className="group flex items-center gap-2 rounded-lg border-dashed border-border bg-card p-2 text-sm font-medium transition-all hover:border-primary/50 hover:bg-accent/50 dark:border-border"
            />
          }
        >
          <Avatar className="size-6 rounded-lg bg-primary/10 text-primary after:border-none">
            <AvatarFallback className="rounded-lg bg-transparent">
              <ImageIcon className="size-3.5 text-primary" />
            </AvatarFallback>
          </Avatar>
          <span className="underline-offset-4 group-hover:underline">
            dashboard-mockup-2026.png
          </span>
          <Badge variant="secondary" className="ml-1 text-[10px]">
            PNG
          </Badge>
        </HoverCardTrigger>
        <HoverCardContent className="w-80 overflow-hidden p-0 shadow-xl">
          <div className="group/preview relative aspect-video w-full overflow-hidden bg-muted">
            <img
              src="https://cdn.uiable.com/component/card-sample.png"
              alt="Preview asset"
              className="size-full object-cover transition-transform duration-500 group-hover/preview:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90" />
            <div className="absolute right-3 bottom-2.5 left-3 flex items-center justify-between text-white">
              <div className="flex items-center gap-1.5 text-xs font-medium">
                <Eye className="size-3.5 text-white/80" />
                <span>Quick View</span>
              </div>
              <Badge
                variant="secondary"
                className="rounded bg-black/40 px-1.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md hover:bg-black/40"
              >
                2400 × 1600
              </Badge>
            </div>
          </div>

          <div className="p-4">
            <h4 className="text-sm font-semibold text-foreground">
              Dashboard Mockup Asset
            </h4>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Uploaded by UI Design Team • 4.2 MB
            </p>

            <div className="mt-3.5 flex items-center gap-2">
              <Button size="sm" className="h-8 flex-1 gap-1.5 text-xs">
                <Download className="size-3.5" />
                Download
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="h-8 flex-1 gap-1.5 text-xs dark:border-border"
              >
                <ExternalLink className="size-3.5" />
                Full Size
              </Button>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
