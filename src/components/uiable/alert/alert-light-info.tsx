// shadcn
import { Alert } from "@/components/ui/alert"

//  ------------------------------ | ALERT - LIGHT INFO | ------------------------------  //

export default function AlertLightInfo() {
  return (
    <Alert className="mb-3 grid-cols-1 rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-cyan-700 dark:text-cyan-400">
      A simple info alert—check it out!
    </Alert>
  )
}
