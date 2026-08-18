// shadcn
import { Alert } from "@/components/ui/alert"

// ------------------------------ | ALERT - BORDER LEFT DANGER | ------------------------------ //

export default function AlertBorderLeftDanger() {
  return (
    <Alert className="mb-3 grid-cols-1 rounded-none border-l-4 border-y-transparent border-r-transparent border-l-red-500 bg-red-500/10 px-5 py-3 text-red-500">
      A simple danger alert—check it out!
    </Alert>
  )
}
