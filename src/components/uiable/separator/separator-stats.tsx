// shadcn
import { Separator } from "@/components/ui/separator"

// assets
import { ArrowUpRight, Users, Wallet } from "lucide-react"

//  ------------------------------ | SEPARATOR - STATS | ------------------------------  //

export function SeparatorStats() {
  return (
    <div className="w-full max-w-2xl rounded-lg border p-6 text-card-foreground">
      <div className="flex flex-col flex-wrap gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Wallet className="size-4 text-primary" />
            <span>Total Revenue</span>
          </div>
          <div className="flex flex-wrap items-baseline gap-2">
            <h3 className="text-2xl font-bold tracking-tight">$48,295</h3>
            <span className="flex items-center text-xs font-medium text-green-500">
              +14.2%
              <ArrowUpRight className="size-3" />
            </span>
          </div>
        </div>

        <Separator orientation="vertical" className="hidden h-12 md:block" />
        <Separator className="block md:hidden" />

        <div className="flex flex-1 flex-col gap-1">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Users className="size-4 min-w-[16px] text-primary" />
            <span>Active Subscriptions</span>
          </div>
          <div className="flex flex-wrap items-baseline gap-2">
            <h3 className="text-2xl font-bold tracking-tight">2,845</h3>
            <span className="flex items-center text-xs font-medium text-green-500">
              +8.1%
              <ArrowUpRight className="size-3" />
            </span>
          </div>
        </div>

        <Separator orientation="vertical" className="hidden h-12 md:block" />
        <Separator className="block md:hidden" />

        <div className="flex flex-1 flex-col gap-1">
          <span className="text-sm font-medium text-muted-foreground">
            Conversion Rate
          </span>
          <div className="flex flex-wrap items-baseline gap-2">
            <h3 className="text-2xl font-bold tracking-tight">4.38%</h3>
            <span className="text-xs font-medium text-muted-foreground">
              vs last month
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
