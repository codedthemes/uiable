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

//  ------------------------------ | DIALOG - LARGE | ------------------------------  //

export function DialogLarge() {
  return (
    <Dialog>
      <DialogTrigger render={<Button>Large Modal</Button>} />
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Large Modal</DialogTitle>
          <DialogDescription>This is a larger modal variant.</DialogDescription>
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
