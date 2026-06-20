// shadcn
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

//  ------------------------------ | LIST GROUP - RADIOS | ------------------------------  //

export default function ListGroupRadios() {
  return (
    <RadioGroup
      defaultValue="radio1"
      className="rounded-lg divide-y divide-border-border  border border-border  bg-card overflow-hidden space-y-0"
    >
      <div className="flex items-center space-x-3 py-4 px-6.25">
        <RadioGroupItem value="radio1" id="radio1" />
        <Label
          htmlFor="radio1"
          className="flex-1 cursor-pointer font-normal text-base"
        >
          Cras justo odio
        </Label>
      </div>
      <div className="flex items-center space-x-3 py-4 px-6.25">
        <RadioGroupItem value="radio2" id="radio2" />
        <Label
          htmlFor="radio2"
          className="flex-1 cursor-pointer font-normal text-base"
        >
          Dapibus ac facilisis in
        </Label>
      </div>
      <div className="flex items-center space-x-3 py-4 px-6.25">
        <RadioGroupItem value="radio3" id="radio3" />
        <Label
          htmlFor="radio3"
          className="flex-1 cursor-pointer font-normal text-base"
        >
          Morbi leo risus
        </Label>
      </div>
      <div className="flex items-center space-x-3 py-4 px-6.25">
        <RadioGroupItem value="radio4" id="radio4" />
        <Label
          htmlFor="radio4"
          className="flex-1 cursor-pointer font-normal text-base"
        >
          Porta ac consectetur ac
        </Label>
      </div>
      <div className="flex items-center space-x-3 py-4 px-6.25">
        <RadioGroupItem value="radio5" id="radio5" />
        <Label
          htmlFor="radio5"
          className="flex-1 cursor-pointer font-normal text-base"
        >
          Vestibulum at eros
        </Label>
      </div>
    </RadioGroup>
  );
}
