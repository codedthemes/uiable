"use client"

// third-party
import { motion } from "framer-motion"

//  ------------------------------ | SPINNER - BARS SCALE | ------------------------------  //

export default function SpinnerBarsScale() {
  return (
    <div className="flex items-center gap-1" role="status" aria-label="Loading">
      <motion.div
        className="h-4 w-1.5 rounded-sm bg-primary"
        animate={{ scaleY: [0.5, 1.2, 0.5], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="h-4 w-1.5 rounded-sm bg-primary"
        animate={{ scaleY: [0.5, 1.2, 0.5], opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
      />
      <motion.div
        className="h-4 w-1.5 rounded-sm bg-primary"
        animate={{ scaleY: [0.5, 1.2, 0.5], opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
      />
      <span className="sr-only">Loading...</span>
    </div>
  )
}
