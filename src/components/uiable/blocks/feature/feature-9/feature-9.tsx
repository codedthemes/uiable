// assets
import { Blocks, Cpu, Rocket, Shield, TrendingUp, Users } from "lucide-react"

//  ------------------------------ | FEATURE - 5 | ------------------------------  //

export default function Feature5() {
  const features = [
    {
      title: "Advanced Analytics",
      subtitle: "Data-Driven Insights",
      colorClass: "bg-pink-500 text-pink-500",
      icon: TrendingUp,
      description:
        "Track growth, analyze user behaviour, and monitor critical KPIs in real time with our powerful built-in dashboard.",
    },
    {
      title: "Workflow Automation",
      subtitle: "Boost Operational Speed",
      colorClass: "bg-violet-500 text-violet-500",
      icon: Cpu,
      description:
        "Automate repetitive processes and trigger actions instantly across multiple platforms with visual builders.",
    },
    {
      title: "Smart Integrations",
      subtitle: "Connect Your Tech Stack",
      colorClass: "bg-blue-500 text-blue-500",
      icon: Blocks,
      description:
        "Sync your product seamlessly with Slack, Salesforce, GitHub, and hundreds of other developer and business tools.",
    },
    {
      title: "Multi-Tenant Security",
      subtitle: "Enterprise Grade Safety",
      colorClass: "bg-cyan-500 text-cyan-500",
      icon: Shield,
      description:
        "Ensure data separation, enforce SSO/SAML login, and maintain compliance standards like SOC2 with ease.",
    },
    {
      title: "Seamless Onboarding",
      subtitle: "Delight New Users",
      colorClass: "bg-lime-500 text-lime-500",
      icon: Rocket,
      description:
        "Build engaging interactive guides and self-service portals that reduce time-to-value for every customer.",
    },
    {
      title: "Collab Workspaces",
      subtitle: "Real-Time Teamwork",
      colorClass: "bg-amber-500 text-amber-500",
      icon: Users,
      description:
        "Work together efficiently using multi-user document editing, inline commenting, and dynamic activity logs.",
    },
  ]
  return (
    <section className="py-24 sm:py-32">
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:gap-12">
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex flex-col items-start gap-1 border-l-2 border-l-sky-500 px-5 sm:gap-2">
              <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-50">
                Stunning SaaS Products
              </h2>
              <div className="text-md flex items-center gap-2 font-semibold text-sky-500">
                - Premium Platform Features
              </div>
            </div>
            <p className="max-w-150 text-slate-600 dark:text-slate-100">
              Built for modern teams to organize projects, automate workflows,
              and collaborate seamlessly. Make smarter, data-driven decisions
              that drive success.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <div className="group relative overflow-hidden rounded-sm bg-card">
                  <div
                    className={`absolute inset-y-0 left-0 z-20 w-0.75 ${feature.colorClass}`}
                  ></div>
                  <div
                    className={`absolute inset-0 z-10 origin-left mask-r-from-10% mask-r-to-75% opacity-10 transition-all duration-500 ease-in-out group-hover:scale-x-[0.2] ${feature.colorClass}`}
                  ></div>
                  <div className="relative z-20 h-full p-5 md:p-8">
                    <div className="flex flex-col items-start gap-4 md:flex-row md:gap-5">
                      <div
                        className={
                          "shrink-0 bg-transparent! " + feature.colorClass
                        }
                      >
                        <feature.icon className="size-5 stroke-2 md:size-7" />
                      </div>
                      <div className="grow">
                        <div className="flex flex-col items-start gap-2 md:gap-3">
                          <div className="flex flex-col items-start gap-1">
                            <h2 className="text-lg font-medium text-slate-800 sm:text-xl dark:text-slate-50">
                              {feature.title}
                            </h2>
                            <p
                              className={`bg-transparent! text-sm font-semibold tracking-wider uppercase ${feature.colorClass}`}
                            >
                              {feature.subtitle}
                            </p>
                          </div>
                          <p className="text-base text-slate-500">
                            {feature.description}
                          </p>
                        </div>
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
