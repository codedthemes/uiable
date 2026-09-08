"use client"

import { useState } from "react"

// third-party
import { motion, AnimatePresence } from "framer-motion"

// project-imports
import { cn } from "@/lib/utils"

// assets
import { Sparkles } from "lucide-react"

//  ------------------------------ | BUTTON AI | ------------------------------  //

export default function ButtonAI() {
  const [status, setStatus] = useState<"idle" | "thinking">("idle")

  const handleClick = () => {
    if (status === "idle") {
      setStatus("thinking")
      setTimeout(() => {
        setStatus("idle")
      }, 5000)
    }
  }

  return (
    <motion.button
      onClick={handleClick}
      layout
      className={cn(
        "relative flex h-11 items-center justify-center gap-2 overflow-hidden rounded-full border px-6 text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
        status === "idle"
          ? "border-border bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          : "border-transparent bg-card text-primary"
      )}
      whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
      whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
    >
      {/* Animated Gradient Border for Thinking State */}
      <AnimatePresence>
        {status === "thinking" && (
          <motion.div
            className="absolute inset-0 z-0 overflow-hidden rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Spinning Conic Gradient */}
            <motion.div
              className="absolute top-1/2 left-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0%, transparent 35%, var(--primary) 50%, transparent 65%, transparent 85%, var(--chart-2) 100%)",
              }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            />
            {/* Inner Background Mask to create the border */}
            <div className="absolute inset-[1.5px] rounded-full bg-card" />

            {/* Soft inner glow - opacity separated to handle hex variable transparency */}
            <motion.div className="absolute inset-[1.5px] rounded-full opacity-20 shadow-[inset_0_0_12px_var(--primary)]" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 flex h-5 w-5 shrink-0 items-center justify-center">
        <Sparkles
          className={cn(
            "h-4 w-4 transition-colors duration-300",
            status === "idle" ? "text-muted-foreground" : "text-primary"
          )}
          fill="currentColor"
        />
      </div>

      <span className="relative z-10 flex h-5 w-[70px] items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          {status === "idle" ? (
            <motion.span
              key="generate-text"
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute font-semibold tracking-wide"
            >
              Generate
            </motion.span>
          ) : (
            <motion.span
              key="thinking-text"
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute font-semibold tracking-wide"
            >
              Thinking
            </motion.span>
          )}
        </AnimatePresence>
      </span>

      {/* Outer Glow Effect behind the button when thinking */}
      <AnimatePresence>
        {status === "thinking" && (
          <motion.div
            className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-20 shadow-[0_0_20px_var(--primary)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </motion.button>
  )
}
