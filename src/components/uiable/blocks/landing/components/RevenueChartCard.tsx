"use client"

import { useState } from "react"

// shadcn
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// project imports
import { MetricChart } from "@/images/svg/landing"

// assets
import { IconArrowDownRight, IconArrowUpRight } from "@tabler/icons-react"

// constants
const metricData = {
  revenue: {
    value: "22,680",
    trend: "up",
    change: "+8.2%",
    path: "M 0 100 Q 50 110 100 80 T 200 40 T 300 20",
    fillPath: "M 0 100 Q 50 110 100 80 T 200 40 T 300 20 L 300 120 L 0 120 Z",
    dotX: 160,
    dotY: 55,
    tooltip: "+1024",
    tooltipX: 130,
    tooltipY: 15,
  },
  profit: {
    value: "14,820",
    trend: "up",
    change: "+15.4%",
    path: "M 0 90 Q 50 50 100 70 T 200 35 T 300 25",
    fillPath: "M 0 90 Q 50 50 100 70 T 200 35 T 300 25 L 300 120 L 0 120 Z",
    dotX: 200,
    dotY: 35,
    tooltip: "+842",
    tooltipX: 170,
    tooltipY: -5,
  },
  sales: {
    value: "3,450",
    trend: "down",
    change: "-2.1%",
    path: "M 0 30 Q 50 40 100 60 T 200 75 T 300 90",
    fillPath: "M 0 30 Q 50 40 100 60 T 200 75 T 300 90 L 300 120 L 0 120 Z",
    dotX: 150,
    dotY: 67,
    tooltip: "-120",
    tooltipX: 120,
    tooltipY: 27,
  },
} as const

type MetricType = keyof typeof metricData

interface TrendBadgeProps {
  trend: "up" | "down"
  change: string
}

function TrendBadge({ trend, change }: TrendBadgeProps) {
  const isUp = trend === "up"
  return (
    <div
      className={`mt-1 flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold transition-colors duration-300 ${
        isUp
          ? "bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20 dark:text-emerald-400"
          : "bg-rose-500/10 text-rose-500 dark:bg-rose-500/20 dark:text-rose-400"
      }`}
    >
      {isUp ? (
        <IconArrowUpRight className="size-3.5" stroke={2.5} />
      ) : (
        <IconArrowDownRight className="size-3.5" stroke={2.5} />
      )}
      <span>{change}</span>
    </div>
  )
}

//  ------------------------------ | BLOCK - REVENUE CHART CARD | ------------------------------  //

export default function RevenueChartCard() {
  const [metric, setMetric] = useState<MetricType>("revenue")
  const currentData = metricData[metric]

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <Select
            value={metric}
            onValueChange={(val) => {
              if (val) setMetric(val as MetricType)
            }}
          >
            <SelectTrigger className="h-auto w-auto gap-1 border-0 bg-transparent p-0 text-xs font-medium text-muted-foreground hover:text-foreground focus:border-transparent focus:ring-0">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="revenue">Revenue</SelectItem>
              <SelectItem value="profit">Profit</SelectItem>
              <SelectItem value="sales">Sales</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-2xl font-extrabold tracking-tight text-foreground transition-all duration-300">
            {currentData.value}
          </p>
        </div>
        <TrendBadge trend={currentData.trend} change={currentData.change} />
      </div>

      <MetricChart {...currentData} />
    </div>
  )
}
