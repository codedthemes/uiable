"use client"

import { useEffect, useRef } from "react"

// project-imports
import { cn } from "@/lib/utils"

// types

interface AutoScrollPreviewProps {
  /** Image URL — a tall screenshot that scrolls vertically inside the frame. */
  src: string
  alt?: string
  /** Seconds for one full top-to-bottom-and-back scroll cycle. */
  duration?: number
  className?: string
}

//  ------------------------------ | AUTO SCROLL PREVIEW | ------------------------------  //
//  A framed screenshot that slowly pans from top to bottom on a loop, as if a
//  visitor were scrolling the page. Runs continuously.

export default function AutoScrollPreview({
  src,
  alt = "",
  duration = 14,
  className,
}: AutoScrollPreviewProps) {
  const imgRef = useRef<HTMLImageElement>(null)
  const animationRef = useRef<Animation | null>(null)

  useEffect(() => {
    const img = imgRef.current
    if (!img) return

    const start = () => {
      animationRef.current = img.animate(
        [
          { transform: "translateY(0%)" },
          { transform: "translateY(calc(-100% + 120px))" },
          { transform: "translateY(0%)" },
        ],
        {
          duration: duration * 1000,
          iterations: Infinity,
          easing: "ease-in-out",
        }
      )
    }

    if (img.complete) start()
    else img.addEventListener("load", start, { once: true })

    return () => animationRef.current?.cancel()
  }, [src, duration])

  return (
    <div
      className={cn(
        "relative h-full min-h-[110px] w-full overflow-hidden rounded-lg bg-muted/40",
        className
      )}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-x-0 top-0 w-full will-change-transform"
      />
      {/* Soft fade at top and bottom so the pan reads as a window into a page. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-card/40 via-transparent to-card/40" />
    </div>
  )
}
