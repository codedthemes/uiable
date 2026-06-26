"use client"

import { useEffect, useRef } from "react"
// third party
import ApexCharts from "apexcharts"
// assets
import { MoreVertical } from "lucide-react"

import { cn } from "@/lib/utils"
// shadcn
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// project
import IncomeItem from "./income-item"

interface TotalIncomeCardProps {
  title: string
  series: number[]
  labels: string[]
  items: { label: string; amount: string; change: string; color: string }[]
}

//  ------------------------------ | BLOCK - TOTAL INCOME CARD | ------------------------------  //

export default function TotalIncomeCard({
  title,
  series,
  labels,
  items,
}: TotalIncomeCardProps) {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let active = true
    let chart: ApexCharts | null = null

    const timer = setTimeout(() => {
      if (!active || !chartRef.current) return

      const options = {
        chart: { height: 320, type: "donut" },
        series: series,
        colors: ["var(--primary)", "#E58A00", "#2CA87F", "#4680FF"],
        labels: labels,
        fill: { opacity: [1, 1, 1, 0.3] },
        legend: { show: false },
        plotOptions: {
          pie: {
            donut: {
              size: "65%",
              labels: {
                show: true,
                name: { show: true },
                value: { show: true },
              },
            },
          },
        },
        dataLabels: { enabled: false },
        responsive: [
          {
            breakpoint: 575,
            options: {
              chart: { height: 250 },
              plotOptions: {
                pie: { donut: { size: "65%", labels: { show: false } } },
              },
            },
          },
        ],
      }

      chart = new ApexCharts(chartRef.current, options as any)
      chart.render()
    }, 0)

    return () => {
      active = false
      clearTimeout(timer)
      if (chart) {
        chart.destroy()
      }
    }
  }, [series, labels])

  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "h-8 w-8 shrink-0 rounded-xl"
              )}
            >
              <MoreVertical className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Today</DropdownMenuItem>
              <DropdownMenuItem>Weekly</DropdownMenuItem>
              <DropdownMenuItem>Monthly</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div ref={chartRef} className="mb-6 h-[250px]"></div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((item, idx) => (
            <IncomeItem key={idx} {...item} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
