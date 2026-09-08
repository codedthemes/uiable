"use client"

// third-party
import { motion } from "framer-motion"

//  ------------------------------ | SPINNER - SEGMENTED APERTURE | ------------------------------  //

export default function SpinnerSegmentedAperture() {
  const segments = Array.from({ length: 12 }, (_, i) => i)

  return (
    <div className="relative size-10" role="status" aria-label="Loading">
      {segments.map((i) => {
        const rotation = i * 30
        return (
          <div
            key={i}
            className="absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <motion.div
              className="h-2.5 w-full rounded-full bg-primary"
              animate={{
                opacity: [0.15, 1, 0.15],
                scaleY: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (i / 12) * 1,
              }}
            />
          </div>
        )
      })}
      <span className="sr-only">Loading...</span>
    </div>
  )
}
