// shadcn
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// constants
const Gallery = [
  {
    title: "Urban Reflections",
    colorClass: "bg-pink-500",
    images: "/assets/images/block/img-gallery-1.png",
    description:
      "Rain-soaked streets mirror towering skyscrapers, creating dramatic reflections that highlight the beauty and energy of the modern city.",
  },
  {
    title: "Stormy Horizons",
    colorClass: "bg-violet-500",
    images: "/assets/images/block/img-gallery-2.png",
    description:
      "Dark clouds gather above a bustling highway, capturing the contrast between nature's power and the rhythm of urban life.",
  },
  {
    title: "Golden City",
    colorClass: "bg-blue-500",
    images: "/assets/images/block/img-gallery-3.png",
    description:
      "Warm evening light paints the skyline with soft colors, showcasing the architectural elegance and atmosphere of a thriving city.",
  },
  {
    title: "Architectural Charm",
    colorClass: "bg-cyan-500",
    images: "/assets/images/block/img-gallery-4.png",
    description:
      "Historic buildings and unique street corners reveal the character, craftsmanship, and timeless beauty of urban architecture.",
  },
  {
    title: "City Movement",
    colorClass: "bg-lime-500",
    images: "/assets/images/block/img-gallery-5.png",
    description:
      "Busy streets filled with vehicles and towering buildings capture the constant motion and vibrant pace of city living.",
  },
  {
    title: "Neon Nights",
    colorClass: "bg-amber-500",
    images: "/assets/images/block/img-gallery-6.png",
    description:
      "Glowing lights, reflections, and long-exposure effects transform the city after dark into a captivating visual experience.",
  },
]

//  ------------------------------ | PORTFOLIO 3 | ------------------------------  //

export default function Portfolio3() {
  return (
    <section className="bg-slate-100 py-24 sm:py-32 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <div className="flex flex-col gap-6 sm:gap-12">
            <div className="flex flex-col justify-center gap-6 lg:flex-row lg:items-end">
              <div className="basis-full lg:basis-9/12">
                <div className="flex flex-col gap-4 max-lg:items-center max-lg:text-center sm:gap-6">
                  <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-50">
                    Projects That Define My Work
                  </h2>
                  <p className="max-w-150 text-slate-600 dark:text-slate-100">
                    Every project represents a unique challenge solved through
                    thoughtful design, clean code, and modern technologies.
                    Explore the work that reflects my experience, creativity,
                    and commitment to delivering quality digital products.
                  </p>
                </div>
              </div>
              <div className="basis-full lg:basis-3/12">
                <div className="flex w-full flex-row items-center justify-center gap-2 lg:justify-end">
                  <CarouselPrevious className="static size-14 translate-y-0 rounded-full border-0 border-b-2 border-b-sky-700 bg-sky-500 text-white hover:bg-sky-600 hover:text-white dark:hover:bg-sky-600 dark:hover:text-white [&_svg:not([class*='size-'])]:size-8" />
                  <CarouselNext className="static size-14 translate-y-0 rounded-full border-0 border-b-2 border-b-sky-700 bg-sky-500 text-white hover:bg-sky-600 hover:text-white dark:hover:bg-sky-600 dark:hover:text-white [&_svg:not([class*='size-'])]:size-8" />
                </div>
              </div>
            </div>
            <CarouselContent>
              {Gallery.map((gallery, idx) => (
                <CarouselItem
                  key={idx}
                  className="basis-full pl-4 sm:basis-1/2 lg:basis-1/4"
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
                              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out group-hover:grid-rows-[1fr]">
                                <div className="overflow-hidden">
                                  <div className="flex flex-col gap-6 pt-4">
                                    <p className="line-clamp-3 text-slate-400">
                                      {gallery.description}
                                    </p>
                                    <Button
                                      size="lg"
                                      className={`rounded-full ${gallery.colorClass}`}
                                    >
                                      View Case Study
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </div>
    </section>
  )
}
