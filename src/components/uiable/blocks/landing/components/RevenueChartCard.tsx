"use client";

import { useState } from "react";

// shadcn
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

// third party
import { motion } from "framer-motion";

// assets
import { IconArrowDownRight, IconArrowUpRight } from "@tabler/icons-react";

// constants
const metricData = {
  revenue: {
    value: "22,680",
    trend: "up",
    change: "+8.2%",
    path: "M 0 100 Q 50 110 100 80 T 200 40 T 300 20",
    fillPath: "M 0 100 Q 50 110 100 80 T 200 40 T 300 20 L 300 120 L 0 120 Z",
    dotX: 160,
    dotY: 55,
    tooltip: "+1024",
    tooltipX: 130,
    tooltipY: 15
  },
  profit: {
    value: "14,820",
    trend: "up",
    change: "+15.4%",
    path: "M 0 90 Q 50 50 100 70 T 200 35 T 300 25",
    fillPath: "M 0 90 Q 50 50 100 70 T 200 35 T 300 25 L 300 120 L 0 120 Z",
    dotX: 200,
    dotY: 35,
    tooltip: "+842",
    tooltipX: 170,
    tooltipY: -5
  },
  sales: {
    value: "3,450",
    trend: "down",
    change: "-2.1%",
    path: "M 0 30 Q 50 40 100 60 T 200 75 T 300 90",
    fillPath: "M 0 30 Q 50 40 100 60 T 200 75 T 300 90 L 300 120 L 0 120 Z",
    dotX: 150,
    dotY: 67,
    tooltip: "-120",
    tooltipX: 120,
    tooltipY: 27
  }
} as const;

type MetricType = keyof typeof metricData;

interface TrendBadgeProps {
  trend: "up" | "down";
  change: string;
}

function TrendBadge({ trend, change }: TrendBadgeProps) {
  const isUp = trend === "up";
  return (
    <div
      className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-md mt-1 transition-colors duration-300 ${isUp
        ? "text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20"
        : "text-rose-500 dark:text-rose-400 bg-rose-500/10 dark:bg-rose-500/20"
        }`}
    >
      {isUp ? (
        <IconArrowUpRight className="size-3.5 stroke-[2.5]" />
      ) : (
        <IconArrowDownRight className="size-3.5 stroke-[2.5]" />
      )}
      <span>{change}</span>
    </div>
  );
}

interface MetricChartProps {
  fillPath: string;
  path: string;
  dotX: number;
  dotY: number;
  tooltip: string;
  tooltipX: number;
  tooltipY: number;
}

function MetricChart({
  fillPath,
  path,
  dotX,
  dotY,
  tooltip,
  tooltipX,
  tooltipY
}: MetricChartProps) {
  return (
    <div className="relative pt-6">
      <svg
        viewBox="0 0 300 120"
        className="w-full h-28 text-primary overflow-visible"
      >
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <motion.path
          d={fillPath}
          fill="url(#chartGrad)"
          initial={false}
          animate={{ d: fillPath }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
        <motion.path
          d={path}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={false}
          animate={{ d: path }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
        {/* Active point */}
        <motion.circle
          cx={dotX}
          cy={dotY}
          r="4.5"
          fill="var(--primary)"
          stroke="var(--card)"
          strokeWidth="2"
          initial={false}
          animate={{ cx: dotX, cy: dotY }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />

        {/* Tooltip */}
        <motion.g
          initial={false}
          animate={{ x: tooltipX, y: tooltipY }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <rect
            x="0"
            y="0"
            width="60"
            height="22"
            rx="11"
            fill="var(--primary)"
          />
          <path d="M 30 22 L 27 25 L 33 25 Z" fill="var(--primary)" />
          <text
            x="30"
            y="14"
            fill="var(--primary-foreground)"
            fontSize="10"
            fontWeight="bold"
            textAnchor="middle"
          >
            {tooltip}
          </text>
        </motion.g>
      </svg>
    </div>
  );
}

//  ------------------------------ | BLOCK - REVENUE CHART CARD | ------------------------------  //

export default function RevenueChartCard() {
  const [metric, setMetric] = useState<MetricType>("revenue");
  const currentData = metricData[metric];

  return (
    <div className="border border-border rounded-xl p-6 flex flex-col gap-4 bg-card">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <Select
            value={metric}
            onValueChange={(val) => {
              if (val) setMetric(val as MetricType);
            }}
          >
            <SelectTrigger className="w-auto h-auto p-0 border-0 bg-transparent text-xs text-muted-foreground font-medium hover:text-foreground gap-1 focus:ring-0 focus:border-transparent">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="revenue">Revenue</SelectItem>
              <SelectItem value="profit">Profit</SelectItem>
              <SelectItem value="sales">Sales</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-2xl font-extrabold text-foreground tracking-tight transition-all duration-300">
            {currentData.value}
          </p>
        </div>
        <TrendBadge trend={currentData.trend} change={currentData.change} />
      </div>

      <MetricChart {...currentData} />
    </div>
  );
}
