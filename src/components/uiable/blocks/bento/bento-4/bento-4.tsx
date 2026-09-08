"use client"

// react
import { ChangeEvent, useEffect, useState } from "react"

// shadcn
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

// third-party
import { motion } from "framer-motion"

// project-imports
import ButtonAI from "@/components/uiable/button/button-ai"

// assets
import {
  Sparkles,
  Bot,
  Puzzle,
  Wand2,
  Play,
  ZapIcon,
  BarChart2,
} from "lucide-react"

//  ------------------------------ | TYPEWRITER INPUT | ------------------------------  //

const AUTOMATION_PROMPTS = [
  "Describe the automation you want to create...",
  "Send a Slack alert when a Stripe payment fails...",
  "Sync new Shopify orders to Google Sheets and QuickBooks...",
  "Summarize daily customer support tickets with AI...",
  "Trigger deployment and alert dev team when PR is merged...",
  "Onboard new team members across Slack and Jira...",
]

function TypewriterInput() {
  const [promptIndex, setPromptIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [userValue, setUserValue] = useState("")

  useEffect(() => {
    if (userValue) return

    const currentPrompt = AUTOMATION_PROMPTS[promptIndex]
    let timer: ReturnType<typeof setTimeout>

    if (!isDeleting) {
      if (displayedText.length < currentPrompt.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentPrompt.slice(0, displayedText.length + 1))
        }, 45)
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, 2200)
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentPrompt.slice(0, displayedText.length - 1))
        }, 22)
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false)
          setPromptIndex((prev) => (prev + 1) % AUTOMATION_PROMPTS.length)
        }, 350)
      }
    }

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, promptIndex, userValue])

  return (
    <div className="relative flex flex-1 items-center overflow-hidden">
      <Input
        type="text"
        aria-label="Describe automation prompt"
        value={userValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setUserValue(e.target.value)
        }
        className="h-auto border-0 bg-transparent p-0 text-sm text-slate-900 shadow-none focus:border-transparent focus:outline-none sm:text-base dark:text-white"
      />
      {!userValue && (
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pr-2">
          <span className="truncate text-sm text-slate-400 sm:text-base dark:text-slate-500">
            {displayedText}
          </span>
          <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse rounded-full bg-blue-500 align-middle dark:bg-blue-400" />
        </div>
      )}
    </div>
  )
}

//  ------------------------------ | SVG COMPONENTS | ------------------------------  //

function LaserFlowSvg() {
  return (
    <svg
      viewBox="0 0 1000 160"
      fill="none"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 size-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="laser-beam-blue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
          <stop offset="100%" stopColor="#93c5fd" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="laser-beam-purple"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
          <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
          <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d="M 0 24 H 360 C 430 24 450 80 500 80 C 550 80 570 24 640 24 H 1000"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-slate-200 dark:text-slate-700/60"
        fill="none"
      />
      <path
        d="M 0 80 H 1000"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-slate-200 dark:text-slate-700/60"
        fill="none"
      />
      <path
        d="M 0 136 H 360 C 430 136 450 80 500 80 C 550 80 570 136 640 136 H 1000"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-slate-200 dark:text-slate-700/60"
        fill="none"
      />

      <motion.path
        d="M 0 24 H 360 C 430 24 450 80 500 80 C 550 80 570 24 640 24 H 1000"
        stroke="#3b82f6"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="120 1000"
        fill="none"
        animate={{ strokeDashoffset: [1120, 0] }}
        transition={{
          duration: 3.0,
          repeat: Infinity,
          ease: "linear",
          delay: 0,
        }}
      />

      <motion.path
        d="M 0 80 H 1000"
        stroke="#8b5cf6"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="120 1000"
        fill="none"
        animate={{ strokeDashoffset: [1120, 0] }}
        transition={{
          duration: 3.0,
          repeat: Infinity,
          ease: "linear",
          delay: 0,
        }}
      />

      <motion.path
        d="M 0 136 H 360 C 430 136 450 80 500 80 C 550 80 570 136 640 136 H 1000"
        stroke="#3b82f6"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="120 1000"
        fill="none"
        animate={{ strokeDashoffset: [1120, 0] }}
        transition={{
          duration: 3.0,
          repeat: Infinity,
          ease: "linear",
          delay: 0,
        }}
      />
    </svg>
  )
}

