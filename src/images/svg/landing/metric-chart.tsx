"use client"

import { motion } from "framer-motion"

interface MetricChartProps {
  fillPath: string
  path: string
  dotX: number
  dotY: number
  tooltip: string
  tooltipX: number
  tooltipY: number
}

//  ------------------------------ | SVG - METRIC CHART | ------------------------------  //

export default function MetricChart({
  fillPath,
  path,
  dotX,
  dotY,
  tooltip,
  tooltipX,
  tooltipY,
}: MetricChartProps) {
  return (
    <div className="relative pt-6">
      <svg
        viewBox="0 0 300 120"
        className="h-28 w-full overflow-visible text-primary"
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
  )
}
