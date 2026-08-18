// shadcn
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// third-party
// third party
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

const chartData = [
  { month: "January", inbound: 1420, outbound: 840 },
  { month: "February", inbound: 1850, outbound: 1120 },
  { month: "March", inbound: 2100, outbound: 1380 },
  { month: "April", inbound: 1680, outbound: 1540 },
  { month: "May", inbound: 2350, outbound: 1720 },
  { month: "June", inbound: 2890, outbound: 2100 },
  { month: "July", inbound: 3420, outbound: 2450 },
]

const chartConfig = {
  inbound: {
    label: "Inbound Traffic",
    color: "var(--chart-1)",
  },
  outbound: {
    label: "Outbound Traffic",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

//  ------------------------------ | CHART - AREA | ------------------------------  //

export function ChartArea() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{ left: 12, right: 12 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
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
              indicator="dot"
              className="min-w-[10rem] gap-2 [&_div.flex-1]:items-center [&_div.flex-1]:gap-4 [&>div]:gap-2"
            />
          }
        />
        <defs>
          <linearGradient id="fillInbound" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-inbound)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-inbound)"
              stopOpacity={0.1}
            />
          </linearGradient>
          <linearGradient id="fillOutbound" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-outbound)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-outbound)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="outbound"
          type="natural"
          fill="url(#fillOutbound)"
          fillOpacity={0.4}
          stroke="var(--color-outbound)"
          strokeWidth={2}
          stackId="a"
        />
        <Area
          dataKey="inbound"
          type="natural"
          fill="url(#fillInbound)"
          fillOpacity={0.4}
          stroke="var(--color-inbound)"
          strokeWidth={2}
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  )
}
