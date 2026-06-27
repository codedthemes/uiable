"use client"

import { useEffect, useRef, useState, type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { AnimationBg } from "@/images/svg/landing"
import { DarkFav, LightFav } from "@/images/brand"
import { ChevronLeft, ChevronRight, Slash } from "lucide-react"

interface CodeAnimationProps extends HTMLAttributes<HTMLDivElement> {
  badges?: unknown[]
  className?: string
  initialDelay?: number
  forwardDelay?: number
  reverseDelay?: number
  holdOpenTime?: number
  holdClosedTime?: number
  backgroundCode?: string
}

const badgeVariants = {
  hidden: {
    width: 0,
    marginLeft: 0,
    marginRight: 0,
    opacity: 0,
    x: -40,
    scale: 0.3,
    rotate: -28,
  },
  visible: {
    width: "auto",
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
    },
  },
}

const slashVariants = {
  hidden: {
    width: 0,
    marginLeft: 0,
    marginRight: 0,
    opacity: 0,
    x: -44,
    scale: 0.3,
    rotate: 18,
  },
  visible: {
    width: "auto",
    marginLeft: "0.375rem",
    marginRight: "0.375rem",
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
    },
  },
}

const bracketVariants = {
  hidden: {
    scale: 0.98,
    opacity: 0.8,
  },
  visible: {
    scale: 1.03,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 16,
    },
  },
}

interface AnimatedBadgeProps {
  visible: boolean
  index: number
}

function AnimatedBadge({ visible, index }: AnimatedBadgeProps) {
  return (
    <motion.div
      variants={badgeVariants}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      className="flex shrink-0 items-center justify-center overflow-hidden"
    >
      <div className="0 pointer-events-none relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full xl:h-10 xl:w-10">
        <LightFav width="100%" height="100%" className="block dark:hidden" />
        <DarkFav width="100%" height="100%" className="hidden dark:block" />
      </div>
    </motion.div>
  )
}

export default function CodeAnimation({
  badges = [null, null, null],
  className,
  initialDelay = 400,
  forwardDelay = 800,
  reverseDelay = 500,
  holdOpenTime = 1200,
  holdClosedTime = 600,
  backgroundCode,
}: CodeAnimationProps) {
  const totalElements = badges.length + 1
  const [visibleCount, setVisibleCount] = useState(0)
  const [bracketsExpanded, setBracketsExpanded] = useState(false)
  const stepRef = useRef(0)
  const reversingRef = useRef(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    function tick() {
      if (!reversingRef.current) {
        if (stepRef.current === 0) setBracketsExpanded(true)

        if (stepRef.current < totalElements) {
          stepRef.current += 1
          setVisibleCount(stepRef.current)
          timer = setTimeout(tick, forwardDelay)
        } else {
          reversingRef.current = true
          timer = setTimeout(tick, holdOpenTime)
        }
      } else {
        if (stepRef.current > 0) {
          stepRef.current -= 1
          setVisibleCount(stepRef.current)
          timer = setTimeout(tick, reverseDelay)
        } else {
          setBracketsExpanded(false)
          reversingRef.current = false
          timer = setTimeout(tick, holdClosedTime)
        }
      }
    }

    timer = setTimeout(tick, initialDelay)
    return () => clearTimeout(timer)
  }, [
    totalElements,
    forwardDelay,
    reverseDelay,
    holdOpenTime,
    holdClosedTime,
    initialDelay,
  ])

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
      <AnimationBg className="top-1/2 left-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2 p-4 sm:p-8 md:p-12" />

      <div className="pointer-events-none absolute top-2 right-2 flex flex-col items-start justify-start overflow-hidden sm:top-4 sm:right-4 md:top-4 md:right-4">
        <pre className="text-left font-mono text-[8px] leading-[2.5] text-blue-500/35 sm:text-[9px] md:text-[10px] lg:text-[11px] dark:text-blue-500/20">
          {backgroundCode || codeTopRight}
        </pre>
      </div>

      <div className="pointer-events-none absolute bottom-2 left-2 flex flex-col items-start justify-end overflow-hidden sm:bottom-4 sm:left-4 md:bottom-4 md:left-4">
        <pre className="text-left font-mono text-[8px] leading-[2.5] text-blue-500/35 sm:text-[9px] md:text-[10px] lg:text-[11px] dark:text-blue-500/20">
          {backgroundCode || codeBottomLeft}
        </pre>
      </div>

      <motion.div
        layout
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className={cn(
          "relative z-10 inline-flex items-center justify-center",
          className
        )}
      >
        <motion.div
          layout
          variants={bracketVariants}
          animate={bracketsExpanded ? "visible" : "hidden"}
          className="flex w-8 shrink-0 items-center justify-center overflow-hidden text-slate-900 sm:w-12 md:w-20 dark:text-slate-100"
        >
          <ChevronLeft
            strokeWidth={0.5}
            className="h-30 w-30 shrink-0 lg:max-xl:h-30 lg:max-xl:w-30 xl:h-70 xl:w-70"
          />
        </motion.div>

        <motion.div
          layout
          className="flex min-w-[35px] items-center justify-center"
        >
          {badges.map((_, i) => (
            <AnimatedBadge key={i} visible={visibleCount > i} index={i} />
          ))}

          <motion.div
            layout
            variants={slashVariants}
            initial="hidden"
            animate={visibleCount > badges.length ? "visible" : "hidden"}
            className="flex shrink-0 items-center justify-center text-slate-900 dark:text-slate-100"
          >
            <Slash
              strokeWidth={1}
              className="h-14 w-14 rotate-[150deg] lg:max-xl:h-14 lg:max-xl:w-14 xl:h-35 xl:w-35"
            />
          </motion.div>
        </motion.div>

        <motion.div
          layout
          variants={bracketVariants}
          animate={bracketsExpanded ? "visible" : "hidden"}
          className="flex w-8 shrink-0 items-center justify-center overflow-hidden text-slate-900 sm:w-12 md:w-20 dark:text-slate-100"
        >
          <ChevronRight
            strokeWidth={0.5}
            className="h-30 w-30 shrink-0 lg:max-xl:h-30 lg:max-xl:w-30 xl:h-70 xl:w-70"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
