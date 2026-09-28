// shadcn
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Pink Blossom Plant",
    bgClass: "bg-pink-500",
    description:
      "A beautiful indoor flowering plant that adds freshness and elegance to any space.",
    price: "$ 140",
    image: "https://cdn.uiable.com/block/img-ecom-prod-1.png",
  },
  {
    name: "Premium Bomber Jacket",
    bgClass: "bg-sky-500",
    description:
      "Stylish and comfortable bomber jacket crafted with premium materials for everyday wear.",
    price: "$ 180",
    image: "https://cdn.uiable.com/block/img-ecom-prod-2.png",
  },
  {
    name: "Travel Suitcase",
    bgClass: "bg-red-500",
    description:
      "Lightweight hard-shell luggage with spacious storage and smooth 360° spinner wheels.",
    price: "$ 300",
    image: "https://cdn.uiable.com/block/img-ecom-prod-3.png",
  },
]

//  ------------------------------ | E - COMMERCE 9 | ------------------------------  //

export default function Ecommerce9() {
  return (
    <section className="bg-slate-100 py-20 lg:py-28 dark:bg-slate-950">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="mx-auto flex max-w-150 flex-col items-center gap-2 text-center sm:gap-4">
            <div className="flex flex-col gap-1 sm:gap-2">
              <span className="text-sm font-medium tracking-wider text-sky-500 uppercase">
                Featured Products
              </span>
              <h2 className="text-lg font-medium text-slate-800 sm:text-2xl dark:text-slate-50">
                Explore Our Best Selling Collection
              </h2>
            </div>

            <p className="max-w-190 text-slate-600 dark:text-slate-100">
              Discover premium products carefully selected for quality, style,
              and everyday convenience. Shop our featured collection at great
              prices.
            </p>
          </div>

          <div className="grid grid-cols-12 items-stretch gap-6">
            <div className="col-span-12 lg:col-span-3">
              <div className="relative h-full overflow-hidden rounded-lg bg-card p-5 shadow-[0_0_40px_-8px_#4680ff38] sm:p-8 dark:shadow-none">
                <div className="flex h-full flex-col gap-6">
                  <div className="flex flex-1 items-center">
                    <img
                      src={products[0].image}
                      alt={products[0].name}
                      className="h-auto w-full"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between gap-3">
                    <h4 className="line-clamp-1 font-medium text-slate-900 dark:text-slate-100">
                      {products[0].name}
                    </h4>
                    <p className="line-clamp-3 text-base text-slate-700 dark:text-slate-300">
                      {products[0].description}
                    </p>
                    <p className="text-lg font-semibold text-slate-900 lg:text-3xl dark:text-slate-100">
                      {products[0].price}
                    </p>

                    <Button
                      size="lg"
                      className={`w-full rounded-full text-white hover:translate-y-1 hover:opacity-90 ${products[0].bgClass}`}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Featured Card */}
            <div className="col-span-12 lg:col-span-6">
              <div className="relative h-full overflow-hidden rounded-lg bg-card p-5 shadow-[0_0_40px_-8px_#4680ff38] sm:p-8 dark:shadow-none">
                <div className="flex h-full flex-col gap-6">
                  <div className="flex flex-1 items-center">
                    <img
                      src={products[1].image}
                      alt={products[1].name}
                      className="mx-auto h-auto w-full lg:w-3/4"
                    />
                  </div>
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
                    <div className="flex flex-col items-start gap-3">
                      <h4 className="line-clamp-1 font-medium text-slate-900 dark:text-slate-100">
                        {products[1].name}
                      </h4>
                      <p className="line-clamp-3 text-base text-slate-700 dark:text-slate-300">
                        {products[1].description}
                      </p>
                      <p className="text-lg font-semibold text-slate-900 lg:text-3xl dark:text-slate-100">
                        {products[1].price}
                      </p>
                    </div>
                    <Button
                      size="lg"
                      className={`rounded-full text-white hover:translate-y-1 hover:opacity-90 ${products[1].bgClass}`}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-3">
              <div className="relative h-full overflow-hidden rounded-lg bg-card p-5 shadow-[0_0_40px_-8px_#4680ff38] sm:p-8 dark:shadow-none">
                <div className="flex h-full flex-col gap-6">
                  <div className="flex flex-1 items-center">
                    <img
                      src={products[2].image}
                      alt={products[2].name}
                      className="h-auto w-full"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between gap-3">
                    <h4 className="line-clamp-1 font-medium text-slate-900 dark:text-slate-100">
                      {products[2].name}
                    </h4>
                    <p className="line-clamp-3 text-base text-slate-700 dark:text-slate-300">
                      {products[2].description}
                    </p>
                    <p className="text-lg font-semibold text-slate-900 lg:text-3xl dark:text-slate-100">
                      {products[2].price}
                    </p>

                    <Button
                      size="lg"
                      className={`w-full rounded-full text-white hover:translate-y-1 hover:opacity-90 ${products[2].bgClass}`}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
