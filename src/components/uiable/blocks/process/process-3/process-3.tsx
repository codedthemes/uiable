import { Search, TrendingUp, Zap } from "lucide-react"

const steps = [
  {
    title: "Discover & Analyze",
    subtitle: "Identify Opportunities",
    colorClass: "bg-pink-500",
    icon: Search,
    description:
      "We deep-dive into your existing workflows, audit performance data, and pinpoint key areas to unlock operational efficiency.",
  },
  {
    title: "Automate & Optimize",
    subtitle: "Streamline Workflows",
    colorClass: "bg-sky-500",
    icon: Zap,
    description:
      "We implement smart automated workflows and integrate your essential platforms to eliminate manual overhead completely.",
  },
  {
    title: "Scale & Accelerate",
    subtitle: "Drive Continuous Growth",
    colorClass: "bg-lime-500",
    icon: TrendingUp,
    description:
      "We track performance metrics in real time and refine processes constantly to support your business expansion.",
  },
]

//  ------------------------------ | PROCESS 3 | ------------------------------  //

export default function Process3() {
  return (
    <section className="overflow-hidden pt-24 sm:pt-32">
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 sm:gap-12">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
            <div className="rounded-full border border-orange-500 bg-orange-500/5 px-3.5 py-1.5 text-orange-500">
              <span className="text-md font-semibold">Workflow</span>
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
          <div className="relative grid grid-cols-12 gap-0 overflow-hidden">
            {steps.map((step, idx) => (
              <div key={idx} className="col-span-12 xl:col-span-4">
                <div className="group relative rounded-lg px-4 max-xl:py-10 xl:px-8 xl:pb-32">
                  <div className="relative z-30 flex flex-col gap-4 md:flex-row md:gap-6 xl:flex-col xl:items-center xl:text-center">
                    <div className="relative xl:w-full">
                      <div className="relative z-20 mx-auto inline-flex bg-card">
                        <div
                          className={
                            "relative size-12 rounded-xl text-white md:size-14 " +
                            step.colorClass +
                            " flex items-center justify-center transition-all duration-300 ease-in-out"
                          }
                        >
                          <step.icon className="size-5 stroke-2 md:size-7" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 max-xl:pr-18 xl:items-center xl:gap-6 xl:text-center">
                      <div className="flex flex-col gap-2 xl:items-center">
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
                  <span className="absolute -right-2 z-30 text-center text-7xl leading-none font-semibold text-card max-xl:inset-y-0 max-xl:flex max-xl:items-center xl:inset-x-0 xl:-bottom-3">
                    0{idx + 1}
                  </span>
                  <span
                    className={
                      "absolute -right-10 block size-45 rounded-full opacity-30 blur-3xl max-xl:top-2/4 max-xl:-translate-y-2/4 xl:-bottom-16 xl:left-2/4 xl:-translate-x-2/4 " +
                      step.colorClass
                    }
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
