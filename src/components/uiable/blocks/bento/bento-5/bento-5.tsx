"use client"

// react
import { useEffect, useId, useRef, useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// third-party
import { Area, AreaChart, XAxis, YAxis } from "recharts"

// project-imports
import { cn } from "@/lib/utils"

// assets
import {
  IconBrandNetflix,
  IconBrandStripe,
  IconBuildingBank,
  IconChartCandle,
  IconChartLine,
} from "@tabler/icons-react"
import {
  ArrowUp,
  ArrowUpRight,
  Asterisk,
  CheckCircle2,
  ChevronRight,
  Landmark,
  MessageSquareText,
  Percent,
  TrendingUp,
} from "lucide-react"

//  ------------------------------ | TYPES & DATA | ------------------------------  //

interface TeamMember {
  id: string
  name: string
  role: string
  avatar: string
  col: number
  row: number
}

interface CustomXAxisTickProps {
  x?: number
  y?: number
  payload?: {
    value?: string
  }
}

const TEAM_MEMBERS: readonly TeamMember[] = [
  {
    id: "alex",
    name: "Alex Sterling",
    role: "Head of Quantitative Alpha",
    avatar: "https://cdn.uiable.com/block/team-1.jpg",
    col: 2,
    row: 0,
  },
  {
    id: "marcus",
    name: "Marcus Vance",
    role: "Chief Investment Officer",
    avatar: "https://cdn.uiable.com/block/team-2.jpg",
    col: 0,
    row: 1,
  },
  {
    id: "devon",
    name: "Devon Park",
    role: "VP Institutional Treasury",
    avatar: "https://cdn.uiable.com/block/team-3.jpg",
    col: 2,
    row: 1,
  },
  {
    id: "sarah",
    name: "Sarah Chen",
    role: "Lead Financial Architect",
    avatar: "https://cdn.uiable.com/block/team-7.jpg",
    col: 1,
    row: 2,
  },
]

// Precomputed 3x3 matrix grid to avoid redundant array generation & lookups on each render
const MATRIX_CELLS = Array.from({ length: 9 }, (_, idx) => {
  const row = Math.floor(idx / 3)
  const col = idx % 3
  return TEAM_MEMBERS.find((m) => m.row === row && m.col === col) ?? null
})

const FINANCIAL_PARTNERS = [
  { name: "Bloomberg", icon: IconChartCandle },
  { name: "Stripe", icon: IconBrandStripe },
  { name: "Plaid", icon: IconBuildingBank },
  { name: "Nasdaq", icon: IconChartLine },
] as const

const SCHEDULED_PAYMENTS = [
  {
    id: "netflix",
    title: "Netflix Subscription",
    date: "June 28, 2026",
    amount: "$15.99",
    status: "Scheduled",
    icon: IconBrandNetflix,
  },
  {
    id: "home-loan",
    title: "Home Loan EMI",
    date: "July 05, 2026",
    amount: "$1,450.00",
    status: "Auto-Debit",
    icon: Landmark,
  },
  {
    id: "mutual-fund",
    title: "Mutual Fund SIP",
    date: "July 10, 2026",
    amount: "$500.00",
    status: "Auto-Invest",
    icon: TrendingUp,
  },
] as const

const CHART_DATA = [
  { month: "Jan", value: 0.8 },
  { month: "Feb", value: 3.4 },
  { month: "Mar", value: 1.6 },
  { month: "Apr", value: 5.0 },
  { month: "May", value: 8.8 },
  { month: "Jun", value: 7.9 },
  { month: "Jul", value: 12.0 },
]

const chartConfig = {
  value: {
    label: "Routed Volume",
    color: "currentColor",
  },
} satisfies ChartConfig

const FINANCIAL_ACTIONS = [
  { id: "credit-card", label: "Credit Card", icon: ArrowUpRight },
  { id: "bills-payment", label: "Bills Payment", icon: Percent },
  { id: "integrations", label: "Integrations", icon: ArrowUpRight },
  { id: "send-money", label: "Send Money To World", icon: Asterisk },
  { id: "add-users", label: "Add Users", icon: null },
] as const

//  ------------------------------ | SUB-COMPONENTS | ------------------------------  //

function TeamMatrix() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center py-2">
      <div className="relative mx-auto grid w-full max-w-[245px] grid-cols-3 gap-2.5 sm:max-w-[260px]">
        {MATRIX_CELLS.map((member, idx) =>
          member ? (
            <div
              key={member.id}
              className="relative aspect-square w-full overflow-hidden rounded-2xl border-2 border-background bg-muted shadow-md dark:border-neutral-700/80"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
          ) : (
            <div
              key={`empty-cell-${idx}`}
              className="aspect-square w-full rounded-2xl border border-border bg-muted/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] dark:bg-muted/30"
            />
          )
        )}
      </div>
    </div>
  )
}

