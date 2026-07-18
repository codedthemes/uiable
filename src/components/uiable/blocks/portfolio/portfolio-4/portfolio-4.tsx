// shadcn
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"

//  ------------------------------ | PORTFOLIO 4 | ------------------------------  //

export default function Portfolio4() {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-yellow-500 from-10% via-lime-500 via-30% to-orange-500 to-90% opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-yellow-500 from-10% via-lime-500 via-30% to-orange-500 to-90% opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
        />
      </div>
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 sm:gap-12">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
            <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-50">
              Spaces Designed to Inspire
            </h2>
            <p className="max-w-150 text-slate-600 dark:text-slate-100">
              From contemporary interiors to welcoming environments, our venues
              are designed to enhance productivity, creativity, and memorable
              experiences.
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row">
            <div className="basis-full lg:basis-6/12">
              <div className="relative rounded-3xl bg-card shadow-[0_0_40px_-8px_#4680ff38]">
                <img
                  src="/assets/images/block/img-portfolio-4-1.png"
                  alt="Team meeting in a conference room"
                  className="w-full rounded-xl"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-lg bg-card/90 p-6 shadow-[0_0_40px_-8px_#4680ff38] backdrop-blur-md lg:inset-x-6 lg:bottom-6">
                  <div className="flex flex-row">
                    <div className="grow">
                      <div className="flex flex-col gap-3">
                        <p className="line-clamp-1 text-xl text-slate-800 dark:text-slate-100">
                          Collaborative Workspace
                        </p>
                        <p className="line-clamp-2 text-base text-slate-600 dark:text-slate-400">
                          Bright and spacious environment designed for teamwork,
                          meetings, and productive collaboration.
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <Button className="text-white-500 flex size-12 items-center justify-center rounded-lg border border-yellow-500 bg-yellow-500">
                        <ArrowUpRight className="size-6 text-white" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-full lg:basis-6/12">
              <div className="relative rounded-3xl bg-card shadow-[0_0_40px_-8px_#4680ff38]">
                <img
                  src="/assets/images/block/img-portfolio-4-2.png"
                  alt="Team meeting in a conference room"
                  className="w-full rounded-xl"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-lg bg-card/90 p-6 shadow-[0_0_40px_-8px_#4680ff38] backdrop-blur-md lg:inset-x-6 lg:bottom-6">
                  <div className="flex flex-row">
                    <div className="grow">
                      <div className="flex flex-col gap-3">
                        <p className="line-clamp-1 text-xl text-slate-800 dark:text-slate-100">
                          Modern Lounge Area
                        </p>
                        <p className="line-clamp-2 text-base text-slate-600 dark:text-slate-400">
                          A comfortable and elegant space ideal for networking,
                          casual meetings, and relaxation.
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <Button className="text-white-500 flex size-12 items-center justify-center rounded-lg border border-orange-500 bg-orange-500">
                        <ArrowUpRight className="size-6 text-white" />
                      </Button>
                    </div>
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
