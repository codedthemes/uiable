// shadcn
import { Alert } from "@/components/ui/alert"

// assets
import { Info } from "lucide-react"

// ------------------------------ | ALERT - ICON SECONDARY | ------------------------------ //

export default function AlertIconSecondary() {
  return (
    <Alert className="text-dark mb-3 flex items-center gap-3 rounded-lg border border-slate-500/30 bg-slate-500/20 px-5 py-3">
      <Info className="h-5 w-5" />
      <span>A simple secondary alert—check it out!</span>
    </Alert>
  )
}
