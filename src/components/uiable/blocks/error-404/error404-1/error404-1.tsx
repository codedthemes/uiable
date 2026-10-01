// shadcn
import { Button } from "@/components/ui/button"

//  ------------------------------ | ERROR 404 1 | ------------------------------  //

export default function Error4041() {
  return (
    <section className="flex h-[100vh] min-h-[400px] flex-col items-center justify-center gap-6 px-4 py-16 text-center">
      <h1 className="text-7xl tracking-tight text-primary sm:text-8xl md:text-8xl">
        404
      </h1>
      <div className="flex max-w-md flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Page Not Found
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <div>
        <Button>Back to Home</Button>
      </div>
    </section>
  )
}
