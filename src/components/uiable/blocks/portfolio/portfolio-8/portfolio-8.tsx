// shadcn
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Gallery = [
  {
    title: "Traditional Wedding Ceremony",
    images: "https://cdn.uiable.com/block/img-gal-wed-1.png",
    description:
      "A beautifully decorated wedding mandap adorned with floral arrangements, capturing the elegance and traditions of a cultural wedding ceremony.",
  },
  {
    title: "Joyful Wedding Celebration",
    images: "https://cdn.uiable.com/block/img-gal-wed-2.png",
    description:
      "The newlyweds celebrate their special moment with family and friends as balloons fill the sky, creating unforgettable memories.",
  },
  {
    title: "Elegant Ceremony Setup",
    images: "https://cdn.uiable.com/block/img-gal-wed-3.png",
    description:
      "Beautiful floral aisle decorations and seating arrangements create a romantic atmosphere for exchanging vows.",
  },
  {
    title: "Romantic Beach Walk",
    images: "https://cdn.uiable.com/block/img-gal-wed-4.png",
    description:
      "A newly married couple strolls hand in hand along the shoreline, embracing a peaceful and romantic sunset moment.",
  },
  {
    title: "Bridal Bouquet Elegance",
    images: "https://cdn.uiable.com/block/img-gal-wed-5.png",
    description:
      "A stunning bouquet of roses and seasonal flowers symbolizes love, beauty, and the celebration of a new beginning.",
  },
  {
    title: "Wedding Details & Rings",
    images: "https://cdn.uiable.com/block/img-gal-wed-6.png",
    description:
      "Delicate bridal shoes and wedding rings capture the charming details that make the special day truly memorable.",
  },
]

//  ------------------------------ | PORTFOLIO 8 | ------------------------------  //

export default function Portfolio8() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 z-10 bg-linear-to-br from-cyan-500 to-purple-500"></div>
      <div className="absolute inset-0 z-20 bg-card/85"></div>
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <div className="flex flex-col gap-6 sm:gap-12">
            <div className="flex flex-col justify-center gap-6 lg:flex-row lg:items-end">
              <div className="basis-full lg:basis-9/12">
                <div className="flex flex-col gap-4 max-lg:items-center max-lg:text-center sm:gap-6">
                  <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-50">
                    Capturing Love & Timeless Memories
                  </h2>
                  <p className="max-w-150 text-slate-600 dark:text-slate-100">
                    Every wedding is a unique story told through genuine
                    emotions, beautiful details, and unforgettable moments.
                    Explore our portfolio showcasing the art of capturing your
                    special day with elegance and passion.
                  </p>
                </div>
              </div>
              <div className="basis-full lg:basis-3/12">
                <div className="flex w-full flex-row items-center justify-center gap-2 lg:justify-end">
                  <CarouselPrevious className="static size-14 translate-y-0 rounded-full border-0 border-b-2 border-b-purple-700 bg-purple-500 text-white hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white [&_svg:not([class*='size-'])]:size-8" />
                  <CarouselNext className="static size-14 translate-y-0 rounded-full border-0 border-b-2 border-b-purple-700 bg-purple-500 text-white hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white [&_svg:not([class*='size-'])]:size-8" />
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
                    <div className="relative flex flex-col gap-5 p-4">
                      <div className="rounded-2xl shadow-[0_0_40px_-8px_#4680ff38]">
                        <div className="relative h-full w-full overflow-hidden rounded-xl">
                          <img
                            src={gallery.images}
                            alt={gallery.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 p-4">
                        <div className="text-base font-normal text-slate-900 md:text-lg dark:text-slate-100">
                          {gallery.title}
                        </div>
                        <p className="line-clamp-3 text-slate-700 dark:text-slate-300">
                          {gallery.description}
                        </p>
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
