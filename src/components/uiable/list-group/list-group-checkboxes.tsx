// shadcn
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

//  ------------------------------ | LIST GROUP - CHECKBOXES | ------------------------------  //

export default function ListGroupCheckboxes() {
  return (
    <div className="rounded-lg divide-y divide-border-border  border border-border  bg-card overflow-hidden">
      <div className="flex items-center space-x-3 py-4 px-6.25">
        <Checkbox id="check1" />
        <Label
          htmlFor="check1"
          className="flex-1 cursor-pointer font-normal text-base"
        >
          Cras justo odio
        </Label>
      </div>
      <div className="flex items-center space-x-3 py-4 px-6.25">
        <Checkbox id="check2" />
        <Label
          htmlFor="check2"
          className="flex-1 cursor-pointer font-normal text-base"
        >
          Dapibus ac facilisis in
        </Label>
      </div>
      <div className="flex items-center space-x-3 py-4 px-6.25">
        <Checkbox id="check3" />
        <Label
          htmlFor="check3"
          className="flex-1 cursor-pointer font-normal text-base"
        >
          Morbi leo risus
        </Label>
      </div>
      <div className="flex items-center space-x-3 py-4 px-6.25">
        <Checkbox id="check4" />
        <Label
          htmlFor="check4"
          className="flex-1 cursor-pointer font-normal text-base"
        >
          Porta ac consectetur ac
        </Label>
      </div>
      <div className="flex items-center space-x-3 py-4 px-6.25">
        <Checkbox id="check5" />
        <Label
          htmlFor="check5"
          className="flex-1 cursor-pointer font-normal text-base"
        >
          Vestibulum at eros
        </Label>
      </div>
    </div>
  );
}
