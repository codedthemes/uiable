// shadcn
import { ProgressIndicator, ProgressTrack } from "@/components/ui/progress"

// third-party
import { Progress as ProgressPrimitive } from "@base-ui/react/progress"

//  ------------------------------ | PROGRESS - GRADIENT | ------------------------------  //

export default function ProgressGradient() {
  return (
    <div className="w-full">
      <ProgressPrimitive.Root value={85}>
        <ProgressTrack className="h-4 rounded-lg bg-muted/20 dark:bg-muted/40">
          <ProgressIndicator className="rounded-lg bg-gradient-to-r from-primary via-cyan-500 to-green-500" />
        </ProgressTrack>
      </ProgressPrimitive.Root>
    </div>
  )
}
