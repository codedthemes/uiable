// shadcn
import { Separator } from "@/components/ui/separator";

//  ------------------------------ | SEPARATOR - MENU | ------------------------------  //

export function SeparatorMenu() {
  return (
    <div className="flex items-center gap-2 md:gap-4">
      <div className="flex flex-col gap-1">
        <h6 className="font-medium">Settings</h6>
        <span className="text-muted-foreground">Manage preferences</span>
      </div>
      <Separator orientation="vertical" />
      <div className="flex flex-col gap-1">
        <h6 className="font-medium">Account</h6>
        <span className="text-muted-foreground">Profile & security</span>
      </div>
      <Separator orientation="vertical" className="hidden md:block" />
      <div className="hidden flex-col gap-1 md:flex">
        <h6 className="font-medium">Help</h6>
        <span className="text-muted-foreground">Support & docs</span>
      </div>
    </div>
  );
}
