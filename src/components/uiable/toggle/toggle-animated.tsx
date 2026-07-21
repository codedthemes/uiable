"use client"

import { useState } from "react"
// third party
import { AnimatePresence, motion } from "framer-motion"
// assets
import { HeartIcon, ThumbsUpIcon } from "lucide-react"

// projects
import { cn } from "@/lib/utils"
// shadcn
import { Toggle } from "@/components/ui/toggle"

//  ------------------------------ | TOGGLE - ANIMATED | ------------------------------  //

export function ToggleAnimated() {
  const [liked, setLiked] = useState(false)
  const [upvoted, setUpvoted] = useState(false)

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Animated Heart Like Toggle */}
      <Toggle
        aria-label="Toggle like"
        pressed={liked}
        onPressedChange={setLiked}
        className={cn(
          "group/like relative overflow-hidden transition-all duration-300 ease-out aria-pressed:bg-transparent aria-pressed:text-foreground dark:aria-pressed:bg-transparent",
          liked && "border-rose-500/30 dark:border-rose-500/40"
        )}
      >
        <span className="relative inline-flex items-center justify-center">
          {/* Sparkles burst on like */}
          <AnimatePresence>
            {liked && (
              <>
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0, opacity: 1, x: 0, y: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [1, 1, 0],
                      x: Math.cos((i * 72 * Math.PI) / 180) * 14,
                      y: Math.sin((i * 72 * Math.PI) / 180) * 14,
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="pointer-events-none absolute size-1 rounded-full bg-rose-500 dark:bg-rose-400"
                  />
                ))}
              </>
            )}
          </AnimatePresence>

          <motion.span
            animate={
              liked
                ? {
                    scale: [1, 1.45, 0.9, 1.25],
                    rotate: [0, -14, 14, -6, 0],
                  }
                : {
                    scale: 1,
                    rotate: 0,
                  }
            }
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="inline-flex items-center justify-center"
          >
            <HeartIcon
              className={cn(
                "size-4 transition-colors duration-300 ease-out",
                liked
                  ? "fill-rose-500 text-rose-500 dark:fill-rose-400 dark:text-rose-400"
                  : "text-muted-foreground group-hover/like:scale-110"
              )}
            />
          </motion.span>
        </span>

        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={liked ? "liked" : "unliked"}
            initial={{ opacity: 0, y: liked ? -8 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: liked ? 8 : -8 }}
            transition={{ duration: 0.2 }}
            className="font-medium tabular-nums"
          >
            {liked ? 43 : 42}
          </motion.span>
        </AnimatePresence>
      </Toggle>

      {/* Animated Upvote Toggle */}
      <Toggle
        variant="outline"
        aria-label="Toggle upvote"
        pressed={upvoted}
        onPressedChange={setUpvoted}
        className={cn(
          "group/upvote relative overflow-hidden transition-all duration-300 ease-out aria-pressed:bg-transparent aria-pressed:text-foreground dark:aria-pressed:bg-transparent",
          upvoted && "border-primary/30 dark:border-primary/40"
        )}
      >
        <motion.span
          animate={
            upvoted
              ? {
                  scale: [1, 1.35, 0.95, 1.15],
                  rotate: [0, -24, 4, -12],
                  y: [0, -3, 0],
                }
              : {
                  scale: 1,
                  rotate: 0,
                  y: 0,
                }
          }
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className="inline-flex items-center justify-center"
        >
          <ThumbsUpIcon
            className={cn(
              "size-4 transition-colors duration-300 ease-out",
              upvoted
                ? "fill-primary text-primary"
                : "text-muted-foreground group-hover/upvote:-rotate-12"
            )}
          />
        </motion.span>

        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={upvoted ? "upvoted" : "normal"}
            initial={{ opacity: 0, y: upvoted ? -8 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: upvoted ? 8 : -8 }}
            transition={{ duration: 0.2 }}
            className="font-medium tabular-nums"
          >
            {upvoted ? 129 : 128}
          </motion.span>
        </AnimatePresence>
      </Toggle>
    </div>
  )
}
