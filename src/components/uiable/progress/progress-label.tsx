// shadcn

// third party
import { Progress as ProgressPrimitive } from "@base-ui/react/progress"

import { ProgressIndicator, ProgressTrack } from "@/components/ui/progress"

//  ------------------------------ | PROGRESS - LABEL | ------------------------------  //

export default function ProgressLabel() {
  const value = 25
  return (
    <div className="w-full">
      <ProgressPrimitive.Root value={value}>
        <ProgressTrack className="h-5 rounded-lg bg-muted/20 dark:bg-muted/10">
          <ProgressIndicator className="flex items-center justify-center rounded-lg bg-primary text-[10px] font-bold text-white uppercase">
            {value}%
          </ProgressIndicator>
        </ProgressTrack>
      </ProgressPrimitive.Root>
    </div>
  )
}
