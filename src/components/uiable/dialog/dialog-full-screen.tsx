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

//  ------------------------------ | DIALOG - FULL SCREEN | ------------------------------  //

export function DialogFullScreen() {
  return (
    <Dialog>
      <DialogTrigger render={<Button>Full Screen Modal</Button>} />
      <DialogContent className="max-w-screen! h-screen! rounded-none">
        <DialogHeader>
          <DialogTitle>Full Screen Modal</DialogTitle>
          <DialogDescription>
            This modal takes up the entire screen.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1 overflow-auto p-4">
          {Array.from({ length: 15 }).map((_, index) => (
            <p key={index} className="mb-4 leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          ))}
        </div>
        <DialogFooter className="border-t">
          <Button variant="secondary">Close</Button>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
