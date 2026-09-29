"use client"

import * as React from "react"

// third-party
import { cn } from "cn"
import { motion, type HTMLMotionProps } from "framer-motion"

const DEFAULT_GRADIENT =
  "linear-gradient(135deg, var(--primary) 0%, #8b5cf6 35%, #06b6d4 70%, var(--primary) 100%)"

export interface TextGradientProps extends HTMLMotionProps<"span"> {
  children: React.ReactNode
  gradient?: string
  duration?: number
  animate?: boolean
  className?: string
}

export function TextGradient({
  children,
  gradient = DEFAULT_GRADIENT,
  duration = 5,
  animate = true,
  className,
  ...props
}: TextGradientProps) {
  return (
    <motion.span
      className={cn(
        "inline-block bg-clip-text text-transparent select-none",
        className
      )}
      style={{
        backgroundImage: gradient,
        backgroundSize: animate ? "300% 300%" : "100% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      animate={
        animate
          ? {
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }
          : undefined
      }
      transition={
        animate
          ? {
              duration,
              repeat: Infinity,
              ease: "easeInOut",
            }
          : undefined
      }
      {...props}
    >
      {children}
    </motion.span>
  )
}
