"use client"

// shadcn
import { Button } from "@/components/ui/button"

// third party
import { motion } from "framer-motion"

//  ------------------------------ | BUTTON ANIMATED | ------------------------------  //

export default function ButtonAnimated() {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className="relative overflow-hidden rounded-full"
    >
      <Button
        variant="ghost"
        className="relative overflow-hidden rounded-full bg-primary px-8 py-4 text-xs tracking-wider text-white transition-colors duration-300 hover:bg-[#1656e0] hover:text-white"
      >
        {/* Sliding dark */}
        <motion.span
          className="absolute inset-0 z-0 rounded-[full] bg-[#1656e0]"
          variants={{
            rest: { scaleX: 0 },
            hover: { scaleX: 1 },
          }}
          style={{ originX: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
        />

        <span className="relative z-10">Hover me</span>
      </Button>
    </motion.div>
  )
}
