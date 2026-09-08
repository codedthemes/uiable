"use client"

import * as React from "react"

// third-party
import { motion, useInView, type HTMLMotionProps } from "framer-motion"

// project-imports
import { cn } from "@/lib/utils"

export type CursorStyle = "bar" | "underscore" | "glow-line" | "custom"

export interface UseTypewriterOptions {
  /** Single string or array of strings to cycle through */
  words?: string[]
  /** Typing speed in milliseconds per character */
  speed?: number
  /** Deletion / backspacing speed in milliseconds per character */
  deleteSpeed?: number
  /** Pause duration in milliseconds before backspacing or switching words */
  pauseDuration?: number
  /** Initial delay before typing starts in milliseconds */
  delay?: number
  /** Whether to loop through the words array continuously */
  loop?: boolean
  /** Maximum number of complete loops before stopping (if loop is true) */
  iterations?: number
  /** Introduce slight random timing variations to mimic realistic human typing */
  natural?: boolean
  /** Variance range for natural typing jitter in milliseconds */
  jitter?: number
  /** Trigger typing when element is scrolled into viewport */
  triggerOnView?: boolean
  /** Callback triggered when a character is typed */
  onCharacterTyped?: (char: string) => void
  /** Callback triggered when a word finishes typing */
  onWordComplete?: (word: string, index: number) => void
  /** Callback triggered when the entire sequence finishes */
  onComplete?: () => void
}

export function useTypewriter({
  words = [],
  speed = 50,
  deleteSpeed = 30,
  pauseDuration = 1800,
  delay = 0,
  loop = true,
  iterations = Infinity,
  natural = false,
  jitter = 25,
  triggerOnView = false,
  onCharacterTyped,
  onWordComplete,
  onComplete,
}: UseTypewriterOptions) {
  const [displayedText, setDisplayedText] = React.useState("")
  const [wordIndex, setWordIndex] = React.useState(0)
  const [isDeleting, setIsDeleting] = React.useState(false)
  const [isComplete, setIsComplete] = React.useState(false)
  const [hasStarted, setHasStarted] = React.useState(!triggerOnView)
  const [loopCount, setLoopCount] = React.useState(0)

  const containerRef = React.useRef<HTMLElement | null>(null)
  const isInView = useInView(containerRef as React.RefObject<Element>, {
    once: true,
    margin: "0px 0px -50px 0px",
  })

  React.useEffect(() => {
    if (triggerOnView && isInView && !hasStarted) {
      const timer = setTimeout(() => setHasStarted(true), 0)
      return () => clearTimeout(timer)
    }
  }, [triggerOnView, isInView, hasStarted])

  const safeWords = React.useMemo(
    () => (words.length > 0 ? words : [""]),
    [words]
  )
  const currentWord = safeWords[wordIndex % safeWords.length] || ""

  React.useEffect(() => {
    if (!hasStarted || isComplete || !currentWord) return

    let timeoutId: NodeJS.Timeout

    const getDynamicDelay = () => {
      if (!natural) return isDeleting ? deleteSpeed : speed
      const variation = (Math.random() * 2 - 1) * jitter
      const base = isDeleting ? deleteSpeed : speed
      return Math.max(15, base + variation)
    }

    if (
      displayedText === "" &&
      !isDeleting &&
      wordIndex === 0 &&
      loopCount === 0 &&
      delay > 0
    ) {
      timeoutId = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, 1))
        onCharacterTyped?.(currentWord.slice(0, 1))
      }, delay)
      return () => clearTimeout(timeoutId)
    }

    if (!isDeleting) {
      if (displayedText.length < currentWord.length) {
        const nextLength = displayedText.length + 1
        timeoutId = setTimeout(() => {
          const nextText = currentWord.slice(0, nextLength)
          setDisplayedText(nextText)
          onCharacterTyped?.(currentWord[nextLength - 1])
        }, getDynamicDelay())
      } else {
        onWordComplete?.(currentWord, wordIndex)
        // If single word or only one item and loop is false, mark complete
        if (safeWords.length === 1 && !loop) {
          timeoutId = setTimeout(() => {
            setIsComplete(true)
            onComplete?.()
          }, 0)
          return () => clearTimeout(timeoutId)
        }

        // Wait pause duration before deleting
        timeoutId = setTimeout(() => {
          if (safeWords.length > 1 || loop) {
            setIsDeleting(true)
          } else {
            setIsComplete(true)
            onComplete?.()
          }
        }, pauseDuration)
      }
    } else {
      // Deleting characters
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1))
        }, getDynamicDelay())
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(false)
          const nextWordIndex = (wordIndex + 1) % safeWords.length
          if (nextWordIndex === 0) {
            const nextLoopCount = loopCount + 1
            setLoopCount(nextLoopCount)
            if (!loop || nextLoopCount >= iterations) {
              setIsComplete(true)
              onComplete?.()
              return
            }
          }
          setWordIndex(nextWordIndex)
        }, 0)
      }
    }

    return () => clearTimeout(timeoutId)
  }, [
    displayedText,
    isDeleting,
    wordIndex,
    hasStarted,
    isComplete,
    currentWord,
    safeWords,
    speed,
    deleteSpeed,
    pauseDuration,
    delay,
    loop,
    iterations,
    natural,
    jitter,
    loopCount,
    onCharacterTyped,
    onWordComplete,
    onComplete,
  ])

  const restart = React.useCallback(() => {
    setDisplayedText("")
    setWordIndex(0)
    setIsDeleting(false)
    setIsComplete(false)
    setLoopCount(0)
    setHasStarted(true)
  }, [])

  return {
    displayedText,
    currentWord,
    wordIndex,
    isDeleting,
    isComplete,
    containerRef,
    restart,
  }
}

