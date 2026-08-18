// shadcn
import {
  ProgressIndicator,
  ProgressTrack,
  ProgressValue,
} from "@/components/ui/progress"

// third-party
import { Progress as ProgressPrimitive } from "@base-ui/react/progress"

//  ------------------------------ | PROGRESS - WITH VALUE | ------------------------------  //

export default function ProgressWithValue() {
  return (
    <div className="w-full">
      <ProgressPrimitive.Root value={45} className="flex items-center gap-4">
        <ProgressTrack className="h-2.5 flex-1 rounded-lg bg-secondary dark:bg-muted/40">
          <ProgressIndicator className="rounded-lg bg-primary" />
        </ProgressTrack>
        <ProgressValue className="w-9 text-right text-sm font-semibold text-foreground" />
      </ProgressPrimitive.Root>
    </div>
  )
}
