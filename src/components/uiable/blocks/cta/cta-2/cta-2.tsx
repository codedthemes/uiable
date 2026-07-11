// shadcn
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

//  ------------------------------ | CTA 2 | ------------------------------  //

export default function cta2() {
  return (
    <div className="py-24 sm:py-32">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-200 rounded-lg bg-card p-5 shadow-[0_0_40px_-8px_#4680ff38] sm:p-14">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-10">
            <p className="mx-auto text-center text-lg text-slate-800 sm:text-xl dark:text-slate-100">
              Get exclusive updates, helpful insights, and special announcements
              delivered straight to your inbox.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Input placeholder="Name" />
              <Input placeholder="Email Id" />
              <Button className="w-full sm:w-auto">Subscribe</Button>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  )
}
