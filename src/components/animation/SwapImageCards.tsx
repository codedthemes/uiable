"use client"

import { useEffect, useState } from "react"

// third-party
import { AnimatePresence, motion } from "framer-motion"

// project-imports
import { cn } from "@/lib/utils"

// types

interface SwapImageCardsProps {
  /** Two or more image URLs — cycled one at a time like a shuffled deck. */
  images: string[]
  alt?: string
  /** Milliseconds each card stays on top before the next slides in. */
  interval?: number
  className?: string
}

//  ------------------------------ | SWAP IMAGE CARDS | ------------------------------  //
//  A small stack of screenshot "cards". The front card slides out and the next
//  one settles into place on a timer. Runs continuously.

export default function SwapImageCards({
  images,
  alt = "",
  interval = 2600,
  className,
}: SwapImageCardsProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, interval)
    return () => window.clearInterval(id)
  }, [images.length, interval])

  const nextIndex = (index + 1) % images.length

  return (
    <div
      className={cn(
        "relative h-full min-h-[110px] w-full [perspective:1200px]",
        className
      )}
    >
      {/* Back card — hints at the next screenshot in the deck. */}
      <div className="absolute inset-3 translate-y-3 scale-[0.94] overflow-hidden rounded-xl border border-border bg-muted/40 opacity-60">
        <img
          src={images[nextIndex]}
          alt=""
          aria-hidden="true"
          className="size-full object-cover object-top"
        />
      </div>

      {/* Front card — the one currently in focus. */}
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -28, rotate: -3, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, y: 34, rotate: 4, scale: 0.92 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-1 overflow-hidden rounded-xl border border-border bg-card shadow-lg"
        >
          <img
            src={images[index]}
            alt={alt}
            className="size-full object-cover object-top"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
