import React from "react"

// assets
import {
  Bot,
  CloudUpload,
  Code,
  FileText,
  LayoutPanelTop,
  MessageCircle,
  Monitor,
  Server,
  Zap,
} from "lucide-react"

const steps = [
  {
    title: "Requirement Gathering",
    subtitle: "Define Scope",
    icon: FileText,
    description:
      "Collect and document all project requirements, stakeholder needs, and success criteria.",
  },
  {
    title: "Architecture Design",
    subtitle: "Plan Structure",
    icon: LayoutPanelTop,
    description:
      "Create system architecture diagrams, select technologies, and define data models.",
  },
  {
    title: "Development",
    subtitle: "Build Features",
    icon: Code,
    description:
      "Implement code, integrate services, and write automated tests following best practices.",
  },
  {
    title: "Quality Assurance",
    subtitle: "Test Rigorously",
    icon: Bot,
    description:
      "Execute unit, integration, and performance tests; fix defects before release.",
  },
  {
    title: "Deployment",
    subtitle: "Release to Production",
    icon: CloudUpload,
    description:
      "Automate CI/CD pipelines, provision environments, and roll out releases safely.",
  },
  {
    title: "Monitoring",
    subtitle: "Observe Systems",
    icon: Monitor,
    description:
      "Track application health, logs, and performance metrics in real time.",
  },
  {
    title: "Feedback Loop",
    subtitle: "Gather Insights",
    icon: MessageCircle,
    description:
      "Collect user feedback, feature requests, and usage analytics for continuous improvement.",
  },
  {
    title: "Optimization",
    subtitle: "Improve Performance",
    icon: Zap,
    description:
      "Refactor code, optimize queries, and enhance scalability based on monitoring data.",
  },
  {
    title: "Scaling & Maintenance",
    subtitle: "Ensure Longevity",
    icon: Server,
    description:
      "Scale infrastructure, manage updates, and maintain security over the product lifecycle.",
  },
]

//  ------------------------------ | PROCESS 9 | ------------------------------  //

export default function Process9() {
  return (
    <section className="bg-slate-100 pb-24 sm:pb-32 dark:bg-slate-900">
      <div className="bg-violet-500 py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
            <div className="flex items-center gap-1 rounded-xl bg-white/10 px-3 py-2 text-white">
              <svg
                className="text-white-500 size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.91 10.72h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-.8.91-6.77 7.7c-.93 1.05-.54 1.91.86 1.91h3.09v7.2c0 1.68.91 2.02 2.02.76l.8-.91 6.77-7.7c.93-1.05.54-1.91-.86-1.91Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="text-md font-semibold">SDLC Steps</span>
            </div>
            <h2 className="text-lg font-medium text-slate-100 sm:text-3xl">
              Software Development Life Cycle
            </h2>
            <p className="max-w-150 text-slate-300">
              Explore the complete lifecycle of software development, from
              initial planning to deployment and maintenance.
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-30 container mx-auto -mt-12 px-4 sm:-mt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-4">
          {steps.map((step, idx) => (
            <div key={idx} className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="relative rounded-lg bg-white p-5 shadow-[0_0_40px_-8px_#4680ff38] md:p-6 dark:bg-slate-800 dark:shadow-none">
                <div className="absolute top-0 right-5 z-10 rounded-b-xl bg-violet-500/5 p-4 text-violet-500">
                  <span className="text-xl leading-none font-semibold">
                    0{idx + 1}
                  </span>
                </div>
                <div className="flex grow flex-col gap-3">
                  <step.icon className="size-6 shrink-0 stroke-[1.5] text-violet-500 md:stroke-2" />
                  <div className="flex flex-col items-start gap-0.5">
                    <h2 className="text-lg font-medium text-slate-800 dark:text-slate-50">
                      {step.title}
                    </h2>
                    <p className="text-base font-medium text-slate-400 dark:text-slate-500">
                      {step.subtitle}
                    </p>
                  </div>
                  <p className="line-clamp-2 text-slate-600 dark:text-slate-100">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
