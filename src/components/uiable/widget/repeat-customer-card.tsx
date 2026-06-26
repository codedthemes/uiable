"use client"

import { useEffect, useRef } from "react"
// third party
import ApexCharts from "apexcharts"
// assets
import { MoreVertical } from "lucide-react"

// project
import { cn } from "@/lib/utils"
// shadcn
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface RepeatCustomerCardProps {
  title: string
  value: string
  percentage: string
  series: number[]
  categories: string[]
}

//  ------------------------------ | BLOCK - REPEAT CUSTOMER CARD | ------------------------------  //

export default function RepeatCustomerCard({
  title,
  value,
  percentage,
  series,
  categories,
}: RepeatCustomerCardProps) {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let active = true
    let chart: ApexCharts | null = null

    const timer = setTimeout(() => {
      if (!active || !chartRef.current) return

      const options = {
        chart: { type: "area", height: 230, toolbar: { show: false } },
        colors: ["var(--primary)"],
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            type: "vertical",
            inverseColors: false,
            colorStops: [
              {
                offset: 0,
                color: ["var(--primary)"],
                opacity: 0.3,
              },
              {
                offset: 100,
                color: ["var(--primary)"],
                opacity: 0,
              },
            ],
          },
        },
        dataLabels: { enabled: false },
        stroke: { width: 1 },
        grid: { strokeDashArray: 4 },
        series: [{ data: series }],
        xaxis: {
          categories: categories,
          axisBorder: { show: false },
          axisTicks: { show: false },
        },
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
  }, [series, categories])

  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
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
        <div className="my-4 flex items-baseline justify-end gap-2">
          <h3 className="text-3xl font-bold">{value}</h3>
          <Badge
            variant="secondary"
            className="border-none bg-green-500/10 px-2 py-0.5 text-green-500"
          >
            {percentage}
          </Badge>
        </div>
        <div ref={chartRef} className="h-62.5"></div>
      </CardContent>
    </Card>
  )
}
