"use client"

import React from "react"

// third-party
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"

// project-imports
import { cn } from "@/lib/utils"

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  innerClassName?: string
  spotlightColor?: string
  borderColor?: string
}

export function SpotlightCard({
  children,
  className = "",
  innerClassName = "",
  spotlightColor = "rgba(37, 99, 235, 0.06)",
  borderColor = "rgba(37, 99, 235, 0.6)",
  ...props
}: SpotlightCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative rounded-[16px] p-0.5 transition-all duration-300 hover:shadow-xl",
        className
      )}
      {...props}
    >
      {/* Default Static Base Border */}
      <div className="pointer-events-none absolute inset-0 rounded-[16px] border border-slate-200/80 dark:border-slate-800/80" />

      {/* Dynamic Mouse Cursor Spotlight Glowing Border */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20 rounded-[16px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              320px circle at ${mouseX}px ${mouseY}px,
              ${borderColor},
              transparent 70%
            )
          `,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1.5px",
        }}
      />

      {/* Inner Card Container */}
      <div
        className={cn(
          "relative z-10 h-full w-full overflow-hidden rounded-[14px] bg-white p-6 transition-colors duration-300 sm:p-8 dark:bg-slate-900",
          innerClassName
        )}
      >
        {/* Soft Ambient Inner Spotlight */}
        <motion.div
          className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                ${spotlightColor},
                transparent 80%
              )
            `,
          }}
        />
        <div className="relative z-10 h-full w-full">{children}</div>
      </div>
    </div>
  )
}

export const SaasSpotlightCard = SpotlightCard
