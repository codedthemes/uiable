// shadcn
import { ProgressTrack } from "@/components/ui/progress";

// third party
import { Progress as ProgressPrimitive } from "@base-ui/react/progress";

//  ------------------------------ | PROGRESS - MULTIPLE | ------------------------------  //

export default function ProgressMultiple() {
  return (
    <div className="w-full">
      <ProgressPrimitive.Root value={null}>
        <ProgressTrack className="h-4 bg-muted/20 dark:bg-muted/10 rounded-lg flex overflow-hidden">
          <div
            className="bg-primary h-full first:rounded-l-lg last:rounded-r-lg shrink-0"
            style={{ width: "15%" }}
            role="progressbar"
            aria-valuenow={15}
            aria-valuemin={0}
            aria-valuemax={100}
          />
          <div
            className="bg-green-600 h-full first:rounded-l-lg last:rounded-r-lg shrink-0"
            style={{ width: "30%" }}
            role="progressbar"
            aria-valuenow={30}
            aria-valuemin={0}
            aria-valuemax={100}
          />
          <div
            className="bg-cyan-500 h-full first:rounded-l-lg last:rounded-r-lg shrink-0"
            style={{ width: "20%" }}
            role="progressbar"
            aria-valuenow={20}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </ProgressTrack>
      </ProgressPrimitive.Root>
    </div>
  );
}
