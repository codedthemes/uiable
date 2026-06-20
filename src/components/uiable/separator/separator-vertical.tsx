// shadcn
import { Separator } from "@/components/ui/separator";

//  ------------------------------ | SEPARATOR - VERTICAL | ------------------------------  //

export function SeparatorVertical() {
  return (
    <div className="flex h-5 items-center gap-4">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  );
}
