"use client"

import React, { useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

interface DiagonalScrollProps {
  badge: React.ReactNode
  src: string
  darkSrc?: string
  duration?: number
  opacity?: number
  className?: string
}

function ScrollImage({
  innerRef,
  src,
  darkSrc,
  opacity,
}: {
  innerRef: React.RefObject<HTMLDivElement | null>
  src: string
  darkSrc?: string
  opacity: number
}) {
  return (
    <div
      ref={innerRef}
      className="absolute top-0 left-0 w-[1400px] min-w-[1024px]"
      style={{ opacity, transform: "translate(-50%, -50%)" }}
    >
      <img
        src={src}
        alt=""
        className={cn(
          "pointer-events-none aspect-auto w-full",
          darkSrc && "dark:hidden"
        )}
      />
      {darkSrc && (
        <img
          src={darkSrc}
          alt=""
          className="pointer-events-none hidden aspect-auto w-full dark:block"
        />
      )}
    </div>
  )
}

export default function DiagonalScroll({
  badge,
  src,
  darkSrc,
  duration = 20,
  opacity = 0.9,
  className,
}: DiagonalScrollProps) {
  const img1Ref = useRef<HTMLDivElement>(null)
  const img2Ref = useRef<HTMLDivElement>(null)
  const anim1Ref = useRef<Animation | null>(null)
  const anim2Ref = useRef<Animation | null>(null)

  useEffect(() => {
    if (!img1Ref.current || !img2Ref.current) return

    anim1Ref.current = img1Ref.current.animate(
      [
        { transform: "translate(-50%, -50%) translate(0%, 0%)" },
        { transform: "translate(-50%, -50%) translate(-100%, -100%)" },
      ],
      {
        duration: duration * 1000,
        iterations: Infinity,
        easing: "linear",
      }
    )

    anim2Ref.current = img2Ref.current.animate(
      [
        { transform: "translate(-50%, -50%) translate(100%, 100%)" },
        { transform: "translate(-50%, -50%) translate(0%, 0%)" },
      ],
      {
        duration: duration * 1000,
        iterations: Infinity,
        easing: "linear",
      }
    )

    return () => {
      anim1Ref.current?.cancel()
      anim2Ref.current?.cancel()
    }
  }, [duration])

  return (
    <div
      className={cn(
        "relative flex h-full min-h-[380px] w-full items-center justify-center overflow-hidden rounded-3xl select-none sm:min-h-[440px] md:min-h-[500px]",
        className
      )}
    >
      <div className="absolute top-1/2 left-1/2 h-0 w-0">
        {/* Image 1 — starts visible at center, exits top-left */}
        <ScrollImage
          innerRef={img1Ref}
          src={src}
          darkSrc={darkSrc}
          opacity={opacity}
        />

        {/* Image 2 — starts at bottom-right (outside), enters as Image 1 exits */}
        <ScrollImage
          innerRef={img2Ref}
          src={src}
          darkSrc={darkSrc}
          opacity={opacity}
        />
      </div>

      {/* Center badge */}
      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
        {badge}
      </div>
    </div>
  )
}
