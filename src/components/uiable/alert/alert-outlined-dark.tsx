// shadcn
import { Alert } from "@/components/ui/alert"

// ------------------------------ | ALERT - OUTLINED DARK | ------------------------------ //

export default function AlertOutlinedDark() {
  return (
    <Alert className="mb-3 grid-cols-1 rounded-lg border-1 border-mist-800 bg-transparent px-5 py-3 text-mist-800 dark:border-mist-300 dark:border-mist-800 dark:text-mist-300">
      A simple dark alert—check it out!
    </Alert>
  )
}
