"use client"

import * as React from "react"

// third-party
import { cn } from "cn"
import { motion, type HTMLMotionProps, type Variants } from "framer-motion"

export interface TextBlurInProps extends Omit<
  HTMLMotionProps<"span">,
  "children"
> {
  text?: string
  children?: string
  splitBy?: "words" | "characters"
  delay?: number
  stagger?: number
  duration?: number
  blur?: number
  triggerOnView?: boolean
  className?: string
}

export function TextBlurIn({
  text = "",
  children,
  splitBy = "words",
  delay = 0,
  stagger = 0.08,
  duration = 0.6,
  blur = 12,
  triggerOnView = true,
  className,
  ...props
}: TextBlurInProps) {
  const content = children || text
  const tokens = React.useMemo(() => {
    if (splitBy === "characters") {
      return content.split("")
    }
    return content.split(" ")
  }, [content, splitBy])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: `blur(${blur}px)`,
      y: 8,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      scale: 1,
      transition: {
        duration,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView={triggerOnView ? "visible" : undefined}
      animate={!triggerOnView ? "visible" : undefined}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      className={cn("inline-flex flex-wrap items-center", className)}
      {...props}
    >
      <span className="sr-only">{content}</span>
      {tokens.map((token, idx) => (
        <motion.span
          key={idx}
          variants={itemVariants}
          aria-hidden="true"
          className="inline-block"
        >
          {token}
          {splitBy === "words" && idx < tokens.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.span>
  )
}
