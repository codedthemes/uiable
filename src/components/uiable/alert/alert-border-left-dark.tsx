// shadcn
import { Alert } from "@/components/ui/alert"

// ------------------------------ | ALERT - BORDER LEFT DARK | ------------------------------ //

export default function AlertBorderLeftDark() {
  return (
    <Alert className="mb-3 grid-cols-1 rounded-none border-l-4 border-y-transparent border-r-transparent border-l-mist-800 bg-mist-800/10 px-5 py-3 text-mist-800 dark:border-l-mist-800 dark:bg-mist-900 dark:text-mist-300">
      A simple dark alert—check it out!
    </Alert>
  )
}
