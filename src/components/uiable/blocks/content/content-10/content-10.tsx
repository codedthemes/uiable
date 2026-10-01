// shadcn
import { Button } from "@/components/ui/button"

//  ------------------------------ | CONTENT 10 | ------------------------------  //

export default function Content10() {
  return (
    <div className="relative overflow-hidden pt-24 sm:pt-32">
      <div className="absolute inset-0 z-10 mx-auto max-w-250">
        <div className="auth-bg absolute inset-0">
          <span className="absolute top-60 -right-30 block h-76 w-76 rounded-full bg-linear-to-r from-teal-500 to-blue-500"></span>
          <span className="absolute top-37.5 right-37.5 block h-20 w-20 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"></span>
          <span className="absolute top-60 left-36 block h-20 w-20 rounded-full bg-linear-to-r from-teal-500 to-blue-500"></span>
          <span className="absolute bottom-10 -left-25 block h-76 w-76 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"></span>
        </div>
      </div>
      <div className="absolute inset-0 z-20 bg-card/75 backdrop-blur-2xl"></div>
      <div className="relative z-30 container mx-auto px-6 lg:px-8">
        <div className="relative mx-auto flex max-w-250 flex-col gap-6 lg:gap-12">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
            <div className="flex items-center gap-2 rounded-lg bg-sky-500/10 px-5 py-2.5 text-sky-500 backdrop-blur-md">
              <span className="text-md font-semibold text-slate-800 dark:text-slate-100">
                UIkit PRO
              </span>
              <svg
                className="size-7 text-lime-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity=".15"
                  d="M12 21.898c5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10s-10 4.478-10 10c0 5.523 4.477 10 10 10Z"
                  fill="currentColor"
                ></path>
                <path
                  d="m14.26 12-1.51-.53V8.08h.36c.81 0 1.47.71 1.47 1.58 0 .41.34.75.75.75s.75-.34.75-.75c0-1.7-1.33-3.08-2.97-3.08h-.36V6c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.58h-.65c-1.48 0-2.69 1.25-2.69 2.78 0 1.79 1.04 2.36 1.83 2.64l1.51.53v3.38h-.36c-.81 0-1.47-.71-1.47-1.58 0-.41-.34-.75-.75-.75s-.75.34-.75.75c0 1.7 1.33 3.08 2.97 3.08h.36V18c0 .41.34.75.75.75s.75-.34.75-.75v-.58h.65c1.48 0 2.69-1.25 2.69-2.78-.01-1.8-1.05-2.37-1.83-2.64Zm-4.02-1.41c-.51-.18-.82-.35-.82-1.22 0-.71.53-1.28 1.19-1.28h.65v2.86l-1.02-.36Zm3.16 5.33h-.65v-2.86l1.01.35c.51.18.82.35.82 1.22 0 .71-.53 1.29-1.18 1.29Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
              <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-100">
                Launch Stunning SaaS Products
              </h2>
              <p className="max-w-150 text-slate-400 dark:text-slate-500">
                Power your next SaaS platform with sleek dashboards, reusable
                components, and seamless user experiences designed for growth.
              </p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full bg-blue-500 text-white hover:translate-y-1 hover:bg-blue-500/20 hover:text-blue-500 hover:opacity-90"
              >
                Buy Now
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full hover:translate-y-1 hover:opacity-90"
              >
                Explore Now
              </Button>
            </div>
          </div>
          <div className="mx-auto max-w-250 overflow-hidden rounded-t-lg bg-card p-0 shadow-[0_0_40px_-8px_#4680ff38]">
            <div className="flex flex-col items-center gap-5 sm:gap-12">
              <div className="mx-auto max-w-250">
                <img
                  src="https://cdn.uiable.com/block/img-content-9.png"
                  alt="Team meeting in a conference room"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
