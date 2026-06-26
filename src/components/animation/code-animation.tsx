"use client"

import { useEffect, useState, type HTMLAttributes } from "react"

// project imports
import { DarkFav, LightFav } from "@/images/brand"
import { AnimationBg } from "@/images/svg/landing"
import { motion } from "framer-motion"
// assets
import { ChevronLeft, ChevronRight, Slash } from "lucide-react"

// third party
import { cn } from "@/lib/utils"

interface CodeAnimationProps extends HTMLAttributes<HTMLDivElement> {
  backgroundCode?: string
}

// Staggered dot animation variant factory
const dotVariants = (delay: number) => ({
  hidden: { margin: "0px", opacity: 0, scale: 0 },
  visible: {
    margin: "0 10px",
    opacity: 1,
    scale: 1,
    transition: { delay, type: "spring" as const, stiffness: 40, damping: 20 },
  },
  exit: {
    margin: "0px",
    opacity: 0,
    scale: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
})

// Slash animation variant
const slashVariants = {
  hidden: { width: 0, opacity: 0, scale: 0.5 },
  visible: {
    width: "auto",
    opacity: 1,
    scale: 1,
    transition: {
      delay: 3.2,
      type: "spring" as const,
      stiffness: 40,
      damping: 20,
    },
  },
  exit: {
    width: 0,
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
}

//  ------------------------------ | CODE ANIMATION | ------------------------------  //

export default function CodeAnimation({
  className,
  backgroundCode,
}: CodeAnimationProps) {
  const [animKey, setAnimKey] = useState(0)

  // Re-trigger the animation loop
  useEffect(() => {
    const totalCycle = 6000 // 6s per cycle
    const interval = setInterval(() => {
      setAnimKey((k) => k + 1)
    }, totalCycle)
    return () => clearInterval(interval)
  }, [])

  const codeTopRight = `// use the JFrame type until support for the
        JFrame frame = new JFrame("Hello Button");
        Container pane = frame.getContentPane();
        frame.pack();
        frame.show(); 
    }`

  const codeBottomLeft = `
    HelloButton()
    {
    JButton hello = new JButton("hello!");
    JButton Animation = new JButton("Designers!");
    }`

  return (
    <div
      className={cn(
        "relative flex h-full min-h-[324px] w-full items-center justify-center overflow-hidden rounded-3xl py-10 select-none sm:min-h-[440px] md:min-h-[500px]",
        className
      )}
    >
      {/* SVG Background Layer */}
      <AnimationBg className="top-1/2 left-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2 p-4 sm:p-8 md:p-12" />

      {/* Faint Background Code - Top Right */}
      <div className="pointer-events-none absolute top-2 right-2 flex flex-col items-start justify-start overflow-hidden sm:top-4 sm:right-4 md:top-4 md:right-4">
        <pre className="text-left font-mono text-[8px] leading-[2.5] text-blue-500/20 opacity-24 mix-blend-multiply sm:text-[9px] md:text-[10px] lg:text-[11px] dark:text-slate-500/20 dark:mix-blend-lighten">
          {backgroundCode || codeTopRight}
        </pre>
      </div>

      {/* Faint Background Code - Bottom Left */}
      <div className="pointer-events-none absolute bottom-2 left-2 flex flex-col items-start justify-end overflow-hidden sm:bottom-4 sm:left-4 md:bottom-4 md:left-4">
        <pre className="text-left font-mono text-[8px] leading-[2.5] text-blue-500/20 opacity-24 mix-blend-multiply sm:text-[9px] md:text-[10px] lg:text-[11px] dark:text-slate-500/20 dark:mix-blend-lighten">
          {backgroundCode || codeBottomLeft}
        </pre>
      </div>

      {/* Center animated graphic */}
      <div
        className="relative z-10 flex items-center justify-center"
        key={animKey}
      >
        <motion.div
          initial={{ marginRight: -90 }}
          animate={{ marginRight: 0 }}
          transition={{
            delay: 0.1,
            type: "spring" as const,
            stiffness: 25,
            damping: 20,
          }}
        >
          <ChevronLeft
            strokeWidth={1}
            className="h-[75px] w-[75px] shrink-0 sm:h-[90px] sm:w-[90px] md:h-[120px] md:w-[120px]"
          />
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
          initial={{ gap: 0 }}
          animate={{ gap: 8 }}
          transition={{
            delay: 0.3,
            type: "spring" as const,
            stiffness: 30,
            damping: 18,
          }}
        >
          {/* Dots */}
          <motion.div
            variants={dotVariants(0.6)}
            initial="hidden"
            animate="visible"
            className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full sm:h-[34px] sm:w-[34px] lg:h-8 lg:w-8 xl:h-[34px] xl:w-[34px]"
          >
            <LightFav
              width={24}
              height={24}
              className="block rounded-full text-white dark:hidden"
            />
            <DarkFav
              width={24}
              height={24}
              className="hidden rounded-full text-white dark:block"
            />
          </motion.div>
          <motion.div
            variants={dotVariants(1.4)}
            initial="hidden"
            animate="visible"
            className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full sm:h-[34px] sm:w-[34px] lg:h-8 lg:w-8 xl:h-[34px] xl:w-[34px]"
          >
            <LightFav
              width={24}
              height={24}
              className="block rounded-full text-white dark:hidden"
            />
            <DarkFav
              width={24}
              height={24}
              className="hidden rounded-full text-white dark:block"
            />
          </motion.div>
          <motion.div
            variants={dotVariants(2.2)}
            initial="hidden"
            animate="visible"
            className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full sm:h-[34px] sm:w-[34px] lg:h-8 lg:w-8 xl:h-[34px] xl:w-[34px]"
          >
            <LightFav
              width={24}
              height={24}
              className="block rounded-full text-white dark:hidden"
            />
            <DarkFav
              width={24}
              height={24}
              className="hidden rounded-full text-white dark:block"
            />
          </motion.div>

          {/* Slash */}
          <motion.div
            variants={slashVariants}
            initial="hidden"
            animate="visible"
            className="text-slate-240 flex items-center justify-center overflow-hidden dark:text-slate-200"
          >
            <Slash
              strokeWidth={1}
              className="h-[50px] w-[50px] shrink-0 rotate-[150deg] sm:h-[70px] sm:w-[70px] md:h-[90px] md:w-[90px] lg:h-[70px] lg:w-[70px] xl:h-[90px] xl:w-[90px] 2xl:h-[110px] 2xl:w-[110px]"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ marginLeft: -90 }}
          animate={{ marginLeft: 0 }}
          transition={{
            delay: 0.1,
            type: "spring" as const,
            stiffness: 25,
            damping: 20,
          }}
        >
          <ChevronRight
            strokeWidth={1}
            className="h-[75px] w-[75px] shrink-0 sm:h-[90px] sm:w-[90px] md:h-[120px] md:w-[120px]"
          />
        </motion.div>
      </div>
    </div>
  )
}
