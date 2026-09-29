import type { ReactNode } from "react"

// third-party
import { cn } from "cn"

// project-imports
import BaseUi from "@/images/svg/icons/baseui"
import Shadcn from "@/images/svg/icons/shadcn"
import Tailwind from "@/images/svg/icons/tailwind"
import FeatureBuild from "@/images/svg/landing/feature-build"
import FeatureMotion from "@/images/svg/landing/feature-motion"
import FigmaLogo from "@/images/svg/landing/figma-logo"
import FigmaOrbitRing from "@/images/svg/landing/figma-orbit-ring"

// assets
import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTypescript,
} from "@tabler/icons-react"
import { Sparkle } from "lucide-react"

// ------------------------------ | PRIMITIVES | ------------------------------ //

function Card({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <article
      className={cn(
        "relative flex min-h-[288px] flex-col overflow-hidden rounded-[20px] border border-black/[0.06] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)] dark:border-white/10 dark:bg-card",
        className
      )}
    >
      {children}
    </article>
  )
}

function Title({ children }: { children: ReactNode }) {
  return (
    <h3 className="px-6 text-center text-[20px] leading-7 font-medium text-foreground">
      {children}
    </h3>
  )
}

// ------------------------------ | CARD 1 — BASE UI GRID | ------------------------------ //

