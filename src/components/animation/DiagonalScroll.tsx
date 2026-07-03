"use client"

import { useEffect, useRef, type ReactNode, type RefObject } from "react"

// project imports
import { cn } from "@/lib/utils"

interface DiagonalScrollProps {
  badge: ReactNode
  src: string
  darkSrc?: string
  duration?: number
  opacity?: number
  className?: string
}

//  ------------------------------ | DIAGONAL SCROLL | ------------------------------  //

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
      className="absolute top-0 left-0 w-full"
      style={{ opacity }}
    >
      <img
        src={src}
        alt=""
        className={cn(
          "pointer-events-none aspect-auto w-full object-cover",
          darkSrc && "dark:hidden"
        )}
      />
      {darkSrc && (
        <img
          src={darkSrc}
          alt=""
          className="pointer-events-none hidden aspect-auto w-full object-cover dark:block"
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

    const duration = 20000

    const keyframes1 = [
      { transform: "translateY(0%)" },
      { transform: "translateY(-100%)" },
    ]

    const keyframes2 = [
      { transform: "translateY(100%)" },
      { transform: "translateY(0%)" },
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
      <div className="absolute inset-0">
        <ScrollImage
          innerRef={img1Ref}
          src={src}
          darkSrc={darkSrc}
          opacity={opacity}
        />
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
