// shadcn
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

//  ------------------------------ | BUTTON LOADING | ------------------------------  //

export default function ButtonLoading() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Button disabled className="gap-1">
        <Spinner />
        Generating
      </Button>
      <Button variant="secondary" disabled className="gap-1">
        Downloading
        <Spinner />
      </Button>
    </div>
  )
}
