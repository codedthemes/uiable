// shadcn
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

//  ------------------------------ | LABEL - BASIC | ------------------------------  //

export default function LabelBasic() {
  return (
    <div className="flex items-center space-x-2 p-8 bg-card border rounded-xl border-border ">
      <Checkbox id="terms" />
      <Label
        htmlFor="terms"
        className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
      >
        Accept terms and conditions
      </Label>
    </div>
  );
}
