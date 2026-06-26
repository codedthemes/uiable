// shadcn
import { Alert } from "@/components/ui/alert"

//  ------------------------------ | ALERT - LIGHT DANGER | ------------------------------  //

export default function AlertLightDanger() {
  return (
    <Alert className="mb-3 grid-cols-1 rounded-lg border border-red-500/20 bg-red-500/10 px-5 py-3 text-red-500">
      A simple danger alert—check it out!
    </Alert>
  )
}
