"use client"

import { useCallback, useEffect, useState } from "react"

// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"

// third-party
import { cn } from "cn"

// assets
import { Activity, Flame, Sparkles, TrendingUp, Trophy } from "lucide-react"

const animatedSlides = [
  {
    title: "Fluid Transitions",
    subtitle: "Spring-based motion and active slide scaling.",
    tag: "Motion",
    icon: Sparkles,
    gradient: "from-primary/25 via-primary/10 to-background",
  },
  {
    title: "High Performance",
    subtitle: "Hardware-accelerated CSS transforms and zero reflows.",
    tag: "Speed",
    icon: Flame,
    gradient: "from-amber-500/25 via-amber-500/10 to-background",
  },
  {
    title: "Realtime Analytics",
    subtitle: "Interactive state tracking and dynamic progress indicators.",
    tag: "Metrics",
    icon: TrendingUp,
    gradient: "from-green-500/25 via-green-500/10 to-background",
  },
  {
    title: "Peak Engagement",
    subtitle: "Designed to capture attention with modern visual depth.",
    tag: "Impact",
    icon: Trophy,
    gradient: "from-cyan-500/25 via-cyan-500/10 to-background",
  },
  {
    title: "Live Activity",
    subtitle: "Responsive layouts that adapt effortlessly to any device.",
    tag: "System",
    icon: Activity,
    gradient: "from-red-500/25 via-red-500/10 to-background",
  },
]

//  ------------------------------ | CAROUSEL - ANIMATED | ------------------------------  //

export default function CarouselAnimated() {
  const [api, setApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSlideClick = useCallback(
    (index: number) => {
      if (!api) return
      if (index === selectedIndex) return
      if (selectedIndex === animatedSlides.length - 1 && index === 0) {
        api.scrollNext()
      } else if (selectedIndex === 0 && index === animatedSlides.length - 1) {
        api.scrollPrev()
      } else {
        api.scrollTo(index)
      }
    },
    [api, selectedIndex]
  )

  useEffect(() => {
    if (!api) return

    const timeoutId = setTimeout(() => {
      setSelectedIndex(api.selectedScrollSnap())
    }, 0)

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap())
    })
    api.on("reInit", () => {
      setSelectedIndex(api.selectedScrollSnap())
    })

    return () => clearTimeout(timeoutId)
  }, [api])

  return (
    <div className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-3">
          {animatedSlides.map((slide, index) => {
            const Icon = slide.icon
            const isActive = index === selectedIndex
            return (
              <CarouselItem
                key={index}
                onClick={() => onSlideClick(index)}
                className="basis-4/5 cursor-pointer pl-3 sm:basis-3/4"
              >
                <div className="py-2">
                  <Card
                    className={cn(
                      "overflow-hidden transition-all duration-500 ease-out",
                      isActive
                        ? "scale-100 border-none bg-gradient-to-br opacity-100"
                        : "scale-85 border-border/60 bg-muted/30 opacity-55 shadow-none hover:opacity-75",
                      isActive ? slide.gradient : ""
                    )}
                  >
                    <CardContent className="flex aspect-square flex-col justify-between p-6 sm:p-7">
                      <div className="flex items-center justify-between">
                        <Badge
                          variant={isActive ? "default" : "secondary"}
                          className={cn(
                            "rounded-full px-2.5 py-0.5 text-[11px] font-medium transition-colors",
                            isActive
                              ? "bg-primary text-primary-foreground shadow-xs"
                              : "bg-muted text-muted-foreground hover:bg-muted"
                          )}
                        >
                          {slide.tag}
                        </Badge>
                        <Avatar
                          className={cn(
                            "size-9 transition-transform duration-500 after:hidden",
                            isActive ? "scale-110" : "scale-100"
                          )}
                        >
                          <AvatarFallback
                            className={cn(
                              "flex size-full items-center justify-center rounded-full transition-colors",
                              isActive
                                ? "bg-primary/10 text-primary"
                                : "bg-muted text-muted-foreground"
                            )}
                          >
                            <Icon className="size-4.5" />
                          </AvatarFallback>
                        </Avatar>
                      </div>

                      <div
                        className={cn(
                          "space-y-1.5 transition-all duration-500",
                          isActive
                            ? "translate-y-0 opacity-100"
                            : "translate-y-2 opacity-70"
                        )}
                      >
                        <h4 className="text-lg leading-tight font-bold text-foreground sm:text-xl">
                          {slide.title}
                        </h4>
                        <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                          {slide.subtitle}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 text-[11px] font-semibold text-muted-foreground">
                        <span>Slide</span>
                        <span className="font-mono text-primary">
                          {index + 1} / {animatedSlides.length}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious className="-left-4 z-10 hidden sm:-left-6 sm:inline-flex md:-left-10" />
        <CarouselNext className="-right-4 z-10 hidden sm:-right-6 sm:inline-flex md:-right-10" />
      </Carousel>

      {/* Animated Progress Tracker */}
      <div className="mt-3 px-6">
        <Progress
          value={Math.round(
            ((selectedIndex + 1) / animatedSlides.length) * 100
          )}
          className="gap-1.5"
        >
          <div className="flex w-full items-center justify-between text-xs text-muted-foreground">
            <ProgressLabel className="text-xs font-medium text-muted-foreground">
              Progress
            </ProgressLabel>
            <ProgressValue className="font-mono text-xs font-semibold text-foreground" />
          </div>
        </Progress>
      </div>
    </div>
  )
}