function CustomXAxisTick({ x, y, payload }: CustomXAxisTickProps) {
  if (!payload || x === undefined || y === undefined) return null
  const isJul = payload.value === "Jul"
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={12}
        textAnchor="middle"
        className={cn(
          "text-[11px]",
          isJul ? "fill-foreground font-extrabold" : "fill-muted-foreground"
        )}
      >
        {payload.value}
      </text>
    </g>
  )
}

interface FinanceExpertButtonProps {
  copied: boolean
  onClick: () => void
  className?: string
}

function FinanceExpertButton({
  copied,
  onClick,
  className,
}: FinanceExpertButtonProps) {
  return (
    <Button
      type="button"
      onClick={onClick}
      aria-live="polite"
      className={cn(
        "group/btn relative inline-flex items-center gap-2.5 rounded-xl border border-border bg-foreground px-4.5 py-2.5 text-sm font-semibold text-background shadow-md transition-all duration-300 hover:bg-foreground/90 hover:shadow-lg active:scale-98 sm:text-[15px]",
        className
      )}
    >
      {copied ? (
        <CheckCircle2 className="size-4.5 shrink-0 animate-in text-background duration-200 zoom-in-50" />
      ) : (
        <MessageSquareText className="size-4.5 shrink-0 text-background transition-transform duration-200 group-hover/btn:scale-110" />
      )}

      <span className="text-background">
        {copied ? "Connecting to Expert..." : "Chat with a Finance Expert"}
      </span>
    </Button>
  )
}

//  ------------------------------ | BENTO 5 | ------------------------------  //

