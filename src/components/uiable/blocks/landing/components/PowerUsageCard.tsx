// third-party
import { cn } from "cn"

// assets
import { ArrowRight } from "lucide-react"

// types
interface UsageBar {
  height: string
  highlighted?: boolean
}

const usageBars: UsageBar[] = [
  { height: "h-1/2" },
  { height: "h-3/4" },
  { height: "h-1/3" },
  { height: "h-2/3", highlighted: true },
  { height: "h-3/5" },
  { height: "h-3/4" },
  { height: "h-5/6" },
]

// ------------------------------ | POWER USAGE CARD | ------------------------------ //

export default function PowerUsageCard() {
  return (
    <div className="flex w-full flex-col gap-5 rounded-xl border border-border bg-card p-4">
      <div className="flex w-full items-center justify-between">
        <span className="text-base leading-5 font-medium tracking-normal text-card-foreground select-none">
          Power Usage
        </span>
        <ArrowRight
          aria-hidden="true"
          className="size-5 text-secondary-foreground transition-transform hover:translate-x-0.5"
        />
      </div>

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

        <div className="flex h-12 shrink-0 items-end gap-1.5">
          {usageBars.map((bar, index) => (
            <div
              key={index}
              className={cn(
                "w-2 rounded-full",
                bar.height,
                bar.highlighted ? "bg-primary" : "bg-primary/20"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
