// shadcn
import { Alert } from "@/components/ui/alert"

// ------------------------------ | ALERT - OUTLINED SUCCESS | ------------------------------ //

export default function AlertOutlinedSuccess() {
  return (
    <Alert className="mb-3 grid-cols-1 rounded-lg border-1 border-green-500 bg-transparent px-5 py-3 text-green-500">
      A simple success alert—check it out!
    </Alert>
  )
}
