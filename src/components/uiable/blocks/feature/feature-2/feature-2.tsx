import { Blocks, Cpu, Rocket, Shield, TrendingUp, Users } from "lucide-react"

//  ------------------------------ | FEATURE - 2 | ------------------------------  //

export default function Feature2() {
  const features = [
    {
      title: "Easy Setup",
      colorClass:
        "bg-pink-500/5 text-pink-500 group-hover:bg-pink-500 group-hover:text-white",
      icon: Rocket,
      description:
        "Quickly configure your app with simple onboarding and intuitive tools, allowing teams to become productive.",
    },
    {
      title: "Smart Automation",
      colorClass:
        "bg-violet-500/5 text-violet-500 group-hover:bg-violet-500 group-hover:text-white",
      icon: Cpu,
      description:
        "Automate repetitive tasks and workflows to save time, improve efficiency, and focus on what matters most.",
    },
    {
      title: "Real-Time Analytics",
      colorClass:
        "bg-blue-500/5 text-blue-500 group-hover:bg-blue-500 group-hover:text-white",
      icon: TrendingUp,
      description:
        "Access detailed insights and performance metrics instantly to track growth and identify opportunities.",
    },
    {
      title: "Team Collaboration",
      colorClass:
        "bg-cyan-500/5 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white",
      icon: Users,
      description:
        "Enable seamless teamwork with real-time updates, shared workspaces, and efficient communication tools.",
    },
    {
      title: "Enterprise Security",
      colorClass:
        "bg-lime-500/5 text-lime-500 group-hover:bg-lime-500 group-hover:text-white",
      icon: Shield,
      description:
        "Keep sensitive information secure with advanced encryption, role-based access controls, and continuous monitoring.",
    },
    {
      title: "Seamless Integrations",
      colorClass:
        "bg-amber-500/5 text-amber-500 group-hover:bg-amber-500 group-hover:text-white",
      icon: Blocks,
      description:
        "Integrate effortlessly with popular platforms and services to create a unified and efficient workflow.",
    },
  ]
  return (
    <section className="bg-slate-100 py-24 sm:py-32 dark:bg-slate-800">
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 sm:gap-12">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
            <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-50">
              Powerful Features for Modern Apps
            </h2>
            <p className="max-w-160 text-slate-600 dark:text-slate-100">
              Built for modern teams, our platform combines powerful
              functionality with an intuitive user experience to help you
              organize projects, automate processes, collaborate effectively,
              and make data-driven decisions that accelerate success.
            </p>
          </div>

          <div className="-m-0.5 h-full overflow-hidden rounded-lg bg-card shadow-[0_0_40px_-8px_#4680ff38] dark:shadow-none">
            <div className="grid grid-cols-12 gap-0">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="col-span-12 md:col-span-6 lg:col-span-4"
                >
                  <div className="group relative z-40 flex h-full flex-col items-center gap-4 border border-slate-100/50 px-5 py-6 text-center sm:px-8 sm:py-10 md:gap-6 dark:border-slate-800/50">
                    <div
                      className={
                        "size-12 rounded-xl md:size-14 " +
                        feature.colorClass +
                        " relative flex items-center justify-center transition-all duration-300 ease-in-out"
                      }
                    >
                      <feature.icon className="size-5 stroke-2 md:size-7" />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <h2 className="text-lg font-medium text-slate-800 sm:text-xl dark:text-slate-50">
                        {feature.title}
                      </h2>
                      <p className="text-base text-slate-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
