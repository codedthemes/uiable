//  ------------------------------ | FEATURE - 1 | ------------------------------  //

export default function Feature1() {
  const features = [
    {
      title: "Easy Setup",
      subtitle: "Get Started in Minutes",
      colorClass: "bg-pink-500",
      description:
        "Quickly configure your app with simple onboarding and intuitive tools, allowing teams to become productive.",
    },
    {
      title: "Smart Automation",
      subtitle: "Reduce Manual Work",
      colorClass: "bg-violet-500",
      description:
        "Automate repetitive tasks and workflows to save time, improve efficiency, and focus on what matters most.",
    },
    {
      title: "Real-Time Analytics",
      subtitle: "Make Data-Driven Decisions",
      colorClass: "bg-blue-500",
      description:
        "Access detailed insights and performance metrics instantly to track growth and identify opportunities.",
    },
    {
      title: "Team Collaboration",
      subtitle: "Work Better Together",
      colorClass: "bg-cyan-500",
      description:
        "Enable seamless teamwork with real-time updates, shared workspaces, and efficient communication tools.",
    },
    {
      title: "Enterprise Security",
      subtitle: "Protect Your Data",
      colorClass: "bg-lime-500",
      description:
        "Keep sensitive information secure with advanced encryption, role-based access controls, and continuous monitoring.",
    },
    {
      title: "Seamless Integrations",
      subtitle: "Connect Your Favorite Tools",
      colorClass: "bg-amber-500",
      description:
        "Integrate effortlessly with popular platforms and services to create a unified and efficient workflow.",
    },
  ]
  return (
    <section className="bg-slate-100 py-24 sm:py-32 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 sm:gap-12">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
            <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-50">
              Powerful Features for Modern Apps
            </h2>
            <p className="max-w-150 text-slate-600 dark:text-slate-100">
              Built for modern teams, our platform combines powerful
              functionality with an intuitive user experience to help you
              organize projects, automate processes, collaborate effectively,
              and make data-driven decisions that accelerate success.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <div className="relative h-full overflow-hidden rounded-lg bg-card p-5 shadow-[0_0_40px_-8px_#4680ff38] sm:p-8 dark:shadow-none">
                  <div
                    className={
                      "rounded-b-xl p-4 text-white " +
                      feature.colorClass +
                      " absolute top-0 right-5 z-10"
                    }
                  >
                    <span className="text-xl leading-none font-semibold">
                      0{idx + 1}
                    </span>
                  </div>
                  <div className="relative z-40 flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <h2 className="text-lg font-medium text-slate-800 sm:text-xl dark:text-slate-50">
                        {feature.title}
                      </h2>
                      <p className="text-base font-medium text-slate-400 dark:text-slate-500">
                        {feature.subtitle}
                      </p>
                    </div>
                    <p className="text-slate-600 dark:text-slate-100">
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
