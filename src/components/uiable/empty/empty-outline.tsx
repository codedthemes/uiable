// shadcn

// assets
import { Cloud } from "iconsax-reactjs"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

//  ------------------------------ | EMPTY - OUTLINE | ------------------------------  //

export default function EmptyOutline() {
  return (
    <Empty className="rounded-lg border border-dashed border-border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Cloud />
        </EmptyMedia>
        <EmptyTitle>Cloud Storage Empty</EmptyTitle>
        <EmptyDescription>
          Upload files to your cloud storage to access them anywhere.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Upload Files</Button>
      </EmptyContent>
    </Empty>
  )
}
