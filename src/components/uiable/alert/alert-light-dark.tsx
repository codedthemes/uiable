// shadcn
import { Alert } from "@/components/ui/alert"

// ------------------------------ | ALERT - LIGHT DARK | ------------------------------ //

export default function AlertLightDark() {
  return (
    <Alert className="mb-3 grid-cols-1 rounded-lg border border-mist-800/20 bg-mist-800/10 px-5 py-3 text-mist-800 dark:bg-mist-800 dark:text-mist-400">
      A simple dark alert—check it out!
    </Alert>
  )
}
