"use client";

// shadcn
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

// project
import { cn } from "@/lib/utils";

// assets
import { Paperclip } from "lucide-react";

interface TaskListItemProps {
  title: string;
  dotColor: string;
  badgeCount?: number;
}

//  ------------------------------ | BLOCK - TASK LIST ITEM | ------------------------------  //

export default function TaskListItem({
  title,
  dotColor,
  badgeCount,
}: TaskListItemProps) {
  return (
    <a
      href="#"
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "w-full justify-start p-2 h-auto hover:bg-muted/50 rounded-xl group",
      )}
    >
      <div className="flex items-center w-full">
        <div className={cn("w-2 h-2 rounded-full mr-3", dotColor)}></div>
        <span className="flex-grow text-left truncate font-medium">
          {title}
        </span>
        {badgeCount !== undefined && (
          <Badge
            variant="outline"
            className="ml-2 gap-1 bg-muted/50 text-muted-foreground border-none"
          >
            <Paperclip className="h-3 w-3" /> {badgeCount}
          </Badge>
        )}
      </div>
    </a>
  );
}
