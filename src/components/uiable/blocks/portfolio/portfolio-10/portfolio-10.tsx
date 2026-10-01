// shadcn
import { Button } from "@/components/ui/button"

//  ------------------------------ | PORTFOLIO 10 | ------------------------------  //

export default function Portfolio10() {
  return (
    <section className="bg-[#3b5bfd] py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6 xl:px-8">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl text-white md:text-4xl xl:text-5xl">
            Great Ideas Start With A <br />
            Scribble
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/80 md:text-lg">
            Only those who risk going too far can possibly find out how far one
            can go.
          </p>
        </div>

        {/* Portfolio Asymmetric Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 xl:gap-8">
          {/* Left Column: Stream Co (Tall Card) */}
          <div className="lg:col-span-4">
            <div className="group relative flex w-full flex-col justify-between overflow-hidden rounded-[2rem] bg-[#80b3ae] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:h-full">
              {/* Text Content */}
              <div className="absolute top-8 right-8 left-8 z-20 flex flex-col gap-2 md:top-10 md:right-10 md:left-10">
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  Stream Co
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-white/90 md:text-base">
                  Better a diamond with a flaw than a pebble without one. It's
                  about creating yourself.
                </p>
              </div>

              {/* Mockup Image */}
              <div className="mt-auto flex w-full justify-center overflow-hidden">
                <img
                  src="https://cdn.uiable.com/block/portfolio10-1.png"
                  alt="Stream Co"
                  className="h-auto w-full object-cover object-bottom transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Breathe In (Wide) & (Nirvanous + Clock Me side-by-side) */}
          <div className="flex flex-col gap-6 lg:col-span-8 xl:gap-8">
            {/* Top Card: Breathe In */}
            <div className="group relative flex w-full flex-col justify-between overflow-hidden rounded-[2rem] bg-[#f48c68] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              {/* Text Content */}
              <div className="absolute top-8 right-8 left-8 z-20 flex flex-col gap-2 md:top-10 md:right-10 md:left-10">
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  Breathe In
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-white/90 md:text-base">
                  Better a diamond with a flaw than a pebble without one. It's
                  about creating yourself.
                </p>
              </div>

              {/* Mockup Image */}
              <div className="mt-auto flex w-full justify-center overflow-hidden">
                <img
                  src="https://cdn.uiable.com/block/portfolio10-2.png"
                  alt="Breathe In"
                  className="h-auto w-full object-cover object-bottom transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* Bottom Row: Nirvanous and Clock Me */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8">
              {/* Nirvanous Card */}
              <div className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-[#3c9bf2] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Text Content */}
                <div className="absolute top-8 right-8 left-8 z-20 flex flex-col gap-2 md:top-10 md:right-10 md:left-10">
                  <h3 className="text-2xl font-bold text-white md:text-3xl">
                    Nirvanous
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-white/90 md:text-base">
                    Better a diamond with a flaw than a pebble without one.
                  </p>
                </div>

                {/* Mockup Image */}
                <div className="mt-auto flex w-full justify-center overflow-hidden">
                  <img
                    src="https://cdn.uiable.com/block/portfolio10-3.png"
                    alt="Nirvanous"
                    className="h-auto w-full object-cover object-bottom transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              {/* Clock Me Card */}
              <div className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-[#7a60f9] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Text Content */}
                <div className="absolute top-8 right-8 left-8 z-20 flex flex-col gap-2 md:top-10 md:right-10 md:left-10">
                  <h3 className="text-2xl font-bold text-white md:text-3xl">
                    Clock Me
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-white/90 md:text-base">
                    Better a diamond with a flaw than a pebble without one.
                  </p>
                </div>

                {/* Mockup Image */}
                <div className="mt-auto flex w-full justify-center overflow-hidden">
                  <img
                    src="https://cdn.uiable.com/block/portfolio10-4.png"
                    alt="Clock Me"
                    className="h-auto w-full object-cover object-bottom transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-16 flex justify-center">
          <Button
            size="lg"
            className="rounded-full bg-[#ffa800] px-8 font-semibold text-white hover:bg-[#e69700] dark:bg-[#ffa800] dark:text-white dark:hover:bg-[#e69700]"
          >
            View Portfolio
          </Button>
        </div>
      </div>
    </section>
  )
}
