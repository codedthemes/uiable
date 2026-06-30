"use client"

import { useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"

// project imports
import {
  CodeAnimation,
  DiagonalScroll,
  EchoStack,
  MotionVisual,
  TechOrbit,
} from "@/components/animation"
import { SectionHeader } from "@/components/uiable/blocks/landing/components"
import { DarkFav, LightFav } from "@/images/brand"
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
      <SectionHeader
        title="More than components - a complete UI system"
        subtitle="Uiable combines scalable architecture, reusable patterns, and modern workflows into one consistent system."
      />

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
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors sm:h-14 sm:w-14",
                      isSelected
                        ? "bg-foreground text-background"
                        : "bg-secondary text-foreground"
                    )}
                  >
                    <Icon className="size-5 sm:size-6" />
                  </div>

                  <div className="flex flex-col gap-1 sm:gap-1.5">
                    <h3 className="text-base leading-snug font-medium text-foreground sm:text-lg md:text-xl">
                      {feature.title}
                    </h3>

                    <p className="text-sm leading-normal font-normal text-muted-foreground sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Button>
            )
          })}
        </div>

        {/* Right Visual */}
        <div className="relative overflow-hidden rounded-3xl bg-muted/5">
          {selectedIndex === 0 && (
            <DiagonalScroll
              badge={
                <div className="relative h-24 w-24 overflow-hidden rounded-full p-[4px]">
                  <div className="absolute inset-0 animate-[spin_3s_linear_infinite] bg-[linear-gradient(239.74deg,#C800DE_0%,#9810FA_16.93%,#4680FF_29.63%,#D08700_55.02%,#FF6900_67.72%,#FB2C36_84.65%)]" />
                  <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full">
                    <LightFav
                      width={90}
                      height={90}
                      className="block rounded-full dark:hidden"
                    />
                    <DarkFav
                      width={90}
                      height={90}
                      className="hidden rounded-full dark:block"
                    />
                  </div>
                </div>
              }
              src="/assets/images/landing/light.png"
              darkSrc="/assets/images/landing/dark.png"
              opacity={0.6}
            />
          )}
          {selectedIndex === 1 && <TechOrbit />}
          {selectedIndex === 2 && <MotionVisual />}
          {selectedIndex === 3 && <CodeAnimation />}
          {selectedIndex === 4 && (
            <div className="h-full min-h-95 w-full px-4.5 py-5 sm:min-h-110 md:min-h-125">
              <EchoStack>
                <div className="flex h-full w-full items-center justify-center">
                  <LightFav
                    width={84}
                    height={80}
                    className="block rounded-full text-white dark:hidden"
                  />
                  <DarkFav
                    width={84}
                    height={80}
                    className="hidden rounded-full text-white dark:block"
                  />
                </div>
                {[1, 2, 3, 4, 5].map((num) => (
                  <div
                    key={num}
                    className="flex size-full items-start justify-center"
                  >
                    <img
                      src={`/assets/images/landing/image-light-${num}.png`}
                      alt={`Feature layer ${num}`}
                      className="block size-full object-contain object-top md:h-[580px] md:w-[580px] dark:hidden"
                    />
                    <img
                      src={`/assets/images/landing/image-dark-${num}.png`}
                      alt={`Feature layer ${num}`}
                      className="hidden size-full object-contain object-top dark:block"
                    />
                  </div>
                ))}
              </EchoStack>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
