"use client"

import { useState } from "react"

// shadcn
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

//  ------------------------------ | SLIDER - COLOR OPTIONS | ------------------------------  //

export function SliderColorOptions() {
  const [values, setValues] = useState({
    green: 80,
    amber: 40,
    error: 75,
  })

  const getValue = (val: number | readonly number[]) =>
    Array.isArray(val) ? val[0] : val

  return (
    <div className="mx-auto flex w-full max-w-xs flex-col gap-6">
      {/* Green */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Green</Label>
          <span className="text-xs font-medium text-muted-foreground">
            {values.green}%
          </span>
        </div>
        <Slider
          value={[values.green]}
          onValueChange={(val) =>
            setValues((prev) => ({
              ...prev,
              green: getValue(val),
            }))
          }
          max={100}
          step={1}
          className="[&_[data-slot=slider-range]]:bg-green-500 [&_[data-slot=slider-thumb]]:border-green-500 [&_[data-slot=slider-thumb]]:ring-green-500/30"
        />
      </div>

      {/* Amber */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Amber</Label>
          <span className="text-xs font-medium text-muted-foreground">
            {values.amber}%
          </span>
        </div>
        <Slider
          value={[values.amber]}
          onValueChange={(val) =>
            setValues((prev) => ({
              ...prev,
              amber: getValue(val),
            }))
          }
          max={100}
          step={1}
          className="[&_[data-slot=slider-range]]:bg-amber-500 [&_[data-slot=slider-thumb]]:border-amber-500 [&_[data-slot=slider-thumb]]:ring-amber-500/30"
        />
      </div>

      {/* Error */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Error</Label>
          <span className="text-xs font-medium text-muted-foreground">
            {values.error}%
          </span>
        </div>
        <Slider
          value={[values.error]}
          onValueChange={(val) =>
            setValues((prev) => ({
              ...prev,
              error: getValue(val),
            }))
          }
          max={100}
          step={1}
          className="[&_[data-slot=slider-range]]:bg-red-500 [&_[data-slot=slider-thumb]]:border-red-500 [&_[data-slot=slider-thumb]]:ring-red-500/30"
        />
      </div>
    </div>
  )
}
