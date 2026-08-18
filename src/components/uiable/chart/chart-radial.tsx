// shadcn
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// third-party
// third party
import { RadialBar, RadialBarChart } from "recharts"

const chartData = [
  { metric: "cpu", usage: 82, fill: "var(--color-cpu)" },
  { metric: "memory", usage: 64, fill: "var(--color-memory)" },
  { metric: "storage", usage: 45, fill: "var(--color-storage)" },
]

const chartConfig = {
  usage: {
    label: "Usage (%)",
  },
  cpu: {
    label: "CPU Load",
    color: "var(--chart-1)",
  },
  memory: {
    label: "RAM Memory",
    color: "var(--chart-2)",
  },
  storage: {
    label: "SSD Storage",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

//  ------------------------------ | CHART - RADIAL | ------------------------------  //

export function ChartRadial() {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[300px] min-h-[250px] w-full"
    >
      <RadialBarChart
        data={chartData}
        startAngle={-90}
        endAngle={380}
        innerRadius={45}
        outerRadius={110}
      >
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              hideLabel
              nameKey="metric"
              className="min-w-[10rem] gap-2 [&_div.flex-1]:items-center [&_div.flex-1]:gap-4 [&>div]:gap-2"
            />
          }
        />
        <RadialBar dataKey="usage" background cornerRadius={8} />
      </RadialBarChart>
    </ChartContainer>
  )
}
