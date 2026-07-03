// shadcn
import { Button } from "@/components/ui/button";

// assets
import { ArrowUpIcon } from "lucide-react";

//  ------------------------------ | BUTTON ROUNDED | ------------------------------  //

export default function ButtonRounded() {
  return (
    <div className="flex gap-2 items-center">
      <Button className="rounded-full">Get Started</Button>
      <Button size="icon-lg" className="rounded-full">
        <ArrowUpIcon />
      </Button>
    </div>
  );
}
