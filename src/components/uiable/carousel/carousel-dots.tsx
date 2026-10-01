"use client"

import { useEffect, useState } from "react"

// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// third-party
import { cn } from "cn"

// assets
import { Layers, Rocket, Shield, Sparkles, Zap } from "lucide-react"

const items = [
  {
    title: "Dynamic Animations",
    description: "Smooth physics and fluid transitions across every slide.",
    icon: Sparkles,
  },
  {
    title: "Lightning Fast",
    description: "Optimized touch gestures and zero visual lag.",
    icon: Zap,
  },
  {
    title: "Modular Layouts",
    description: "Completely customizable styling powered by Tailwind CSS.",
    icon: Layers,
  },
  {
    title: "Accessible Design",
    description: "Full keyboard navigation and ARIA screen reader support.",
    icon: Shield,
  },
  {
    title: "Ready to Launch",
    description: "Copy, paste, and extend directly inside your codebase.",
    icon: Rocket,
  },
]

//  ------------------------------ | CAROUSEL - DOTS | ------------------------------  //

export default function CarouselDots() {
  const [api, setApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  useEffect(() => {
    if (!api) return

    const timeoutId = setTimeout(() => {
      setScrollSnaps(api.scrollSnapList())
      setSelectedIndex(api.selectedScrollSnap())
    }, 0)

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap())
    })
    api.on("reInit", () => {
      setScrollSnaps(api.scrollSnapList())
      setSelectedIndex(api.selectedScrollSnap())
    })

    return () => clearTimeout(timeoutId)
  }, [api])

  return (
    <div className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="overflow-hidden border-primary bg-gradient-to-br from-primary/15 via-primary/5 to-background">
                    <CardContent className="flex aspect-square flex-col items-center justify-center gap-3 p-6 text-center sm:p-8">
                      <Avatar className="size-12 ring-4 ring-primary/5 after:border-transparent sm:size-14">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          <Icon className="size-6 sm:size-7" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-foreground sm:text-lg">
                          {item.title}
                        </h4>
                        <p className="text-xs text-muted-foreground sm:text-sm">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious className="-left-4 z-10 hidden sm:-left-6 sm:inline-flex md:-left-12" />
        <CarouselNext className="-right-4 z-10 hidden sm:-right-6 sm:inline-flex md:-right-12" />
      </Carousel>

      <div className="mt-4 flex items-center justify-center gap-1.5">
        {scrollSnaps.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-2 min-w-0 rounded-full p-0 transition-all duration-300 ease-out hover:bg-transparent",
              index === selectedIndex
                ? "h-4 w-4 bg-primary shadow-sm hover:bg-primary"
                : "h-3 w-3 bg-primary/20 hover:bg-primary/40"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
