"use client"

import React, { useRef, useState, useCallback } from "react"

// third-party
import { motion, type HTMLMotionProps } from "framer-motion"

// project-imports
import { cn } from "@/lib/utils"

interface SpotlightCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  className?: string
  spotlightColor?: string
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(0, 229, 153, 0.14)",
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return

    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  const handleFocus = useCallback(() => {
    setOpacity(1)
  }, [])

  const handleBlur = useCallback(() => {
    setOpacity(0)
  }, [])

  const handleMouseEnter = useCallback(() => {
    setOpacity(1)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setOpacity(0)
  }, [])

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c1410]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/35 hover:shadow-[0_0_30px_rgba(0,229,153,0.12)]",
        className
      )}
      {...props}
    >
      {/* Mouse Reveal Spotlight Layer */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />
      {children}
    </motion.div>
  )
}

export const PortfolioSpotlightCard = SpotlightCard
