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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

//  ------------------------------ | ALERT DIALOG - LOCK | ------------------------------  //

export function AlertDialogLock() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button>Access Dialog</Button>} />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Access Denied</AlertDialogTitle>
          <AlertDialogDescription>
            Please contact your administrator to request permission.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="grid gap-2 py-4">
          <Label htmlFor="reason">Reason for access</Label>
          <Input
            id="reason"
            placeholder="e.g. I need to review the Q3 reports"
          />
        </div>

        <AlertDialogFooter className="border-t-0 bg-transparent pt-0">
          <AlertDialogCancel variant="outline" className="dark:border-border">
            Close
          </AlertDialogCancel>
          <AlertDialogAction>Request Access</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
