// shadcn
import { Alert } from "@/components/ui/alert"

// assets
import { Moon } from "lucide-react"

// ------------------------------ | ALERT - ICON DARK | ------------------------------ //

export default function AlertIconDark() {
  return (
    <Alert className="mb-3 flex items-center gap-3 rounded-lg border border-mist-800/20 bg-mist-800/10 px-5 py-3 text-mist-800 dark:bg-mist-800 dark:text-mist-400">
      <Moon className="h-5 w-5" />
      <span>A simple dark alert—check it out!</span>
    </Alert>
  )
}