function SquiggleSvg() {
  return (
    <svg
      viewBox="0 0 160 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-2 h-3 w-36 text-purple-400/70 dark:text-purple-400/60"
    >
      <path
        d="M 3 10 C 35 3, 75 12, 115 5 C 135 1.5, 150 7, 157 5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

//  ------------------------------ | BENTO 4 | ------------------------------  //

export default function Bento4() {
  return (
    <section className="relative overflow-hidden bg-[#f8f9fc] py-10 text-slate-900 transition-colors duration-300 sm:py-16 dark:bg-[#060911] dark:text-slate-100">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12">
          <Card className="relative mb-0 flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur-sm sm:p-8 lg:col-span-7 xl:col-span-8 dark:border-slate-800/80 dark:bg-[#0c101c]/90 dark:shadow-2xl">
            <img
              src="https://cdn.uiable.com/block/bento-4.1.png"
              alt="Automation platform background"
              className="pointer-events-none absolute inset-0 size-full object-cover object-top opacity-30 dark:hidden"
            />
            <img
              src="https://cdn.uiable.com/block/bento-4.2.png"
              alt="Automation platform background dark"
              className="pointer-events-none absolute inset-0 hidden size-full object-cover object-top opacity-20 dark:block"
            />

            <div className="relative z-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl lg:leading-tight dark:text-white">
                Automate smarter.
                <br />
                Let AI{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text font-extrabold text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                  do more.
                </span>
              </h2>

              <p className="mt-2 max-w-xl text-xs leading-relaxed text-slate-600 sm:mt-3 sm:text-sm dark:text-slate-400">
                Build powerful workflows without the busywork.
              </p>
            </div>

            <div className="relative my-4 flex h-44 w-full items-center justify-center py-1 sm:my-6 sm:h-52 sm:py-2">
              <LaserFlowSvg />

              <div className="relative z-10 flex size-full items-center justify-between">
                <div className="flex h-full w-[41%] flex-col justify-between py-0.5 sm:w-[38%] sm:py-1">
                  <div className="flex h-10 items-center justify-end sm:h-12">
                    <motion.div
                      whileHover={{ scale: 1.02, x: -3 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                      className="group/pill flex w-full max-w-[210px] cursor-pointer items-center justify-between rounded-full border border-slate-200/90 bg-white/95 px-2 py-1 shadow-xs transition-all hover:border-blue-300 hover:shadow-sm sm:max-w-[250px] sm:px-3 sm:py-1.5 dark:border-slate-700/70 dark:bg-[#161a23]/95 dark:hover:border-blue-500/50"
                    >
                      <span className="size-1.5 shrink-0 animate-pulse rounded-full bg-blue-500 sm:size-2" />
                      <div className="mx-1.5 flex min-w-0 flex-1 flex-col text-right sm:mx-2">
                        <span className="truncate text-[10px] font-semibold text-slate-900 sm:text-xs dark:text-white">
                          AI Workflows
                        </span>
                        <span className="hidden truncate text-[9px] text-slate-500 sm:block sm:text-[10px] dark:text-slate-400">
                          Build smart, automate
                        </span>
                      </div>
                      <div className="flex size-5 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-blue-500 transition-colors group-hover/pill:border-blue-300 group-hover/pill:bg-blue-50 sm:size-7 dark:border-slate-700 dark:bg-[#1f2430] dark:text-blue-400">
                        <Sparkles className="size-2.5 sm:size-3.5" />
                      </div>
                    </motion.div>
                  </div>

                  <div className="flex h-10 items-center justify-end sm:h-12">
                    <motion.div
                      whileHover={{ scale: 1.02, x: -3 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                      className="group/pill flex w-full max-w-[210px] cursor-pointer items-center justify-between rounded-full border border-slate-200/90 bg-white/95 px-2 py-1 shadow-xs transition-all hover:border-purple-300 hover:shadow-sm sm:max-w-[250px] sm:px-3 sm:py-1.5 dark:border-slate-700/70 dark:bg-[#161a23]/95 dark:hover:border-purple-500/50"
                    >
                      <span className="size-1.5 shrink-0 animate-pulse rounded-full bg-purple-500 sm:size-2" />
                      <div className="mx-1.5 flex min-w-0 flex-1 flex-col text-right sm:mx-2">
                        <span className="truncate text-[10px] font-semibold text-slate-900 sm:text-xs dark:text-white">
                          AI Decisions
                        </span>
                        <span className="hidden truncate text-[9px] text-slate-500 sm:block sm:text-[10px] dark:text-slate-400">
                          Real-time insights
                        </span>
                      </div>
                      <div className="flex size-5 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-purple-500 transition-colors group-hover/pill:border-purple-300 group-hover/pill:bg-purple-50 sm:size-7 dark:border-slate-700 dark:bg-[#1f2430] dark:text-purple-400">
                        <BarChart2 className="size-2.5 sm:size-3.5" />
                      </div>
                    </motion.div>
                  </div>

                  <div className="flex h-10 items-center justify-end sm:h-12">
                    <motion.div
                      whileHover={{ scale: 1.02, x: -3 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                      className="group/pill flex w-full max-w-[210px] cursor-pointer items-center justify-between rounded-full border border-slate-200/90 bg-white/95 px-2 py-1 shadow-xs transition-all hover:border-blue-300 hover:shadow-sm sm:max-w-[250px] sm:px-3 sm:py-1.5 dark:border-slate-700/70 dark:bg-[#161a23]/95 dark:hover:border-blue-500/50"
                    >
                      <span className="size-1.5 shrink-0 animate-pulse rounded-full bg-blue-500 sm:size-2" />
                      <div className="mx-1.5 flex min-w-0 flex-1 flex-col text-right sm:mx-2">
                        <span className="truncate text-[10px] font-semibold text-slate-900 sm:text-xs dark:text-white">
                          Integrations
                        </span>
                        <span className="hidden truncate text-[9px] text-slate-500 sm:block sm:text-[10px] dark:text-slate-400">
                          Connect your tools
                        </span>
                      </div>
                      <div className="flex size-5 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-blue-500 transition-colors group-hover/pill:border-blue-300 group-hover/pill:bg-blue-50 sm:size-7 dark:border-slate-700 dark:bg-[#1f2430] dark:text-blue-400">
                        <Puzzle className="size-2.5 sm:size-3.5" />
                      </div>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-slate-200 bg-gradient-to-b from-slate-100 to-slate-200 p-0.5 shadow-md sm:size-16 sm:p-1 md:size-20 dark:border-slate-700/80 dark:from-[#222733] dark:to-[#12161f]"
                >
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                      scale: [0.95, 1.15, 0.95],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-blue-500/20 blur-md dark:bg-purple-500/20"
                  />
                  <div className="flex size-full items-center justify-center rounded-full border border-slate-300 bg-slate-900 shadow-inner dark:border-slate-600/70 dark:bg-[#090b10]">
                    <Bot className="size-5 text-blue-400 sm:size-7 md:size-9 dark:text-blue-300" />
                  </div>
                </motion.div>

                <div className="flex h-full w-[41%] flex-col justify-between py-0.5 sm:w-[38%] sm:py-1">
                  <div className="flex h-10 items-center justify-start sm:h-12">
                    <motion.div
                      whileHover={{ scale: 1.02, x: 3 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                      className="group/pill flex w-full max-w-[210px] cursor-pointer items-center justify-between rounded-full border border-slate-200/90 bg-white/95 px-2 py-1 shadow-xs transition-all hover:border-blue-300 hover:shadow-sm sm:max-w-[250px] sm:px-3 sm:py-1.5 dark:border-slate-700/70 dark:bg-[#161a23]/95 dark:hover:border-blue-500/50"
                    >
                      <div className="flex size-5 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition-colors group-hover/pill:border-blue-300 group-hover/pill:bg-blue-50 group-hover/pill:text-blue-600 sm:size-7 dark:border-slate-700 dark:bg-[#1f2430] dark:text-slate-300 dark:group-hover/pill:text-blue-400">
                        <ZapIcon className="size-2.5 text-blue-500 sm:size-3.5" />
                      </div>
                      <div className="mx-1.5 flex min-w-0 flex-1 flex-col text-left sm:mx-2">
                        <span className="truncate text-[10px] font-semibold text-slate-900 sm:text-xs dark:text-white">
                          Smart Triggers
                        </span>
                        <span className="hidden truncate text-[9px] text-slate-500 sm:block sm:text-[10px] dark:text-slate-400">
                          Run actions on events
                        </span>
                      </div>
                      <span className="size-1.5 shrink-0 animate-pulse rounded-full bg-blue-500 sm:size-2" />
                    </motion.div>
                  </div>

                  <div className="flex h-10 items-center justify-start sm:h-12">
                    <motion.div
                      whileHover={{ scale: 1.02, x: 3 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                      className="group/pill flex w-full max-w-[210px] cursor-pointer items-center justify-between rounded-full border border-slate-200/90 bg-white/95 px-2 py-1 shadow-xs transition-all hover:border-purple-300 hover:shadow-sm sm:max-w-[250px] sm:px-3 sm:py-1.5 dark:border-slate-700/70 dark:bg-[#161a23]/95 dark:hover:border-purple-500/50"
                    >
                      <div className="flex size-5 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition-colors group-hover/pill:border-purple-300 group-hover/pill:bg-purple-50 group-hover/pill:text-purple-600 sm:size-7 dark:border-slate-700 dark:bg-[#1f2430] dark:text-slate-300 dark:group-hover/pill:text-purple-400">
                        <Bot className="size-2.5 text-purple-500 sm:size-3.5" />
                      </div>
                      <div className="mx-1.5 flex min-w-0 flex-1 flex-col text-left sm:mx-2">
                        <span className="truncate text-[10px] font-semibold text-slate-900 sm:text-xs dark:text-white">
                          AI Agents
                        </span>
                        <span className="hidden truncate text-[9px] text-slate-500 sm:block sm:text-[10px] dark:text-slate-400">
                          Handle tasks for you
                        </span>
                      </div>
                      <span className="size-1.5 shrink-0 animate-pulse rounded-full bg-purple-500 sm:size-2" />
                    </motion.div>
                  </div>

                  <div className="flex h-10 items-center justify-start sm:h-12">
                    <motion.div
                      whileHover={{ scale: 1.02, x: 3 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                      className="group/pill flex w-full max-w-[210px] cursor-pointer items-center justify-between rounded-full border border-slate-200/90 bg-white/95 px-2 py-1 shadow-xs transition-all hover:border-blue-300 hover:shadow-sm sm:max-w-[250px] sm:px-3 sm:py-1.5 dark:border-slate-700/70 dark:bg-[#161a23]/95 dark:hover:border-blue-500/50"
                    >
                      <div className="flex size-5 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition-colors group-hover/pill:border-blue-300 group-hover/pill:bg-blue-50 group-hover/pill:text-blue-600 sm:size-7 dark:border-slate-700 dark:bg-[#1f2430] dark:text-slate-300 dark:group-hover/pill:text-blue-400">
                        <Play className="size-2.5 text-blue-500 sm:size-3.5" />
                      </div>
                      <div className="mx-1.5 flex min-w-0 flex-1 flex-col text-left sm:mx-2">
                        <span className="truncate text-[10px] font-semibold text-slate-900 sm:text-xs dark:text-white">
                          Automations
                        </span>
                        <span className="hidden truncate text-[9px] text-slate-500 sm:block sm:text-[10px] dark:text-slate-400">
                          Turn tasks into actions
                        </span>
                      </div>
                      <span className="size-1.5 shrink-0 animate-pulse rounded-full bg-blue-500 sm:size-2" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex flex-wrap items-center justify-center gap-1.5 pt-2 sm:gap-2.5">
              <div className="flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700 shadow-xs transition-all hover:border-slate-300 hover:text-slate-950 sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-xs dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:text-white">
                <img
                  src="https://cdn.uiable.com/block/openai.png"
                  alt="OpenAI"
                  className="size-3.5 shrink-0 object-contain sm:size-4"
                />
                <span>OpenAI</span>
              </div>

              <div className="flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700 shadow-xs transition-all hover:border-slate-300 hover:text-slate-950 sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-xs dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:text-white">
                <img
                  src="https://cdn.uiable.com/block/claude.png"
                  alt="Claude"
                  className="size-3.5 shrink-0 rounded-sm object-contain sm:size-4"
                />
                <span>Claude</span>
              </div>

              <div className="flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700 shadow-xs transition-all hover:border-slate-300 hover:text-slate-950 sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-xs dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:text-white">
                <img
                  src="https://cdn.uiable.com/block/gemini.png"
                  alt="Gemini"
                  className="size-3.5 shrink-0 object-contain sm:size-4"
                />
                <span>Gemini</span>
              </div>

              <div className="flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700 shadow-xs transition-all hover:border-slate-300 hover:text-slate-950 sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-xs dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:text-white">
                <img
                  src="https://cdn.uiable.com/block/zapier.png"
                  alt="Zapier"
                  className="size-3.5 shrink-0 object-contain sm:size-4"
                />
                <span>Zapier</span>
              </div>

              <div className="flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700 shadow-xs transition-all hover:border-slate-300 hover:text-slate-950 sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-xs dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:text-white">
                <img
                  src="https://cdn.uiable.com/block/make.png"
                  alt="Make"
                  className="size-3.5 shrink-0 object-contain sm:size-4"
                />
                <span>Make</span>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-5 lg:flex lg:flex-col lg:justify-between xl:col-span-4">
            <Card className="relative mb-0 flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur-sm sm:min-h-[240px] sm:p-6 lg:min-h-0 lg:flex-1 dark:border-slate-800/80 dark:bg-[#0c101c]/90 dark:shadow-2xl">
              <img
                src="https://cdn.uiable.com/block/bento-4.3.png"
                alt="AI Agents background"
                className="pointer-events-none absolute inset-0 size-full object-cover object-center dark:hidden dark:opacity-75"
              />
              <img
                src="https://cdn.uiable.com/block/bento-4.4.png"
                alt="AI Agents background"
                className="pointer-events-none absolute inset-0 hidden size-full object-cover object-center dark:block dark:opacity-75"
              />
            </Card>

            <Card className="relative mb-0 flex min-h-[220px] flex-col justify-end overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-4 shadow-sm backdrop-blur-sm sm:min-h-[240px] sm:p-5 lg:min-h-0 lg:flex-1 dark:border-slate-800/80 dark:bg-[#0c101c]/90 dark:shadow-2xl">
              <img
                src="https://cdn.uiable.com/block/bento-4.5.png"
                alt="AI Workflows background"
                className="pointer-events-none absolute inset-0 size-full object-cover object-top dark:hidden"
              />
              <img
                src="https://cdn.uiable.com/block/bento-4.6.png"
                alt="AI Workflows background dark"
                className="pointer-events-none absolute inset-0 hidden size-full object-cover object-top dark:block"
              />
              <div className="relative z-10 mx-auto text-center">
                <h3 className="text-sm leading-tight font-bold tracking-tight text-slate-900 sm:text-base md:text-lg dark:text-white">
                  Turn ideas into{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text font-extrabold text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                    workflows
                  </span>
                </h3>
                <p className="mt-0.5 text-xs text-slate-600 sm:mt-1 dark:text-slate-400">
                  Describe it. AI builds it.
                </p>
              </div>
            </Card>
          </div>

          <Card className="relative mb-0 flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-5 sm:p-8 lg:col-span-12 dark:border-slate-800/80 dark:bg-[#0a0f1c]/90 dark:shadow-2xl">
            <div className="pointer-events-none absolute top-1/2 right-1/4 size-96 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[100px] dark:bg-purple-600/10" />

            <div className="relative z-10 flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex shrink-0 flex-col items-start lg:max-w-md">
                <Badge
                  variant="outline"
                  className="mb-3 inline-flex items-center gap-1.5 rounded-full border-purple-200/80 bg-purple-50/80 px-3 py-1 text-xs font-semibold tracking-wider text-purple-700 uppercase shadow-xs dark:border-purple-500/30 dark:bg-purple-950/40 dark:text-purple-300"
                >
                  <Wand2 className="size-3.5 text-purple-600 dark:text-purple-400" />
                  AI AUTOMATION PLATFORM
                </Badge>

                <div className="relative inline-block">
                  <h3 className="relative pr-6 text-2xl font-bold tracking-tight text-slate-900 sm:pr-8 sm:text-3xl lg:text-4xl dark:text-white">
                    What do you want
                    <br />
                    to{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text font-extrabold text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                      automate with AI?
                    </span>
                  </h3>

                  <SquiggleSvg />
                </div>
              </div>

              <div className="flex w-full flex-1 flex-col gap-3.5 lg:max-w-2xl xl:max-w-3xl">
                <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/95 px-4 py-3 shadow-xs transition-all focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-400/20 sm:py-3.5 dark:border-slate-800 dark:bg-[#121723]/95 dark:focus-within:border-blue-500">
                    <Sparkles className="size-4 shrink-0 text-indigo-500 sm:size-5 dark:text-indigo-400" />
                    <TypewriterInput />
                  </div>
                  <ButtonAI />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
