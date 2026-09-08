// shadcn
import { Button } from "@/components/ui/button"

// Curve Icons
function CurveIcon() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M50 0C22.3858 0 0 22.3858 0 50V0H50Z" fill="currentColor" />
    </svg>
  )
}

const products = [
  {
    image: "https://cdn.uiable.com/block/img-furniture-4.png",
    name: "Luxury Sofa Set",
    price: "799",
  },
  {
    image: "https://cdn.uiable.com/block/img-furniture-6.png",
    name: "Wardrobe with TV Unit",
    price: "999",
  },
  {
    image: "https://cdn.uiable.com/block/img-furniture-5.png",
    name: "Contemporary Dining Table",
    price: "599",
  },
]

//  ------------------------------ | E - COMMERCE 5 | ------------------------------  //

export default function Ecommerce5() {
  return (
    <div className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
      <div className="relative z-30 container mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
            <p className="text-lg font-semibold tracking-wider text-cyan-500 uppercase">
              Premium Home Collection
            </p>
            <h2 className="text-lg font-medium text-white sm:text-4xl">
              Transform Your Living Space
            </h2>
            <p className="max-w-120 text-slate-300">
              Discover high-quality, architecturally styled furniture pieces
              designed to bring warmth, comfort, and premium aesthetics into
              your home.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-12 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <div className="w-full overflow-hidden rounded-xl bg-slate-900 p-0">
                  <div className="group relative overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full transition-all duration-500 group-hover:scale-125"
                    />
                    <div className="absolute top-0 left-0 flex flex-col items-start justify-start">
                      <div className="flex items-center gap-1 rounded-br-xl bg-slate-900 py-2 pr-4">
                        <div className="absolute top-0 right-0 size-3 translate-x-full text-slate-900">
                          <CurveIcon />
                        </div>
                        <span className="text-lg font-medium text-slate-300 sm:text-2xl">
                          {product.name}
                        </span>
                      </div>
                      <div className="relative flex items-center gap-1 rounded-br-xl bg-slate-900 py-2 pr-4">
                        <div className="absolute top-0 right-0 size-3 translate-x-full rotate-0 text-slate-900">
                          <CurveIcon />
                        </div>
                        <div className="text-cardslate-900 absolute bottom-0 left-0 size-3 translate-y-full rotate-0">
                          <CurveIcon />
                        </div>
                        <span className="text-xl font-semibold text-slate-50 sm:text-5xl">
                          <span className="text-lg font-light sm:text-3xl">
                            $
                          </span>
                          {product.price}
                        </span>
                      </div>
                    </div>
                    <div className="absolute right-0 bottom-0 z-10">
                      <div className="absolute bottom-0 left-0 size-4 -translate-x-full rotate-180 text-slate-900">
                        <CurveIcon />
                      </div>
                      <div className="absolute top-0 right-0 size-4 -translate-y-full rotate-180 text-slate-900">
                        <CurveIcon />
                      </div>
                      <div className="max-w-100 rounded-tl-2xl bg-slate-900 pt-4 pl-4">
                        <Button
                          size="lg"
                          className="rounded-xl bg-cyan-500 hover:opacity-90 md:px-10"
                        >
                          Shop Now
                        </Button>
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
