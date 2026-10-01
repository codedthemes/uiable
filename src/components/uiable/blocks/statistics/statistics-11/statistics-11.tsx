"use client"

import React, { useRef, useEffect, useState } from "react"

// third-party
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  type Variants,
} from "framer-motion"

// JSON Stats Data
export interface StatItem {
  id: string
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  label: string
}

export const statsData: StatItem[] = [
  {
    id: "uptime",
    value: 99.9,
    suffix: "%",
    decimals: 1,
    label: "Uptime Guaranteed",
  },
  {
    id: "volume",
    prefix: "$",
    value: 2.5,
    suffix: "M+",
    decimals: 1,
    label: "Monthly Volume",
  },
  {
    id: "integrations",
    value: 150,
    suffix: "+",
    decimals: 0,
    label: "Integrations",
  },
  {
    id: "rating",
    value: 4.9,
    suffix: "/5",
    decimals: 1,
    label: "User Rating",
  },
]

// Animated Counter Component
function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 35,
    stiffness: 90,
  })

  const [displayValue, setDisplayValue] = useState(
    `${prefix}0${decimals > 0 ? "." + "0".repeat(decimals) : ""}${suffix}`
  )

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(`${prefix}${latest.toFixed(decimals)}${suffix}`)
    })
  }, [springValue, decimals, prefix, suffix])

  return <span ref={ref}>{displayValue}</span>
}

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export default function Statistics11() {
  return (
    <section className="border-b border-slate-200/80 bg-white py-12 transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 gap-8 text-center md:grid-cols-4"
        >
          {statsData.map((item) => (
            <motion.div variants={fadeIn} key={item.id} className="space-y-1.5">
              <div className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
                <AnimatedCounter
                  value={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  decimals={item.decimals}
                />
              </div>
              <div className="text-xs font-bold tracking-widest text-slate-500 uppercase dark:text-slate-400">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
