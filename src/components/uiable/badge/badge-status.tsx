// shadcn
import { Badge } from "@/components/ui/badge"

//  ------------------------------ | BADGE - WITH STATUS | ------------------------------  //

export function BadgeWithStatus() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="outline" className="gap-1.5 px-2 py-1">
        <span
          className="size-1.5 rounded-full bg-emerald-500"
          aria-hidden="true"
        />
        Online
      </Badge>
      <Badge variant="outline" className="gap-1.5 px-2 py-1">
        <span
          className="size-1.5 rounded-full bg-amber-500"
          aria-hidden="true"
        />
        Away
      </Badge>
      <Badge variant="outline" className="gap-1.5 px-2 py-1">
        <span className="size-1.5 rounded-full bg-red-500" aria-hidden="true" />
        Busy
      </Badge>
      <Badge variant="outline" className="gap-1.5 px-2 py-1">
        <span
          className="size-1.5 rounded-full bg-muted-foreground"
          aria-hidden="true"
        />
        Offline
      </Badge>
      <Badge variant="secondary" className="gap-1.5 px-2 py-1">
        <span className="relative flex size-2 items-center justify-center">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
        </span>
        Live Status
      </Badge>
    </div>
  )
}