export default function Bento5() {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const gradientId = useId()

  const handleAction = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setCopied(true)
    timeoutRef.current = setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <section className="relative overflow-hidden bg-background py-16 text-foreground transition-colors duration-300 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Scaling High-Yield Financial Systems
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-stretch">
          {/* Left Column: Finance Experts */}
          <div className="col-span-1 flex flex-col lg:col-span-4">
            <Card className="group relative flex h-full flex-1 flex-col justify-between overflow-hidden rounded-none border border-border bg-card p-5 shadow-xs transition-all duration-300 hover:shadow-md sm:p-6">
              <div className="flex h-full flex-col justify-between gap-5 md:flex-row md:items-center md:gap-8 lg:flex-col lg:justify-between lg:gap-0">
                <div className="relative z-10 flex flex-1 flex-col justify-between space-y-4 md:space-y-6 lg:space-y-2">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold tracking-tight text-card-foreground sm:text-xl">
                      Get to know our finance experts
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                      We partner with ambitious finance teams to streamline
                      operations, ensure compliance, and unlock sustainable
                      growth.
                    </p>
                  </div>

                  <div className="hidden pt-2 md:block lg:hidden">
                    <FinanceExpertButton
                      copied={copied}
                      onClick={handleAction}
                    />
                  </div>
                </div>

                <div className="relative z-10 my-auto flex shrink-0 items-center justify-center py-2 md:w-[260px] lg:w-full">
                  <TeamMatrix />
                </div>

                <div className="relative z-10 pt-2 md:hidden lg:block">
                  <FinanceExpertButton copied={copied} onClick={handleAction} />
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Scheduled Payments, Partners, Treasury Chart & Quick Actions */}
          <div className="col-span-1 flex flex-col justify-between gap-4 lg:col-span-8">
            <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2">
              {/* Upcoming Bills */}
              <Card className="group relative flex h-full flex-col overflow-hidden rounded-none border border-border bg-card p-4 shadow-xs transition-all duration-300 hover:shadow-md sm:p-5">
                <div className="space-y-1">
                  <h3 className="text-base font-bold tracking-tight text-card-foreground sm:text-lg">
                    Upcoming bills
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground sm:text-[13px]">
                    Track and manage your scheduled payments so you never miss a
                    due date.
                  </p>
                </div>

                <div className="my-auto flex w-full flex-col gap-2.5 sm:gap-5">
                  {SCHEDULED_PAYMENTS.map(
                    ({ id, title, date, amount, status, icon: Icon }) => (
                      <div
                        key={id}
                        className="group/item flex flex-col gap-4 rounded-2xl border border-border/80 bg-background/80 p-3 transition-all duration-200 hover:border-border hover:bg-muted/50 hover:shadow-xs sm:gap-3.5 dark:bg-muted/20"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-muted/60 text-foreground">
                              <Icon className="size-4.5 shrink-0 stroke-2" />
                            </div>
                            <div>
                              <h4 className="text-sm font-bold tracking-tight text-card-foreground">
                                {title}
                              </h4>
                              <p className="text-xs font-normal text-muted-foreground">
                                {date}
                              </p>
                            </div>
                          </div>
                          <ChevronRight className="size-4 text-muted-foreground/60 transition-transform duration-200 group-hover/item:translate-x-0.5" />
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold tracking-tight text-card-foreground sm:text-[15px]">
                            {amount}
                          </span>
                          <span className="rounded-full border border-border/80 bg-muted/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground dark:bg-muted/30">
                            {status}
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </Card>

              {/* Partners & Treasury Chart */}
              <div className="flex h-full flex-col gap-4">
                {/* Financial Partners */}
                <Card className="group relative mb-0 flex h-[72px] shrink-0 items-center justify-between overflow-hidden rounded-none border border-border bg-card p-2 shadow-xs transition-all duration-300 hover:shadow-md sm:p-2.5">
                  <div className="grid h-full w-full grid-cols-4 gap-2">
                    {FINANCIAL_PARTNERS.map(({ name, icon: Icon }) => (
                      <div
                        key={name}
                        className="group/partner flex flex-col items-center justify-center gap-1 rounded-xl border border-border/70 bg-background/80 px-2 py-1.5 transition-all duration-200 hover:border-border hover:bg-muted/50 hover:shadow-xs dark:bg-muted/20"
                      >
                        <Icon
                          className="size-4.5 shrink-0 text-foreground transition-transform duration-300 group-hover/partner:scale-110"
                          stroke={2}
                        />
                        <span className="text-[11px] font-bold tracking-tight whitespace-nowrap text-card-foreground sm:text-xs">
                          {name}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Volume Chart */}
                <Card className="group relative mb-0 flex flex-1 flex-col justify-between overflow-hidden rounded-none border border-border bg-card p-4 shadow-xs transition-all duration-300 hover:shadow-md sm:p-5">
                  <div className="relative z-10 flex items-start justify-between">
                    <div>
                      <div className="text-3xl leading-none font-black tracking-tight text-card-foreground sm:text-4xl">
                        $12B+
                      </div>
                      <p className="mt-1 text-xs font-semibold tracking-tight text-muted-foreground">
                        Institutional Treasuries Routed
                      </p>
                    </div>

                    <div className="relative flex flex-col items-end pt-0.5">
                      <div className="relative inline-flex items-center gap-1 rounded-md border border-border bg-foreground px-2 py-0.5 text-xs font-bold text-background shadow-md">
                        <ArrowUp className="size-3 stroke-[3] text-background" />
                        <span className="text-background">+18.7%</span>
                        <div className="absolute right-3 -bottom-1 size-1.5 rotate-45 bg-foreground" />
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 mt-2 flex flex-1 flex-col justify-end">
                    <div className="pr-1 text-right text-[10px] font-medium text-muted-foreground">
                      (in Billions)
                    </div>

                    <ChartContainer
                      config={chartConfig}
                      className="h-[165px] w-full flex-1 text-foreground"
                    >
                      <AreaChart
                        accessibilityLayer
                        data={CHART_DATA}
                        margin={{ top: 10, right: 8, left: 8, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient
                            id={gradientId}
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="currentColor"
                              stopOpacity={0.22}
                            />
                            <stop
                              offset="60%"
                              stopColor="currentColor"
                              stopOpacity={0.05}
                            />
                            <stop
                              offset="100%"
                              stopColor="currentColor"
                              stopOpacity={0.0}
                            />
                          </linearGradient>
                        </defs>
                        <XAxis
                          dataKey="month"
                          interval={0}
                          tickLine={false}
                          axisLine={false}
                          tickMargin={6}
                          tick={<CustomXAxisTick />}
                        />
                        <YAxis
                          orientation="right"
                          domain={[0, 12]}
                          ticks={[0, 3, 6, 9, 12]}
                          tickFormatter={(v) => (v === 0 ? "0" : `${v}B`)}
                          tickLine={false}
                          axisLine={false}
                          tickMargin={4}
                          width={24}
                          className="fill-muted-foreground text-[10px]"
                        />
                        <ChartTooltip
                          cursor={{
                            stroke: "hsl(var(--foreground))",
                            strokeWidth: 1,
                            strokeDasharray: "3 3",
                          }}
                          content={
                            <ChartTooltipContent
                              indicator="line"
                              formatter={(value) => `$${value}B`}
                            />
                          }
                        />
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          fill={`url(#${gradientId})`}
                          isAnimationActive={false}
                        />
                      </AreaChart>
                    </ChartContainer>
                  </div>
                </Card>
              </div>
            </div>

            {/* Financial Actions Footer Card */}
            <Card className="group relative flex min-h-20 shrink-0 items-center justify-between overflow-hidden rounded-none border border-border bg-card p-4 shadow-xs transition-all duration-300 hover:shadow-md sm:h-20 sm:px-8">
              <div className="flex h-full w-full flex-wrap items-center justify-between gap-3 sm:flex-nowrap sm:gap-4">
                {FINANCIAL_ACTIONS.map(({ id, label, icon: ActionIcon }) => (
                  <Button
                    key={id}
                    variant="ghost"
                    className="group h-auto cursor-pointer items-center gap-1.5 p-0 text-xs font-bold tracking-tight text-card-foreground transition-colors duration-200 hover:bg-transparent hover:text-foreground active:scale-98 sm:text-sm"
                  >
                    <span>{label}</span>
                    {ActionIcon && (
                      <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ActionIcon className="size-4 stroke-[2.5] text-muted-foreground transition-colors group-hover:text-foreground" />
                      </span>
                    )}
                  </Button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
