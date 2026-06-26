// shadcn

// third party
import { Progress as ProgressPrimitive } from "@base-ui/react/progress"

import { ProgressIndicator, ProgressTrack } from "@/components/ui/progress"

//  ------------------------------ | PROGRESS - SOLID PRIMARY | ------------------------------  //

export default function ProgressSolidPrimary() {
  return (
    <div className="w-full">
      <ProgressPrimitive.Root value={75}>
        <ProgressTrack className="h-4 rounded-lg bg-muted/20 dark:bg-muted/10">
          <ProgressIndicator className="rounded-lg bg-primary" />
        </ProgressTrack>
      </ProgressPrimitive.Root>
    </div>
  )
}
