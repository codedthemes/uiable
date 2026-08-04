// assets
import { Cpu, Link, Rocket, TrendingUp } from "lucide-react"

const steps = [
  {
    title: "Connect Data",
    subtitle: "Integrate Sources",
    colorClass: "bg-pink-500",
    icon: Link,
    description:
      "Seamlessly connect your existing databases, cloud services, and APIs in minutes with our native 1-click connectors.",
  },
  {
    title: "Build Workflows",
    subtitle: "Automate Processes",
    colorClass: "bg-cyan-500",
    icon: Cpu,
    description:
      "Set up automated triggers, sync rules, and data pipelines to run background jobs without writing any complex code.",
  },
  {
    title: "Monitor & Analyze",
    subtitle: "Real-Time Insights",
    colorClass: "bg-lime-500",
    icon: TrendingUp,
    description:
      "Visualize your execution logs, track system metrics, and view real-time data streams via interactive live dashboards.",
  },
  {
    title: "Collaborate & Scale",
    subtitle: "Team Growth",
    colorClass: "bg-amber-500",
    icon: Rocket,
    description:
      "Invite teammates to shared workspaces, securely export reports, and let our auto-scaling handle your heavy workloads.",
  },
]

//  ------------------------------ | PROCESS 1 | ------------------------------  //

export default function Process1() {
  return (
    <section className="py-24 sm:py-32">
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 sm:gap-12">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
            <div className="flex flex-col items-center gap-1 text-center">
              <div className="rounded-full border border-orange-500 bg-orange-500/5 px-3.5 py-1.5 text-orange-500">
                <span className="text-md font-semibold">SaaS Workflow</span>
              </div>
              <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-50">
                How It Works
              </h2>
            </div>
            <p className="max-w-150 text-slate-600 dark:text-slate-100">
              Discover how simple it is to integrate, configure, monitor, and
              scale your business operations with our next-generation SaaS
              platform.
            </p>
          </div>
          <div className="relative grid grid-cols-12 gap-0 overflow-hidden">
            {steps.map((step, idx) => (
              <div key={idx} className="col-span-12 xl:col-span-3">
                <div className="group relative rounded-lg p-4 xl:p-8">
                  <div className="flex flex-row gap-4 md:gap-6 xl:flex-col">
                    <div className="relative xl:w-full">
                      <div className="absolute bg-slate-100 max-xl:left-2/4 max-xl:h-[calc(100%+40px)] max-xl:w-0.5 xl:-inset-x-10 xl:top-2/4 xl:h-0.5 dark:bg-slate-800"></div>
                      <div className="relative z-20 mx-auto inline-flex bg-card">
                        <div
                          className={
                            "relative size-12 rounded-xl md:size-14 " +
                            step.colorClass +
                            " flex items-center justify-center transition-all duration-300 ease-in-out"
                          }
                        >
                          <span className="text-base font-semibold text-white md:text-xl">
                            0{idx + 1}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-4 xl:gap-6">
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
