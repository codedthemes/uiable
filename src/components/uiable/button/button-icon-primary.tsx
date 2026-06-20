// shadcn
import { Button } from "@/components/ui/button";

// assets
import { ThumbsUp } from "lucide-react";

//  ------------------------------ | BUTTON ICON PRIMARY | ------------------------------  //

export default function ButtonIconPrimary() {
  return (
    <Button className="gap-2">
      <ThumbsUp className="size-5" /> Primary
    </Button>
  );
}
