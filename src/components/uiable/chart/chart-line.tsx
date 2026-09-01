// shadcn
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// third-party
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

const chartData = [
  { day: "Monday", organic: 340, direct: 210, social: 150 },
  { day: "Tuesday", organic: 420, direct: 260, social: 190 },
  { day: "Wednesday", organic: 510, direct: 310, social: 220 },
  { day: "Thursday", organic: 460, direct: 280, social: 310 },
  { day: "Friday", organic: 590, direct: 390, social: 280 },
  { day: "Saturday", organic: 680, direct: 450, social: 410 },
  { day: "Sunday", organic: 740, direct: 510, social: 460 },
]

const chartConfig = {
  organic: {
    label: "Organic Search",
    color: "var(--chart-1)",
  },
  direct: {
    label: "Direct Traffic",
    color: "var(--chart-2)",
  },
  social: {
    label: "Social Media",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

//  ------------------------------ | CHART - LINE | ------------------------------  //

export function ChartLine() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{ left: 12, right: 12 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} width={40} />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              indicator="line"
              className="min-w-[10rem] gap-2 [&_div.flex-1]:items-center [&_div.flex-1]:gap-4 [&>div]:gap-2"
            />
          }
        />
        <ChartLegend content={<ChartLegendContent />} />
        <Line
          dataKey="organic"
          type="monotone"
          stroke="var(--color-organic)"
          strokeWidth={2.5}
          dot={false}
          activeDot={{ r: 6 }}
        />
        <Line
          dataKey="direct"
          type="monotone"
          stroke="var(--color-direct)"
          strokeWidth={2.5}
          dot={false}
          activeDot={{ r: 6 }}
        />
        <Line
          dataKey="social"
          type="monotone"
          stroke="var(--color-social)"
          strokeWidth={2.5}
          dot={false}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ChartContainer>
  )
}
