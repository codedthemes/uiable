"use client"

import { useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

// third-party
import { cn } from "cn"

// assets
import { Sparkles } from "lucide-react"

interface RatingOption {
  value: number
  emoji: string
  label: string
  description: string
  color: string
  bgColor: string
  borderColor: string
}

const RATING_OPTIONS: RatingOption[] = [
  {
    value: 1,
    emoji: "😡",
    label: "Terrible",
    description: "We sincerely apologize and will improve.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
  },
  {
    value: 2,
    emoji: "😕",
    label: "Poor",
    description: "Below expectations. Thanks for your feedback.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
  },
  {
    value: 3,
    emoji: "😐",
    label: "Okay",
    description: "Average experience, room for improvement.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
  },
  {
    value: 4,
    emoji: "🙂",
    label: "Good",
    description: "Great service! We are glad you enjoyed it.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
  },
  {
    value: 5,
    emoji: "🤩",
    label: "Amazing",
    description: "Exceeded all expectations! Thank you!",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
]

//  ------------------------------ | SLIDER - EMOJI RATING | ------------------------------  //

export function SliderEmojiRating() {
  const [rating, setRating] = useState<number>(4)

  const currentOption =
    RATING_OPTIONS.find((opt) => opt.value === rating) || RATING_OPTIONS[3]

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6 rounded-2xl border bg-card p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-col gap-0.5">
          <Label className="text-sm font-medium">Satisfaction Rating</Label>
          <span className="text-xs text-muted-foreground">
            Slide to rate your experience
          </span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-muted/60 px-2.5 py-1 text-xs font-semibold">
          <Sparkles className="size-3.5 text-primary" />
          <span>{rating} / 5</span>
        </div>
      </div>

      {/* Emoji preview badge */}
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-3 rounded-xl border p-5 transition-all duration-300",
          currentOption.bgColor,
          currentOption.borderColor
        )}
      >
        <span className="text-5xl select-none">{currentOption.emoji}</span>

        <div className="text-center">
          <div
            className={cn(
              "text-base font-semibold tracking-tight transition-colors",
              currentOption.color
            )}
          >
            {currentOption.label}
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {currentOption.description}
          </p>
        </div>
      </div>

      {/* Slider Control */}
      <div className="flex flex-col gap-4">
        <Slider
          value={[rating]}
          onValueChange={(val) => {
            const nextVal = Array.isArray(val) ? val[0] : val
            if (typeof nextVal === "number") {
              setRating(nextVal)
            }
          }}
          min={1}
          max={5}
          step={1}
          className="w-full cursor-pointer"
        />

        {/* Clickable step markers */}
        <div className="flex items-center justify-between px-1">
          {RATING_OPTIONS.map((opt) => {
            const isSelected = opt.value === rating
            return (
              <Button
                key={opt.value}
                type="button"
                variant="ghost"
                onClick={() => setRating(opt.value)}
                className={cn(
                  "h-auto flex-col items-center gap-1 rounded-lg p-1.5 transition-all outline-none hover:bg-transparent",
                  isSelected
                    ? "scale-110 font-medium text-foreground"
                    : "text-muted-foreground opacity-60 hover:opacity-100"
                )}
              >
                <span className="text-lg leading-none">{opt.emoji}</span>
                <span className="text-[10px] leading-none">{opt.value}</span>
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
