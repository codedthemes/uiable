// shadcn
import {
  Bluetooth,
  HardDrive,
  Headphones,
  Settings,
  Shield,
  Volume2,
} from "lucide-react"

import { Button } from "@/components/ui/button"

//  ------------------------------ | PORTFOLIO 2 | ------------------------------  //

export default function Portfolio2() {
  const features = [
    {
      title: "audio prompts",
      icon: Volume2,
    },
    {
      title: "bluetooth transfer",
      icon: Bluetooth,
    },
    {
      title: "more free space",
      icon: HardDrive,
    },
    {
      title: "24/7 support",
      icon: Headphones,
    },
    {
      title: "Security",
      icon: Shield,
    },
    {
      title: "settings",
      icon: Settings,
    },
  ]
  return (
    <section className="bg-slate-100 py-24 sm:py-32 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row">
          <div className="basis-full lg:basis-5/12">
            <div className="relative">
              <img
                src="/assets/images/block/feature-watch.png"
                alt="img"
                className="relative z-20 h-auto w-full"
              />
              <img
                src="/assets/images/block/feature-moke-shadow.png"
                alt="img"
                className="absolute top-0 left-0 z-10 h-auto w-full"
              />
            </div>
          </div>
          <div className="basis-full lg:basis-6/12">
            <div className="flex flex-col gap-6 sm:gap-12">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h2 className="text-lg font-medium text-slate-800 sm:text-2xl dark:text-slate-50">
                  WearFit Smartwatch UI
                </h2>
                <span className="text-sm font-medium tracking-wider text-slate-400 uppercase dark:text-slate-500">
                  UI/UX • MOBILE & WEARABLE DESIGN
                </span>
              </div>
              <p className="max-w-150 text-slate-600 dark:text-slate-100">
                A wearable fitness application built with a user-first approach,
                offering workout tracking, activity monitoring, and performance
                insights through a clean, responsive, and visually engaging
                smartwatch interface.
              </p>
              <div className="grid grid-cols-12 gap-3">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="col-span-6 sm:col-span-6 md:col-span-4"
                  >
                    <div className="relative rounded-lg bg-card px-2 py-6 shadow-[0_0_40px_-8px_#4680ff38]">
                      <div className="flex flex-col items-center gap-4 text-center">
                        <feature.icon className="size-6 text-pink-500 md:size-10" />
                        <div className="text-lg font-medium text-slate-600 capitalize dark:text-slate-100">
                          {feature.title}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <Button
                  size="lg"
                  className="rounded-full border-0 border-b-2 border-b-pink-700 bg-pink-500 shadow-[0_8px_10px_-2px_#8f8f8f6b] lg:flex"
                >
                  Explore Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
