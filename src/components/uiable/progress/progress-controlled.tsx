"use client";

import { useState } from "react";

// shadcn
import { ProgressIndicator, ProgressTrack } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";

// third party
import { Progress as ProgressPrimitive } from "@base-ui/react/progress";

//  ------------------------------ | PROGRESS - CONTROLLED | ------------------------------  //

export function ProgressControlled() {
  const [value, setValue] = useState(50);

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <ProgressPrimitive.Root value={value}>
        <ProgressTrack className="h-4 bg-muted/20 dark:bg-muted/10 rounded-lg">
          <ProgressIndicator className="bg-primary rounded-lg animate-[1s_linear_infinite_progress-bar-stripes] bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] bg-[length:16px_16px]" />
        </ProgressTrack>
      </ProgressPrimitive.Root>
      <Slider
        value={value}
        onValueChange={(value) => setValue(value as number)}
        min={0}
        max={100}
        step={1}
      />
    </div>
  );
}
