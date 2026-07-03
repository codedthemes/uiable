// shadcn
import { ProgressIndicator, ProgressTrack } from "@/components/ui/progress";

// third party
import { Progress as ProgressPrimitive } from "@base-ui/react/progress";

//  ------------------------------ | PROGRESS - HEIGHT | ------------------------------  //

export default function ProgressHeight() {
  return (
    <div className="flex flex-col gap-6 w-full">
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
          <ProgressTrack className="h-5 bg-muted/20 dark:bg-muted/10 rounded-lg">
            <ProgressIndicator className="bg-primary rounded-lg" />
          </ProgressTrack>
        </ProgressPrimitive.Root>
      </div>
    </div>
  );
}
