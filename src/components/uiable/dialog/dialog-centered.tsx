// shadcn
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

//  ------------------------------ | DIALOG - CENTERED | ------------------------------  //

export function DialogCentered() {
  return (
    <Dialog>
      <DialogTrigger render={<Button>Vertically Centered</Button>} />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Modal Title</DialogTitle>
          <DialogDescription>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="secondary">Close</Button>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
