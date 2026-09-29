"use client"

import {
  useCallback,
  useEffect,
  useId,
  useState,
  type ReactNode,
  type RefObject,
} from "react"

// third-party
import { cn } from "cn"
import { motion, useReducedMotion } from "framer-motion"

interface AnimatedBeamProps {
  containerRef: RefObject<HTMLElement | null>
  fromRef: RefObject<HTMLElement | null>
  toRef: RefObject<HTMLElement | null>
  curvature?: number
  reverse?: boolean
  className?: string
  pathColor?: string
  pathWidth?: number
  pathOpacity?: number
  gradientStartColor?: string
  gradientStopColor?: string
  dotted?: boolean
  dotSpacing?: number
  delay?: number
  duration?: number
  startXOffset?: number
  startYOffset?: number
  endXOffset?: number
  endYOffset?: number
}

//  ------------------------------ | ANIMATED BEAM | ------------------------------  //

export function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  className,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  dotted = false,
  dotSpacing = 6,
  delay = 0,
  // Fixed rather than random: this renders on the server too, and a differing value trips hydration.
  duration = 5,
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}: AnimatedBeamProps) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "")
  const gradientId = `beam-gradient-${id}`
  const reduce = useReducedMotion()

  const [pathD, setPathD] = useState("")
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 })

  // Flipped so the lit window enters from the far end when `reverse` is set.
  const gradientCoordinates = reverse
    ? { x1: ["90%", "-10%"], x2: ["100%", "0%"] }
    : { x1: ["10%", "110%"], x2: ["0%", "100%"] }

  const updatePath = useCallback(() => {
    const container = containerRef.current
    const from = fromRef.current
    const to = toRef.current
    if (!container || !from || !to) return

    const containerRect = container.getBoundingClientRect()
    const rectA = from.getBoundingClientRect()
    const rectB = to.getBoundingClientRect()

    setSvgDimensions({
      width: containerRect.width,
      height: containerRect.height,
    })

    const startX =
      rectA.left - containerRect.left + rectA.width / 2 + startXOffset
    const startY =
      rectA.top - containerRect.top + rectA.height / 2 + startYOffset
    const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset
    const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset

    const controlY = startY - curvature
    setPathD(
      `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`
    )
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ])

  useEffect(() => {
    updatePath()
    const container = containerRef.current
    if (!container || typeof ResizeObserver === "undefined") return

    // Watching the container alone is enough, since anything that moves the nodes resizes it too.
    const observer = new ResizeObserver(updatePath)
    observer.observe(container)
    return () => observer.disconnect()
  }, [containerRef, updatePath])

  // containerRef must be positioned (relative), since this SVG overlays it via absolute positioning.
  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute top-0 left-0 transform-gpu stroke-2",
        className
      )}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        strokeDasharray={dotted ? `${dotSpacing} ${dotSpacing}` : undefined}
      />
      {/* Under reduced motion the track still draws; only the travelling pulse is dropped. */}
      {!reduce && (
        <path
          d={pathD}
          stroke={`url(#${gradientId})`}
          strokeWidth={pathWidth}
          strokeOpacity="1"
          strokeLinecap="round"
        />
      )}
      <defs>
        <motion.linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
          animate={
            reduce
              ? undefined
              : {
                  x1: gradientCoordinates.x1,
                  x2: gradientCoordinates.x2,
                  y1: ["0%", "0%"],
                  y2: ["0%", "0%"],
                }
          }
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          {/* Transparent stops at both ends feather the lit window in and out. */}
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  )
}

interface CircleProps {
  children?: ReactNode
  className?: string
  ref?: RefObject<HTMLDivElement | null>
}

export function Circle({ children, className, ref }: CircleProps) {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border border-border bg-card p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  )
}
