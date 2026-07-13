// shadcn
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

//  ------------------------------ | CTA 1 | ------------------------------  //

export default function cta1() {
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
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-200 rounded-lg bg-card p-5 shadow-[0_0_40px_-8px_#4680ff38] sm:p-14">
          <div className="mb-6 flex flex-col items-center gap-4 text-center sm:mb-12 sm:gap-10">
            <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-100">
              Subscribe Now
            </h2>
            <p className="max-w-145 text-slate-600 dark:text-slate-400">
              Unlock premium features, exclusive updates, and priority access to
              new content. Join our community today and enjoy a seamless
              experience designed just for you. Subscribe now and never miss out
              on what matters most.
            </p>
          </div>
          <Field className="mx-auto max-w-150">
            <ButtonGroup className="items-stretch [&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-lg!">
              <Input id="input-button-group" placeholder="Enter Mail" />
              <Button>Join Now</Button>
            </ButtonGroup>
          </Field>
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
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  )
}
