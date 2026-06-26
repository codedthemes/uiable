// shadcn

// third party
import { Progress as ProgressPrimitive } from "@base-ui/react/progress"

import { ProgressTrack } from "@/components/ui/progress"

//  ------------------------------ | PROGRESS - MULTIPLE | ------------------------------  //

export default function ProgressMultiple() {
  return (
    <div className="w-full">
      <ProgressPrimitive.Root value={null}>
        <ProgressTrack className="flex h-4 overflow-hidden rounded-lg bg-muted/20 dark:bg-muted/10">
          <div
            className="h-full shrink-0 bg-primary first:rounded-l-lg last:rounded-r-lg"
            style={{ width: "15%" }}
            role="progressbar"
            aria-valuenow={15}
            aria-valuemin={0}
            aria-valuemax={100}
          />
          <div
            className="h-full shrink-0 bg-green-600 first:rounded-l-lg last:rounded-r-lg"
            style={{ width: "30%" }}
            role="progressbar"
            aria-valuenow={30}
            aria-valuemin={0}
            aria-valuemax={100}
          />
          <div
            className="h-full shrink-0 bg-cyan-500 first:rounded-l-lg last:rounded-r-lg"
            style={{ width: "20%" }}
            role="progressbar"
            aria-valuenow={20}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </ProgressTrack>
      </ProgressPrimitive.Root>
    </div>
  )
}
