// shadcn
import { Button } from "@/components/ui/button"

//  ------------------------------ | UNDER CONSTRUCTION 2 | ------------------------------  //

export default function UnderConstruction2() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 py-16 text-center">
      <div className="flex justify-center">
        <img
          src="https://cdn.uiable.com/block/img-construction-2.svg"
          alt="Under Construction Illustration"
          className="h-auto max-h-[380px] w-full max-w-[374px] object-contain select-none"
        />
      </div>

      <div className="flex max-w-md flex-col items-center gap-3">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Under Construction
        </h1>
        <p className="text-base text-muted-foreground">
          Hey! Please check out this site later. We are doing some maintenance
          on it right now.
        </p>
      </div>

      <div>
        <Button>Back To Home</Button>
      </div>
    </section>
  )
}
