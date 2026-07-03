// shadcn
import { ProgressIndicator, ProgressTrack } from "@/components/ui/progress";

// third party
import { Progress as ProgressPrimitive } from "@base-ui/react/progress";

//  ------------------------------ | PROGRESS - SOLID PRIMARY | ------------------------------  //

export default function ProgressSolidPrimary() {
  return (
    <div className="w-full">
      <ProgressPrimitive.Root value={75}>
        <ProgressTrack className="h-4 bg-muted/20 dark:bg-muted/10 rounded-lg">
          <ProgressIndicator className="bg-primary rounded-lg" />
        </ProgressTrack>
      </ProgressPrimitive.Root>
    </div>
  );
}
