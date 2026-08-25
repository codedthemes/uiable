// assets
import {
  ClipboardCheck,
  CreditCard,
  Package,
  Search,
  ShoppingCart,
  Truck,
} from "lucide-react"

const steps = [
  {
    title: "Browse & Select",
    subtitle: "Explore Catalog",
    colorClass: "bg-pink-500/10 text-pink-500",
    icon: Search,
    description:
      "Explore our handpicked premium collection, compare options, and find exactly what matches your lifestyle.",
  },
  {
    title: "Add to Cart",
    subtitle: "Select & Review",
    colorClass: "bg-purple-500/10 text-purple-500",
    icon: ShoppingCart,
    description:
      "Add chosen items to your cart, review size/color specifications, and prepare for checkout.",
  },
  {
    title: "Secure Checkout",
    subtitle: "Hassle-Free Payment",
    colorClass: "bg-cyan-500/10 text-cyan-500",
    icon: CreditCard,
    description:
      "Complete your purchase with confidence using our secure, fully-encrypted multi-currency payment gateway.",
  },
  {
    title: "Order Processing",
    subtitle: "Verification",
    colorClass: "bg-teal-500/10 text-teal-500",
    icon: ClipboardCheck,
    description:
      "Our system and team immediately verify payment, confirm inventory availability, and queue packaging.",
  },
  {
    title: "Pack & Ship",
    subtitle: "Careful Handling",
    colorClass: "bg-lime-500/10 text-lime-500",
    icon: Package,
    description:
      "Our processing team carefully packages your order with care, ensuring everything is ready for transit.",
  },
  {
    title: "Live Delivery",
    subtitle: "Track Your Order",
    colorClass: "bg-amber-500/10 text-amber-500",
    icon: Truck,
    description:
      "Receive real-time transit updates and enjoy contactless, direct delivery right to your preferred destination.",
  },
]

//  ------------------------------ | PROCESS 4 | ------------------------------  //

export default function Process4() {
  return (
    <section className="relative bg-slate-100 py-24 sm:py-32 dark:bg-slate-900">
      <div className="relative z-30 container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 sm:gap-12">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
            <div className="flex flex-col items-center gap-1 text-center">
              <span className="text-sm font-medium tracking-wider text-slate-400 uppercase dark:text-slate-500">
                Easy Shopping
              </span>
              <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-50">
                Our Order Process
              </h2>
            </div>
            <p className="max-w-150 text-slate-600 dark:text-slate-100">
              Discover how seamless and secure it is to shop, check out, and
              receive your favorite items with our optimized delivery workflow.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <div className="group relative h-full overflow-hidden rounded-lg bg-card p-5 shadow-[0_0_40px_-8px_#4680ff38] sm:p-8 dark:bg-slate-800 dark:shadow-none">
                  <div
                    className={
                      "origin-top-right rounded-[45px_0_45px_45px] pt-7 pr-7 pb-5 pl-5 transition-all duration-500 group-hover:scale-110 " +
                      step.colorClass +
                      " absolute -top-2 -right-2 z-10"
                    }
                  >
                    <step.icon
                      className={`size-6 bg-transparent stroke-[1.5] lg:size-8`}
                    />
                  </div>
                  <div className="flex flex-row gap-4 md:gap-6 xl:flex-col">
                    <div className="relative xl:w-full">
                      <span
                        className={`flex size-14 items-center justify-center rounded-lg text-xl leading-none font-semibold ${step.colorClass}`}
                      >
                        0{idx + 1}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 xl:gap-6">
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