function BaseUiGrid() {
  const cols = 5
  const rows = 3
  const highlight = 1 * cols + 2 // centre cell

  return (
    <div className="relative flex-1">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div
          className="grid [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,#000_35%,transparent_88%)]"
          style={{
            gridTemplateColumns: `repeat(${cols}, 72px)`,
            gridTemplateRows: `repeat(${rows}, 72px)`,
          }}
        >
          {Array.from({ length: cols * rows }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "flex size-[72px] items-center justify-center border border-black/[0.09] dark:border-white/[0.1]",
                i === highlight && "bg-indigo-50 dark:bg-indigo-500/10"
              )}
            >
              {i === highlight && <BaseUi className="size-9 text-foreground" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ------------------------------ | CARD 3 — FIGMA MCP | ------------------------------ //

function FigmaOrbit() {
  return (
    <div className="relative flex-1">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[122px] w-[229px] shrink-0">
          <FigmaOrbitRing className="absolute top-[13px] left-0 h-[109px] w-[229px]" />
          <FigmaLogo className="absolute top-0 left-1/2 h-[93px] w-[62px] -translate-x-1/2" />
          <Sparkle className="absolute top-[68px] left-[188px] size-[13px] fill-foreground text-foreground" />
          <Sparkle className="absolute top-[100px] left-[32px] size-[11px] fill-foreground text-foreground" />
        </div>
      </div>
    </div>
  )
}

// ------------------------------ | CARD 4 — CODE EDITOR | ------------------------------ //

function CodeEditor() {
  const lines: ReactNode[] = [
    <>
      <span className="text-violet-600 dark:text-violet-400">
        export function{" "}
      </span>
      <span className="text-blue-600 dark:text-blue-400">FeatureBlock</span>
      {"() {"}
    </>,
    <>
      {"  "}
      <span className="text-violet-600 dark:text-violet-400">const</span>{" "}
      {"{ state }"} ={" "}
      <span className="text-blue-600 dark:text-blue-400">useControl</span>
      {"();"}
    </>,
    <>
      {"  "}
      <span className="text-rose-500">&lt;motion.div</span>{" "}
      <span className="text-amber-500">layout</span>
    </>,
    <>
      {"    "}
      <span className="text-amber-500">className</span>=
      <span className="text-emerald-600 dark:text-emerald-400">
        &quot;grid-item&quot;
      </span>
      &gt;
    </>,
    <>
      {"  "}
      <span className="text-rose-500">&lt;/motion.div&gt;</span>
    </>,
  ]

  return (
    <div className="relative flex-1">
      <div
        aria-hidden="true"
        className="absolute right-6 bottom-2 left-6 h-40 rounded-3xl bg-blue-300/25 blur-2xl dark:bg-blue-500/10"
      />

      <div className="absolute right-4 -bottom-6 left-[-14px] overflow-hidden rounded-2xl border border-b-0 border-black/[0.07] bg-white shadow-[0_-8px_30px_rgba(16,24,40,0.06)] dark:border-white/10 dark:bg-neutral-900">
        <div className="flex items-center justify-between px-4 py-3 pl-6">
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-red-400" />
              <span className="size-2.5 rounded-full bg-amber-400" />
              <span className="size-2.5 rounded-full bg-green-400" />
            </div>
            <span className="text-xs text-muted-foreground">
              CardPrimitive.tsx
            </span>
          </div>
          <span className="text-xs text-muted-foreground">React + TS</span>
        </div>
        <div className="border-t border-black/[0.06] dark:border-white/10" />
        <pre className="overflow-hidden px-5 py-4 font-mono text-[13px] leading-6 text-foreground">
          {lines.map((line, i) => (
            <div key={i} className="whitespace-pre">
              {line}
            </div>
          ))}
        </pre>
      </div>
    </div>
  )
}

// ------------------------------ | CARD 5 — TECH BELT | ------------------------------ //

const TECH_BELT_PATH =
  "M-40 172C20 172 55 112 185.5 112C316 112 351 172 411 172"
const TECH_BELT_DURATION = 22
const TECH_BELT_RIDERS = 6

const techIcons = [
  {
    name: "base-ui",
    node: <BaseUi className="size-7 text-white" />,
    bg: "bg-neutral-950",
  },
  {
    name: "typescript",
    node: <IconBrandTypescript className="size-8 text-white" />,
    bg: "bg-[#3178C6]",
  },
  {
    name: "nextjs",
    node: <IconBrandNextjs className="size-8 text-white" />,
    bg: "bg-neutral-950",
  },
  {
    name: "react",
    node: <IconBrandReact className="size-8 text-white" />,
    bg: "bg-[#5ED3F0]",
  },
  {
    name: "shadcn",
    node: <Shadcn className="size-7 text-white" />,
    bg: "bg-neutral-950",
  },
  {
    name: "tailwind",
    node: <Tailwind className="size-8 text-white" />,
    bg: "bg-[#38BDF8]",
  },
]

function TechBelt() {
  const step = TECH_BELT_DURATION / TECH_BELT_RIDERS

  return (
    <div className="relative flex-1">
      <svg
        viewBox="0 0 371 258"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full motion-reduce:hidden"
      >
        {Array.from({ length: TECH_BELT_RIDERS }).map((_, i) => {
          const icon = techIcons[i % techIcons.length]
          return (
            <g key={`${icon.name}-${i}`}>
              <animateMotion
                dur={`${TECH_BELT_DURATION}s`}
                begin={`${-i * step}s`}
                repeatCount="indefinite"
                calcMode="linear"
                rotate="auto"
                path={TECH_BELT_PATH}
              />
              <foreignObject
                x="-30"
                y="-30"
                width="60"
                height="60"
                className="overflow-visible"
              >
                <div
                  className={cn(
                    "flex size-[65px] items-center justify-center rounded-[18px] shadow-[0_16px_32px_rgba(16,24,40,0.22)]",
                    icon.bg
                  )}
                >
                  {icon.node}
                </div>
              </foreignObject>
            </g>
          )
        })}
      </svg>

      <div
        aria-hidden="true"
        className="absolute inset-0 hidden items-center justify-center gap-3 motion-reduce:flex"
      >
        {techIcons.map((icon) => (
          <div
            key={icon.name}
            className={cn(
              "flex size-[52px] items-center justify-center rounded-[16px] shadow-md",
              icon.bg
            )}
          >
            {icon.node}
          </div>
        ))}
      </div>
    </div>
  )
}

// ------------------------------ | FEATURE | ------------------------------ //

export default function Feature() {
  return (
    <section className="bg-background px-4 py-16 sm:px-8">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-5">
        <div className="grid gap-5 lg:grid-cols-[1fr_1.25fr_1fr]">
          <Card className="pt-8">
            <Title>Built on Base UI primitives from day one</Title>
            <BaseUiGrid />
          </Card>

          <Card>
            <h3 className="sr-only">Built for the way you build</h3>
            <FeatureBuild className="h-auto w-full" />
          </Card>

          <Card className="pb-7">
            <FigmaOrbit />
            <Title>Connect your agent with Figma MCP</Title>
          </Card>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <Card className="min-h-[264px] pt-6">
            <Title>Full control over your code. Zero lock-in.</Title>
            <CodeEditor />
          </Card>

          <Card className="min-h-[264px]">
            <h3 className="sr-only">
              Works with Base UI, TypeScript, Next.js, React, shadcn/ui and
              Tailwind CSS
            </h3>
            <TechBelt />
          </Card>

          <Card className="min-h-[264px]">
            <h3 className="sr-only">Smooth animations with motion</h3>
            <FeatureMotion className="h-auto w-full" />
          </Card>
        </div>
      </div>
    </section>
  )
}
