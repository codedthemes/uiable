"use client"

// shadcn
import { Card } from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

// third-party
import { Area, AreaChart } from "recharts"

// assets
import { MessageSquare, Code2, Clock, ArrowUp, Image } from "lucide-react"

type WidgetStat = {
  id: string
  title: string
  value: string
  change: string
  comparison: string
  icon: React.ComponentType<{ className?: string }>
  color: "purple" | "blue" | "emerald"
  chartData: { value: number }[]
}

const chartConfig = {
  value: {
    label: "Stat",
  },
} satisfies ChartConfig

const stats: WidgetStat[] = [
  {
    id: "total-chats",
    title: "Total Chats",
    value: "248",
    change: "12%",
    comparison: "vs. last 7 days",
    icon: MessageSquare,
    color: "purple",
    chartData: [
      { value: 12 },
      { value: 24 },
      { value: 18 },
      { value: 28 },
      { value: 22 },
      { value: 38 },
      { value: 48 },
    ],
  },
  {
    id: "code-generations",
    title: "Code Generations",
    value: "86",
    change: "18%",
    comparison: "vs. last 7 days",
    icon: Code2,
    color: "blue",
    chartData: [
      { value: 10 },
      { value: 20 },
      { value: 16 },
      { value: 30 },
      { value: 26 },
      { value: 42 },
      { value: 50 },
    ],
  },
  {
    id: "images-created",
    title: "Images Created",
    value: "42",
    change: "27%",
    comparison: "vs. last 7 days",
    icon: Image,
    color: "emerald",
    chartData: [
      { value: 14 },
      { value: 18 },
      { value: 10 },
      { value: 28 },
      { value: 20 },
      { value: 40 },
      { value: 46 },
    ],
  },
  {
    id: "active-time",
    title: "Active Time",
    value: "12h 36m",
    change: "15%",
    comparison: "vs. last 7 days",
    icon: Clock,
    color: "purple",
    chartData: [
      { value: 12 },
      { value: 24 },
      { value: 18 },
      { value: 28 },
      { value: 22 },
      { value: 38 },
      { value: 48 },
    ],
  },
]

const colorStyles = {
  purple: {
    glow: "bg-purple-500/10",
    iconBg:
      "bg-purple-600/25 border-purple-500/30 text-purple-400 shadow-purple-500/10",
    stroke: "#a855f7",
    stopColor: "#a855f7",
  },
  blue: {
    glow: "bg-blue-500/10",
    iconBg:
      "bg-blue-600/25 border-blue-500/30 text-blue-400 shadow-blue-500/10",
    stroke: "#3b82f6",
    stopColor: "#3b82f6",
  },
  emerald: {
    glow: "bg-emerald-500/10",
    iconBg:
      "bg-emerald-600/25 border-emerald-500/30 text-emerald-400 shadow-emerald-500/10",
    stroke: "#10b981",
    stopColor: "#10b981",
  },
}

//  ------------------------------ | WIDGETS 19 | ------------------------------  //

export default function Widgets19() {
  return (
    <section className="w-full">
      <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          const style = colorStyles[stat.color]

          return (
            <Card
              key={stat.id}
              className="group relative mb-0 flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-blue-900/30 bg-slate-950 p-5 text-white shadow-xl transition-all duration-300 hover:border-blue-800/50 hover:shadow-2xl"
            >
              <div
                className={`pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-40 blur-2xl transition-opacity duration-300 group-hover:opacity-80 ${style.glow}`}
              />

              <div className="relative z-10 flex items-center gap-3">
                <div
                  className={`flex size-10 shrink-0 items-center justify-center rounded-xl border p-2 shadow-md transition-transform duration-300 group-hover:scale-105 ${style.iconBg}`}
                >
                  <Icon className="size-5" />
                </div>
                <span className="text-sm font-semibold text-slate-200">
                  {stat.title}
                </span>
              </div>

              <div className="relative z-10 mt-4 flex items-center gap-3.5">
                <span className="text-2xl font-bold tracking-tight whitespace-nowrap text-white sm:text-3xl">
                  {stat.value}
                </span>

                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-1 text-xs font-semibold text-emerald-400 sm:text-sm">
                    <ArrowUp className="size-3.5 stroke-[2.5]" />
                    <span>{stat.change}</span>
                  </div>
                  <span className="text-[11px] font-normal whitespace-nowrap text-slate-400 sm:text-xs">
                    {stat.comparison}
                  </span>
                </div>
              </div>

              <div className="relative mt-4 h-16 w-full overflow-hidden">
                <ChartContainer
                  config={chartConfig}
                  className="aspect-auto h-full w-full"
                >
                  <AreaChart
                    data={stat.chartData}
                    margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id={`gradient-${stat.id}`}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor={style.stopColor}
                          stopOpacity={0.45}
                        />
                        <stop
                          offset="100%"
                          stopColor={style.stopColor}
                          stopOpacity={0.0}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      type="natural"
                      dataKey="value"
                      stroke={style.stroke}
                      strokeWidth={2.5}
                      fill={`url(#gradient-${stat.id})`}
                    />
                  </AreaChart>
                </ChartContainer>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
