// shadcn
import { Badge } from "@/components/ui/badge";

// assets
import { ArrowUpRightIcon } from "lucide-react";

//  ------------------------------ | BADGE - LINK | ------------------------------  //

export function BadgeAsLink() {
  return (
    <Badge render={<a href="#link" />}>
      Open Link <ArrowUpRightIcon data-icon="inline-end" />
    </Badge>
  );
}
