// shadcn
import { Button } from "@/components/ui/button"

//  ------------------------------ | UNDER CONSTRUCTION 1 | ------------------------------  //

export default function UnderConstruction1() {
  return (
    <section className="relative flex h-[100vh] min-h-[800px] items-center justify-center overflow-hidden bg-[url('https://cdn.uiable.com/block/img-cunstruct-1-bg.png')] [background-size:100%_auto] bg-top bg-no-repeat px-4 py-16 sm:px-6 lg:px-8">
      <div className="container mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl items-center justify-center bg-bottom bg-no-repeat py-12 pt-24 sm:pt-28 md:pt-12 md:pr-24 lg:pr-40 xl:pr-60 2xl:pr-72">
        <div className="grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-2 md:gap-8 lg:gap-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1>Under Construction</h1>
            <p className="max-w-md text-base text-muted-foreground">
              Hey! Please check out this site later. We are doing some
              maintenance on it right now.
            </p>
            <div>
              <Button>Back To Home</Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="https://cdn.uiable.com/block/img-cunstruct-1.svg"
              alt="Under Construction Illustration"
              className="h-auto max-h-[260px] w-full max-w-[260px] object-contain select-none sm:max-h-[300px] sm:max-w-[300px] md:max-h-[340px] md:max-w-[340px] lg:max-h-[380px] lg:max-w-[374px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
