"use client"

// third party
import { motion } from "framer-motion"

// shadcn
import { Button } from "@/components/ui/button"

// assets
import { ArrowRight } from "lucide-react"

//  ------------------------------ | BUTTON ANIMATED GRADIENT | ------------------------------  //

export default function ButtonAnimatedGradient() {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className="relative overflow-hidden rounded-full"
    >
      <Button
        variant="ghost"
        className="relative overflow-hidden rounded-full border border-border px-8 py-4 text-xs font-semibold tracking-wider text-foreground transition-all duration-300 hover:border-transparent hover:text-white"
      >
        {/* Gradient sliding background */}
        <motion.span
          className="via-primary-200 absolute inset-0 z-0 rounded-full bg-gradient-to-r from-primary to-cyan-500"
          variants={{
            rest: { scaleX: 0 },
            hover: { scaleX: 1 },
          }}
          style={{ originX: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Button content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          <motion.span
            variants={{
              rest: { x: 4 },
              hover: { x: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Explore
          </motion.span>

          <motion.span
            variants={{
              rest: { x: 0 },
              hover: { x: 8 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <ArrowRight className="size-4 shrink-0" />
          </motion.span>
        </span>
      </Button>
    </motion.div>
  )
}
