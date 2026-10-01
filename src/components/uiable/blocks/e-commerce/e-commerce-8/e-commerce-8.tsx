// shadcn
import { Button } from "@/components/ui/button"

// assets
import { DollarSign } from "lucide-react"

//  ------------------------------ | E - COMMERCE 8 | ------------------------------  //

export default function Ecommerce8() {
  return (
    <div className="bg-slate-900 py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="mx-auto flex max-w-150 flex-col items-center gap-2 text-center sm:gap-4">
            <div className="flex flex-col gap-1 sm:gap-2">
              <span className="text-sm font-medium tracking-wider text-sky-500 uppercase">
                Featured Products
              </span>
              <h2 className="text-lg font-medium text-slate-100 sm:text-2xl">
                Explore Our Best Selling Collection
              </h2>
            </div>
            <p className="max-w-190 text-slate-300">
              Discover premium products carefully selected for quality, style,
              and everyday convenience. Shop our featured collection at great
              prices.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-6">
              <div className="group relative overflow-hidden rounded-lg bg-card p-4">
                <div className="absolute inset-0 z-10 bg-pink-500"></div>
                <div className="absolute inset-0 z-20 bg-card/80"></div>
                <div className="relative z-30 flex flex-col gap-6">
                  <img
                    src="https://cdn.uiable.com/block/img-ecom-prod-1.png"
                    alt="Pink Blossom Plant"
                    className="mx-auto w-full lg:w-3/4"
                  />
                  <div className="rounded-lg bg-card/70 p-5">
                    <div className="flex flex-col gap-3 sm:flex-row md:items-end">
                      <div className="flex grow flex-col gap-3">
                        <h4 className="line-clamp-1 font-medium text-slate-900 dark:text-slate-100">
                          Pink Blossom Plant
                        </h4>
                        <p className="line-clamp-3 text-base text-slate-700 dark:text-slate-300">
                          A beautiful indoor flowering plant that adds freshness
                          and elegance to any space.
                        </p>
                        <p className="flex items-center gap-1 text-lg font-semibold text-slate-900 md:text-3xl dark:text-slate-100">
                          <DollarSign className="size-3.5 text-slate-500 md:size-6" />
                          140
                        </p>
                      </div>
                      <Button
                        size="lg"
                        className="shrink-0 rounded-full bg-pink-500 text-white hover:translate-y-1 hover:opacity-90"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="flex flex-col gap-6">
                <div className="flex flex-row gap-6">
                  <div className="group relative overflow-hidden rounded-lg bg-card p-4">
                    <div className="absolute inset-0 z-10 bg-yellow-500"></div>
                    <div className="absolute inset-0 z-20 bg-card/80"></div>
                    <div className="relative z-30 flex flex-col gap-6 md:flex-row">
                      <img
                        src="https://cdn.uiable.com/block/img-ecom-prod-2.png"
                        alt="Premium Bomber Jacket"
                        className="w-full shrink-0 md:w-5/12"
                      />
                      <div className="grow rounded-lg bg-card/70 p-5">
                        <div className="flex h-full flex-col justify-between gap-3">
                          <h4 className="line-clamp-1 font-medium text-slate-900 dark:text-slate-100">
                            Premium Bomber Jacket
                          </h4>
                          <p className="line-clamp-3 text-base text-slate-700 dark:text-slate-300">
                            Stylish and comfortable bomber jacket crafted with
                            premium materials for everyday wear.
                          </p>
                          <p className="flex items-center gap-1 text-lg font-semibold text-slate-900 md:text-3xl dark:text-slate-100">
                            <DollarSign className="size-3.5 text-slate-500 md:size-6" />
                            180
                          </p>
                          <div className="grid">
                            <Button
                              size="lg"
                              className="rounded-full bg-yellow-500 text-white hover:translate-y-1 hover:opacity-90"
                            >
                              Buy Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 md:col-span-6">
                    <div className="group relative overflow-hidden rounded-lg bg-card p-4">
                      <div className="absolute inset-0 z-10 bg-purple-500"></div>
                      <div className="absolute inset-0 z-20 bg-card/80"></div>
                      <div className="relative z-30 flex flex-col gap-6">
                        <img
                          src="https://cdn.uiable.com/block/img-ecom-prod-3.png"
                          alt="Travel Suitcase"
                          className="mx-auto w-full lg:w-2/4"
                        />
                        <div className="rounded-lg bg-card/70 p-5">
                          <div className="flex flex-col gap-3">
                            <h4 className="line-clamp-1 font-medium text-slate-900 dark:text-slate-100">
                              Travel Suitcase
                            </h4>
                            <p className="flex items-center gap-1 text-lg font-semibold text-slate-900 md:text-3xl dark:text-slate-100">
                              <DollarSign className="size-3.5 text-slate-500 md:size-6" />
                              300
                            </p>
                            <div className="grid">
                              <Button
                                size="lg"
                                className="rounded-full bg-purple-500 text-white hover:translate-y-1 hover:opacity-90"
                              >
                                Buy Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <div className="group relative overflow-hidden rounded-lg bg-card p-4">
                      <div className="absolute inset-0 z-10 bg-green-500"></div>
                      <div className="absolute inset-0 z-20 bg-card/80"></div>
                      <div className="relative z-30 flex flex-col gap-6">
                        <img
                          src="https://cdn.uiable.com/block/img-ecom-prod-4.png"
                          alt="Ceramic Coffee Mug"
                          className="mx-auto w-full lg:w-2/4"
                        />
                        <div className="rounded-lg bg-card/70 p-5">
                          <div className="flex flex-col gap-3">
                            <h4 className="line-clamp-1 font-medium text-slate-900 dark:text-slate-100">
                              Ceramic Coffee Mug
                            </h4>
                            <p className="flex items-center gap-1 text-lg font-semibold text-slate-900 md:text-3xl dark:text-slate-100">
                              <DollarSign className="size-3.5 text-slate-500 md:size-6" />
                              140
                            </p>
                            <div className="grid">
                              <Button
                                size="lg"
                                className="rounded-full bg-green-500 text-white hover:translate-y-1 hover:opacity-90"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
