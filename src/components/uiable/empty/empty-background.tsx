// shadcn

// assets
import { NotificationBing, Refresh } from "iconsax-reactjs"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

//  ------------------------------ | EMPTY - MUTED | ------------------------------  //

export function EmptyMuted() {
  return (
    <Empty className="h-full rounded-lg bg-background">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <NotificationBing />
        </EmptyMedia>
        <EmptyTitle>No Notifications</EmptyTitle>
        <EmptyDescription className="max-w-xs text-pretty">
          You're all caught up. New notifications will appear here.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button className="gap-1">
          <Refresh />
          Refresh
        </Button>
      </EmptyContent>
    </Empty>
  )
}
