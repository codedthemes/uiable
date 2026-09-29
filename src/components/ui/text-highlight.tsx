"use client"

import * as React from "react"

// third-party
import { cn } from "cn"
import { motion } from "framer-motion"

export type HighlightStyle = "background" | "underline" | "brush"

export interface TextHighlightProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  styleVariant?: HighlightStyle
  color?: string
  delay?: number
  duration?: number
  triggerOnView?: boolean
  className?: string
}

export function TextHighlight({
  children,
  styleVariant = "background",
  color,
  delay = 0.3,
  duration = 0.6,
  triggerOnView = true,
  className,
  ...props
}: TextHighlightProps) {
  if (styleVariant === "underline") {
    return (
      <span className={cn("relative inline-block", className)} {...props}>
        <span>{children}</span>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={triggerOnView ? { scaleX: 1 } : undefined}
          animate={!triggerOnView ? { scaleX: 1 } : undefined}
          viewport={{ once: true }}
          transition={{
            duration,
            delay,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={cn(
            "absolute right-0 bottom-0 left-0 h-1 origin-left rounded-full bg-primary",
            color
          )}
        />
      </span>
    )
  }

  if (styleVariant === "brush") {
    return (
      <span className={cn("relative inline-block px-1", className)} {...props}>
        <motion.svg
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={
            triggerOnView ? { pathLength: 1, opacity: 1 } : undefined
          }
          animate={!triggerOnView ? { pathLength: 1, opacity: 1 } : undefined}
          viewport={{ once: true }}
          transition={{
            duration,
            delay,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -bottom-1 left-0 h-3 w-full overflow-visible text-primary"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0 15 Q 25 5, 50 15 T 100 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </motion.svg>
        <span className="relative z-10">{children}</span>
      </span>
    )
  }

  // "background" highlight
  return (
    <span
      className={cn("relative inline-block px-1.5 py-0.5", className)}
      {...props}
    >
      <motion.span
        initial={{ width: "0%" }}
        whileInView={triggerOnView ? { width: "100%" } : undefined}
        animate={!triggerOnView ? { width: "100%" } : undefined}
        viewport={{ once: true }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={cn(
          "absolute inset-0 origin-left -rotate-1 rounded bg-primary/20",
          color
        )}
      />
      <span className="relative z-10">{children}</span>
    </span>
  )
}
