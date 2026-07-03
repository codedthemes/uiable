// shadcn
import { Button } from "@/components/ui/button";

// assets
import { CircleCheck } from "lucide-react";

//  ------------------------------ | BUTTON ICON SUCCESS | ------------------------------  //

export default function ButtonIconSuccess() {
  return (
    <Button className="gap-2 bg-green-500 text-white hover:bg-green-600">
      <CircleCheck className="size-5" /> Success
    </Button>
  );
}
