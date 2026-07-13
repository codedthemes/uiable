"use client"

import { useRef, useState } from "react"
// third party
import { AnimatePresence, motion, type Variants } from "framer-motion"

// shadcn
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

const filledAnimate = {
  scale: [1, 1.15, 0.9, 1.04, 1] as number[],
}

const filledTransition = {
  duration: 0.45,
  ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  times: [0, 0.3, 0.55, 0.75, 1] as number[],
}

const emptyAnimate = {
  scale: 1,
  boxShadow: "0 0 0px 0px rgba(99,102,241, 0)",
}

const statusVariants: Variants = {
  hidden: { opacity: 0, y: 6, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -6,
    filter: "blur(4px)",
    transition: { duration: 0.2, ease: "easeIn" },
  },
}

//  ------------------------------ | INPUT OTP - ANIMATED | ------------------------------  //

export function InputOTPAnimated() {
  const [value, setValue] = useState("")
  const prevLength = useRef(0)

  const handleChange = (val: string) => {
    prevLength.current = value.length
    setValue(val)
  }

  const remaining = 6 - value.length
  const isDone = value.length === 6

  return (
    <div className="flex flex-col items-center gap-5">
      <InputOTP maxLength={6} value={value} onChange={handleChange}>
        <InputOTPGroup className="gap-1.5">
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const isFilled = value[i] !== undefined
            return (
              <motion.div
                key={i}
                animate={isFilled ? filledAnimate : emptyAnimate}
                transition={isFilled ? filledTransition : { duration: 0.2 }}
                style={{ borderRadius: 8, display: "inline-flex" }}
              >
                <InputOTPSlot
                  index={i}
                  className={
                    isFilled
                      ? "border-primary/60 bg-primary/5 ring-1 ring-primary/50 transition-colors duration-200"
                      : "transition-colors duration-200"
                  }
                />
              </motion.div>
            )
          })}
        </InputOTPGroup>
      </InputOTP>

      {/* Status text with AnimatePresence */}
      <div className="h-5 overflow-hidden">
        <AnimatePresence mode="wait">
          {isDone ? (
            <motion.p
              key="done"
              variants={statusVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex items-center gap-1.5 text-sm font-medium text-green-500"
            >
              <motion.span
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                  delay: 0.05,
                }}
              >
                ✓
              </motion.span>
              Code entered
            </motion.p>
          ) : (
            <motion.p
              key={remaining}
              variants={statusVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-sm text-muted-foreground"
            >
              Enter{" "}
              <motion.span
                key={`count-${remaining}`}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                className="inline-block font-semibold text-foreground"
              >
                {remaining}
              </motion.span>{" "}
              more digit{remaining !== 1 ? "s" : ""}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
