// project

// assets
import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

interface IncomeItemProps {
  label: string
  amount: string
  change: string
  color: string
}

//  ------------------------------ | BLOCK - INCOME ITEM | ------------------------------  //

export default function IncomeItem({
  label,
  amount,
  change,
  color,
}: IncomeItemProps) {
  return (
    <div className="rounded-xl border border-transparent bg-muted/30 p-4 transition-colors hover:border-border">
      <div className="mb-1 flex items-center gap-2">
        <span className={cn("h-2 w-2 rounded-full", color)}></span>
        <span className="text-xs font-medium text-muted-foreground">
          {label}
        </span>
      </div>
      <h6 className="flex items-center gap-2 text-sm font-bold">
        {amount}
        <span className="flex items-center text-[10px] font-normal text-muted-foreground">
          <ArrowUpRight className="mr-1 h-2 w-2 text-green-500" /> {change}
        </span>
      </h6>
    </div>
  )
}
