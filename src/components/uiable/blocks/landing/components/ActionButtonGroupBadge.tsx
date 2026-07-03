// shadcn
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

// project
import DatePickerCard from "./DatePickerCard";

// assets
import { BadgeCheck, PlusIcon } from "lucide-react";

//  ------------------------------ | BLOCK - ACTION BUTTON GROUP BADGE | ------------------------------  //

export default function ActionButtonGroupBadge() {
  return (
    <div className="border border-border rounded-xl p-4 flex flex-col gap-4 bg-card">
      <div className="flex border border-border rounded-lg overflow-hidden w-fit">
        <ButtonGroup className="bg-muted/50 dark:bg-muted/20">
          <Button
            variant="ghost"
            size="sm"
            className="rounded-none h-auto px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted dark:hover:bg-muted/80"
          >
            Small
          </Button>
          <ButtonGroupSeparator className="bg-border" />
          <Button
            variant="ghost"
            size="sm"
            className="rounded-none h-auto px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted dark:hover:bg-muted/80"
          >
            Button
          </Button>
          <ButtonGroupSeparator className="bg-border" />
          <Button
            variant="ghost"
            size="sm"
            className="rounded-none h-auto px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted dark:hover:bg-muted/80"
          >
            Group
          </Button>
          <ButtonGroupSeparator className="bg-border" />
          <Button
            variant="ghost"
            size="icon-sm"
            className="rounded-none h-auto px-3 py-1.5 text-foreground hover:bg-muted dark:hover:bg-muted/80"
          >
            <PlusIcon className="size-3.5" />
          </Button>
        </ButtonGroup>
      </div>
      <div className="flex items-center gap-2">
        <Dialog>
          <DialogTrigger
            render={
              <Button
                className="rounded-lg text-xs font-semibold border-border text-foreground bg-background hover:bg-accent/10"
              />
            }
          >
            Show dialog
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Dialog</DialogTitle>
              <DialogDescription>this is a simple dialog box</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Badge>
          <BadgeCheck data-icon="inline-start" />
          Verified
        </Badge>
      </div>
      <Separator />
      <DatePickerCard />
    </div>
  );
}
