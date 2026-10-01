// shadcn
import { Button } from "@/components/ui/button"

//  ------------------------------ | ERROR 500 2 | ------------------------------  //

export default function Error5002() {
  return (
    <section className="flex h-[100vh] min-h-[700px] flex-col items-center justify-center gap-6 px-4 py-16 text-center">
      <div className="mb-8">
        <img
          src="https://cdn.uiable.com/block/img-error-500.svg"
          alt="500 Internal Server Error Illustration"
          className="h-auto max-w-full select-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1>Internal Server Error</h1>
        <p className="text-muted-foreground">
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
