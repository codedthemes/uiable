"use client"

// shadcn
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// assets
import {
  ArrowLeftRight,
  MoreVertical,
  TrendingDown,
  TrendingUp,
} from "lucide-react"

//  ------------------------------ | WIDGETS 22 | ------------------------------  //

type AvatarColor = "teal" | "amber" | "blue" | "rose" | "violet"

// full class strings so Tailwind can statically detect them
const avatarStyles: Record<AvatarColor, string> = {
  teal: "bg-teal-600/10 text-teal-600",
  amber: "bg-amber-500/10 text-amber-500",
  blue: "bg-blue-500/10 text-blue-500",
  rose: "bg-rose-500/10 text-rose-500",
  violet: "bg-violet-500/10 text-violet-500",
}

type Trend = "up" | "down" | "flat"
type Status = "success" | "pending"

type Transaction = {
  name: string
  meta: string
  initials: string
  color: AvatarColor
  amount: string
  delta: string
  trend: Trend
  status: Status
}

const transactions: Transaction[] = [
  {
    name: "Uber",
    meta: "08:40 pm",
    initials: "U",
    color: "blue",
    amount: "+210,000",
    delta: "10.6%",
    trend: "up",
    status: "success",
  },
  {
    name: "Ola Cabs",
    meta: "07:40 pm",
    initials: "OC",
    color: "amber",
    amount: "+210,000",
    delta: "10.6%",
    trend: "up",
    status: "success",
  },
  {
    name: "Apple Inc.",
    meta: "#ABLE-PRO-T00232",
    initials: "AI",
    color: "rose",
    amount: "$210,000",
    delta: "10.6%",
    trend: "down",
    status: "pending",
  },
  {
    name: "Spotify Music",
    meta: "#ABLE-PRO-T10232",
    initials: "SM",
    color: "teal",
    amount: "- 10,000",
    delta: "30.6%",
    trend: "up",
    status: "success",
  },
  {
    name: "Medium",
    meta: "06:30 pm",
    initials: "MD",
    color: "violet",
    amount: "-26",
    delta: "5%",
    trend: "flat",
    status: "pending",
  },
]

const tabs: { value: string; label: string; items: Transaction[] }[] = [
  {
    value: "all",
    label: "All Transaction",
    items: transactions,
  },
  {
    value: "success",
    label: "Success",
    items: transactions.filter((t) => t.status === "success"),
  },
  {
    value: "pending",
    label: "Pending",
    items: transactions.filter((t) => t.status === "pending"),
  },
]

// tinted delta pill per trend direction
const trendStyles: Record<Trend, string> = {
  up: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
  down: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  flat: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
}

const trendIcons: Record<Trend, React.ComponentType<{ className?: string }>> = {
  up: TrendingUp,
  down: TrendingDown,
  flat: ArrowLeftRight,
}

function TransactionRow({ txn }: { txn: Transaction }) {
  const TrendIcon = trendIcons[txn.trend]

  return (
    <li className="group flex items-center justify-between gap-3 border-b border-border/50 py-3 transition-colors last:border-b-0 hover:bg-muted/40">
      <div className="flex min-w-0 items-center gap-3">
        <span
          className={`flex size-10 shrink-0 items-center justify-center rounded-xl text-xs font-semibold ring-1 ring-border/50 ring-inset ${avatarStyles[txn.color]}`}
        >
          {txn.initials}
        </span>
        <div className="min-w-0 space-y-0.5">
          <p className="truncate text-sm font-semibold text-foreground">
            {txn.name}
          </p>
          <p className="truncate text-xs text-muted-foreground">{txn.meta}</p>
        </div>
      </div>

      <div className="flex shrink-0 flex-col items-end gap-1">
        <span className="text-sm font-semibold text-foreground tabular-nums">
          {txn.amount}
        </span>
        <span
          className={`inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-xs font-semibold tabular-nums ${trendStyles[txn.trend]}`}
        >
          <TrendIcon className="size-3" />
          {txn.delta}
        </span>
      </div>
    </li>
  )
}

export default function Widgets22() {
  return (
    <div className="w-full min-w-0">
      <Card className="relative mb-0 overflow-hidden rounded-2xl border-border/60 shadow-sm transition-shadow hover:shadow-md">
        {/* accent glow */}
        <span
          aria-hidden
          className="pointer-events-none absolute -top-12 -right-10 size-32 rounded-full bg-teal-500 opacity-20 blur-3xl"
        />

        <CardContent className="relative flex flex-col gap-4 p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Transactions
            </h3>
            <Button
              variant="ghost"
              size="icon-sm"
              className="shrink-0 text-muted-foreground"
              aria-label="More options"
            >
              <MoreVertical className="size-4" />
            </Button>
          </div>

          <Tabs defaultValue="all" className="gap-4">
            <TabsList
              variant="line"
              className="h-auto w-full justify-start gap-6 rounded-none border-b border-border/60 p-0 pb-1.5"
            >
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex-none px-0 pb-2 text-sm font-medium"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <ul className="flex flex-col">
                  {tab.items.map((txn, index) => (
                    <TransactionRow key={`${txn.name}-${index}`} txn={txn} />
                  ))}
                </ul>
              </TabsContent>
            ))}
          </Tabs>

          <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-2">
            <Button variant="outline" className="w-full">
              View all Transaction History
            </Button>
            <Button className="w-full">Create new Transaction</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
