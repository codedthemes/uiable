"use client"

import {
  useId,
  useState,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react"

// third-party
import { cn } from "cn"
import { motion } from "framer-motion"

type BlurIntensity = "sm" | "md" | "lg" | "xl"
type Intensity = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

interface LiquidGlassCardProps {
  children: ReactNode
  className?: string
  draggable?: boolean
  expandable?: boolean
  width?: string
  height?: string
  expandedWidth?: string
  expandedHeight?: string
  blurIntensity?: BlurIntensity
  shadowIntensity?: Intensity
  borderRadius?: string
  glowIntensity?: Intensity
}

const blurClasses: Record<BlurIntensity, string> = {
  sm: "backdrop-blur-xs",
  md: "backdrop-blur-md",
  lg: "backdrop-blur-lg",
  xl: "backdrop-blur-xl",
}

const shadowStyles: Record<Intensity, string> = {
  none: "inset 0 0 0 0 rgba(255, 255, 255, 0)",
  xs: "inset 1px 1px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 0 rgba(255, 255, 255, 0.3)",
  sm: "inset 2px 2px 2px 0 rgba(255, 255, 255, 0.35), inset -2px -2px 2px 0 rgba(255, 255, 255, 0.35)",
  md: "inset 3px 3px 3px 0 rgba(255, 255, 255, 0.45), inset -3px -3px 3px 0 rgba(255, 255, 255, 0.45)",
  lg: "inset 4px 4px 4px 0 rgba(255, 255, 255, 0.5), inset -4px -4px 4px 0 rgba(255, 255, 255, 0.5)",
  xl: "inset 6px 6px 6px 0 rgba(255, 255, 255, 0.55), inset -6px -6px 6px 0 rgba(255, 255, 255, 0.55)",
  "2xl":
    "inset 8px 8px 8px 0 rgba(255, 255, 255, 0.6), inset -8px -8px 8px 0 rgba(255, 255, 255, 0.6)",
}

const glowStyles: Record<Intensity, string> = {
  none: "0 4px 4px rgba(0, 0, 0, 0.05), 0 0 12px rgba(0, 0, 0, 0.05)",
  xs: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 16px rgba(255, 255, 255, 0.05)",
  sm: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 24px rgba(255, 255, 255, 0.1)",
  md: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 32px rgba(255, 255, 255, 0.15)",
  lg: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 40px rgba(255, 255, 255, 0.2)",
  xl: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 48px rgba(255, 255, 255, 0.25)",
  "2xl":
    "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 60px rgba(255, 255, 255, 0.3)",
}

const expandTransition = { duration: 0.4, ease: [0.5, 1.5, 0.5, 1] as const }

//  ------------------------------ | LIQUID GLASS | ------------------------------  //

export function LiquidGlassCard({
  children,
  className,
  draggable = true,
  expandable = false,
  width,
  height,
  expandedWidth,
  expandedHeight,
  blurIntensity = "xl",
  borderRadius = "32px",
  glowIntensity = "sm",
  shadowIntensity = "md",
}: LiquidGlassCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Each instance needs its own filter id, since ids are document-global and would otherwise collide.
  const filterId = `glass-blur-${useId().replace(/[^a-zA-Z0-9]/g, "")}`

  const handleToggleExpansion = (event: MouseEvent<HTMLDivElement>) => {
    if (!expandable) return
    // A click meant for a control inside the card is not a click on the card.
    if (
      (event.target as HTMLElement).closest(
        "a, button, input, select, textarea"
      )
    ) {
      return
    }
    setIsExpanded((open) => !open)
  }

  // Children must sit above these layers (e.g. relative z-30) or they render under the glass.
  const layers = (
    <>
      <div
        aria-hidden="true"
        className={cn("absolute inset-0 z-0", blurClasses[blurIntensity])}
        style={{ borderRadius, filter: `url(#${filterId})` }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10"
        style={{ borderRadius, boxShadow: glowStyles[glowIntensity] }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-20"
        style={{ borderRadius, boxShadow: shadowStyles[shadowIntensity] }}
      />
      {children}
    </>
  )

  // Sizing moves from `style` to the variants when expandable, so it animates instead of snapping.
  const style: CSSProperties = {
    borderRadius,
    ...(width && !expandable && { width }),
    ...(height && !expandable && { height }),
  }

  const filter = (
    <svg aria-hidden="true" className="pointer-events-none absolute size-0">
      <defs>
        <filter
          id={filterId}
          x="0"
          y="0"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.003 0.007"
            numOctaves={1}
            result="turbulence"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale={200}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  )

  // Skip the motion wrapper entirely when there's nothing to animate.
  if (!draggable && !expandable) {
    return (
      <>
        {filter}
        <div className={cn("relative", className)} style={style}>
          {layers}
        </div>
      </>
    )
  }

  return (
    <>
      {filter}
      <motion.div
        className={cn(
          "relative",
          draggable && "cursor-grab active:cursor-grabbing",
          expandable && "cursor-pointer",
          className
        )}
        style={style}
        variants={
          expandable
            ? {
                collapsed: {
                  width: width || "auto",
                  height: height || "auto",
                  transition: expandTransition,
                },
                expanded: {
                  width: expandedWidth || "auto",
                  height: expandedHeight || "auto",
                  transition: expandTransition,
                },
              }
            : undefined
        }
        animate={
          expandable ? (isExpanded ? "expanded" : "collapsed") : undefined
        }
        onClick={expandable ? handleToggleExpansion : undefined}
        drag={draggable}
        dragConstraints={
          draggable ? { left: 0, right: 0, top: 0, bottom: 0 } : undefined
        }
        dragElastic={draggable ? 0.3 : undefined}
        dragTransition={
          draggable
            ? { bounceStiffness: 300, bounceDamping: 10, power: 0.3 }
            : undefined
        }
        whileDrag={draggable ? { scale: 1.02 } : undefined}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        {layers}
      </motion.div>
    </>
  )
}
