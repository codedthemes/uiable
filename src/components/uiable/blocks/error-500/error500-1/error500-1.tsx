// shadcn
import { Button } from "@/components/ui/button"

//  ------------------------------ | ERROR 500 1 | ------------------------------  //

export default function Error5001() {
  return (
    <section className="flex h-[100vh] min-h-[400px] flex-col items-center justify-center gap-6 px-4 py-16 text-center">
      <h1 className="text-7xl tracking-tight text-primary sm:text-8xl md:text-8xl">
        500
      </h1>
      <div className="flex max-w-md flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Internal Server Error
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Server error 500. We are fixing the problem. Please try again at a
          later stage.
        </p>
      </div>
      <div>
        <Button>Back to Home</Button>
      </div>
    </section>
  )
}
