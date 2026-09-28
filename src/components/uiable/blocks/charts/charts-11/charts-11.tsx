"use client"

// shadcn
import { Card, CardContent } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// third-party
import { Label, Pie, PieChart } from "recharts"

// assets
import { MoreVertical, TrendingUp } from "lucide-react"

//  ------------------------------ | CHARTS 11 | ------------------------------  //

const chartConfig = {
  amount: {
    label: "Income",
  },
  income: {
    label: "Income",
    color: "var(--color-blue-500)",
  },
  rent: {
    label: "Rent",
    color: "var(--color-amber-500)",
  },
  download: {
    label: "Download",
    color: "var(--color-teal-600)",
  },
  views: {
    label: "Views",
    color: "var(--color-blue-200)",
  },
} satisfies ChartConfig

type SegmentKey = "income" | "rent" | "download" | "views"

const chartData = [
  { key: "income", amount: 23876, fill: "var(--color-income)" },
  { key: "rent", amount: 23876, fill: "var(--color-rent)" },
  { key: "download", amount: 23876, fill: "var(--color-download)" },
  { key: "views", amount: 12480, fill: "var(--color-views)" },
] satisfies { key: SegmentKey; amount: number; fill: string }[]

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
})

const compactCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
  maximumFractionDigits: 1,
})

export default function Charts11() {
  const total = chartData.reduce((sum, item) => sum + item.amount, 0)

  return (
    <div className="w-full min-w-0">
      <Card className="mb-0 overflow-hidden rounded-2xl border-border/60 bg-card shadow-sm transition-shadow hover:shadow-md">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-12 -left-10 size-32 rounded-full bg-blue-500 opacity-20 blur-3xl"
        />
        <CardContent className="flex flex-col gap-6 p-5 sm:p-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Total Income
            </h3>
            <button
              type="button"
              aria-label="More options"
              className="flex size-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground"
            >
              <MoreVertical className="size-4" />
            </button>
          </div>

          {/* Donut chart */}
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square h-[240px] w-full min-w-0"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    className="min-w-[10rem] gap-2 rounded-xl"
                    nameKey="key"
                    formatter={(value, name) => (
                      <div className="flex w-full items-center justify-between gap-4">
                        <span className="text-muted-foreground">
                          {chartConfig[name as SegmentKey]?.label}
                        </span>
                        <span className="font-medium text-foreground tabular-nums">
                          {currency.format(value as number)}
                        </span>
                      </div>
                    )}
                  />
                }
              />
              <Pie
                data={chartData}
                dataKey="amount"
                nameKey="key"
                innerRadius={72}
                outerRadius={100}
                paddingAngle={2}
                cornerRadius={6}
                strokeWidth={0}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy ?? 0) - 8}
                            className="fill-muted-foreground text-xs"
                          >
                            Total
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy ?? 0) + 16}
                            className="fill-foreground text-2xl font-semibold tabular-nums"
                          >
                            {compactCurrency.format(total)}
                          </tspan>
                        </text>
                      )
                    }
                    return null
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>

          {/* Legend cards */}
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
            {chartData.map((item) => (
              <Card
                key={item.key}
                className="group relative mb-0 flex flex-col gap-1.5 overflow-hidden rounded-xl border border-border/60 bg-muted/30 px-3.5 py-3 shadow-none transition-all hover:-translate-y-0.5 hover:bg-card hover:shadow-md"
              >
                {/* Subtle tinted glow */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-8 -right-6 size-20 rounded-full opacity-[0.07] blur-2xl transition-opacity group-hover:opacity-[0.16]"
                  style={{ backgroundColor: chartConfig[item.key].color }}
                />
                <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <span
                    className="size-2 rounded-full"
                    style={{ backgroundColor: chartConfig[item.key].color }}
                  />
                  {chartConfig[item.key].label}
                </span>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-lg font-semibold tracking-tight text-foreground tabular-nums sm:text-xl">
                    {currency.format(item.amount)}
                  </span>
                  <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[11px] font-semibold text-emerald-600 ring-1 ring-emerald-500/15 ring-inset dark:text-emerald-400">
                    <TrendingUp className="size-3" />
                    +$763.43
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
