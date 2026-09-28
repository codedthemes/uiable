// shadcn
import { Button } from "@/components/ui/button"

// assets
import { Briefcase, Globe, Heart, Users } from "lucide-react"

//  ------------------------------ | STATISTICS 4 | ------------------------------  //

export default function Statistics4() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center gap-6 sm:items-center lg:flex-row">
          <div className="basis-full lg:basis-4/12">
            <div className="flex flex-col items-start gap-4 sm:gap-8">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium tracking-wider text-slate-500 uppercase">
                  STATISTICS
                </span>
                <h2 className="text-lg font-medium text-slate-900 sm:text-3xl dark:text-slate-100">
                  What Numbers Say
                </h2>
              </div>
              <p className="max-w-150 text-base text-slate-700 dark:text-slate-300">
                Discover how simple it is to integrate, configure, monitor, and
                scale your business operations with our next-generation SaaS
                platform.
              </p>
              <Button
                size="lg"
                className="rounded-full border-0 border-b-2 border-b-blue-700 bg-blue-500 hover:translate-y-1 hover:opacity-90"
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="basis-full lg:basis-6/12">
            <div className="flex w-full flex-col gap-2">
              <div className="flex flex-col gap-2 md:flex-row md:items-end">
                <div className="basis-full sm:basis-1/2">
                  <div className="flex items-center justify-center rounded-2xl bg-pink-500 p-4 shadow-[0_0_40px_-8px_#4680ff38] sm:ml-auto sm:size-38 xl:p-4">
                    <div className="flex flex-col items-center gap-1.5">
                      <Users className="size-6 stroke-2 text-white/60 md:size-8" />
                      <h2 className="text-lg font-medium text-white sm:text-lg">
                        360+
                      </h2>
                      <p className="text-base font-semibold tracking-wider text-white/80 uppercase">
                        TRAINED STAFF
                      </p>
                    </div>
                  </div>
                </div>
                <div className="basis-full sm:basis-1/2">
                  <div className="flex items-center justify-center rounded-2xl bg-cyan-500 p-4 shadow-[0_0_40px_-8px_#4680ff38] sm:mr-auto sm:size-60 xl:p-4">
                    <div className="flex flex-col items-center gap-3">
                      <Globe className="size-6 stroke-2 text-white/60 md:size-8" />

                      <h2 className="text-lg font-medium text-white sm:text-4xl">
                        14+
                      </h2>
                      <p className="text-base font-semibold tracking-wider text-white/80 uppercase">
                        OFFICES WORLDWIDE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:items-start">
                <div className="basis-full sm:basis-1/2">
                  <div className="flex items-center justify-center rounded-2xl bg-lime-500 p-4 shadow-[0_0_40px_-8px_#4680ff38] sm:ml-auto sm:size-60 xl:p-4">
                    <div className="flex flex-col items-center gap-3">
                      <Briefcase className="size-6 stroke-2 text-white/60 md:size-8" />
                      <h2 className="text-lg font-medium text-white sm:text-4xl">
                        1440+
                      </h2>
                      <p className="text-base font-semibold tracking-wider text-white/80 uppercase">
                        COMPLETED PROJECTS
                      </p>
                    </div>
                  </div>
                </div>
                <div className="basis-full sm:basis-1/2">
                  <div className="flex items-center justify-center rounded-2xl bg-amber-500 p-4 shadow-[0_0_40px_-8px_#4680ff38] sm:mr-auto sm:size-38 xl:p-4">
                    <div className="flex flex-col items-center gap-1.5">
                      <Heart className="size-6 stroke-2 text-white/60 md:size-8" />
                      <h2 className="text-lg font-medium text-white sm:text-lg">
                        56+
                      </h2>
                      <p className="text-base font-semibold tracking-wider text-white/80 uppercase">
                        LOYAL CLIENTS
                      </p>
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
