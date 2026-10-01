// shadcn
import { Button } from "@/components/ui/button"

// assets
import { DollarSign } from "lucide-react"

const products = [
  {
    name: "Pink Blossom Plant",
    bgClass: "bg-pink-500",
    description:
      "A beautiful indoor flowering plant that adds freshness and elegance to any space.",
    price: "140",
    image: "https://cdn.uiable.com/block/img-ecom-prod-1.png",
  },
  {
    name: "Premium Bomber Jacket",
    bgClass: "bg-yellow-500",
    description:
      "Stylish and comfortable bomber jacket crafted with premium materials for everyday wear.",
    price: "180",
    image: "https://cdn.uiable.com/block/img-ecom-prod-2.png",
  },
  {
    name: "Travel Suitcase",
    bgClass: "bg-purple-500",
    description:
      "Lightweight hard-shell luggage with spacious storage and smooth 360° spinner wheels.",
    price: "300",
    image: "https://cdn.uiable.com/block/img-ecom-prod-3.png",
  },
  {
    name: "Ceramic Coffee Mug",
    bgClass: "bg-green-500",
    description:
      "Premium ceramic mug designed to keep your favorite coffee or tea warm for longer.",
    price: "140",
    image: "https://cdn.uiable.com/block/img-ecom-prod-4.png",
  },
]
//  ------------------------------ | E - COMMERCE 7 | ------------------------------  //

export default function Ecommerce7() {
  return (
    <div className="py-24 sm:py-32">
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
          <div className="grid grid-cols-12 gap-6">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="col-span-12 md:col-span-6 lg:col-span-3"
              >
                <div className="group relative overflow-hidden rounded-lg bg-card p-4">
                  <div
                    className={`absolute inset-0 z-10 ${product.bgClass}`}
                  ></div>
                  <div className="absolute inset-0 z-20 bg-card/80"></div>
                  <div className="relative z-30 flex flex-col gap-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full"
                    />
                    <div className="rounded-lg bg-card/70 p-5">
                      <div className="flex flex-col gap-3">
                        <h4 className="line-clamp-1 font-medium text-slate-900 dark:text-slate-100">
                          {product.name}
                        </h4>
                        <p className="line-clamp-3 text-base text-slate-700 dark:text-slate-300">
                          {product.description}
                        </p>
                        <p className="flex flex-row items-center gap-1 text-lg font-semibold text-slate-900 md:text-3xl dark:text-slate-100">
                          <DollarSign className="size-3.5 text-slate-500 md:size-6" />
                          {product.price}
                        </p>
                        <div className="grid">
                          <Button
                            size="lg"
                            className={`${product.bgClass} rounded-full text-white hover:translate-y-1 hover:opacity-90`}
                          >
                            Buy Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
