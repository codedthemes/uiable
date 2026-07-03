// shadcn
import { ProgressIndicator, ProgressTrack } from "@/components/ui/progress";

// third party
import { Progress as ProgressPrimitive } from "@base-ui/react/progress";

//  ------------------------------ | PROGRESS - ANIMATED PRIMARY | ------------------------------  //

export default function ProgressAnimatedPrimary() {
  return (
    <div className="w-full">
      <ProgressPrimitive.Root value={70}>
        <ProgressTrack className="h-4 bg-muted/20 dark:bg-muted/10 rounded-lg">
          <ProgressIndicator className="bg-primary rounded-lg animate-progress-bar-stripes bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] bg-[length:16px_16px]" />
        </ProgressTrack>
      </ProgressPrimitive.Root>
    </div>
  );
}
