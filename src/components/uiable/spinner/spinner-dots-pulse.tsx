"use client"

// third-party
import { motion } from "framer-motion"

//  ------------------------------ | SPINNER - DOTS PULSE | ------------------------------  //

export default function SpinnerDotsPulse() {
  const dotVariants = {
    initial: { y: 0, opacity: 0.5 },
    animate: { y: -6, opacity: 1 },
  }

  return (
    <div
      className="flex items-center gap-1.5"
      role="status"
      aria-label="Loading"
    >
      <motion.div
        className="size-2 rounded-full bg-primary"
        variants={dotVariants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="size-2 rounded-full bg-primary"
        variants={dotVariants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0.15,
        }}
      />
      <motion.div
        className="size-2 rounded-full bg-primary"
        variants={dotVariants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0.3,
        }}
      />
      <span className="sr-only">Loading...</span>
    </div>
  )
}