export interface TypewriterCursorProps {
  cursorStyle?: CursorStyle
  cursorChar?: string
  className?: string
  cursorClassName?: string
  blinkDuration?: number
}

export function TypewriterCursor({
  cursorStyle = "bar",
  cursorChar,
  className,
  cursorClassName,
  blinkDuration = 0.8,
}: TypewriterCursorProps) {
  const resolvedClassName = cn(className, cursorClassName)

  const renderCursorContent = () => {
    if (cursorChar) return cursorChar
    switch (cursorStyle) {
      case "underscore":
        return "_"
      case "glow-line":
        return ""
      case "bar":
      default:
        return "|"
    }
  }

  if (cursorStyle === "glow-line") {
    return (
      <motion.span
        aria-hidden="true"
        animate={{ opacity: [1, 0.15, 1] }}
        transition={{
          duration: blinkDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={cn(
          "ml-1 inline-block h-[1.15em] w-0.5 rounded-full bg-primary align-middle shadow-[0_0_10px_var(--color-primary)]",
          resolvedClassName
        )}
      />
    )
  }

  return (
    <motion.span
      aria-hidden="true"
      animate={{ opacity: [1, 0, 1] }}
      transition={{
        duration: blinkDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "ml-0.5 inline-block align-baseline font-normal text-primary select-none",
        resolvedClassName
      )}
    >
      {renderCursorContent()}
    </motion.span>
  )
}

export interface TypewriterProps
  extends Omit<HTMLMotionProps<"span">, "children">, UseTypewriterOptions {
  /** Text string or children */
  text?: string
  children?: string
  /** Whether to render the animated cursor */
  cursor?: boolean
  /** Style of cursor */
  cursorStyle?: CursorStyle
  /** Custom character for cursor */
  cursorChar?: string
  /** Custom class for cursor */
  cursorClassName?: string
  /** Hide cursor after typing sequence finishes */
  hideCursorOnComplete?: boolean
}

export const Typewriter = React.forwardRef<HTMLSpanElement, TypewriterProps>(
  (
    {
      text,
      children,
      words,
      speed = 50,
      deleteSpeed = 30,
      pauseDuration = 1800,
      delay = 0,
      loop = true,
      iterations = Infinity,
      natural = false,
      jitter = 25,
      triggerOnView = false,
      cursor = true,
      cursorStyle = "bar",
      cursorChar,
      cursorClassName,
      hideCursorOnComplete = false,
      onCharacterTyped,
      onWordComplete,
      onComplete,
      className,
      ...props
    },
    ref
  ) => {
    const rawWords = React.useMemo(() => {
      if (words && words.length > 0) return words
      const single = text || children || ""
      return [single]
    }, [words, text, children])

    const { displayedText, currentWord, isComplete, containerRef } =
      useTypewriter({
        words: rawWords,
        speed,
        deleteSpeed,
        pauseDuration,
        delay,
        loop,
        iterations,
        natural,
        jitter,
        triggerOnView,
        onCharacterTyped,
        onWordComplete,
        onComplete,
      })

    // Merge forwarded ref with internal containerRef
    const setRefs = React.useCallback(
      (node: HTMLSpanElement | null) => {
        containerRef.current = node
        if (typeof ref === "function") {
          ref(node)
        } else if (ref) {
          ;(ref as React.MutableRefObject<HTMLSpanElement | null>).current =
            node
        }
      },
      [ref, containerRef]
    )

    const shouldShowCursor = cursor && (!hideCursorOnComplete || !isComplete)

    return (
      <motion.span
        ref={setRefs}
        className={cn("inline-flex items-center", className)}
        {...props}
      >
        {/* Accessible screen reader full text */}
        <span className="sr-only">{currentWord}</span>

        {/* Visual animated character sequence */}
        <span aria-hidden="true" className="inline-block">
          {displayedText}
        </span>

        {shouldShowCursor && (
          <TypewriterCursor
            cursorStyle={cursorStyle}
            cursorChar={cursorChar}
            className={cursorClassName}
          />
        )}
      </motion.span>
    )
  }
)

Typewriter.displayName = "Typewriter"
