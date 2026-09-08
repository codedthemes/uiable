// shadcn
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

//  ------------------------------ | CTA 3 | ------------------------------  //

export default function Cta3() {
  return (
    <div className="relative py-24 sm:py-32">
      <div className="absolute inset-0 z-10 bg-linear-65 from-purple-500 to-pink-500"></div>
      <div className="absolute inset-0 z-20 bg-card/85"></div>
      <div className="relative z-30 container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-250 rounded-lg bg-card p-5 shadow-[0_0_40px_-8px_#d547cc3d] sm:p-14">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:gap-24">
            <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-100">
              Subscribe
            </h2>
            <Field>
              <ButtonGroup className="items-stretch [&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-lg!">
                <Input
                  id="input-button-group"
                  className="rounded-r-none"
                  placeholder="We never SPAM"
                />
                <Button
                  variant="default"
                  className="bg-linear-65 from-purple-500 to-pink-500"
                >
                  Get Started
                </Button>
              </ButtonGroup>
            </Field>
          </div>
        </div>
      </div>
    </div>
  )
}
