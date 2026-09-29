"use client"

import { useState } from "react"

// third-party
import { Switch as SwitchPrimitive } from "@base-ui/react/switch"
import { cn } from "cn"
import { motion, AnimatePresence } from "framer-motion"

const MotionRoot = motion.create(SwitchPrimitive.Root)
const MotionThumb = motion.create(SwitchPrimitive.Thumb)

//  ------------------------------ | SWITCH - ANIMATED THEME | ------------------------------  //

export default function SwitchAnimatedTheme() {
  const [isDarkCelestial, setIsDarkCelestial] = useState(false)
  const [isDarkSimple, setIsDarkSimple] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-5 sm:flex-row">
      {/* Variant 1: Celestial Body Morph */}
      <div className="flex flex-col items-center gap-5">
        <MotionRoot
          checked={isDarkCelestial}
          onCheckedChange={setIsDarkCelestial}
          className={cn(
            "relative flex h-12 w-28 cursor-pointer items-center overflow-hidden rounded-full p-1 shadow-inner transition-colors duration-700 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            isDarkCelestial ? "bg-slate-900" : "bg-sky-400"
          )}
          aria-label="Toggle theme celestial"
        >
          {/* Sky Elements: Clouds (Day) */}
          <AnimatePresence>
            {!isDarkCelestial && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-0 z-0"
              >
                <div className="absolute top-2 right-4 h-3 w-8 rounded-full bg-white/80 blur-[0.5px]" />
                <div className="absolute top-1 right-7 h-3 w-4 rounded-full bg-white/90 blur-[0.5px]" />
                <div className="absolute right-8 bottom-2 h-2 w-6 rounded-full bg-white/60 blur-[0.5px]" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sky Elements: Stars (Night) */}
          <AnimatePresence>
            {isDarkCelestial && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-0 z-0"
              >
                <div className="absolute top-2 left-5 h-1 w-1 rounded-full bg-white shadow-[0_0_4px_1px_#fff]" />
                <div className="absolute top-6 left-8 h-1 w-1 rounded-full bg-white/80 shadow-[0_0_3px_1px_#fff]" />
                <div className="absolute top-8 left-4 h-0.5 w-0.5 rounded-full bg-white/60" />
                <div className="absolute top-3 left-10 h-0.5 w-0.5 rounded-full bg-white/60" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* The Celestial Body (Thumb) */}
          <MotionThumb
            layout
            initial={false}
            animate={{
              x: isDarkCelestial ? 64 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              mass: 0.8,
            }}
            className={cn(
              "relative z-10 block flex h-10 w-10 items-center justify-center overflow-hidden rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)] ring-0 transition-colors duration-700",
              isDarkCelestial ? "bg-slate-300" : "bg-yellow-400"
            )}
          >
            {/* Moon Craters */}
            <AnimatePresence>
              {isDarkCelestial && (
                <motion.div
                  initial={{ opacity: 0, x: -10, rotate: -45 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  exit={{ opacity: 0, x: -10, rotate: -45 }}
                  transition={{ duration: 0.4 }}
                  className="pointer-events-none absolute inset-0"
                >
                  <div className="absolute top-2 left-2 h-2.5 w-2.5 rounded-full bg-slate-400/60 shadow-inner" />
                  <div className="absolute top-5 left-5 h-3 w-3 rounded-full bg-slate-400/60 shadow-inner" />
                  <div className="absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full bg-slate-400/60 shadow-inner" />
                </motion.div>
              )}
            </AnimatePresence>
          </MotionThumb>
        </MotionRoot>
        <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          Celestial
        </span>
      </div>

      {/* Variant 2: Stretchy */}
      <div className="flex flex-col items-center gap-5">
        <MotionRoot
          checked={isDarkSimple}
          onCheckedChange={setIsDarkSimple}
          className={cn(
            "relative flex h-12 w-28 cursor-pointer items-center rounded-full p-1.5 transition-colors duration-500 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            isDarkSimple ? "bg-slate-900" : "bg-sky-400"
          )}
          layout
          aria-label="Toggle theme stretch"
        >
          {/* Track Text */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3 text-[11px] font-bold tracking-wider text-white">
            <motion.span
              initial={false}
              animate={{
                opacity: isDarkSimple ? 1 : 0,
                x: isDarkSimple ? 0 : -10,
              }}
              transition={{ duration: 0.3 }}
              className="text-slate-300"
            >
              DARK
            </motion.span>
            <motion.span
              className="text-sky-100"
              initial={false}
              animate={{
                opacity: !isDarkSimple ? 1 : 0,
                x: !isDarkSimple ? 0 : 10,
              }}
              transition={{ duration: 0.3 }}
            >
              LIGHT
            </motion.span>
          </div>

          {/* Stretchy Thumb */}
          <MotionThumb
            layout
            className="relative z-10 block h-9 rounded-full bg-white shadow-sm ring-0"
            initial={false}
            animate={{
              x: isDarkSimple ? 64 : 0,
              width: 36,
            }}
            whileTap={{ width: 48 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 25,
            }}
          />
        </MotionRoot>
        <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          Stretchy
        </span>
      </div>
    </div>
  )
}
