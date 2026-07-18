// shadcn
import React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

// constants
const Gallery = [
  {
    title: "Urban Reflections",
    images: "/assets/images/block/img-gallery-1.png",
    description:
      "Rain-soaked streets mirror towering skyscrapers, creating dramatic reflections that highlight the beauty and energy of the modern city.",
  },
  {
    title: "Stormy Horizons",
    images: "/assets/images/block/img-gallery-2.png",
    description:
      "Dark clouds gather above a bustling highway, capturing the contrast between nature's power and the rhythm of urban life.",
  },
  {
    title: "Golden City",
    images: "/assets/images/block/img-gallery-3.png",
    description:
      "Warm evening light paints the skyline with soft colors, showcasing the architectural elegance and atmosphere of a thriving city.",
  },
  {
    title: "Architectural Charm",
    images: "/assets/images/block/img-gallery-4.png",
    description:
      "Historic buildings and unique street corners reveal the character, craftsmanship, and timeless beauty of urban architecture.",
  },
  {
    title: "City Movement",
    images: "/assets/images/block/img-gallery-5.png",
    description:
      "Busy streets filled with vehicles and towering buildings capture the constant motion and vibrant pace of city living.",
  },
  {
    title: "Neon Nights",
    images: "/assets/images/block/img-gallery-6.png",
    description:
      "Glowing lights, reflections, and long-exposure effects transform the city after dark into a captivating visual experience.",
  },
]

//  ------------------------------ | GALLERY 4 | ------------------------------  //

export default function Gallery4() {
  const plugin = React.useMemo(
    () => Autoplay({ delay: 2000, stopOnInteraction: true }),
    []
  )
  return (
    <section className="overflow-hidden py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 sm:gap-12">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
            <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-50">
              Portfolio Gallery
            </h2>
            <p className="max-w-150 text-slate-600 dark:text-slate-100">
              Explore a curated collection of projects that showcase creativity,
              craftsmanship, and attention to detail across a variety of designs
              and spaces.
            </p>
          </div>
          <Carousel
            opts={{ align: "center", loop: true }}
            className="w-full [&>div]:overflow-visible"
            plugins={[plugin]}
            onMouseEnter={() => plugin.stop()}
            onMouseLeave={() => plugin.reset()}
          >
            <CarouselContent>
              {Gallery.map((gallery, idx) => (
                <CarouselItem
                  key={idx}
                  className="basis-3/4 pl-4 sm:basis-1/2 lg:basis-1/4"
                >
                  <div className="group">
                    <div className="h-full w-full rounded-2xl bg-card shadow-[0_0_40px_-8px_#4680ff38]">
                      <div className="relative h-full w-full overflow-hidden rounded-xl">
                        <img
                          src={gallery.images}
                          alt={gallery.title}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 z-20 flex p-2">
                          <div className="flex h-full flex-col justify-end gap-6 p-2">
                            <div className="relative flex flex-col gap-2 rounded-xl bg-slate-900/10 p-4 backdrop-blur-lg">
                              <div className="text-base font-normal text-slate-200 md:text-lg">
                                {gallery.title}
                              </div>
                              <p className="line-clamp-3 text-slate-400">
                                {gallery.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
