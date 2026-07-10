"use client"

import { useEffect, useRef, useState } from "react"
import { SparkleGrid } from "@/images/svg/landing"

interface HoverBgProps {
  className?: string
}

//  ------------------------------ | HOVER BG | ------------------------------  //

export default function HoverBg({ className = "" }: HoverBgProps) {
  const glowRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const positionRef = useRef({
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
    initialized: false,
  })

  useEffect(() => {
    let rafId: number
    const el = glowRef.current
    const parent = el?.parentElement

    const handleMouseMove = (e: MouseEvent) => {
      if (!el || !parent) return
      const rect = parent.getBoundingClientRect()

      // Update targeted coordinates relative to the parent's bounding box
      positionRef.current.targetX = e.clientX - rect.left
      positionRef.current.targetY = e.clientY - rect.top

      // Snap immediately to mouse on first movement
      if (!positionRef.current.initialized) {
        positionRef.current.currentX = positionRef.current.targetX
        positionRef.current.currentY = positionRef.current.targetY
        positionRef.current.initialized = true
        setIsVisible(true)
      }
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const animate = () => {
      if (el && positionRef.current.initialized) {
        const { targetX, targetY, currentX, currentY } = positionRef.current

        // Buttery-smooth easing interpolation (factor: 0.08)
        const nextX = currentX + (targetX - currentX) * 0.08
        const nextY = currentY + (targetY - currentY) * 0.08

        positionRef.current.currentX = nextX
        positionRef.current.currentY = nextY

        // Update the mask-image directly in JS for bulletproof browser compatibility
        const maskStyle = `radial-gradient(circle 180px at ${nextX}px ${nextY}px, black, transparent)`
        el.style.setProperty("-webkit-mask-image", maskStyle)
        el.style.setProperty("mask-image", maskStyle)
      }

      rafId = requestAnimationFrame(animate)
    }

    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove)
      parent.addEventListener("mouseleave", handleMouseLeave)
      parent.addEventListener("mouseenter", handleMouseEnter)
    }

    rafId = requestAnimationFrame(animate)

    return () => {
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove)
        parent.removeEventListener("mouseleave", handleMouseLeave)
        parent.removeEventListener("mouseenter", handleMouseEnter)
      }
      cancelAnimationFrame(rafId)
    }
  }, [])

  const hasOpacityClass = className
    .split(" ")
    .some(
      (c) =>
        c.startsWith("opacity-") ||
        c.startsWith("dark:opacity-") ||
        c.includes(":opacity-")
    )

  return (
    <div
      ref={glowRef}
      className={`pointer-events-none absolute inset-0 z-20 h-full w-full transition-opacity duration-500 ${
        hasOpacityClass ? "" : "opacity-60 dark:opacity-40"
      } ${className}`}
      style={{
        opacity: isVisible ? undefined : 0,
        // Default mask in case mouse hasn't moved yet
        WebkitMaskImage:
          "radial-gradient(circle 180px at 50% 50%, black, transparent)",
        maskImage:
          "radial-gradient(circle 180px at 50% 50%, black, transparent)",
      }}
    >
      {/* The SVG grid pattern repeated across the screen and revealed by the mask */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-primary/50 dark:text-primary"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="glow-grid-pattern"
            patternUnits="userSpaceOnUse"
            width="282"
            height="282"
          >
            <SparkleGrid />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#glow-grid-pattern)" />
      </svg>
    </div>
  )
}
