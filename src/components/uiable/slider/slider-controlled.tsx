"use client";

import { useState } from "react";

// shadcn
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

//  ------------------------------ | SLIDER - CONTROLLED | ------------------------------  //

export function SliderControlled() {
  const [value, setValue] = useState([0.3, 0.7]);

  return (
    <div className="mx-auto grid w-full max-w-xs gap-3">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor="slider-demo-temperature">Temperature</Label>
        <span className="text-muted-foreground text-sm">
          {value.join(", ")}
        </span>
      </div>
      <Slider
        id="slider-demo-temperature"
        value={value}
        onValueChange={(value) => setValue(value as number[])}
        min={0}
        max={1}
        step={0.1}
      />
    </div>
  );
}
