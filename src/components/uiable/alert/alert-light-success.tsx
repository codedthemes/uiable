// shadcn
import { Alert } from "@/components/ui/alert"

//  ------------------------------ | ALERT - LIGHT SUCCESS | ------------------------------  //

export default function AlertLightSuccess() {
  return (
    <Alert className="mb-3 grid-cols-1 rounded-lg border border-green-600/20 bg-green-600/10 px-5 py-3 text-green-700 dark:text-green-400">
      A simple success alert—check it out!
    </Alert>
  )
}
