// shadcn
import { Button } from "@/components/ui/button"

//  ------------------------------- | CONTENT 9 | -------------------------------  //

export default function Content9() {
  return (
    <section className="relative overflow-hidden bg-slate-800 py-24 sm:py-32">
      <span className="absolute -top-80 right-2/4 block h-100 w-100 translate-x-2/4 rounded-full bg-blue-500"></span>
      <div className="absolute inset-0 z-20 bg-slate-900/10 backdrop-blur-[150px]"></div>
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 sm:gap-12">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
            <div className="flex size-16 items-center justify-center rounded-3xl border border-sky-500/50 bg-sky-500/10">
              <svg
                className="size-8 text-sky-500"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21.81 3.94c-1.54 3.84-5.4 9.06-8.63 11.65l-1.97 1.58c-.25.18-.5.34-.78.45 0-.18-.01-.38-.04-.57-.11-.84-.49-1.62-1.16-2.29-.68-.68-1.51-1.08-2.36-1.19-.2-.01-.4-.03-.6-.01.11-.31.28-.6.49-.84l1.56-1.97c2.58-3.23 7.82-7.11 11.65-8.64.59-.22 1.16-.06 1.52.31.38.37.56.94.32 1.52z"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10.43 17.62c0 1.1-.42 2.15-1.21 2.95-.61.61-1.44 1.03-2.43 1.16L4.33 22c-1.34.15-2.49-.99-2.33-2.35l.27-2.46c.24-2.19 2.07-3.59 4.01-3.63.2-.01.41 0 .6.01.85.11 1.68.5 2.36 1.19.67.67 1.05 1.45 1.16 2.29.01.19.03.38.03.57zM14.24 14.47c0-2.61-2.12-4.73-4.73-4.73"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M20.12 12.73l.74.73c1.49 1.49 1.49 2.96 0 4.45l-2.96 2.96c-1.47 1.47-2.96 1.47-4.43 0M3.11 10.51c-1.47-1.49-1.47-2.96 0-4.45L6.07 3.1c1.47-1.47 2.96-1.47 4.43 0l.74.74M11.25 3.85l-3.7 3.7M20.12 12.73l-2.96 2.95"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
              <h2 className="text-lg font-medium text-white sm:text-3xl">
                Launch Stunning SaaS Products
              </h2>
              <p className="max-w-150 text-white/80">
                Power your next SaaS platform with sleek dashboards, reusable
                components, and seamless user experiences designed for growth.
              </p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Button className="rounded-full border-2 border-pink-500 bg-pink-500 text-white hover:bg-pink-500/20 hover:text-pink-500">
                Explore Now
              </Button>
              <Button className="rounded-full border-2 border-pink-500 bg-pink-500/20 text-pink-500 hover:bg-pink-500 hover:text-white">
                Buy Now
              </Button>
            </div>
          </div>
          <div className="mx-auto max-w-150">
            <img
              src="https://cdn.uiable.com/block/img-content-8.png"
              alt="Team meeting in a conference room"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
