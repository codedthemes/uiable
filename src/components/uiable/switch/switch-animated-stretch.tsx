"use client"

import { useState } from "react"

// third-party
import { Switch as SwitchPrimitive } from "@base-ui/react/switch"
import { cn } from "cn"
import { motion } from "framer-motion"

const MotionRoot = motion.create(SwitchPrimitive.Root)
const MotionThumb = motion.create(SwitchPrimitive.Thumb)

//  ------------------------------ | SWITCH - ANIMATED STRETCH | ------------------------------  //

export default function SwitchAnimatedStretch() {
  const [isOn, setIsOn] = useState(false)

  return (
    <div className="flex items-center justify-center p-5">
      <MotionRoot
        checked={isOn}
        onCheckedChange={setIsOn}
        className={cn(
          "relative flex h-12 w-28 cursor-pointer items-center rounded-full p-1.5 transition-colors duration-500 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          isOn ? "bg-green-500" : "bg-slate-200 dark:bg-slate-700"
        )}
        layout
        aria-label="Toggle setting"
      >
        {/* Track Text */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4 text-sm font-bold tracking-wider text-white">
          <motion.span
            initial={false}
            animate={{ opacity: isOn ? 1 : 0, x: isOn ? 0 : -10 }}
            transition={{ duration: 0.3 }}
          >
            ON
          </motion.span>
          <motion.span
            className="text-slate-400 dark:text-slate-300"
            initial={false}
            animate={{ opacity: !isOn ? 1 : 0, x: !isOn ? 0 : 10 }}
            transition={{ duration: 0.3 }}
          >
            OFF
          </motion.span>
        </div>

        {/* Stretchy Thumb */}
        <MotionThumb
          layout
          initial={false}
          animate={{
            x: isOn ? 64 : 0,
            width: 36,
          }}
          whileTap={{ width: 48 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 25,
          }}
          className="relative z-10 block h-9 rounded-full bg-white shadow-sm ring-0"
        />
      </MotionRoot>
    </div>
  )
}
