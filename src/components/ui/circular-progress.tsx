"use client"

// third-party
import { Progress as ProgressPrimitive } from "@base-ui/react/progress"

// project-imports
import { cn } from "@/lib/utils"

function CircularProgress({
  className,
  value,
  size = 100,
  strokeWidth = 10,
  showValue = true,
  ...props
}: ProgressPrimitive.Root.Props & {
  size?: number
  strokeWidth?: number
  showValue?: boolean
}) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDashoffset = circumference - ((value || 0) / 100) * circumference

  return (
    <ProgressPrimitive.Root
      value={value}
      data-slot="circular-progress"
      className={cn(
        "relative inline-flex items-center justify-center",
        className
      )}
      {...props}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90 transform"
      >
        {/* Background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-muted/50"
        />
        {/* Progress indicator */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="text-primary transition-all duration-500 ease-in-out"
        />
      </svg>
      {showValue && (
        <div
          data-slot="circular-progress-value"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-sm font-semibold text-foreground tabular-nums">
            {Math.round(value || 0)}%
          </span>
        </div>
      )}
    </ProgressPrimitive.Root>
  )
}

export { CircularProgress }
