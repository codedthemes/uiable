// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// assets
import { AlertCircle } from "lucide-react"

//  ------------------------------ | DIALOG - DESTRUCTIVE | ------------------------------  //

export function DialogDestructive() {
  return (
    <Dialog>
      <DialogTrigger
        render={<Button variant="destructive">Delete Account</Button>}
      />
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-col items-center sm:items-center">
          <Avatar className="mb-4 h-12 w-12 after:border-none">
            <AvatarFallback className="bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-500">
              <AlertCircle className="h-6 w-6" />
            </AvatarFallback>
          </Avatar>
          <DialogTitle className="text-xl">Delete Account</DialogTitle>
          <DialogDescription className="mt-2 text-center">
            Are you sure you want to delete your account? This action cannot be
            undone and all your data will be permanently removed.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-4 sm:justify-center">
          <DialogClose
            render={
              <Button
                variant="outline"
                className="w-full sm:w-auto dark:border-border"
              />
            }
          >
            Cancel
          </DialogClose>
          <Button variant="destructive" className="w-full sm:w-auto">
            Yes, delete account
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
