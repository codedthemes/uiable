// shadcn
import { Button } from "@/components/ui/button"

//  ------------------------------ | ERROR 404 2 | ------------------------------  //

export default function Error4042() {
  return (
    <section className="flex h-[100vh] min-h-[600px] flex-col items-center justify-center gap-6 px-4 py-16 text-center">
      <div className="mb-8">
        <img
          src="https://cdn.uiable.com/block/img-error-404.svg"
          alt="404 Page Not Found Illustration"
          className="h-auto max-w-full select-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1>Page Not Found</h1>
        <p className="text-muted-foreground">
          The page you are looking for was moved, removed, renamed, or might
          never exist!
        </p>
      </div>
      <div>
        <Button>Back to Home</Button>
      </div>
    </section>
  )
}
