"use client";

import { useEffect, useRef } from "react";

// shadcn
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// third party
import ApexCharts, { ApexOptions } from "apexcharts";

// project
import { cn } from "@/lib/utils";

// assets
import {
  ArrowDownLeft,
  ArrowUpRight,
  MoreVertical,
  type LucideIcon,
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  percentage: string;
  icon?: LucideIcon;
  series: number[];
  variantColor?: "primary" | "orange" | "green" | "destructive";
  isLoss?: boolean;
}

const colorHex = {
  primary: "var(--primary)",
  orange: "#E58A00",
  green: "#2CA87F",
  destructive: "#DC2626",
};

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  orange: "bg-orange-500/10 text-orange-500",
  green: "bg-green-500/10 text-green-500",
  destructive: "bg-destructive/10 text-destructive",
};

const textColors = {
  primary: "text-primary",
  orange: "text-orange-500",
  green: "text-green-500",
  destructive: "text-destructive",
};

//  ------------------------------ | BLOCK - METRIC CARD | ------------------------------  //

export default function MetricCard({
  title,
  value,
  percentage,
  icon: Icon,
  series,
  variantColor = "primary",
  isLoss = false,
}: MetricCardProps) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    let chart: ApexCharts | null = null;

    const timer = setTimeout(() => {
      if (!active || !chartRef.current) return;

      const options: ApexOptions = {
        chart: {
          type: "bar" as const,
          height: 40,
          sparkline: { enabled: true },
        },
        colors: [colorHex[variantColor]],
        plotOptions: { bar: { borderRadius: 2, columnWidth: "80%" } },
        series: [{ data: series }],
        xaxis: { crosshairs: { width: 1 } },
        tooltip: {
          fixed: { enabled: false },
          x: { show: false },
          y: { title: { formatter: () => "" } },
          marker: { show: false },
        },
      };

      chart = new ApexCharts(chartRef.current, options as any);
      chart.render();
    }, 0);

    return () => {
      active = false;
      clearTimeout(timer);
      if (chart) {
        chart.destroy();
      }
    };
  }, [series, variantColor]);

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center",
                colorClasses[variantColor],
              )}
            >
              {isLoss ? (
                <ArrowDownLeft className="h-5 w-5" />
              ) : Icon ? (
                <Icon className="h-5 w-5" />
              ) : (
                <ArrowUpRight className="h-5 w-5" />
              )}
            </div>
            <h6 className="font-semibold text-sm">{title}</h6>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "h-8 w-8 rounded-xl shrink-0",
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
        <div className="bg-muted/30 p-4 rounded-xl">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-7">
              <div ref={chartRef} className="h-10"></div>
            </div>
            <div className="col-span-5 text-right">
              <h5 className="text-lg font-bold mb-0">{value}</h5>
              <p
                className={cn(
                  "text-xs font-medium flex items-center justify-end gap-1",
                  textColors[variantColor],
                )}
              >
                {isLoss ? (
                  <ArrowDownLeft className="h-3 w-3" />
                ) : (
                  <ArrowUpRight className="h-3 w-3" />
                )}
                {percentage}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
