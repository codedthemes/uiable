"use client"

import * as React from "react"

// third-party
import { cn } from "cn"
import { motion } from "framer-motion"

export type MarqueeDirection = "left" | "right"

export interface TextMarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  direction?: MarqueeDirection
  duration?: number
  pauseOnHover?: boolean
  fadeEdges?: boolean
  repeat?: number
  gap?: string
  className?: string
}

export function TextMarquee({
  children,
  direction = "left",
  duration = 20,
  pauseOnHover = true,
  fadeEdges = true,
  repeat = 4,
  gap = "2rem",
  className,
  style,
  ...props
}: TextMarqueeProps) {
  const [isPaused, setIsPaused] = React.useState(false)
  const isReverse = direction === "right"

  const maskStyle: React.CSSProperties = fadeEdges
    ? {
        maskImage:
          "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
      }
    : {}

  return (
    <div
      className={cn(
        "group relative flex w-full flex-row overflow-hidden select-none",
        className
      )}
      style={{
        ...maskStyle,
        ...style,
      }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      {...props}
    >
      {/* Infinite scrolling track */}
      <motion.div
        className={cn(
          "flex shrink-0 transform-gpu flex-row items-center",
          isPaused && "[animation-play-state:paused]"
        )}
        style={{
          gap,
        }}
        animate={{
          x: isReverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {Array.from({ length: repeat }).map((_, idx) => (
          <div
            key={idx}
            className="flex shrink-0 items-center whitespace-nowrap"
            style={{
              paddingRight: gap,
            }}
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
