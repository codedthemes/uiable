import { useMemo } from "react"
// third party
import { Label, Pie, PieChart } from "recharts"

// shadcn
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { category: "electronics", revenue: 4500, fill: "var(--color-electronics)" },
  { category: "fashion", revenue: 3200, fill: "var(--color-fashion)" },
  { category: "home", revenue: 2100, fill: "var(--color-home)" },
  { category: "beauty", revenue: 1800, fill: "var(--color-beauty)" },
  { category: "sports", revenue: 1400, fill: "var(--color-sports)" },
]

const chartConfig = {
  revenue: {
    label: "Revenue ($)",
  },
  electronics: {
    label: "Electronics",
    color: "var(--chart-1)",
  },
  fashion: {
    label: "Fashion",
    color: "var(--chart-2)",
  },
  home: {
    label: "Home & Garden",
    color: "var(--chart-3)",
  },
  beauty: {
    label: "Beauty",
    color: "var(--chart-4)",
  },
  sports: {
    label: "Sports & Outdoors",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

//  ------------------------------ | CHART - PIE | ------------------------------  //

export function ChartPie() {
  const totalRevenue = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.revenue, 0)
  }, [])

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[300px] min-h-[250px] w-full"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              hideLabel
              className="min-w-[10rem] gap-2 [&_div.flex-1]:items-center [&_div.flex-1]:gap-4 [&>div]:gap-2"
            />
          }
        />
        <Pie
          data={chartData}
          dataKey="revenue"
          nameKey="category"
          innerRadius={65}
          outerRadius={95}
          paddingAngle={3}
          strokeWidth={2}
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
                      y={viewBox.cy}
                      className="fill-foreground text-2xl font-bold tabular-nums"
                    >
                      ${totalRevenue.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 20}
                      className="fill-muted-foreground text-xs"
                    >
                      Total Sales
                    </tspan>
                  </text>
                )
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  )
}
