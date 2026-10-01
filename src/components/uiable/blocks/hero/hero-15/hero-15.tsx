"use client"
import { MouseEvent as ReactMouseEvent } from "react"

// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

// third-party
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"

// assets
// assets
import {
  ArrowRight,
  Bot,
  Check,
  CheckCircle2,
  Code2,
  CornerDownLeft,
  Folder,
  FolderOpen,
  GitBranch,
  Play,
  Search,
  Sparkles,
  X,
} from "lucide-react"

export default function Hero15() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }
  return (
    <section className="dark relative overflow-hidden bg-slate-950 pt-32 pb-20 text-white md:pt-48 md:pb-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative z-10 container mx-auto flex flex-col items-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          The AI Workspace
          <br />
          for <span className="text-[#a78bfa]">Developers</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 max-w-xl text-base text-gray-400 md:text-lg"
        >
          Write better code, connect your tools, and ship faster — all in one
          place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button
            size="default"
            className="cursor-pointer rounded-full bg-white px-7 text-sm font-medium text-black hover:bg-gray-200"
          >
            Start for free
          </Button>
          <Button
            size="default"
            variant="outline"
            className="group cursor-pointer rounded-full border-white/10 bg-white/5 px-7 text-sm text-white hover:bg-white/10 hover:text-white"
          >
            Book a Demo
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        {/* Mockup UI Showcase (Glassmorphic + Spotlight) */}
        <div className="relative mt-2 w-full max-w-4xl">
          {/* Ambient Multi-layer Glow Behind Mockup */}
          <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-purple-600/30 via-indigo-500/20 to-blue-600/30 opacity-70 blur-2xl" />

          {/* Floating Metric Badge 1 (Top Right) */}
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -top-3.5 -right-2 z-20 hidden items-center gap-2 rounded-xl border border-emerald-500/30 bg-[#0A0E1A]/70 px-3 py-1.5 shadow-xl backdrop-blur-xl sm:flex"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-semibold text-white">
                  64/64 Tests Passed
                </span>
                <span className="py-0.2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-1.5 text-[9px] font-medium text-emerald-400">
                  100%
                </span>
              </div>
            </div>
          </motion.div>

          {/* Floating Metric Badge 2 (Bottom Left) */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-3.5 -left-2 z-20 hidden items-center gap-2 rounded-xl border border-purple-500/30 bg-[#0A0E1A]/70 px-3 py-1.5 shadow-xl backdrop-blur-xl sm:flex"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-purple-500/15 text-purple-400">
              <Bot className="h-3.5 w-3.5" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-semibold text-white">
                  AI Stream Active
                </span>
                <span className="flex h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />
              </div>
            </div>
          </motion.div>

          {/* Main IDE Window with Spotlight Effect & Translucent Glass */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onMouseMove={handleMouseMove}
            className="group relative z-10 w-full overflow-hidden rounded-2xl border border-white/15 bg-[#0B0F19]/40 text-left shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/10 backdrop-blur-2xl transition-colors hover:border-purple-500/40"
          >
            {/* Interactive Spotlight Radial Glow */}
            <motion.div
              className="pointer-events-none absolute -inset-px z-0 opacity-0 transition duration-300 group-hover:opacity-100"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    450px circle at ${mouseX}px ${mouseY}px,
                    rgba(168, 85, 247, 0.18),
                    rgba(59, 130, 246, 0.10),
                    transparent 80%
                  )
                `,
              }}
            />

            {/* Interactive Spotlight Border Highlight */}
            <motion.div
              className="pointer-events-none absolute inset-0 z-30 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
              style={
                {
                  background: useMotionTemplate`
                    radial-gradient(
                      350px circle at ${mouseX}px ${mouseY}px,
                      rgba(192, 132, 252, 0.7),
                      rgba(96, 165, 250, 0.4),
                      transparent 80%
                    )
                  `,
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "1.5px",
                } as any
              }
            />

            {/* Window Titlebar */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-3.5 py-2 text-xs backdrop-blur-md">
              {/* Left: Window Dots & Project Breadcrumb */}
              <div className="flex items-center gap-3">
                <div className="flex items-center space-x-1.5">
                  <div className="h-2.5 w-2.5 rounded-full border border-[#E0443E]/50 bg-[#FF5F56]/90 shadow-inner" />
                  <div className="h-2.5 w-2.5 rounded-full border border-[#DEA123]/50 bg-[#FFBD2E]/90 shadow-inner" />
                  <div className="h-2.5 w-2.5 rounded-full border border-[#1AAB29]/50 bg-[#27C93F]/90 shadow-inner" />
                </div>
                <div className="hidden items-center gap-1.5 font-mono text-[11px] text-gray-400 sm:flex">
                  <span>workspace</span>
                  <span className="text-gray-600">/</span>
                  <span>agents</span>
                  <span className="text-gray-600">/</span>
                  <span className="font-medium text-gray-200">
                    stream-pipeline.ts
                  </span>
                </div>
              </div>

              {/* Center: Command Palette / Search Bar */}
              <div className="flex w-36 items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-gray-400 sm:w-56 md:w-64">
                <Search className="h-3 w-3 shrink-0 text-gray-500" />
                <span className="truncate text-[10px] text-gray-400">
                  Ask AI or search...
                </span>
                <span className="py-0.2 ml-auto hidden items-center rounded border border-white/10 bg-white/5 px-1 font-mono text-[9px] text-gray-400 md:inline-flex">
                  ⌘K
                </span>
              </div>

              {/* Right: Branch & Model Info */}
              <div className="flex items-center gap-2">
                <div className="hidden items-center gap-1 rounded bg-white/5 px-2 py-0.5 text-[10px] text-gray-300 md:flex">
                  <GitBranch className="h-2.5 w-2.5 text-purple-400" />
                  <span>main</span>
                </div>
                <div className="flex items-center gap-1 rounded-full border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 text-[10px] text-purple-300">
                  <Sparkles className="h-2.5 w-2.5" />
                  <span>Claude 3.7</span>
                </div>
              </div>
            </div>

            {/* Window Body: 3-Panel Compact Layout with Translucent Panels */}
            <div className="relative z-10 grid min-h-[300px] grid-cols-1 md:grid-cols-12">
              {/* Left Panel: File Explorer */}
              <div className="hidden flex-col border-r border-white/10 bg-black/20 text-xs backdrop-blur-sm select-none md:col-span-3 md:flex">
                <div className="flex items-center justify-between border-b border-white/5 px-3 py-2 text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
                  <span>Files</span>
                  <Code2 className="h-3 w-3 text-gray-500" />
                </div>
                <div className="space-y-0.5 p-1.5 font-mono text-[11px]">
                  <div className="flex cursor-pointer items-center gap-1.5 rounded px-2 py-1 text-gray-400 hover:bg-white/5">
                    <Folder className="h-3 w-3 text-gray-500" />
                    <span>app/api</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 font-medium text-purple-300">
                    <FolderOpen className="h-3 w-3 text-purple-400" />
                    <span>src/agents</span>
                  </div>
                  <div className="space-y-0.5 pl-3.5">
                    <div className="flex items-center gap-1.5 rounded border-l-2 border-purple-400 bg-purple-500/15 px-2 py-1 font-medium text-purple-200">
                      <span className="text-[9px] font-bold text-purple-400">
                        TS
                      </span>
                      <span className="truncate">stream.ts</span>
                    </div>
                    <div className="flex cursor-pointer items-center gap-1.5 rounded px-2 py-1 text-gray-400 hover:bg-white/5 hover:text-gray-300">
                      <span className="text-[9px] font-bold text-gray-500">
                        TS
                      </span>
                      <span className="truncate">vector.ts</span>
                    </div>
                  </div>
                  <div className="flex cursor-pointer items-center gap-1.5 rounded px-2 py-1 text-gray-400 hover:bg-white/5">
                    <Folder className="h-3 w-3 text-gray-500" />
                    <span>tests</span>
                  </div>
                </div>

                {/* AI Context Mini Card */}
                <div className="m-2 mt-auto rounded-lg border border-white/10 bg-white/[0.03] p-2 backdrop-blur-xs">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-[9px] font-semibold tracking-wider text-gray-400 uppercase">
                      AI Context
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex justify-between font-mono text-[10px] text-gray-400">
                    <span>38 indexed</span>
                    <span className="text-purple-300">100% ready</span>
                  </div>
                </div>
              </div>

              {/* Center Panel: Code Editor with Inline AI Diff */}
              <div className="col-span-1 flex min-w-0 flex-col bg-transparent md:col-span-9 lg:col-span-6">
                {/* Editor Tab Bar */}
                <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.015] px-2 pt-1 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="flex items-center gap-1.5 border-b-2 border-purple-500 bg-white/[0.04] px-2.5 py-1.5 font-mono text-[11px] font-medium text-gray-200">
                      <span className="text-[9px] font-bold text-purple-400">
                        TS
                      </span>
                      <span>stream.ts</span>
                      <X className="ml-0.5 h-2.5 w-2.5 cursor-pointer text-gray-500 hover:text-white" />
                    </div>
                    <div className="hidden cursor-pointer items-center gap-1.5 px-2 py-1.5 font-mono text-[11px] text-gray-500 hover:text-gray-300 sm:flex">
                      <span className="text-[9px] font-bold text-gray-600">
                        TS
                      </span>
                      <span>vector.ts</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 pr-1">
                    <button className="flex cursor-pointer items-center gap-1 rounded bg-purple-500/15 px-2 py-0.5 text-[10px] text-purple-300 transition-colors hover:bg-purple-500/25">
                      <Play className="h-2.5 w-2.5 fill-current" />
                      <span>Run</span>
                    </button>
                  </div>
                </div>

                {/* Editor Lines */}
                <div className="flex-1 overflow-x-auto p-3 font-mono text-xs leading-relaxed select-none sm:text-[12px]">
                  {/* Line 1 */}
                  <div className="flex items-start">
                    <span className="mr-3 w-4 shrink-0 text-right text-gray-600 select-none">
                      1
                    </span>
                    <span className="text-purple-400">
                      import{" "}
                      <span className="text-gray-200">{"{ Agent }"}</span> from{" "}
                      <span className="text-green-300">"@uiable/agent"</span>;
                    </span>
                  </div>
                  {/* Line 2 */}
                  <div className="flex items-start">
                    <span className="mr-3 w-4 shrink-0 text-right text-gray-600 select-none">
                      2
                    </span>
                    <span className="text-purple-400">
                      export async function{" "}
                      <span className="text-blue-300">streamAgent</span>(
                      <span className="text-orange-300">query</span>:{" "}
                      <span className="text-cyan-300">string</span>) {"{"}
                    </span>
                  </div>
                  {/* Line 3 */}
                  <div className="flex items-start">
                    <span className="mr-3 w-4 shrink-0 text-right text-gray-600 select-none">
                      3
                    </span>
                    <span className="pl-3 text-purple-400">
                      const <span className="text-blue-300">agent</span> ={" "}
                      <span className="text-purple-400">new</span>{" "}
                      <span className="text-yellow-200">Agent</span>({"{"}{" "}
                      <span className="text-gray-300">model</span>:{" "}
                      <span className="text-green-300">"claude-3.7"</span> {"}"}
                      );
                    </span>
                  </div>

                  {/* Inline AI Suggestion / Diff Block */}
                  <div className="my-1.5 rounded-lg border border-purple-500/30 bg-purple-950/20 p-2 shadow-sm ring-1 ring-purple-500/20 backdrop-blur-xs">
                    <div className="mb-1 flex items-center justify-between font-sans text-[10px]">
                      <div className="flex items-center gap-1 font-medium text-purple-300">
                        <Sparkles className="h-3 w-3 text-purple-400" />
                        <span>AI Suggestion: sliding-window stream buffer</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="py-0.2 rounded border border-purple-500/30 bg-purple-500/20 px-1 font-mono text-[9px] text-purple-300">
                          Tab
                        </span>
                        <span className="text-[9px] text-gray-400">Accept</span>
                      </div>
                    </div>
                    <div className="space-y-0.5 font-mono text-[11px] text-emerald-300">
                      <div className="flex items-start">
                        <span className="mr-3 w-4 shrink-0 text-right text-emerald-500/60 select-none">
                          4
                        </span>
                        <span className="pl-3">
                          <span className="font-bold text-emerald-400">+</span>{" "}
                          return await agent.stream({"{"}
                        </span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-3 w-4 shrink-0 text-right text-emerald-500/60 select-none">
                          5
                        </span>
                        <span className="pl-6">
                          <span className="font-bold text-emerald-400">+</span>{" "}
                          input: query, tools: [searchTool], cache: true
                        </span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-3 w-4 shrink-0 text-right text-emerald-500/60 select-none">
                          6
                        </span>
                        <span className="pl-3">
                          <span className="font-bold text-emerald-400">+</span>{" "}
                          {"}"});
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Line 7 */}
                  <div className="flex items-start">
                    <span className="mr-3 w-4 shrink-0 text-right text-gray-600 select-none">
                      7
                    </span>
                    <span className="text-purple-400">{"}"}</span>
                  </div>
                </div>

                {/* Editor Bottom Status Bar */}
                <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-3 py-1 font-mono text-[10px] text-gray-500 backdrop-blur-xs">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 text-gray-400">
                      <GitBranch className="h-2.5 w-2.5 text-purple-400" />{" "}
                      main*
                    </span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-400">TypeScript 5.7</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-ping rounded-full bg-emerald-400" />
                    <span className="text-gray-300">120 tok/s</span>
                  </div>
                </div>
              </div>

              {/* Right Panel: AI Assistant Drawer */}
              <div className="hidden flex-col border-l border-white/10 bg-black/20 p-3 text-xs backdrop-blur-sm lg:col-span-3 lg:flex">
                {/* Assistant Header */}
                <div className="mb-2 flex items-center justify-between border-b border-white/5 pb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded-md bg-purple-500/20 text-purple-400">
                      <Sparkles className="h-3 w-3" />
                    </div>
                    <span className="text-[11px] font-semibold text-white">
                      AI Copilot
                    </span>
                  </div>
                  <div className="py-0.2 flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-1.5 text-[9px] text-emerald-400">
                    <span className="h-1 w-1 rounded-full bg-emerald-400" />
                    <span>Ready</span>
                  </div>
                </div>

                {/* Assistant Feed */}
                <div className="flex-1 space-y-2 font-sans">
                  {/* User Message */}
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2">
                    <div className="mb-1 flex items-center gap-1.5">
                      <Avatar className="h-4 w-4 border border-white/10">
                        <AvatarImage
                          src="https://cdn.uiable.com/block/profile-1.png"
                          alt="Dev"
                        />
                        <AvatarFallback className="text-[8px]">
                          DV
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-[10px] font-medium text-gray-300">
                        Developer
                      </span>
                    </div>
                    <p className="text-[10px] leading-relaxed text-gray-300">
                      "Stream response with sub-150ms TTFT."
                    </p>
                  </div>

                  {/* AI Response & Actions */}
                  <div className="space-y-1.5 rounded-lg border border-purple-500/20 bg-purple-950/15 p-2">
                    <div className="flex items-center gap-1 text-[10px] font-semibold text-purple-300">
                      <Bot className="h-3 w-3 text-purple-400" />
                      <span>Optimizations</span>
                    </div>
                    <div className="space-y-1 font-mono text-[10px] text-gray-400">
                      <div className="flex items-center gap-1.5 text-gray-300">
                        <Check className="h-3 w-3 shrink-0 text-emerald-400" />
                        <span>Parsed AST in 28ms</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-300">
                        <Check className="h-3 w-3 shrink-0 text-emerald-400" />
                        <span>Sliding-window buffer</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Assistant Input Bar */}
                <div className="mt-2 flex items-center justify-between rounded-lg border border-white/10 bg-black/40 px-2.5 py-1.5 text-xs text-gray-400">
                  <span className="truncate text-[10px] text-gray-500">
                    Ask AI...
                  </span>
                  <div className="flex h-4 w-4 items-center justify-center rounded bg-purple-600/30 text-purple-300">
                    <CornerDownLeft className="h-2.5 w-2.5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
