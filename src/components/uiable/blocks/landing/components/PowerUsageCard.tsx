// assets
import { ArrowRight } from "lucide-react"

// ------------------------------ | POWER USAGE CARD | ------------------------------ //

export default function PowerUsageCard() {
  return (
    <div className="flex w-full flex-col gap-5 rounded-xl border border-border bg-card p-4">
      {/* Top Row: Title & Link Arrow */}
      <div className="flex w-full items-center justify-between">
        <span className="text-base leading-5 font-medium tracking-normal text-card-foreground select-none">
          Power Usage
        </span>
        <ArrowRight
          size={20}
          className="cursor-pointer text-secondary-foreground transition-transform hover:translate-x-0.5"
        />
      </div>

      {/* Bottom Row: Content & Chart */}
      <div className="flex w-full items-end justify-between gap-4">
        <div className="flex max-w-32.5 flex-col gap-1">
          <span className="text-xl leading-6 font-semibold tracking-normal text-secondary-foreground">
            4.6 kW
          </span>
          <span className="text-xs leading-3 font-normal tracking-normal text-muted-foreground">
            8% higher than last
            <br />
            month.
          </span>
        </div>

        {/* Tiny vertical bar chart */}
        <div className="flex h-12 shrink-0 items-end gap-1.5">
          <div className="h-1/2 w-2 rounded-full bg-primary/20" />
          <div className="h-3/4 w-2 rounded-full bg-primary/20" />
          <div className="h-1/3 w-2 rounded-full bg-primary/20" />
          <div className="h-2/3 w-2 rounded-full bg-primary" />
          <div className="h-3/5 w-2 rounded-full bg-primary/20" />
          <div className="h-3/4 w-2 rounded-full bg-primary/20" />
          <div className="h-5/6 w-2 rounded-full bg-primary/20" />
        </div>
      </div>
    </div>
  )
}
