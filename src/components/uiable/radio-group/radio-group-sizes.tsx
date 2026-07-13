"use client"

import { useState } from "react"

// shadcn
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

//  ------------------------------ | RADIO GROUP - SIZES | ------------------------------  //

// constants
const sizes = [
  { value: "xs", label: "XS", description: "Extra Small" },
  { value: "sm", label: "SM", description: "Small" },
  { value: "md", label: "MD", description: "Medium" },
  { value: "lg", label: "LG", description: "Large" },
  { value: "xl", label: "XL", description: "Extra Large" },
]

export function RadioGroupSizes() {
  const [value, setValue] = useState("md")

  return (
    <RadioGroup
      value={value}
      onValueChange={setValue}
      className="flex flex-wrap justify-center gap-2"
    >
      {sizes.map((size) => {
        const isSelected = value === size.value
        return (
          <label
            key={size.value}
            htmlFor={`size-${size.value}`}
            className={`flex h-10 min-w-[3rem] cursor-pointer items-center justify-center rounded-lg border px-3 text-sm font-semibold transition-all duration-150 ${
              isSelected
                ? "border-primary bg-primary text-primary-foreground shadow-sm dark:text-white"
                : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
            }`}
          >
            <RadioGroupItem
              value={size.value}
              id={`size-${size.value}`}
              className="hidden"
            />
            {size.label}
          </label>
        )
      })}
    </RadioGroup>
  )
}
