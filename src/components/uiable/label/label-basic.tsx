// shadcn
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

//  ------------------------------ | LABEL - BASIC | ------------------------------  //

export default function LabelBasic() {
  return (
    <div className="flex items-center space-x-2 rounded-xl border border-border bg-card p-8">
      <Checkbox id="terms" />
      <Label
        htmlFor="terms"
        className="cursor-pointer text-base leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </Label>
    </div>
  )
}
