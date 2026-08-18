// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

// third-party
import { FolderOpen } from "iconsax-reactjs"

//  ------------------------------ | EMPTY - WITH LARGE ICON | ------------------------------  //

export default function EmptyWithLargeIcon() {
  return (
    <Empty className="p-sm-8 rounded-lg p-4">
      <EmptyHeader>
        <EmptyMedia variant="default">
          <Avatar className="size-16 rounded-lg ring-8 ring-muted/40 after:border-none dark:ring-muted/20">
            <AvatarFallback className="rounded-lg bg-muted text-foreground">
              <FolderOpen className="size-8" />
            </AvatarFallback>
          </Avatar>
        </EmptyMedia>
        <EmptyTitle className="mt-2 text-xl">No files found</EmptyTitle>
        <EmptyDescription className="max-w-md">
          There are currently no files in this directory. Upload your documents
          or assets to start collaborating.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Upload File</Button>
      </EmptyContent>
    </Empty>
  )
}
