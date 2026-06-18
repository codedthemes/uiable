"use client";

import { useState } from "react";

// shadcn
import { Button } from "@/components/ui/button";

// project
import { TechOrbit, MotionVisual, CodeAnimation } from "@/components/animation";
import { AnimationBg } from "@/images/svg/landing";
import { cn } from "@/lib/utils";

// assets
import {
  Code,
  Component,
  Layers,
  Settings,
  Zap,
  type LucideIcon
} from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

// ------------------------------ | CONSTANTS | ------------------------------ //

const features: FeatureItem[] = [
  {
    title: "Production-ready components",
    description: "Built for real-world applications and scalable interfaces.",
    icon: Component
  },
  {
    title: "Designed for modern React stacks",
    description: "Optimized for today's frontend ecosystem.",
    icon: Layers
  },
  {
    title: "Motion-driven interactions",
    description:
      "Create polished experiences with smooth animations and transitions.",
    icon: Zap
  },
  {
    title: "Complete Code Ownership",
    description: "Fully customizable with no lock-in.",
    icon: Code
  },
  {
    title: "Customization freedom",
    description: "Flexible architecture designed to adapt to your workflow.",
    icon: Settings
  }
];


// ------------------------------ | FEATURE | ------------------------------ //

export default function Feature() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const selectedFeature = features[selectedIndex];
  const SelectedIcon = selectedFeature.icon;

  return (
    <section className="w-full mx-auto py-12.5 px-4 sm:px-8 flex flex-col gap-12.5">
      <div className="flex flex-col gap-2 md:gap-3">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight tracking-[0.1px] text-foreground">
          More than components - a complete UI system
        </h2>

        <p className="text-base md:text-lg font-normal leading-relaxed tracking-[0.1px] text-muted-foreground">
          Uiable combines scalable architecture, reusable patterns, and modern
          workflows into one consistent system.
        </p>
      </div>

      {/* Content */}
      <div className="grid gap-6 lg:gap-10 p-5 rounded-2xl bg-card lg:grid-cols-2">
        {/* Left */}
        <div className="space-y-4">
          {features.map((feature, index) => {
            const isSelected = selectedIndex === index;
            const Icon = feature.icon;

            return (
              <Button
                key={feature.title}
                type="button"
                variant="ghost"
                aria-pressed={isSelected}
                onClick={() => setSelectedIndex(index)}
                className={cn(
                  "h-auto w-full justify-start rounded-md border p-4 sm:p-5 text-left transition-all duration-200 hover:bg-muted whitespace-normal",
                  isSelected && "bg-muted"
                )}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className={cn(
                      "flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-[10px] transition-colors",
                      isSelected
                        ? "bg-foreground text-background"
                        : "bg-secondary text-foreground"
                    )}
                  >
                    <Icon className="size-5 sm:size-6" />
                  </div>

                  <div className="flex flex-col gap-1 sm:gap-1.5">
                    <h3 className="text-base sm:text-lg md:text-xl font-medium leading-snug tracking-[0.1px] text-foreground">
                      {feature.title}
                    </h3>

                    <p className="text-sm sm:text-base font-normal leading-normal tracking-[0.1px] text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Button>
            );
          })}
        </div>

        {/* Right Visual */}
        <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-muted/5">
          {selectedIndex === 1 ? (
            <TechOrbit />
          ) : selectedIndex === 2 ? (
            <MotionVisual />
          ) : selectedIndex === 3 ? (
            <CodeAnimation />
          ) :
            (
              <div className="relative w-full h-full p-10 flex flex-col items-center justify-center min-h-[380px] sm:min-h-[440px] md:min-h-[500px]">
                <AnimationBg />

                <div className="relative w-full max-w-[400px] sm:max-w-[500px] aspect-[3/2] flex flex-col items-center justify-center gap-4 sm:gap-6 pointer-events-none">
                  {/* Left bubble */}
                  <div className="absolute left-[28%] top-[42%] h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-blue-300/40 blur-sm" />

                  {/* Main bubble */}
                  <div className="relative z-10 flex h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 items-center justify-center rounded-full bg-linear-to-br from-blue-400 to-blue-600 shadow-[0_20px_60px_rgba(59,130,246,0.45)]">
                    <SelectedIcon className="size-8 sm:size-10 md:size-12 text-white" />
                  </div>

                  <div className="relative z-10 text-center pointer-events-auto">
                    <p className="text-xs sm:text-sm uppercase tracking-[0.24em] text-muted-foreground">
                      Selected feature
                    </p>
                    <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-foreground">
                      {selectedFeature.title}
                    </h3>
                    <p className="mx-auto mt-2 sm:mt-3 max-w-xs sm:max-w-sm text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {selectedFeature.description}
                    </p>
                  </div>

                  {/* Curved Lines */}
                  <svg
                    className="absolute inset-0 h-full w-full text-foreground"
                    viewBox="0 0 600 400"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M180 170 C 250 140, 320 140, 390 210"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    <path
                      d="M110 140 C 150 120, 170 110, 210 90"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Dots */}
                  <div className="absolute left-[16%] top-[44%] size-3 sm:size-4 rounded-full border border-border bg-background" />
                  <div className="absolute right-[14%] top-[63%] size-3 sm:size-4 rounded-full border border-border bg-background" />
                </div>
              </div>
            )}
        </div>
      </div>
    </section>
  );
}

