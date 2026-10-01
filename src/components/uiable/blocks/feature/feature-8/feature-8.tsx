// assets
import { Blocks, Cpu, Rocket, Shield, TrendingUp, Users } from "lucide-react"

//  ------------------------------ | FEATURE - 8 | ------------------------------  //

export default function Feature8() {
  const features = [
    {
      title: "Easy Setup",
      colorClass: "bg-pink-500",
      icon: Rocket,
      description:
        "Quickly configure your app with simple onboarding and intuitive tools, allowing teams to become productive.",
    },
    {
      title: "Smart Automation",
      colorClass: "bg-violet-500",
      icon: Cpu,
      description:
        "Automate repetitive tasks and workflows to save time, improve efficiency, and focus on what matters most.",
    },
    {
      title: "Real-Time Analytics",
      colorClass: "bg-blue-500",
      icon: TrendingUp,
      description:
        "Access detailed insights and performance metrics instantly to track growth and identify opportunities.",
    },
    {
      title: "Team Collaboration",
      colorClass: "bg-cyan-500",
      icon: Users,
      description:
        "Enable seamless teamwork with real-time updates, shared workspaces, and efficient communication tools.",
    },
    {
      title: "Enterprise Security",
      colorClass: "bg-lime-500",
      icon: Shield,
      description:
        "Keep sensitive information secure with advanced encryption, role-based access controls, and continuous monitoring.",
    },
    {
      title: "Seamless Integrations",
      colorClass: "bg-amber-500",
      icon: Blocks,
      description:
        "Integrate effortlessly with popular platforms and services to create a unified and efficient workflow.",
    },
  ]
  return (
    <section className="py-24 sm:py-32">
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-5 sm:gap-12">
          <div className="flex flex-col items-start gap-4 sm:gap-6">
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

          <div className="grid grid-cols-12 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="col-span-12 lg:col-span-6">
                <div className="group flex h-full flex-row items-start gap-4 md:gap-6 md:py-2">
                  <div
                    className={
                      "size-12 shrink-0 rounded-xl text-white md:size-14 " +
                      feature.colorClass +
                      " relative flex items-center justify-center"
                    }
                  >
                    <feature.icon className="size-5 stroke-2 md:size-7" />
                  </div>
                  <div className="flex grow flex-col items-start gap-1 md:gap-2">
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
    </section>
  )
}
