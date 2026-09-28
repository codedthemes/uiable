// assets
import { Award, Footprints, ShieldCheck, Truck } from "lucide-react"

//  ------------------------------ | FEATURE - 3 | ------------------------------  //

export default function Feature3() {
  const features = [
    {
      title: "Premium Materials",
      colorClass: "text-pink-600 dark:text-pink-400",
      icon: Award,
      description:
        "Handcrafted with top-grain leather, breathable mesh, and high-traction rubber soles for premium durability and comfort.",
    },
    {
      title: "Orthotic Support",
      colorClass: "text-sky-600 dark:text-sky-400",
      icon: Footprints,
      description:
        "Engineered with advanced shock-absorbing midsoles and contoured arch support to reduce foot fatigue all day.",
    },
    {
      title: "Express Delivery",
      colorClass: "text-amber-600 dark:text-amber-400",
      icon: Truck,
      description:
        "Enjoy free and lightning-fast shipping on all orders over $75, complete with real-time tracking updates.",
    },
    {
      title: "30-Day Fit Guarantee",
      colorClass: "text-lime-600 dark:text-lime-400",
      icon: ShieldCheck,
      description:
        "Not the perfect fit? Return or exchange your shoes within 30 days of purchase with no questions asked.",
    },
  ]
  return (
    <section className="bg-slate-100 py-24 sm:py-32 dark:bg-slate-800">
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-card p-5 shadow-[0_0_40px_-8px_#4680ff38] sm:p-8 dark:shadow-none">
          <div className="flex flex-col items-center gap-5 sm:gap-12">
            <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
              <svg
                className="size-14 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8.4 6.5h7.2c3.4 0 3.74 1.59 3.97 3.53l.9 7.5C20.76 19.99 20 22 16.5 22H7.51C4 22 3.24 19.99 3.54 17.53l.9-7.5C4.66 8.09 5 6.5 8.4 6.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M8 8V4.5C8 3 9 2 10.5 2h3C15 2 16 3 16 4.5V8M20.41 17.03H8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-50">
                Why Choose Our Footwear?
              </h2>
              <p className="max-w-160 text-slate-600 dark:text-slate-400">
                Discover the perfect combination of innovation, craftsmanship,
                and comfort. Every pair of our shoes is designed to support your
                active lifestyle and elevate your everyday look.
              </p>
            </div>

            <div className="grid grid-cols-12 gap-0">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="col-span-12 md:col-span-6 lg:col-span-3"
                >
                  <div className="group relative z-40 flex h-full flex-col gap-4 p-5 md:gap-6">
                    <div className={feature.colorClass}>
                      <feature.icon className="size-8 stroke-2 md:size-10" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h2 className="text-lg font-medium text-slate-800 sm:text-xl dark:text-slate-50">
                        {feature.title}
                      </h2>
                      <p className="text-base text-slate-600 dark:text-slate-400">
                        {feature.description}
                      </p>
                    </div>
                    <div
                      className={`absolute top-5 right-0 bottom-5 hidden w-0.5 bg-slate-100/50 lg:block dark:bg-slate-800/50 ${
                        idx === features.length - 1 ? "lg:hidden" : ""
                      }`}
                    ></div>
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
