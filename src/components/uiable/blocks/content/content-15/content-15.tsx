// assets
import { Search, TrendingUp, Zap } from "lucide-react"

const steps = [
  {
    title: "Discover & Analyze",
    subtitle: "Identify Opportunities",
    colorClass: "bg-pink-500/10 text-pink-500",
    icon: Search,
    description:
      "We deep-dive into your existing workflows, audit performance data, and pinpoint key areas to unlock operational efficiency.",
  },
  {
    title: "Automate & Optimize",
    subtitle: "Streamline Workflows",
    colorClass: "bg-sky-500/10 text-sky-500",
    icon: Zap,
    description:
      "We implement smart automated workflows and integrate your essential platforms to eliminate manual overhead completely.",
  },
  {
    title: "Scale & Accelerate",
    subtitle: "Drive Continuous Growth",
    colorClass: "bg-lime-500/10 text-lime-500",
    icon: TrendingUp,
    description:
      "We track performance metrics in real time and refine processes constantly to support your business expansion.",
  },
]

//  ------------------------------ | CONTENT 15 | ------------------------------  //

export default function Content15() {
  return (
    <section className="overflow-hidden py-24 sm:py-32">
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:gap-12">
          <div className="flex flex-col items-start gap-4 sm:gap-6">
            <div className="rounded-full py-1.5 text-orange-500">
              <span className="text-md font-semibold">- Workflow</span>
            </div>
            <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-50">
              Our Process Is Aimed To Help Your Business
            </h2>
            <p className="max-w-150 text-slate-600 dark:text-slate-100">
              We focus on identifying inefficiencies, implementing smart
              automation, and scaling operations so you can focus on driving
              long-term value.
            </p>
          </div>
          <div className="relative grid grid-cols-12 gap-6 overflow-hidden">
            {steps.map((step, idx) => (
              <div key={idx} className="col-span-12 xl:col-span-4">
                <div className="group relative rounded-lg px-5 xl:px-10">
                  <div
                    className={`absolute inset-y-0 left-0 z-20 w-0.75 ${step.colorClass}`}
                  ></div>
                  <div className="relative z-30 flex flex-col gap-4 md:gap-6">
                    <div className="xl:w-full">
                      <div className="z-20 mx-auto inline-flex bg-card">
                        <div
                          className={
                            "relative size-12 rounded-xl md:size-14 " +
                            step.colorClass +
                            " flex items-center justify-center transition-all duration-300 ease-in-out"
                          }
                        >
                          <step.icon className="size-5 stroke-2 md:size-7" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 max-xl:pr-18 xl:gap-6">
                      <div className="flex flex-col gap-2">
                        <h2 className="text-lg font-medium text-slate-800 sm:text-xl dark:text-slate-50">
                          {step.title}
                        </h2>
                        <p className="text-sm font-semibold tracking-wider text-slate-400 uppercase dark:text-slate-500">
                          {step.subtitle}
                        </p>
                      </div>
                      <p className="text-base text-slate-500">
                        {step.description}
                      </p>
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
