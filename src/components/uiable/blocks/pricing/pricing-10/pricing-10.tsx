// shadcn
import { Button } from "@/components/ui/button"

// assets
import { ChevronRight } from "lucide-react"

const plans = [
  {
    recommended: false,
    title: "Starter",
    description:
      "Perfect for freelancers, startups, and small businesses getting started.",
    active: false,
    price: 19,
    features: [
      "All essential features",
      "Real-time analytics dashboard",
      "Up to 10 team members",
      "5 GB secure cloud storage",
      "Up to 1,000 monthly visitors",
    ],
    about:
      "*Everything you need to launch and manage your business with simple, affordable pricing.",
    exploreLink: "Best for startups",
  },
  {
    recommended: true,
    title: "Professional",
    description:
      "Built for growing teams that need advanced tools, scalability, and priority support.",
    active: true,
    price: 49,
    features: [
      "Everything in Starter",
      "Advanced analytics & reporting",
      "Up to 100 team members",
      "50 GB secure cloud storage",
      "Up to 50,000 monthly visitors",
    ],
    about:
      "*Scale your business with powerful features, increased limits, and dedicated priority support.",
    exploreLink: "Most Popular",
  },
]
//  ------------------------------ | PRICING 10 | ------------------------------  //

export default function Pricing10() {
  return (
    <section className="overflow-hidden bg-slate-900 py-24 sm:py-32">
      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-50"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-indigo-500 from-10% via-purple-500 via-30% to-purple-500 to-90% opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-250">
          <div className="flex flex-col gap-8">
            <div className="mx-auto flex max-w-160 flex-col items-center gap-3 text-center sm:gap-5">
              <h2 className="text-lg font-medium text-slate-100 sm:text-3xl">
                Flexible pricing plans
              </h2>
              <p className="max-w-200 text-slate-300">
                Choose a plan that fits your business today and scale
                effortlessly as you grow. Transparent pricing, premium features,
                and no unexpected costs.
              </p>
            </div>
            <div className="mx-auto w-330 max-w-full rounded-md bg-slate-800/30 p-6 backdrop-blur-3xl md:rounded-2xl">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {plans.map((plan, idx) => (
                  <div
                    key={idx}
                    className={`relative w-full overflow-hidden rounded-3xl ${plan.recommended ? "bg-slate-800/50 backdrop-blur-3xl" : ""}`}
                  >
                    <div className="relative flex flex-col">
                      {plan.recommended && (
                        <div className="absolute top-6 -right-15 rotate-45 bg-purple-500 px-17 py-1 text-white shadow-xl">
                          <span className="text-lg font-medium">Top Pick</span>
                        </div>
                      )}
                      <div className="flex flex-col gap-4 px-6 py-7 sm:gap-8 md:px-10 md:py-14">
                        <div className="flex flex-col gap-3">
                          <div className="text-lg font-medium text-slate-100 sm:text-3xl">
                            {plan.title}
                          </div>
                          <p className="max-w-200 text-slate-300">
                            {plan.description}
                          </p>
                        </div>
                        <div className="flex items-baseline gap-0.5 text-slate-300">
                          <span className="inline-block text-4xl font-semibold text-slate-100">
                            ${plan.price}
                          </span>
                          <span className="text-base">/month</span>
                        </div>
                        <div className="flex flex-col gap-4">
                          {plan.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex flex-row gap-3 sm:items-center"
                            >
                              <ChevronRight className="size-6 shrink-0 text-purple-500" />
                              <p className="grow text-base leading-none text-slate-300">
                                {feature}
                              </p>
                            </div>
                          ))}
                        </div>

                        <p className="text-base text-slate-300">{plan.about}</p>
                        <Button
                          size="lg"
                          className={
                            "rounded-full border-2 border-purple-500 hover:translate-y-1 hover:opacity-90 md:px-10 " +
                            (plan.recommended
                              ? "bg-purple-500 text-white"
                              : " bg-transparent text-purple-500")
                          }
                        >
                          {plan.exploreLink}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-indigo-500 from-10% via-purple-500 via-30% to-emerald-500 to-90% opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </section>
  )
}
