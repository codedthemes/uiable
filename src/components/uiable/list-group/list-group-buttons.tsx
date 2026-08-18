// shadcn
import { Button } from "@/components/ui/button"

//  ------------------------------ | LIST GROUP - BUTTONS | ------------------------------  //

export default function ListGroupButtons() {
  return (
    <div className="divide-border-border divide-y overflow-hidden rounded-lg border border-border bg-card">
      <Button
        variant="ghost"
        className="block h-auto w-full justify-start rounded-none border-none px-6.25 py-4 text-left font-normal hover:bg-muted/50"
      >
        Cras justo odio
      </Button>
      <Button
        variant="default"
        className="block h-auto w-full justify-start rounded-none border-none bg-primary px-6.25 py-4 text-left font-normal text-primary-foreground"
      >
        Dapibus ac facilisis in
      </Button>
      <Button
        variant="ghost"
        className="block h-auto w-full justify-start rounded-none border-none px-6.25 py-4 text-left font-normal hover:bg-muted/50"
      >
        Morbi leo risus
      </Button>
      <Button
        variant="ghost"
        className="block h-auto w-full justify-start rounded-none border-none px-6.25 py-4 text-left font-normal hover:bg-muted/50"
      >
        Porta ac consectetur ac
      </Button>
      <Button
        variant="ghost"
        className="block h-auto w-full cursor-not-allowed justify-start rounded-none border-none px-6.25 py-4 text-left font-normal opacity-50"
        disabled
      >
        Vestibulum at eros
      </Button>
    </div>
  )
}
