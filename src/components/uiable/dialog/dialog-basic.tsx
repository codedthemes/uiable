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

//  ------------------------------ | DIALOG - BASIC | ------------------------------  //

export function DialogBasic() {
  return (
    <Dialog>
      <DialogTrigger render={<Button>Launch demo modal</Button>} />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Modal Title</DialogTitle>
          <DialogDescription>Modal body text goes here.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="secondary">Close</Button>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
