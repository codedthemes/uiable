// shadcn
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

//  ------------------------------ | DIALOG - SMALL | ------------------------------  //

export function DialogSmall() {
  return (
    <Dialog>
      <DialogTrigger render={<Button>Small Modal</Button>} />
      <DialogContent className="sm:max-w-xs">
        <DialogHeader>
          <DialogTitle>Small Modal</DialogTitle>
          <DialogDescription>
            This is a smaller modal variant.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">...</div>
        <DialogFooter>
          <Button variant="secondary">Close</Button>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
