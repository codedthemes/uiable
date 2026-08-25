// shadcn
import { Button } from "@/components/ui/button"

//  ------------------------------ | CONTENT 4 | ------------------------------  //

export default function Content4() {
  return (
    <div className="relative p-0">
      <div className="absolute top-0 right-0 bottom-2/4 left-0 z-10 bg-violet-500 md:right-2/4 md:bottom-0"></div>
      <div className="relative z-20 container mx-auto grid grid-cols-12">
        <div className="col-span-12 md:col-span-6">
          <div className="relative mx-auto flex max-w-140 flex-col items-center gap-8 px-10 py-24 text-center sm:py-32">
            <div className="flex size-24 items-center justify-center rounded-3xl bg-white/10">
              <svg
                className="size-14 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity=".4"
                  d="M21 2v12.1c0 1.9-1 2.9-2.9 2.9H5.9C4 17 3 16 3 14.1V2h18Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M22 2.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75ZM16.67 22.34c-.13.26-.4.41-.67.41-.11 0-.23-.03-.33-.08L12 20.84l-3.67 1.83c-.1.05-.22.08-.33.08-.27 0-.54-.15-.67-.41a.74.74 0 0 1 .34-1.01l3.58-1.79V17h1.5v2.54l3.58 1.79c.38.18.53.63.34 1.01ZM7.5 11.75a.75.75 0 0 1-.48-1.33l3.15-2.63c.29-.24.66-.34 1.01-.28.36.06.67.28.86.6l1.05 1.75 2.93-2.44a.75.75 0 0 1 1.06.1c.27.32.22.79-.1 1.06l-3.15 2.63c-.29.24-.66.34-1.01.28-.36-.06-.67-.28-.86-.6l-1.05-1.75-2.93 2.44c-.14.11-.31.17-.48.17Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col gap-2 md:items-center">
                <h2 className="text-xl font-medium text-white sm:text-3xl">
                  Smart Business Solutions
                </h2>
                <p className="max-w-200 text-lg font-semibold text-white/50">
                  Built for fast-growing teams
                </p>
              </div>
              <p className="max-w-100 text-white/80">
                Manage workflows, automate repetitive tasks, and collaborate
                efficiently from a single powerful platform. Boost productivity
                with real-time analytics, seamless integrations, and scalable
                cloud infrastructure.
              </p>
            </div>
            <Button
              size="lg"
              className="rounded-full bg-white text-violet-500 hover:translate-y-1 hover:opacity-90"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="relative mx-auto flex max-w-140 flex-col items-center gap-8 px-10 py-24 text-center sm:py-32">
            <div className="flex size-24 items-center justify-center rounded-3xl bg-violet-500/10">
              <svg
                className="size-16 text-violet-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity=".4"
                  d="M21.25 5.77V9c0 2.29-.73 3.02-3.02 3.02h-.1v-1.64c0-3.12-1.39-4.51-4.51-4.51h-1.64v-.1c0-2.29.73-3.02 3.02-3.02h3.23c2.29 0 3.02.73 3.02 3.02Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M16.63 10.381v3.24c0 2.28-.73 3.01-3.01 3.01h-3.24c-2.28 0-3.01-.73-3.01-3.01v-3.24c0-2.28.73-3.01 3.01-3.01h3.24c2.28 0 3.01.73 3.01 3.01Z"
                  fill="currentColor"
                ></path>
                <path
                  opacity=".4"
                  d="M12.02 18.13v.1c0 2.29-.73 3.02-3.02 3.02H5.77c-2.29 0-3.02-.73-3.02-3.02V15c0-2.29.73-3.02 3.02-3.02h.1v1.64c0 3.12 1.39 4.51 4.51 4.51h1.64Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col gap-2 md:items-center">
                <h2 className="text-xl font-medium text-slate-800 sm:text-3xl dark:text-slate-100">
                  All-in-One SaaS Platform
                </h2>
                <p className="max-w-200 text-lg font-semibold text-slate-400 dark:text-slate-500">
                  Everything your business needs
                </p>
              </div>
              <p className="max-w-100 text-slate-600 dark:text-slate-400">
                Track performance, organize projects, and streamline
                communication with tools designed for modern teams. Simplify
                daily operations while keeping your data secure, accessible, and
                easy to manage.
              </p>
            </div>
            <Button
              size="lg"
              className="rounded-full bg-violet-500 hover:translate-y-1 hover:opacity-90"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
