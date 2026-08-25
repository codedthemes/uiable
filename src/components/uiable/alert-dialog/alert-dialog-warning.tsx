// shadcn
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

//  ------------------------------ | ALERT DIALOG - WARNING | ------------------------------  //

export function AlertDialogWarning() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <Button className="bg-yellow-500 text-white hover:bg-yellow-600">
            Warning Dialog
          </Button>
        }
      />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Unsaved Changes</AlertDialogTitle>
          <AlertDialogDescription>
            You have unsaved changes. Are you sure you want to leave this page?
            All your unsaved progress will be lost.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="flex items-center space-x-2 py-4">
          <Checkbox id="dont-show" />
          <Label
            htmlFor="dont-show"
            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Don't show this warning again
          </Label>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel variant="outline" className="dark:border-border">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction className="bg-yellow-500 text-white hover:bg-yellow-600">
            Discard Changes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
