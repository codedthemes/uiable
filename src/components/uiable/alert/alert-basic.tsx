// shadcn

// assets
import { CheckCircle2Icon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

//  ------------------------------ | ALERT - BASIC | ------------------------------  //

export default function AlertBasic() {
  return (
    <Alert className="max-w-md border-primary/10 bg-primary/10 text-primary">
      <CheckCircle2Icon />
      <AlertTitle>Account updated successfully</AlertTitle>
      <AlertDescription>
        Your profile information has been saved. Changes will be reflected
        immediately.
      </AlertDescription>
    </Alert>
  )
}
