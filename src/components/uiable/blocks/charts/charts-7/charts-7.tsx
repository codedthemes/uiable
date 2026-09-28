"use client"

// react
import { useState } from "react"

// shadcn
import { Card, CardContent } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// third-party
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

//  ------------------------------ | CHARTS 7 | ------------------------------  //

const chartDataByRange = {
  yearly: [
    { label: "2021", rate: 42 },
    { label: "2022", rate: 48 },
    { label: "2023", rate: 54 },
    { label: "2024", rate: 61 },
    { label: "2025", rate: 68 },
  ],
  monthly: [
    { label: "Jan", rate: 30 },
    { label: "Feb", rate: 60 },
    { label: "Mar", rate: 40 },
    { label: "Apr", rate: 70 },
    { label: "May", rate: 50 },
    { label: "Jun", rate: 90 },
    { label: "Jul", rate: 50 },
    { label: "Aug", rate: 55 },
    { label: "Sep", rate: 45 },
    { label: "Oct", rate: 60 },
    { label: "Nov", rate: 50 },
    { label: "Dec", rate: 65 },
  ],
  weekly: [
    { label: "W1", rate: 44 },
    { label: "W2", rate: 58 },
    { label: "W3", rate: 51 },
    { label: "W4", rate: 67 },
  ],
  daily: [
    { label: "Mon", rate: 38 },
    { label: "Tue", rate: 52 },
    { label: "Wed", rate: 47 },
    { label: "Thu", rate: 64 },
    { label: "Fri", rate: 76 },
    { label: "Sat", rate: 59 },
    { label: "Sun", rate: 43 },
  ],
}

const rangeFilters = [
  { key: "yearly", label: "Yearly" },
  { key: "monthly", label: "Monthly" },
  { key: "weekly", label: "Weekly" },
  { key: "daily", label: "Daily" },
] as const

type RangeKey = keyof typeof chartDataByRange

const chartConfig = {
  rate: {
    label: "Rate",
    color: "var(--color-blue-500)",
  },
} satisfies ChartConfig

export default function Charts7() {
  const [range, setRange] = useState<RangeKey>("monthly")
  const chartData = chartDataByRange[range]

  return (
    <div className="h-full w-full">
      <Card className="mb-0 flex h-full flex-col rounded-2xl border-border/60 shadow-sm">
        <CardContent className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-sm font-semibold text-foreground">
              Repeat customer rate
            </h3>
            <div className="inline-flex flex-wrap items-center gap-1 rounded-xl bg-muted/60 p-1">
              {rangeFilters.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setRange(item.key)}
                  aria-pressed={range === item.key}
                  className={
                    range === item.key
                      ? "rounded-lg bg-background px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm ring-1 ring-border/60 ring-inset"
                      : "rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="mt-1 mb-2 flex items-center justify-end gap-2">
              <span className="text-2xl font-bold text-foreground tabular-nums">
                5.44%
              </span>
              <span className="rounded-md bg-emerald-500 px-2 py-0.5 text-xs font-semibold text-white">
                +2.6%
              </span>
            </div>
          </div>

          <ChartContainer
            config={chartConfig}
            className="aspect-[16/4] min-h-[200px] w-full flex-1"
          >
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{ top: 8, right: 4, bottom: 0, left: 4 }}
            >
              <defs>
                <linearGradient id="fillRate" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-blue-500)"
                    stopOpacity={0.18}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-blue-500)"
                    stopOpacity={0.03}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="label"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                className="text-xs"
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                width={36}
                domain={[30, 90]}
                ticks={[30, 40, 50, 60, 70, 80, 90]}
                className="text-xs"
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent formatter={(value) => `${value}%`} />
                }
              />
              <Area
                type="monotone"
                dataKey="rate"
                stroke="var(--color-blue-500)"
                strokeWidth={2}
                fill="url(#fillRate)"
                dot={false}
                activeDot={{ r: 4 }}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
