import { ProgressIndicator, ProgressTrack } from "@/components/ui/progress"

// third-party
import { Progress as ProgressPrimitive } from "@base-ui/react/progress"

// assets
import { Check } from "lucide-react"

//  ------------------------------ | PROGRESS - WITH STEPS | ------------------------------  //

export default function ProgressWithSteps() {
  const steps = 4
  const currentStep = 2 // 0-indexed, so this is step 3
  const progressValue = (currentStep / (steps - 1)) * 100

  return (
    <div className="w-full py-4">
      <ProgressPrimitive.Root value={progressValue}>
        <div className="relative flex h-8 items-center">
          <ProgressTrack className="absolute z-0 h-1.5 w-full rounded-lg bg-secondary dark:bg-muted/40">
            <ProgressIndicator className="rounded-lg bg-primary" />
          </ProgressTrack>
          <div className="absolute z-10 flex w-full justify-between">
            {Array.from({ length: steps }).map((_, step) => {
              const isCompleted = step <= currentStep
              return (
                <div
                  key={step}
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white transition-colors dark:bg-card ${
                    isCompleted
                      ? "border-primary text-primary"
                      : "border-muted text-muted-foreground"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <span className="text-xs">{step + 1}</span>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </ProgressPrimitive.Root>
    </div>
  )
}
