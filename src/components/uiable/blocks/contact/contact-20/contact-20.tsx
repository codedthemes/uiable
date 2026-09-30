"use client"

import type { ReactNode } from "react"

// next
// third-party
import { motion, useReducedMotion, type Variants } from "framer-motion"

interface AnimatedTextProps {
  text: string
  wordClassName?: string
  delay?: number
}

interface FadeInProps {
  children: ReactNode
  direction?: "left" | "right"
  delay?: number
  className?: string
}

const EASE_ENTRANCE = [0.21, 0.47, 0.32, 0.98] as const
const REVEAL_MARGIN = "0px 0px -12% 0px" as const

function AnimatedText({ text, wordClassName, delay = 0 }: AnimatedTextProps) {
  const reduce = useReducedMotion()
  const words = text.split(" ")
  const stagger = reduce ? 0.04 : 0.08

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren: reduce ? 0 : delay,
      },
    },
  }

  const wordVariants: Variants = {
    hidden: reduce
      ? { opacity: 0 }
      : { opacity: 0, y: "0.6em", filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: "0em",
      filter: "blur(0px)",
      transition: { duration: reduce ? 0.3 : 0.55, ease: EASE_ENTRANCE },
    },
  }

  return (
    <span>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden="true"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: REVEAL_MARGIN }}
        variants={containerVariants}
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            variants={wordVariants}
            className={`inline-block whitespace-pre will-change-transform ${wordClassName ?? ""}`}
          >
            {word}
            {index < words.length - 1 ? " " : ""}
          </motion.span>
        ))}
      </motion.span>
    </span>
  )
}

function FadeIn({
  children,
  direction = "left",
  delay = 0,
  className,
}: FadeInProps) {
  const reduce = useReducedMotion()
  const offset = direction === "left" ? -24 : 24

  return (
    <motion.div
      initial={{ opacity: 0, x: reduce ? 0 : offset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: REVEAL_MARGIN }}
      transition={{
        duration: reduce ? 0.3 : 0.6,
        delay: reduce ? 0 : delay,
        ease: EASE_ENTRANCE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

//  ------------------------------ | CONTACT 20 | ------------------------------  //

export default function Contact20() {
  return (
    <header className="mx-auto flex max-w-7xl flex-col items-center gap-10 overflow-hidden px-4 pt-8 pb-12 text-center md:flex-row md:gap-12 md:px-8 md:pb-16 md:text-left lg:px-10">
      <div className="flex-1 space-y-5 md:space-y-6">
        <h1 className="text-[2.25rem] leading-[1.15] font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          <AnimatedText text="Let's start a" />{" "}
          <AnimatedText
            text="conversation."
            wordClassName="text-primary"
            delay={0.25}
          />
        </h1>
        <FadeIn delay={0.4}>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            Whether you have a question about our courses, pricing, or need
            technical support, our team is ready to help you achieve your
            learning goals.
          </p>
        </FadeIn>
      </div>
      <FadeIn direction="left" delay={0.3} className="relative w-full flex-1">
        <div className="pointer-events-none absolute inset-0 translate-y-10 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative z-10 h-75 w-full">
          <img
            src="https://cdn.uiable.com/img-4.jpg"
            alt="A bright, modern workspace with a laptop and a potted plant"
            className="absolute inset-0 h-full w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
      </FadeIn>
    </header>
  )
}
