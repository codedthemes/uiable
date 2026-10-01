"use client"

// shadcn
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// assets
import { Check } from "lucide-react"

const pricingData = {
  monthly: [
    {
      name: "Starter",
      premium: false,
      price: 19,
      features: ["Complete documentation", "Sketch files", "2 team members"],
    },
    {
      name: "Pro",
      premium: false,
      price: 29,
      features: ["Complete documentation", "Cloud storage", "30 team members"],
    },
    {
      name: "Premium",
      premium: true,
      price: 49,
      featured: true,
      buttoncolor: "from-red-400 to-red-100",
      features: [
        "Complete documentation",
        "20GB storage",
        "100 team members",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      premium: false,
      price: 89,
      features: [
        "Unlimited members",
        "100GB storage",
        "500 team members",
        "24/7 support",
      ],
    },
  ],

  quarterly: [
    {
      name: "Starter",
      premium: false,
      price: 49,
      features: ["Complete documentation", "Sketch files", "2 team members"],
    },
    {
      name: "Pro",
      premium: false,
      price: 79,
      features: ["Complete documentation", "Cloud storage", "30 team members"],
    },
    {
      name: "Premium",
      premium: true,
      price: 129,
      featured: true,
      buttoncolor: "from-red-400 to-red-100",
      features: [
        "Complete documentation",
        "20GB storage",
        "100 team members",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      premium: false,
      price: 239,
      features: [
        "Unlimited members",
        "100GB storage",
        "500 team members",
        "24/7 support",
      ],
    },
  ],

  annual: [
    {
      name: "Starter",
      premium: false,
      price: 199,
      features: ["Complete documentation", "Sketch files", "2 team members"],
    },
    {
      name: "Pro",
      premium: false,
      price: 299,
      features: ["Complete documentation", "Cloud storage", "30 team members"],
    },
    {
      name: "Premium",
      premium: true,
      price: 499,
      featured: true,
      buttoncolor: "from-red-400 to-red-100",
      features: [
        "Complete documentation",
        "20GB storage",
        "100 team members",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      premium: false,
      price: 899,
      features: [
        "Unlimited members",
        "100GB storage",
        "500 team members",
        "24/7 support",
      ],
    },
  ],

  lifetime: [
    {
      name: "Starter",
      premium: false,
      price: 499,
      features: ["Complete documentation", "Sketch files", "2 team members"],
    },
    {
      name: "Pro",
      premium: false,
      price: 799,
      features: ["Complete documentation", "Cloud storage", "30 team members"],
    },
    {
      name: "Premium",
      premium: true,
      price: 999,
      featured: true,
      buttoncolor: "from-red-400 to-red-100",
      features: [
        "Complete documentation",
        "20GB storage",
        "100 team members",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      premium: false,
      price: 1499,
      features: [
        "Unlimited members",
        "100GB storage",
        "500 team members",
        "24/7 support",
      ],
    },
  ],
}

export default function PricingSection() {
  const tabs = ["monthly", "quarterly", "annual", "lifetime"] as const

  return (
    <section className="relative overflow-hidden bg-card py-20">
      <div className="absolute inset-x-0 top-0 h-100 bg-linear-to-b from-rose-100 via-red-50 to-transparent dark:from-rose-800/10 dark:via-red-900/10 dark:to-transparent" />
      <div className="absolute top-0 -left-40 h-100 w-100 rounded-full bg-linear-to-r from-pink-200/60 to-red-200/20 blur-3xl dark:from-pink-900/30 dark:to-red-900/10" />
      <div className="absolute top-0 -right-40 h-100 w-100 rounded-full bg-linear-to-l from-orange-200/60 to-red-200/20 blur-3xl dark:from-orange-900/30 dark:to-red-900/10" />
      <div className="absolute inset-x-0 bottom-0 h-62.5 bg-linear-to-t from-rose-100 via-red-50 to-transparent dark:from-rose-800/20 dark:via-red-900/20 dark:to-transparent" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-800 dark:text-slate-100">
            Pick the best plan for you
          </h2>

          <p className="mt-4 text-slate-500 dark:text-slate-300">
            Free updates and premium support included.
          </p>
        </div>
        <Tabs defaultValue="monthly" className="w-full">
          <TabsList className="scrollbar-none] mx-auto mt-10 flex h-auto! w-fit max-w-full overflow-x-auto rounded-2xl! bg-card! p-1.5 shadow-lg! [-ms-overflow-style:none] sm:p-2 [&::-webkit-scrollbar]:hidden">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="flex-none! rounded-xl! border-none! px-4! py-2! text-sm! whitespace-nowrap text-slate-600 capitalize transition-all duration-300 after:hidden! hover:bg-slate-100 sm:px-8! sm:py-3! sm:text-base! dark:text-slate-300 dark:hover:bg-slate-100/10 data-active:bg-red-400 data-active:text-white data-active:shadow-lg data-active:hover:bg-red-500 dark:data-active:bg-red-400 dark:data-active:text-white dark:data-active:hover:bg-red-400"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent
              key={tab}
              value={tab}
              className="mt-16 grid gap-8 focus-visible:ring-0 focus-visible:outline-none md:grid-cols-2 xl:grid-cols-4"
            >
              {pricingData[tab].map((plan, index) => (
                <Card
                  key={index}
                  className={`relative mb-0 overflow-hidden rounded-3xl border-0 p-0 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                    plan.featured ? "scale-105" : ""
                  }`}
                >
                  <div className="absolute -top-60 left-1/2 z-0 -translate-x-1/2">
                    <div
                      className={`h-105 w-105 rounded-full ${
                        plan.premium
                          ? "bg-red-400"
                          : "bg-slate-100 dark:bg-slate-100/10"
                      }`}
                    />
                  </div>

                  <CardHeader className="relative z-10 border-0 px-8 pt-8 pb-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                        {plan.name}
                      </h3>

                      {plan.featured && (
                        <Badge
                          variant="secondary"
                          className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600 hover:bg-orange-100"
                        >
                          Popular
                        </Badge>
                      )}
                    </div>

                    <div className="mt-5">
                      <span className="text-5xl font-bold text-slate-900 dark:text-slate-100">
                        ${plan.price}
                      </span>

                      <span className="ml-2 text-slate-900 dark:text-slate-100">
                        /
                        {tab === "monthly"
                          ? "month"
                          : tab === "quarterly"
                            ? "quarter"
                            : tab === "annual"
                              ? "year"
                              : "lifetime"}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10 px-8 pt-0 pb-6">
                    <Button
                      variant={plan.premium ? "default" : "outline"}
                      className={`mt-20 w-full rounded-xl border-2 border-red-400 py-3 font-semibold shadow-lg transition-transform duration-300 hover:scale-105 active:scale-90 ${
                        plan.premium
                          ? `bg-linear-to-r ${plan.buttoncolor} border-none text-white hover:opacity-90`
                          : "bg-transparent text-red-400 hover:bg-transparent hover:text-red-400 dark:border-red-400 dark:bg-transparent dark:hover:bg-transparent"
                      }`}
                    >
                      Buy Now
                    </Button>

                    <Separator className="mt-8 mb-0" />

                    <ul className="mt-8 space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="text-slate-600 dark:text-slate-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="absolute bottom-0 left-0 z-10 w-full border-0 p-0">
                    <div
                      className={`h-2 w-full bg-linear-to-r ${plan.buttoncolor}`}
                    ></div>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
