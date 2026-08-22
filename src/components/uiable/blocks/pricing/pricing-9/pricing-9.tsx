// shadcn
import { Button } from "@/components/ui/button"

// assets
import { Check } from "lucide-react"

const plans = [
  {
    recommended: false,
    title: "Basic plan",
    description:
      "Ideal for individuals and small businesses with basic data needs.",
    active: false,
    price: 19,
    features: [
      "Access to basic feature",
      "Basic reporting & analytics",
      "Up to 10 individual users",
      "5 GB individual data users",
      "100 visitor",
    ],
    about:
      "*Get started with our Basic Plan for essential data needs. Perfect for individuals and small businesses looking for reliable data solutions.",
    exploreLink: "Best for individuals",
  },
  {
    recommended: true,
    title: "Pro plan",
    description:
      "Designed for growing businesses and teams with moderate data requirements.",
    active: true,
    price: 49,
    features: [
      "Access to basic feature",
      "Basic reporting & analytics",
      "Up to 100 individual users",
      "15 GB individual data users",
      "1,000 visitor",
    ],
    about:
      "*Great for teams and growing businesses. Get more features, higher limits, and priority support to help you do more, faster.",
    exploreLink: "Designed for growing businesses",
  },
  {
    recommended: false,
    title: "Enterprise plan",
    description:
      "Tailored for large enterprise with high-volume data needs and specialized requirements.",
    active: false,
    price: 99,
    features: [
      "Access to basic feature",
      "Basic reporting & analytics",
      "Up to 1k individual users",
      "40 GB individual data users",
      "10,000 visitor",
    ],
    about:
      "*For large enterprise with high-volume data needs and specialized requirements, our Enterprise Plan offers unlimited data usage and 24/7 dedicated support.",
    exploreLink: "Tailored for large enterprise",
  },
]

//  ------------------------------ | PRICING 9 | ------------------------------  //

export default function Pricing9() {
  return (
    <section className="relative overflow-hidden bg-slate-100 py-24 sm:py-32 dark:bg-slate-800">
      <div className="relative z-30 container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 sm:gap-16">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
            <h2 className="text-lg font-medium text-slate-900 sm:text-3xl dark:text-slate-100">
              Our pricing that’s simple with no hidden fees
            </h2>
            <p className="max-w-150 text-slate-700 dark:text-slate-300">
              Get started with affordable plans that include everything you
              need. No hidden fees, no complicated terms—just clear and honest
              pricing.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 shadow-[0_0_40px_8px_#8e998738]">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {plans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`relative w-full overflow-hidden rounded-2xl ${plan.recommended ? "bg-pink-500 lg:-my-10" : "bg-slate-900"}`}
                >
                  <div className="relative flex flex-col">
                    <div
                      className={`flex flex-col gap-4 p-6 sm:gap-8 ${plan.recommended ? "md:p-10 lg:py-20" : "md:p-10"}`}
                    >
                      <div className="flex flex-col gap-3">
                        <div
                          className={`text-lg font-medium sm:text-3xl ${plan.recommended ? "text-white" : "dark text-slate-100"} `}
                        >
                          {plan.title}
                        </div>
                        <p
                          className={`text-base ${plan.recommended ? "text-white/90" : "text-slate-300"}`}
                        >
                          {plan.description}
                        </p>
                      </div>
                      <div
                        className={`flex items-baseline gap-0.5 ${plan.recommended ? "text-white/90" : "text-slate-400"}`}
                      >
                        <span
                          className={`inline-block text-4xl font-semibold ${plan.recommended ? "text-white" : "text-slate-50"}`}
                        >
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
                            <div
                              className={`inline-flex size-6 shrink-0 items-center justify-center rounded-full transition-all ${plan.recommended ? "bg-white/10 text-white" : "bg-pink-500/10 text-pink-500"}`}
                            >
                              <Check className="size-4" />
                            </div>
                            <p
                              className={`grow text-base leading-none ${plan.recommended ? "text-white" : "text-slate-300"}`}
                            >
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                      <p
                        className={`text-base ${plan.recommended ? "text-white/90" : "text-slate-300"}`}
                      >
                        {plan.about}
                      </p>
                      <Button
                        size="lg"
                        className={
                          "w-full rounded-full border-0 border-b-2 hover:translate-y-1 hover:opacity-90 " +
                          (plan.recommended
                            ? "border-b-slate-200 bg-white text-slate-800"
                            : "border-b-pink-700 bg-pink-500 text-white")
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
    </section>
  )
}
