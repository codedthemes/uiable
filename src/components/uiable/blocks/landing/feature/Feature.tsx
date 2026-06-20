"use client"

import { useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"

// project
import {
  TechOrbit,
  MotionVisual,
  CodeAnimation,
  EchoStack,
} from "@/components/animation"
import {
  AnimationLogo,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
} from "@/images/svg/landing"
import { cn } from "@/lib/utils"

// assets
import {
  Code,
  Component,
  Layers,
  Settings,
  Zap,
  type LucideIcon,
} from "lucide-react"

interface FeatureItem {
  title: string
  description: string
  icon: LucideIcon
}

// ------------------------------ | CONSTANTS | ------------------------------ //

const features: FeatureItem[] = [
  {
    title: "Production-ready components",
    description: "Built for real-world applications and scalable interfaces.",
    icon: Component,
  },
  {
    title: "Designed for modern React stacks",
    description: "Optimized for today's frontend ecosystem.",
    icon: Layers,
  },
  {
    title: "Motion-driven interactions",
    description:
      "Create polished experiences with smooth animations and transitions.",
    icon: Zap,
  },
  {
    title: "Complete Code Ownership",
    description: "Fully customizable with no lock-in.",
    icon: Code,
  },
  {
    title: "Customization freedom",
    description: "Flexible architecture designed to adapt to your workflow.",
    icon: Settings,
  },
]

// ------------------------------ | FEATURE | ------------------------------ //

export default function Feature() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <section className="mx-auto flex w-full flex-col gap-12.5 px-4 py-12.5 sm:px-8">
      <div className="flex flex-col gap-2 md:gap-3">
        {/* Heading */}
        <h2 className="text-2xl leading-tight font-medium tracking-[0.1px] text-foreground sm:text-3xl md:text-4xl">
          More than components - a complete UI system
        </h2>

        <p className="text-base leading-relaxed font-normal tracking-[0.1px] text-muted-foreground md:text-lg">
          Uiable combines scalable architecture, reusable patterns, and modern
          workflows into one consistent system.
        </p>
      </div>

      {/* Content */}
      <div className="grid gap-6 rounded-2xl bg-card p-5 lg:grid-cols-2 lg:gap-10">
        {/* Left */}
        <div className="space-y-4">
          {features.map((feature, index) => {
            const isSelected = selectedIndex === index
            const Icon = feature.icon

            return (
              <Button
                key={feature.title}
                type="button"
                variant="ghost"
                aria-pressed={isSelected}
                onClick={() => setSelectedIndex(index)}
                className={cn(
                  "h-auto w-full justify-start rounded-md border p-4 text-left whitespace-normal transition-all duration-200 hover:bg-muted sm:p-5",
                  isSelected && "bg-muted"
                )}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] transition-colors sm:h-14 sm:w-14",
                      isSelected
                        ? "bg-foreground text-background"
                        : "bg-secondary text-foreground"
                    )}
                  >
                    <Icon className="size-5 sm:size-6" />
                  </div>

                  <div className="flex flex-col gap-1 sm:gap-1.5">
                    <h3 className="text-base leading-snug font-medium tracking-[0.1px] text-foreground sm:text-lg md:text-xl">
                      {feature.title}
                    </h3>

                    <p className="text-sm leading-normal font-normal tracking-[0.1px] text-muted-foreground sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Button>
            )
          })}
        </div>

        {/* Right Visual */}
        <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-muted/5">
          {selectedIndex === 0 && <MotionVisual />}
          {selectedIndex === 1 && <TechOrbit />}
          {selectedIndex === 2 && <MotionVisual />}
          {selectedIndex === 3 && <CodeAnimation />}
          {selectedIndex === 4 && (
            <div className="h-full w-full px-15 py-5">
              <EchoStack>
                <div className="flex h-full w-full items-center justify-center">
                  <AnimationLogo />
                </div>
                <Image1 />
                <Image2 />
                <Image3 />
                <Image4 />
                <Image5 />
              </EchoStack>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
