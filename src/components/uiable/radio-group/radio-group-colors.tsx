"use client"

import { useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"

// assets
import { Check } from "lucide-react"

// constants
const colors = [
  {
    value: "slate",
    label: "Slate",
    bg: "bg-slate-500 hover:bg-slate-600",
    ring: "ring-slate-500",
  },
  {
    value: "rose",
    label: "Rose",
    bg: "bg-rose-500 hover:bg-rose-600",
    ring: "ring-rose-500",
  },
  {
    value: "amber",
    label: "Amber",
    bg: "bg-amber-400 hover:bg-amber-500",
    ring: "ring-amber-400",
  },
  {
    value: "emerald",
    label: "Emerald",
    bg: "bg-emerald-500 hover:bg-emerald-600",
    ring: "ring-emerald-500",
  },
  {
    value: "sky",
    label: "Sky",
    bg: "bg-sky-500 hover:bg-sky-600",
    ring: "ring-sky-500",
  },
  {
    value: "violet",
    label: "Violet",
    bg: "bg-violet-500 hover:bg-violet-600",
    ring: "ring-violet-500",
  },
  {
    value: "pink",
    label: "Pink",
    bg: "bg-pink-500 hover:bg-pink-600",
    ring: "ring-pink-500",
  },
  {
    value: "orange",
    label: "Orange",
    bg: "bg-orange-500 hover:bg-orange-600",
    ring: "ring-orange-500",
  },
]

//  ------------------------------ | RADIO GROUP - COLORS | ------------------------------  //

export function RadioGroupColors() {
  const [selected, setSelected] = useState("violet")

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => {
          const isSelected = selected === color.value
          return (
            <Button
              key={color.value}
              type="button"
              size="icon"
              aria-label={color.label}
              aria-pressed={isSelected}
              onClick={() => setSelected(color.value)}
              className={`relative rounded-full transition-all duration-150 ${color.bg} ${
                isSelected
                  ? `ring-2 ring-offset-2 ring-offset-background ${color.ring}`
                  : "ring-0"
              }`}
            >
              {isSelected && (
                <Check className="size-3.5 stroke-[3] text-white drop-shadow" />
              )}
            </Button>
          )
        })}
      </div>
      <p className="text-sm text-muted-foreground">
        Selected:{" "}
        <span className="font-medium text-foreground capitalize">
          {selected}
        </span>
      </p>
    </div>
  )
}
