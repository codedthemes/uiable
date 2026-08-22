// shadcn
import { Alert } from "@/components/ui/alert"

// ------------------------------ | ALERT - OUTLINED DANGER | ------------------------------ //

export default function AlertOutlinedDanger() {
  return (
    <Alert className="mb-3 grid-cols-1 rounded-lg border-1 border-red-500 bg-transparent px-5 py-3 text-red-500">
      A simple danger alert—check it out!
    </Alert>
  )
}
