"use client"

// third-party
import { motion } from "framer-motion"

//  ------------------------------ | SPINNER - CAPSULE TRACK | ------------------------------  //

export default function SpinnerCapsuleTrack() {
  return (
    <div
      className="relative flex h-3 w-16 items-center overflow-hidden rounded-full bg-primary/15 p-0.5"
      role="status"
      aria-label="Loading"
    >
      <motion.div
        className="h-full rounded-full bg-primary"
        animate={{
          left: ["0%", "50%", "0%"],
          width: ["30%", "60%", "30%"],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ position: "absolute" }}
      />
      <span className="sr-only">Loading...</span>
    </div>
  )
}
