// shadcn

// third party
import { Progress as ProgressPrimitive } from "@base-ui/react/progress"

import { ProgressIndicator, ProgressTrack } from "@/components/ui/progress"

//  ------------------------------ | PROGRESS - HEIGHT | ------------------------------  //

export default function ProgressHeight() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div>
        <h6 className="mb-2 text-xs font-medium text-muted-foreground">
          Thin Progress (2px)
        </h6>
        <ProgressPrimitive.Root value={25}>
          <ProgressTrack className="h-0.5 bg-muted/20 dark:bg-muted/10">
            <ProgressIndicator className="bg-primary" />
          </ProgressTrack>
        </ProgressPrimitive.Root>
      </div>

      <div>
        <h6 className="mb-2 text-xs font-medium text-muted-foreground">
          Large Progress (20px)
        </h6>
        <ProgressPrimitive.Root value={25}>
          <ProgressTrack className="h-5 rounded-lg bg-muted/20 dark:bg-muted/10">
            <ProgressIndicator className="rounded-lg bg-primary" />
          </ProgressTrack>
        </ProgressPrimitive.Root>
      </div>
    </div>
  )
}
