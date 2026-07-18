import { useState } from "react"

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
//  ------------------------------ | GALLERY 1 | ------------------------------  //

export default function Gallery1() {
  const [activeIdx, setActiveIdx] = useState<number | null>(2)

  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 sm:gap-12">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
            <div className="flex items-center gap-1 rounded-xl bg-sky-500/10 px-3 py-2 text-sky-500 backdrop-blur-md">
              <span className="text-md font-semibold">Gallery</span>
            </div>
            <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-50">
              Through My Lens
            </h2>
            <p className="max-w-150 text-slate-600 dark:text-slate-100">
              A collection of moments, perspectives, and stories captured
              through my camera. Each image reflects creativity, emotion, and
              the beauty found in everyday experiences.
            </p>
          </div>
          <div className="flex w-full flex-col gap-4 md:flex-row md:flex-wrap">
            {Gallery.map((gallery, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveIdx(idx)}
                className={`group h-80 cursor-pointer transition-all duration-500 ease-in-out max-md:flex-auto md:h-130 ${
                  activeIdx === idx ? "md:flex-3" : "md:flex-1"
                }`}
              >
                <div className="h-full w-full rounded-2xl bg-card shadow-[0_0_40px_-8px_#4680ff38]">
                  <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <div
                      className="absolute inset-0 z-10 w-full transition-all duration-500"
                      style={{
                        backgroundImage: `url(${gallery.images})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div className="absolute inset-0 z-20 flex p-4 duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]">
                      <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 to-slate-900/0 to-40%"></div>
                      <div
                        className={`flex h-full flex-col justify-between gap-6 transition-all duration-500 ${
                          activeIdx === idx ? "md:opacity-100" : "md:opacity-0"
                        }`}
                      >
                        <div
                          className={
                            "size-10 rounded-xl md:size-12 " +
                            gallery.colorClass +
                            ` relative z-10 flex items-center justify-center text-white transition-all duration-500 ${activeIdx === idx ? "md:scale-100" : "md:scale-0"}`
                          }
                        >
                          <span className="text-xl leading-none font-semibold">
                            0{idx + 1}
                          </span>
                        </div>
                        <div
                          className={`relative z-40 flex flex-col gap-2 transition-all duration-500 ${
                            activeIdx === idx
                              ? "md:translate-y-0"
                              : "pointer-events-none md:translate-y-100"
                          }`}
                        >
                          <h2 className="text-lg font-medium text-slate-100 sm:text-xl">
                            {gallery.title}
                          </h2>
                          <p className="text-slate-300">
                            {gallery.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
