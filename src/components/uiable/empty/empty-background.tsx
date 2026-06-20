// shadcn
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from "@/components/ui/empty";

// assets
import { NotificationBing, Refresh } from "iconsax-reactjs";

//  ------------------------------ | EMPTY - MUTED | ------------------------------  //

export function EmptyMuted() {
  return (
    <Empty className="bg-background h-full rounded-lg">
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
  );
}
