// constants
const Gallery = [
  {
    title: "Traditional Wedding Ceremony",
    images: "/assets/images/block/img-gal-wed-1.png",
    description:
      "A beautifully decorated wedding mandap adorned with floral arrangements, capturing the elegance and traditions of a cultural wedding ceremony.",
  },
  {
    title: "Joyful Wedding Celebration",
    images: "/assets/images/block/img-gal-wed-2.png",
    description:
      "The newlyweds celebrate their special moment with family and friends as balloons fill the sky, creating unforgettable memories.",
  },
  {
    title: "Elegant Ceremony Setup",
    images: "/assets/images/block/img-gal-wed-3.png",
    description:
      "Beautiful floral aisle decorations and seating arrangements create a romantic atmosphere for exchanging vows.",
  },
  {
    title: "Romantic Beach Walk",
    images: "/assets/images/block/img-gal-wed-4.png",
    description:
      "A newly married couple strolls hand in hand along the shoreline, embracing a peaceful and romantic sunset moment.",
  },
  {
    title: "Bridal Bouquet Elegance",
    images: "/assets/images/block/img-gal-wed-5.png",
    description:
      "A stunning bouquet of roses and seasonal flowers symbolizes love, beauty, and the celebration of a new beginning.",
  },
  {
    title: "Wedding Details & Rings",
    images: "/assets/images/block/img-gal-wed-6.png",
    description:
      "Delicate bridal shoes and wedding rings capture the charming details that make the special day truly memorable.",
  },
]
//  ------------------------------ | GALLERY 2 | ------------------------------  //

export default function Gallery2() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 z-10 bg-linear-to-r from-rose-400 to-purple-400"></div>
      <div className="absolute inset-0 z-20 bg-card/85"></div>
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 sm:gap-12">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
            <div className="flex items-center gap-1 rounded-xl bg-pink-500/10 px-3 py-2 text-pink-500 backdrop-blur-md">
              <span className="text-md font-semibold">Love in Pictures</span>
            </div>
            <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-50">
              Moments We Treasure
            </h2>
            <p className="max-w-150 text-slate-600 dark:text-slate-100">
              Take a glimpse into our favorite memories. These photographs
              celebrate the laughter, love, and experiences that have shaped our
              relationship and brought us to this exciting new chapter.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-2">
            {Gallery.map((gallery, idx) => (
              <div
                key={idx}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <div className="group relative z-10 block w-full overflow-hidden rounded-none bg-card">
                  <img
                    src={gallery.images}
                    alt="images"
                    className="w-full transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 z-20 flex">
                    <div className="absolute inset-0 scale-200 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:bg-pink-500/30 group-hover:opacity-100 group-hover:backdrop-blur-md">
                      <div className="absolute top-16 -left-12 h-2 w-60 -rotate-45 bg-white/50"></div>
                      <div className="absolute top-10 -left-18 h-8 w-60 -rotate-45 bg-white/10"></div>
                      <div className="absolute -right-12 bottom-16 h-2 w-60 -rotate-45 bg-white/50"></div>
                      <div className="absolute -right-18 bottom-10 h-8 w-60 -rotate-45 bg-white/10"></div>
                    </div>
                    <div className="flex h-full flex-col items-center justify-center gap-6 p-8 md:p-12">
                      <div className="relative z-40 flex scale-0 flex-col items-center gap-2 text-center transition-all duration-500 group-hover:scale-100">
                        <h2 className="text-lg font-medium text-slate-100 sm:text-xl">
                          {gallery.title}
                        </h2>
                        <p className="text-pink-100">{gallery.description}</p>
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
