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
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

//  ------------------------------ | ALERT DIALOG - SUBSCRIPTION | ------------------------------  //

export function AlertDialogSubscription() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <Button variant="outline" className="dark:border-border">
            Upgrade Dialog
          </Button>
        }
      />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Upgrade to Pro</AlertDialogTitle>
          <AlertDialogDescription>
            You've reached the limit of your free plan. Upgrade to Pro to unlock
            unlimited projects, advanced analytics, and premium support.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <RadioGroup defaultValue="monthly" className="gap-3">
          <div className="flex items-center space-x-2 rounded-lg border p-3">
            <RadioGroupItem value="monthly" id="plan-monthly" />
            <Label
              htmlFor="plan-monthly"
              className="flex flex-1 cursor-pointer flex-col items-start gap-1"
            >
              <h6 className="font-medium">Monthly Plan</h6>
              <span className="text-sm text-muted-foreground">
                $9.00 / month
              </span>
            </Label>
          </div>
          <div className="flex items-center space-x-2 rounded-lg border p-3">
            <RadioGroupItem value="yearly" id="plan-yearly" />
            <Label
              htmlFor="plan-yearly"
              className="flex flex-1 cursor-pointer flex-col items-start gap-1"
            >
              <h6 className="font-medium">Annual Plan</h6>
              <span className="text-sm text-muted-foreground">
                $90.00 / year (Save 16%)
              </span>
            </Label>
          </div>
        </RadioGroup>

        <AlertDialogFooter className="border-t-0 bg-transparent pt-0">
          <AlertDialogCancel variant="outline" className="dark:border-border">
            Maybe Later
          </AlertDialogCancel>
          <AlertDialogAction>Upgrade Now</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
