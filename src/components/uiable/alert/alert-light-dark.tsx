// shadcn
import { Alert } from "@/components/ui/alert"

//  ------------------------------ | ALERT - LIGHT DARK | ------------------------------  //

export default function AlertLightDark() {
  return (
    <Alert className="border-dark-800/20 bg-dark-800/10 text-dark-800 dark:text-dark-300 mb-3 grid-cols-1 rounded-lg border px-5 py-3">
      A simple dark alert—check it out!
    </Alert>
  )
}
