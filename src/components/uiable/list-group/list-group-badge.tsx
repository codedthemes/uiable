// assets
import {
  ArchiveIcon,
  InboxIcon,
  SendIcon,
  StarIcon,
  TrashIcon,
} from "lucide-react"

// shadcn
import { Badge } from "@/components/ui/badge"

//  ------------------------------ | LIST GROUP - BADGE | ------------------------------  //

export default function ListGroupBadge() {
  return (
    <ul className="divide-border-border divide-y overflow-hidden rounded-lg border border-border">
      <li>
        <a
          href="#!"
          className="flex items-center justify-between gap-4 px-6.25 py-4 transition-colors hover:bg-muted/50"
        >
          <div className="flex items-center gap-3">
            <InboxIcon className="size-5 text-primary" />
            <h6 className="text-base font-medium">Inbox</h6>
          </div>
          <Badge
            variant="default"
            className="rounded-lg px-2.5 py-0.5 text-xs font-medium"
          >
            14
          </Badge>
        </a>
      </li>
      <li>
        <a
          href="#!"
          className="flex items-center justify-between gap-4 px-6.25 py-4 transition-colors hover:bg-muted/50"
        >
          <div className="flex items-center gap-3">
            <StarIcon className="size-5 fill-amber-500/20 text-amber-500" />
            <h6 className="text-base font-medium">Starred</h6>
          </div>
          <Badge
            variant="secondary"
            className="rounded-lg px-2.5 py-0.5 text-xs font-medium"
          >
            3
          </Badge>
        </a>
      </li>
      <li>
        <a
          href="#!"
          className="flex items-center justify-between gap-4 px-6.25 py-4 transition-colors hover:bg-muted/50"
        >
          <div className="flex items-center gap-3">
            <SendIcon className="size-5 text-muted-foreground" />
            <h6 className="text-base font-medium">Sent Messages</h6>
          </div>
        </a>
      </li>
      <li>
        <a
          href="#!"
          className="flex items-center justify-between gap-4 px-6.25 py-4 transition-colors hover:bg-muted/50"
        >
          <div className="flex items-center gap-3">
            <ArchiveIcon className="size-5 text-muted-foreground" />
            <h6 className="text-base font-medium">Archive</h6>
          </div>
          <Badge
            variant="outline"
            className="rounded-lg px-2.5 py-0.5 text-xs font-medium"
          >
            99+
          </Badge>
        </a>
      </li>
      <li>
        <a
          href="#!"
          className="flex items-center justify-between gap-4 px-6.25 py-4 transition-colors hover:bg-muted/50"
        >
          <div className="flex items-center gap-3">
            <TrashIcon className="size-5 text-destructive" />
            <h6 className="text-base font-medium">Trash</h6>
          </div>
        </a>
      </li>
    </ul>
  )
}
