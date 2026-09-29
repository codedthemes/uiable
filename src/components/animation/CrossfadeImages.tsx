"use client"

import { useEffect, useState } from "react"

// project-imports
import { cn } from "@/lib/utils"

// types

interface CrossfadeImage {
  src: string
  darkSrc?: string
}

interface CrossfadeImagesProps {
  /** Three to five screenshot URLs, shown one at a time on a gentle loop. */
  images: (string | CrossfadeImage)[]
  alt?: string
  /** Milliseconds each screenshot stays on screen before the next fades in. */
  interval?: number
  className?: string
}

//  ------------------------------ | CROSSFADE IMAGES | ------------------------------  //
//  A calm slideshow: framed screenshots cross-fade into one another while drifting
//  in with a slow zoom. No rotation or bounce — it reads as a quiet product tour.

export default function CrossfadeImages({
  images,
  alt = "",
  interval = 3200,
  className,
}: CrossfadeImagesProps) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % images.length)
    }, interval)
    return () => window.clearInterval(id)
  }, [images.length, interval])

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-start bg-white px-3 pb-3 lg:min-h-[150px] lg:items-stretch dark:bg-card",
        className
      )}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted/40 lg:aspect-auto">
        {images.map((image, index) => {
          const { src, darkSrc } =
            typeof image === "string"
              ? { src: image, darkSrc: undefined }
              : image
          const isActive = index === active

          return (
            <div key={src} aria-hidden={!isActive}>
              <img
                src={src}
                alt={isActive ? alt : ""}
                loading="lazy"
                className={cn(
                  "absolute inset-0 size-full object-contain object-center transition-[opacity,transform] duration-[1200ms] ease-out will-change-transform motion-reduce:transition-none",
                  isActive ? "scale-100 opacity-100" : "scale-105 opacity-0",
                  darkSrc && "dark:hidden"
                )}
              />
              {darkSrc && (
                <img
                  src={darkSrc}
                  alt={isActive ? alt : ""}
                  loading="lazy"
                  className={cn(
                    "absolute inset-0 hidden size-full object-contain object-center transition-[opacity,transform] duration-[1200ms] ease-out will-change-transform motion-reduce:transition-none dark:block",
                    isActive ? "scale-100 opacity-100" : "scale-105 opacity-0"
                  )}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
