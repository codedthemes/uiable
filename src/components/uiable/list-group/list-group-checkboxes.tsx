// shadcn
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

//  ------------------------------ | LIST GROUP - CHECKBOXES | ------------------------------  //

export default function ListGroupCheckboxes() {
  return (
    <div className="divide-border-border divide-y overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-center space-x-3 px-6.25 py-4">
        <Checkbox id="check1" />
        <Label
          htmlFor="check1"
          className="flex-1 cursor-pointer text-base font-normal"
        >
          Cras justo odio
        </Label>
      </div>
      <div className="flex items-center space-x-3 px-6.25 py-4">
        <Checkbox id="check2" />
        <Label
          htmlFor="check2"
          className="flex-1 cursor-pointer text-base font-normal"
        >
          Dapibus ac facilisis in
        </Label>
      </div>
      <div className="flex items-center space-x-3 px-6.25 py-4">
        <Checkbox id="check3" />
        <Label
          htmlFor="check3"
          className="flex-1 cursor-pointer text-base font-normal"
        >
          Morbi leo risus
        </Label>
      </div>
      <div className="flex items-center space-x-3 px-6.25 py-4">
        <Checkbox id="check4" />
        <Label
          htmlFor="check4"
          className="flex-1 cursor-pointer text-base font-normal"
        >
          Porta ac consectetur ac
        </Label>
      </div>
      <div className="flex items-center space-x-3 px-6.25 py-4">
        <Checkbox id="check5" />
        <Label
          htmlFor="check5"
          className="flex-1 cursor-pointer text-base font-normal"
        >
          Vestibulum at eros
        </Label>
      </div>
    </div>
  )
}
