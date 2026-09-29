// shadcn
import { Alert } from "@/components/ui/alert"

// ------------------------------ | ALERT - LIGHT WARNING | ------------------------------ //

export default function AlertLightWarning() {
  return (
    <Alert className="mb-3 grid-cols-1 rounded-lg border border-yellow-500/20 bg-yellow-500/10 px-5 py-3 text-yellow-500">
      A simple warning alert—check it out!
    </Alert>
  )
}
