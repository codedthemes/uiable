"use client"

import { useEffect, useRef, type ReactNode, type RefObject } from "react"

import { cn } from "@/lib/utils"

interface DiagonalScrollProps {
  badge: ReactNode
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
  innerRef: RefObject<HTMLDivElement | null>
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
  opacity = 0.9,
  className,
}: DiagonalScrollProps) {
  const img1Ref = useRef<HTMLDivElement>(null)
  const img2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const img1 = img1Ref.current
    const img2 = img2Ref.current
    if (!img1 || !img2) return

    const duration = 25000
    const imgW = 1400
    const imgH = 1567
    const overlapFactor = 0.8

    const keyframes1 = [
      { transform: "translate(-50%, -50%) translate(0px, 0px)" },
      {
        transform: `translate(-50%, -50%) translate(${-imgW * overlapFactor}px, ${-imgH * overlapFactor}px)`,
      },
    ]

    const keyframes2 = [
      {
        transform: `translate(-50%, -50%) translate(${imgW * overlapFactor}px, ${imgH * overlapFactor}px)`,
      },
      { transform: "translate(-50%, -50%) translate(0px, 0px)" },
    ]

    const options = {
      duration: duration,
      iterations: Infinity,
      easing: "linear",
    }

    const anim1 = img1.animate(keyframes1, options)
    const anim2 = img2.animate(keyframes2, options)

    return () => {
      anim1.cancel()
      anim2.cancel()
    }
  }, [])

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
