import { useState } from "react"

// constants
const Gallery = [
  {
    title: "Modern Villa Exterior",
    images: "/assets/images/block/img-gal-home-1.png",
    description:
      "Clean architectural lines, spacious terraces, and a sparkling pool create a refined luxury living experience.",
  },
  {
    title: "Luxury Poolside Living",
    images: "/assets/images/block/img-gal-home-2.png",
    description:
      "A resort-inspired outdoor space designed for relaxation, entertainment, and year-round enjoyment.",
  },
  {
    title: "Elegant Contemporary Design",
    images: "/assets/images/block/img-gal-home-3.png",
    description:
      "Sophisticated architecture blends comfort and style, offering seamless indoor and outdoor living.",
  },
  {
    title: "Infinity Pool Retreat",
    images: "/assets/images/block/img-gal-home-4.png",
    description:
      "A serene pool area surrounded by natural beauty provides the perfect setting to unwind and recharge.",
  },
  {
    title: "Panoramic Hillside Views",
    images: "/assets/images/block/img-gal-home-5.png",
    description:
      "Sweeping landscape views enhance the exclusivity and tranquility of this luxury property.",
  },
  {
    title: "Private Residence",
    images: "/assets/images/block/img-gal-home-6.png",
    description:
      "Premium materials, open spaces, and modern details come together to create an exceptional home.",
  },
]
//  ------------------------------ | GALLERY 3 | ------------------------------  //

interface GalleryItem {
  title: string
  images: string
  description: string
}

interface GalleryCardProps {
  gallery: GalleryItem
  isActive: boolean
}

function GalleryCard({ gallery, isActive }: GalleryCardProps) {
  return (
    <div className="group w-full rounded-2xl bg-card shadow-[0_0_40px_-8px_#4680ff38]">
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        <img
          src={gallery.images}
          alt={gallery.title}
          className="w-full object-cover"
        />
        <div
          className={`${isActive ? "md:opacity-100" : "md:opacity-0"} absolute inset-0 z-20 flex p-4 duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]`}
        >
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 to-slate-900/0 to-60%"></div>
          <div
            className={`flex h-full flex-col justify-end gap-6 transition-all duration-500 ${
              isActive ? "md:opacity-100" : "md:opacity-0"
            }`}
          >
            <div
              className={`relative z-40 flex flex-col gap-2 transition-all duration-500 ${
                isActive
                  ? "md:translate-y-0"
                  : "pointer-events-none md:translate-y-100"
              }`}
            >
              <h2 className="text-lg font-medium text-slate-100 sm:text-xl">
                {gallery.title}
              </h2>
              <p className="text-slate-300">{gallery.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Gallery3() {
  const [activeIdx, setActiveIdx] = useState<number | null>(2)

  return (
    <section className="bg-slate-100 py-24 sm:py-32 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:gap-12">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-50">
              Modern Architectural Excellence
            </h2>
            <div className="h-1 w-30 rounded-full bg-sky-500"></div>
            <p className="max-w-150 text-slate-600 dark:text-slate-100">
              Explore contemporary villas featuring clean lines, open spaces,
              and breathtaking surroundings that redefine luxury living.
            </p>
          </div>
          <div className="grid w-full grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-6">
              <div className="grid w-full grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-6">
                  <div onMouseEnter={() => setActiveIdx(0)}>
                    <GalleryCard
                      gallery={Gallery[0]}
                      isActive={activeIdx === 0}
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <div onMouseEnter={() => setActiveIdx(1)}>
                    <GalleryCard
                      gallery={Gallery[1]}
                      isActive={activeIdx === 1}
                    />
                  </div>
                </div>
                <div className="col-span-12">
                  <div onMouseEnter={() => setActiveIdx(2)}>
                    <GalleryCard
                      gallery={Gallery[2]}
                      isActive={activeIdx === 2}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="grid w-full grid-cols-12 gap-6">
                <div className="col-span-12">
                  <div onMouseEnter={() => setActiveIdx(5)}>
                    <GalleryCard
                      gallery={Gallery[5]}
                      isActive={activeIdx === 5}
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <div onMouseEnter={() => setActiveIdx(3)}>
                    <GalleryCard
                      gallery={Gallery[3]}
                      isActive={activeIdx === 3}
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <div onMouseEnter={() => setActiveIdx(4)}>
                    <GalleryCard
                      gallery={Gallery[4]}
                      isActive={activeIdx === 4}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
