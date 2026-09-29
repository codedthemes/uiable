"use client"

import { useMemo, useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

// third-party
import { cn } from "cn"
import { motion } from "framer-motion"

// assets
import { DollarSign, Sparkles } from "lucide-react"

interface EqualizerBar {
  price: number
  height: number // percentage 10 to 100
}

const EQUALIZER_DATA: EqualizerBar[] = [
  { price: 50, height: 18 },
  { price: 100, height: 28 },
  { price: 150, height: 42 },
  { price: 200, height: 65 },
  { price: 250, height: 85 },
  { price: 300, height: 100 },
  { price: 350, height: 92 },
  { price: 400, height: 78 },
  { price: 450, height: 64 },
  { price: 500, height: 58 },
  { price: 550, height: 72 },
  { price: 600, height: 86 },
  { price: 650, height: 68 },
  { price: 700, height: 52 },
  { price: 750, height: 44 },
  { price: 800, height: 38 },
  { price: 850, height: 30 },
  { price: 900, height: 24 },
  { price: 950, height: 20 },
  { price: 1000, height: 15 },
]

//  ------------------------------ | SLIDER - PRICE RANGE | ------------------------------  //

export function SliderPriceRange() {
  const [range, setRange] = useState<[number, number]>([180, 750])

  const [minPrice, maxPrice] = range

  const matchingPercentage = useMemo(() => {
    const activeCount = EQUALIZER_DATA.filter(
      (bar) => bar.price >= minPrice && bar.price <= maxPrice
    ).length
    return Math.round((activeCount / EQUALIZER_DATA.length) * 100)
  }, [minPrice, maxPrice])

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6 rounded-2xl border bg-card p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <Label className="text-sm font-medium">Price Range Budget</Label>
          <span className="text-xs text-muted-foreground">
            {matchingPercentage}% of options match range
          </span>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
          <Sparkles className="size-3.5" />
          <span>Active</span>
        </div>
      </div>

      {/* Selected Price Pills */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col rounded-xl border bg-muted/30 p-3">
          <span className="text-[11px] font-medium text-muted-foreground">
            Minimum Price
          </span>
          <div className="mt-0.5 flex items-center gap-0.5 text-lg font-semibold tracking-tight">
            <DollarSign className="size-4 text-muted-foreground" />
            <span>{minPrice}</span>
          </div>
        </div>

        <div className="flex flex-col rounded-xl border bg-muted/30 p-3">
          <span className="text-[11px] font-medium text-muted-foreground">
            Maximum Price
          </span>
          <div className="mt-0.5 flex items-center gap-0.5 text-lg font-semibold tracking-tight">
            <DollarSign className="size-4 text-muted-foreground" />
            <span>{maxPrice}</span>
          </div>
        </div>
      </div>

      {/* Equalizer Bars + Range Slider */}
      <div className="flex flex-col gap-1">
        <div className="flex h-16 items-end justify-between gap-1 px-1">
          {EQUALIZER_DATA.map((bar) => {
            const isActive = bar.price >= minPrice && bar.price <= maxPrice
            return (
              <div
                key={bar.price}
                className="flex h-full flex-1 flex-col justify-end"
              >
                <motion.div
                  initial={{ height: 0 }}
                  animate={{
                    height: `${bar.height}%`,
                    opacity: isActive ? 1 : 0.45,
                    scaleY: isActive ? 1 : 0.85,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  className={cn(
                    "w-full origin-bottom rounded-t-sm",
                    isActive
                      ? "bg-primary shadow-xs"
                      : "bg-muted/60 hover:opacity-80"
                  )}
                />
              </div>
            )
          })}
        </div>

        <Slider
          value={[minPrice, maxPrice]}
          onValueChange={(val) => {
            if (Array.isArray(val) && val.length >= 2) {
              setRange([val[0], val[1]])
            }
          }}
          min={0}
          max={1000}
          step={20}
          className="w-full cursor-pointer"
        />
      </div>

      {/* Preset range buttons */}
      <div className="flex flex-wrap items-center gap-1.5 pt-1">
        {[
          { label: "All", range: [0, 1000] as [number, number] },
          { label: "Budget", range: [0, 300] as [number, number] },
          { label: "Mid-Range", range: [240, 640] as [number, number] },
          { label: "Luxury", range: [600, 1000] as [number, number] },
        ].map((preset) => {
          const isSelected =
            minPrice === preset.range[0] && maxPrice === preset.range[1]
          return (
            <Button
              key={preset.label}
              type="button"
              variant={isSelected ? "default" : "outline"}
              size="sm"
              onClick={() => setRange(preset.range)}
              className={cn(
                "h-7 px-3 text-xs font-medium transition-colors outline-none dark:border-border",
                !isSelected && "text-muted-foreground"
              )}
            >
              {preset.label}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
