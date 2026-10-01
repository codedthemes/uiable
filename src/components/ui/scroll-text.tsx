"use client"

// third-party
import { cn } from "cn"
import { motion, useReducedMotion, type Variants } from "framer-motion"

type Direction = "up" | "down" | "left" | "right"

type TextTag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div"

interface TextAnimationProps {
  text: string
  className?: string
  as?: TextTag
  viewport?: {
    amount?: number
    margin?: string
    once?: boolean
  }
  variants?: Variants
  direction?: Direction
  letterAnime?: boolean
  lineAnime?: boolean
}

const REVEAL_MARGIN = "0px 0px -12% 0px"

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

function generateVariants(direction: Direction): Variants {
  const horizontal = direction === "left" || direction === "right"
  const value = direction === "right" || direction === "down" ? 100 : -100

  const from = horizontal ? { translateX: value } : { translateY: value }
  const to = horizontal ? { translateX: 0 } : { translateY: 0 }

  return {
    hidden: { filter: "blur(10px)", opacity: 0, ...from },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      ...to,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }
}

// `once` avoids the heading re-animating (blurred, offset) every time it re-enters the viewport.
const defaultViewport = { amount: 0.3, margin: REVEAL_MARGIN, once: true }

//  ------------------------------ | SCROLL TEXT | ------------------------------  //

export function TextAnimation({
  as = "h1",
  text,
  className,
  viewport = defaultViewport,
  variants,
  direction = "down",
  letterAnime = false,
  lineAnime = false,
}: TextAnimationProps) {
  const reduce = useReducedMotion()
  const baseVariants = variants || generateVariants(direction)

  // Narrows the `motion[as]` union to one component so callers don't need to cast.
  const MotionComponent = motion[as] as typeof motion.div

  // Under reduced motion, render plain text rather than animating a shorter distance.
  if (reduce) {
    const Tag = as
    return (
      <Tag className={cn("inline-block text-foreground uppercase", className)}>
        {text}
      </Tag>
    )
  }

  return (
    <MotionComponent
      whileInView="visible"
      initial="hidden"
      variants={containerVariants}
      viewport={viewport}
      className={cn("inline-block text-foreground uppercase", className)}
    >
      {lineAnime ? (
        <motion.span className="inline-block" variants={baseVariants}>
          {text}
        </motion.span>
      ) : (
        text.split(" ").map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className="inline-block"
            variants={letterAnime ? {} : baseVariants}
          >
            {letterAnime ? (
              <>
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    className="inline-block"
                    variants={baseVariants}
                  >
                    {letter}
                  </motion.span>
                ))}
                &nbsp;
              </>
            ) : (
              <>{word}&nbsp;</>
            )}
          </motion.span>
        ))
      )}
    </MotionComponent>
  )
}

export default TextAnimation
