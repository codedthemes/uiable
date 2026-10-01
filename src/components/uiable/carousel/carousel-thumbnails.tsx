"use client"

import { useCallback, useEffect, useState } from "react"

// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
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
import { Camera, Compass, Globe, Palette, Terminal } from "lucide-react"

const galleryItems = [
  {
    title: "Minimalist Workspace",
    category: "Design",
    icon: Palette,
    color: "from-primary/25 to-primary/5",
  },
  {
    title: "Modern Architecture",
    category: "Structure",
    icon: Compass,
    color: "from-green-500/25 to-green-500/5",
  },
  {
    title: "Global Connectivity",
    category: "Network",
    icon: Globe,
    color: "from-cyan-500/25 to-cyan-500/5",
  },
  {
    title: "Developer Experience",
    category: "Code",
    icon: Terminal,
    color: "from-amber-500/25 to-amber-500/5",
  },
  {
    title: "Creative Lens",
    category: "Media",
    icon: Camera,
    color: "from-red-500/25 to-red-500/5",
  },
]

//  ------------------------------ | CAROUSEL - THUMBNAILS | ------------------------------  //

export default function CarouselThumbnails() {
  const [mainApi, setMainApi] = useState<CarouselApi>()
  const [thumbApi, setThumbApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onThumbClick = useCallback(
    (index: number) => {
      if (!mainApi || !thumbApi) return
      mainApi.scrollTo(index)
    },
    [mainApi, thumbApi]
  )

  const onSelect = useCallback(() => {
    if (!mainApi || !thumbApi) return
    setSelectedIndex(mainApi.selectedScrollSnap())
    thumbApi.scrollTo(mainApi.selectedScrollSnap())
  }, [mainApi, thumbApi])

  useEffect(() => {
    if (!mainApi) return

    const timeoutId = setTimeout(() => {
      onSelect()
    }, 0)

    mainApi.on("select", onSelect)
    mainApi.on("reInit", onSelect)

    return () => clearTimeout(timeoutId)
  }, [mainApi, onSelect])

  return (
    <div className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md">
      {/* Main Carousel */}
      <Carousel
        setApi={setMainApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {galleryItems.map((item, index) => {
            const Icon = item.icon
            return (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card
                    className={cn(
                      "overflow-hidden border-primary/20 bg-gradient-to-br",
                      item.color
                    )}
                  >
                    <CardContent className="flex aspect-[4/3] flex-col items-center justify-center gap-3 p-6 text-center sm:p-7">
                      <Avatar className="size-14 rounded-2xl after:hidden">
                        <AvatarFallback className="rounded-2xl bg-background/80 text-primary backdrop-blur-md">
                          <Icon className="size-7" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <span className="text-[10px] font-semibold tracking-wider text-primary uppercase sm:text-xs">
                          {item.category}
                        </span>
                        <h4 className="mt-0.5 text-base font-semibold text-foreground sm:text-lg">
                          {item.title}
                        </h4>
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

      {/* Thumbnails Carousel */}
      <div className="px-1">
        <Carousel
          setApi={setThumbApi}
          opts={{
            align: "center",
            containScroll: "keepSnaps",
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {galleryItems.map((item, index) => {
              const Icon = item.icon
              const isActive = index === selectedIndex
              return (
                <CarouselItem
                  key={index}
                  onClick={() => onThumbClick(index)}
                  className="basis-1/4 cursor-pointer sm:basis-1/5"
                >
                  <div
                    className={cn(
                      "flex aspect-square items-center justify-center rounded-lg border transition-all duration-200",
                      isActive
                        ? "border-primary bg-primary/15 opacity-100"
                        : "border-border bg-muted/40 opacity-50 hover:bg-muted hover:opacity-80"
                    )}
                  >
                    <Icon
                      className={cn(
                        "size-4 transition-colors",
                        isActive ? "text-primary" : "text-muted-foreground"
                      )}
                    />
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}
