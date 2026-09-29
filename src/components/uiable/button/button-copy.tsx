"use client"

import { useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"

// third-party
import { motion, AnimatePresence } from "framer-motion"

// assets
import { CopyIcon, CheckIcon } from "lucide-react"

//  ------------------------------ | BUTTON - COPY | ------------------------------  //

export default function ButtonCopy() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("https://uiable.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button
      variant="link"
      size="icon"
      onClick={handleCopy}
      aria-label={copied ? "Copied" : "Copy Link"}
      className="text-muted-foreground hover:text-foreground"
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.div
            key="check"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.15 }}
          >
            <CheckIcon className="text-green-500" />
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.15 }}
          >
            <CopyIcon />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  )
}
