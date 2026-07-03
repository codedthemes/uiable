// shadcn
import { ProgressIndicator, ProgressTrack } from "@/components/ui/progress";

// third party
import { Progress as ProgressPrimitive } from "@base-ui/react/progress";

//  ------------------------------ | PROGRESS - LABEL | ------------------------------  //

export default function ProgressLabel() {
  const value = 25;
  return (
    <div className="w-full">
      <ProgressPrimitive.Root value={value}>
        <ProgressTrack className="h-5 bg-muted/20 dark:bg-muted/10 rounded-lg">
          <ProgressIndicator className="bg-primary rounded-lg flex items-center justify-center text-[10px] font-bold text-white uppercase">
            {value}%
          </ProgressIndicator>
        </ProgressTrack>
      </ProgressPrimitive.Root>
    </div>
  );
}
