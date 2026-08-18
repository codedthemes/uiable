// shadcn
import { Button } from "@/components/ui/button"

// assets
import { Briefcase, Globe, Heart, Users } from "lucide-react"

const steps = [
  {
    statistic: "360+",
    description: "Well Trained Staff",
    colorClass: "text-pink-500",
    icon: Users,
  },
  {
    statistic: "14+",
    description: "Offices Worldwide",
    colorClass: "text-cyan-500",
    icon: Globe,
  },
  {
    statistic: "1440+",
    description: "Completed Projects",
    colorClass: "text-lime-500",
    icon: Briefcase,
  },
  {
    statistic: "56+",
    description: "Loyal Clients",
    colorClass: "text-amber-500",
    icon: Heart,
  },
]

//  ------------------------------ | STATISTICS 1 | ------------------------------  //

export default function statistics1() {
  return (
    <section className="bg-slate-900 py-24 sm:py-32">
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 sm:gap-12">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
            <div className="flex flex-col items-center gap-1 text-center">
              <span className="text-sm font-medium tracking-wider text-slate-500 uppercase">
                Statistics
              </span>
              <h2 className="text-lg font-medium text-slate-100 sm:text-3xl">
                What Numbers Say
              </h2>
            </div>
            <p className="max-w-150 text-slate-300">
              Discover how simple it is to integrate, configure, monitor, and
              scale your business operations with our next-generation SaaS
              platform.
            </p>
          </div>
          <div className="relative grid grid-cols-12 gap-0 overflow-hidden">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="col-span-12 sm:col-span-6 xl:col-span-3"
              >
                <div className="group relative rounded-lg p-4 xl:p-8">
                  <div className="flex flex-col items-center gap-4 md:gap-6">
                    <step.icon className="size-6 stroke-2 text-slate-500 md:size-8" />
                    <div className="flex flex-col items-center gap-4 xl:gap-6">
                      <h2
                        className={`${step.colorClass} text-lg font-medium sm:text-4xl`}
                      >
                        {step.statistic}
                      </h2>
                      <p className="text-base font-semibold tracking-wider text-slate-100 uppercase">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button
            size="lg"
            className="rounded-full border-0 border-b-2 border-b-blue-700 bg-blue-500"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}
