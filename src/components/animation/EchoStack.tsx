"use client"

import { Children, ReactNode, useEffect, useState } from "react"
// project imports
import { AnimationBg } from "@/images/svg/landing"

interface EchoStackProps {
  children: ReactNode
  className?: string
  cardClassName?: string
  entranceInterval?: number
  exitInterval?: number
  pauseBeforeExit?: number
  pauseBeforeEntrance?: number
}

//  ------------------------------ | ECHO STACK | ------------------------------  //

export default function EchoStack({
  children,
  className = "",
  cardClassName = "",
  entranceInterval = 1500,
  exitInterval = 1000,
  pauseBeforeExit = 2000,
  pauseBeforeEntrance = 1500,
}: EchoStackProps) {
  const cards = Children.toArray(children)
  const totalCards = cards.length

  const [visibleCount, setVisibleCount] = useState(0)
  const [isRevealing, setIsRevealing] = useState(true)

  useEffect(() => {
    if (totalCards === 0) return

    let timeoutId: NodeJS.Timeout

    if (isRevealing) {
      if (visibleCount < totalCards) {
        timeoutId = setTimeout(
          () => {
            setVisibleCount((prev) => prev + 1)
          },
          visibleCount === 0 ? 50 : entranceInterval
        )
      } else {
        timeoutId = setTimeout(() => {
          setIsRevealing(false)
        }, pauseBeforeExit)
      }
    } else {
      if (visibleCount > 2) {
        timeoutId = setTimeout(() => {
          setVisibleCount((prev) => prev - 1)
        }, exitInterval)
      } else {
        timeoutId = setTimeout(() => {
          setIsRevealing(true)
        }, pauseBeforeEntrance)
      }
    }

    return () => clearTimeout(timeoutId)
  }, [
    visibleCount,
    isRevealing,
    totalCards,
    entranceInterval,
    exitInterval,
    pauseBeforeExit,
    pauseBeforeEntrance,
  ])

  if (totalCards === 0) return null

  return (
    <>
      <AnimationBg className="top-1/2 left-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2 p-4 sm:p-8 md:p-12" />
      <div className={`relative h-full w-full ${className}`}>
        {cards.map((child, index) => {
          const isVisible = index < visibleCount

          // The newest card is full size. Older cards shrink.
          const stackIndex = isVisible ? visibleCount - 1 - index : 0
          // Each subsequent card is 50px lower than the previous one
          const offset = index * 50
          const scale = 1 - stackIndex * 0.04

          return (
            <div
              key={index}
              className={`absolute flex h-full w-full justify-center ${index === 0 ? "items-center" : "top-[-60px]"} overflow-hidden rounded-2xl ${cardClassName}`}
              style={{
                transform: isVisible
                  ? `translateY(${offset}px) scale(${scale})`
                  : "translateY(100%) scale(0.9)",
                opacity: isVisible ? 1 : 0,
                zIndex: index,
                transition:
                  "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {child}
            </div>
          )
        })}
      </div>
    </>
  )
}
