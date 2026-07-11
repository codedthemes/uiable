"use client"

import { useState } from "react"

// shadcn
import { Field, FieldDescription } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

//  ------------------------------ | INPUT - RANGE | ------------------------------  //

export function InputRange() {
  const [range, setRange] = useState<number[]>([20, 80])

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.min(Number(e.target.value) || 0, range[1])
    setRange([val, range[1]])
  }

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.max(Number(e.target.value) || 0, range[0])
    setRange([range[0], val])
  }

  const handleSliderChange = (values: number | readonly number[]) => {
    if (Array.isArray(values)) {
      setRange(values as number[])
    }
  }

  return (
    <Field className="w-full max-w-md">
      <div className="flex flex-col gap-5 rounded-xl border border-border bg-input/10 p-5 shadow-xs">
        {/* Slider Controls */}
        <div className="px-2 py-3">
          <Slider
            value={range}
            min={0}
            max={100}
            onValueChange={handleSliderChange}
          />
        </div>

        {/* Synced Number Input Fields */}
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <label
              htmlFor="range-min"
              className="mb-1.5 block text-xs font-medium text-muted-foreground"
            >
              Min Price ($)
            </label>
            <Input
              id="range-min"
              type="number"
              min={0}
              max={100}
              value={range[0]}
              onChange={handleMinChange}
              className="h-9 px-2.5 py-1 text-sm"
            />
          </div>
          <span className="mt-5 text-muted-foreground select-none">—</span>
          <div className="flex-1">
            <label
              htmlFor="range-max"
              className="mb-1.5 block text-xs font-medium text-muted-foreground"
            >
              Max Price ($)
            </label>
            <Input
              id="range-max"
              type="number"
              min={0}
              max={100}
              value={range[1]}
              onChange={handleMaxChange}
              className="h-9 px-2.5 py-1 text-sm"
            />
          </div>
        </div>
      </div>
      <FieldDescription>
        Enter values or drag the slider thumbs to filter results.
      </FieldDescription>
    </Field>
  )
}
