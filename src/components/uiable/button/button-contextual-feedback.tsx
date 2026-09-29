"use client"

import { useState, useEffect } from "react"

// shadcn
import { Button } from "@/components/ui/button"

// third-party
import { cn } from "cn"
import { AnimatePresence, motion } from "framer-motion"

// assets
import { RefreshCw, Check, Loader2 } from "lucide-react"

//  ------------------------------ | BUTTON CONTEXTUAL FEEDBACK | ------------------------------  //

export default function ButtonContextualFeedback() {
  const [status, setStatus] = useState<"idle" | "syncing" | "success">("idle")

  const handleClick = () => {
    if (status === "idle") {
      setStatus("syncing")
      // Simulate generation process completing after 3 seconds
      setTimeout(() => {
        setStatus("success")
      }, 3000)
    }
  }

  // Reset to idle after success
  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus("idle")
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [status])

  return (
    <Button
      onClick={handleClick}
      render={
        <motion.button
          layout
          initial={false}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
          whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
        />
      }
      className={cn(
        "relative flex h-11 items-center justify-center overflow-hidden rounded-lg px-6 text-sm font-medium transition-colors duration-300 hover:opacity-90",
        status === "success" && "bg-green-500 text-white hover:bg-green-600",
        status === "syncing" &&
          "bg-muted text-muted-foreground hover:bg-muted/90",
        status === "idle" && "bg-primary text-white"
      )}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {status === "idle" && (
          <motion.span
            key="idle"
            initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.3, type: "spring", bounce: 0 }}
            className="flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            <span className="font-semibold tracking-wide">Sync</span>
          </motion.span>
        )}

        {status === "syncing" && (
          <motion.span
            key="syncing"
            initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.3, type: "spring", bounce: 0 }}
            className="flex items-center gap-2"
          >
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
            <span className="font-semibold tracking-wide">Syncing...</span>
          </motion.span>
        )}

        {status === "success" && (
          <motion.span
            key="success"
            initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.3, type: "spring", bounce: 0 }}
            className="flex items-center gap-2"
          >
            <Check className="h-4 w-4" />
            <span className="font-semibold tracking-wide">Synced</span>
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  )
}
