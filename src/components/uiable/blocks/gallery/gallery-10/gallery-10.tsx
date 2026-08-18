import React from "react"

// shadcn
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

// third-party
import Autoplay from "embla-carousel-autoplay"

// project-imports
// project imports
import { Star } from "@/images/svg/icons"
import { cn } from "@/lib/utils"

// assets
import { ArrowLeft, ArrowRight } from "lucide-react"

const images = [
  "https://cdn.uiable.com/block/img-gal10-1.png",
  "https://cdn.uiable.com/block/img-gal10-2.png",
  "https://cdn.uiable.com/block/img-gal10-3.png",
  "https://cdn.uiable.com/block/img-gal10-4.png",
  "https://cdn.uiable.com/block/img-gal10-5.png",
  "https://cdn.uiable.com/block/img-gal10-6.png",
  "https://cdn.uiable.com/block/img-gal10-7.png",
]
//  ------------------------------ | GALLERY 5 | ------------------------------  //

function DecorativeStars() {
  return (
    <div className="absolute left-1/2 w-screen -translate-x-1/2 before:absolute before:top-0 before:left-[-100vw] before:h-px before:w-[200vw] before:border-t-4 before:border-dashed before:border-slate-800 after:absolute">
      <div className="relative container mx-auto h-full max-sm:w-[calc(100%-30px)]">
        <div className="absolute top-0 left-0 -translate-2/4 pt-1 pl-1 text-border/60">
          <Star className="size-16 text-slate-800 max-md:hidden" />
        </div>
        <div className="absolute top-0 right-0 translate-x-2/4 -translate-y-2/4 pt-1 pr-1 text-border/60">
          <Star className="size-16 text-slate-800 max-md:hidden" />
        </div>
      </div>
    </div>
  )
}

export default function Gallery5() {
  const plugin = React.useMemo(() => Autoplay({ delay: 2000 }), [])

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const total = images.length

  const getPosition = (index: number) => {
    let diff = index - current

    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total

    return diff
  }
  React.useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    onSelect()

    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <section className="overflow-hidden bg-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="relative container mx-auto border-x-4 border-dashed border-slate-800 py-6 sm:py-16">
        <DecorativeStars />
        <div className="flex flex-col items-center gap-5 py-12 sm:gap-12 sm:py-16">
          <div className="flex flex-col items-center gap-4 px-3 text-center sm:gap-6">
            <div className="flex items-center gap-1 rounded-xl bg-cyan-500/10 px-3 py-2 text-cyan-500 backdrop-blur-md">
              <span className="text-md font-semibold">Gallery</span>
            </div>
            <h2 className="text-lg font-medium text-slate-100 sm:text-3xl">
              Through My Lens
            </h2>
            <p className="max-w-150 text-slate-300">
              A collection of moments, perspectives, and stories captured
              through my camera. Each image reflects creativity, emotion, and
              the beauty found in everyday experiences.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[plugin]}
              onMouseEnter={() => plugin.stop()}
              onMouseLeave={() => plugin.reset()}
              className="w-full overflow-visible mask-r-from-95% mask-r-to-100% mask-l-from-95% mask-l-to-100%"
            >
              <CarouselContent className="-ml-6 overflow-visible py-12">
                {images.map((image, index) => {
                  const position = getPosition(index)

                  return (
                    <CarouselItem
                      key={index}
                      className="basis-[60%] pl-2 sm:basis-[38%] lg:basis-[26%]"
                    >
                      <div
                        className={cn(
                          "relative transition-all duration-500 ease-out",
                          position === 0 && "z-50 scale-125",
                          position === -1 &&
                            "z-40 -translate-x-12 scale-95 opacity-100",
                          position === 1 &&
                            "z-40 translate-x-12 scale-95 opacity-100",
                          position === -2 &&
                            "z-30 -translate-x-6 scale-80 opacity-50 grayscale-75",
                          position === 2 &&
                            "z-30 translate-x-6 scale-80 opacity-50 grayscale-75",
                          Math.abs(position) > 2 && "scale-50 opacity-0"
                        )}
                      >
                        <img
                          src={image}
                          alt=""
                          className="w-full rounded-2xl object-cover"
                        />
                      </div>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
            </Carousel>
            <div className="flex justify-center gap-4">
              <Button
                size="icon"
                className="size-10 rounded-lg border-0 border-b border-cyan-700 bg-cyan-500 text-white hover:translate-y-1 hover:opacity-90 [&_svg:not([class*='size-'])]:size-6"
                onClick={() => api?.scrollPrev()}
              >
                <ArrowLeft />
              </Button>

              <Button
                size="icon"
                className="size-10 rounded-lg border-0 border-b border-cyan-700 bg-cyan-500 text-white hover:translate-y-1 hover:opacity-90 [&_svg:not([class*='size-'])]:size-6"
                onClick={() => api?.scrollNext()}
              >
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
        <DecorativeStars />
      </div>
    </section>
  )
}
