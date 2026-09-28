// shadcn
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Pink Blossom Plant",
    bgClass: "bg-pink-500",
    description:
      "A beautiful indoor flowering plant that adds freshness and elegance to any space.",
    price: "$140",
    image: "https://cdn.uiable.com/block/img-ecom-prod-1.png",
  },
  {
    name: "Premium Bomber Jacket",
    bgClass: "bg-yellow-500",
    description:
      "Stylish and comfortable bomber jacket crafted with premium materials for everyday wear.",
    price: "$180",
    image: "https://cdn.uiable.com/block/img-ecom-prod-2.png",
  },
  {
    name: "Travel Suitcase",
    bgClass: "bg-purple-500",
    description:
      "Lightweight hard-shell luggage with spacious storage and smooth 360° spinner wheels.",
    price: "$300",
    image: "https://cdn.uiable.com/block/img-ecom-prod-3.png",
  },
  {
    name: "Ceramic Coffee Mug",
    bgClass: "bg-green-500",
    description:
      "Premium ceramic mug designed to keep your favorite coffee or tea warm for longer.",
    price: "$140",
    image: "https://cdn.uiable.com/block/img-ecom-prod-4.png",
  },
  {
    name: "Premium Beauty Essentials",
    bgClass: "bg-cyan-500",
    description:
      "Discover our luxury beauty essentials crafted with high-quality ingredients for radiant, healthy-looking skin every day.",
    price: "$320",
    image: "https://cdn.uiable.com/block/img-ecom-prod-5.png",
  },
]

//  ------------------------------ | E - COMMERCE 9 | ------------------------------  //

export default function Ecommerce9() {
  return (
    <section className="bg-slate-900 py-20 lg:py-28">
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
          <div className="grid grid-cols-12 items-stretch gap-6">
            <div className="col-span-12 lg:col-span-6">
              <div className="grid grid-cols-12 items-stretch gap-6">
                {products.slice(0, 4).map((product, idx) => (
                  <div key={idx} className="col-span-12 md:col-span-6">
                    <div className="relative h-full overflow-hidden rounded-lg bg-slate-800 p-5 sm:p-8">
                      <div className="flex h-full flex-col gap-6">
                        <div className="flex flex-1 items-center">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="mx-auto h-auto w-full md:w-3/4"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-between gap-3">
                          <h4 className="line-clamp-1 font-medium text-slate-100">
                            {product.name}
                          </h4>
                          <p className="line-clamp-2 text-base text-slate-300">
                            {product.description}
                          </p>
                          <Button
                            size="lg"
                            className={`w-full rounded-full text-white hover:translate-y-1 hover:opacity-90 ${product.bgClass}`}
                          >
                            Buy Now at {product.price}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="relative h-full overflow-hidden rounded-lg bg-slate-800 p-5 sm:p-8">
                <div className="flex h-full flex-col gap-6">
                  <div className="flex flex-1 items-center">
                    <img
                      src={products[4].image}
                      alt={products[4].name}
                      className="mx-auto h-auto w-full lg:w-3/4"
                    />
                  </div>
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
                    <div className="flex flex-col items-start gap-3">
                      <h4 className="line-clamp-1 font-medium text-slate-100">
                        {products[4].name}
                      </h4>
                      <p className="line-clamp-3 text-base text-slate-300">
                        {products[4].description}
                      </p>
                      <p className="text-lg font-semibold text-slate-100">
                        {products[4].price}
                      </p>
                    </div>
                    <Button
                      size="lg"
                      className={`rounded-full text-white hover:translate-y-1 hover:opacity-90 ${products[4].bgClass}`}
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
