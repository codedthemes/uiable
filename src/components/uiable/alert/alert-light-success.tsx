// shadcn
import { Alert } from "@/components/ui/alert"

// ------------------------------ | ALERT - LIGHT SUCCESS | ------------------------------ //

export default function AlertLightSuccess() {
  return (
    <Alert className="mb-3 grid-cols-1 rounded-lg border border-green-500/20 bg-green-500/10 px-5 py-3 text-green-500">
      A simple success alert—check it out!
    </Alert>
  )
}
