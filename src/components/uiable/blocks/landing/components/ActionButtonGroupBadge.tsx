// shadcn

// assets
import { BadgeCheck, PlusIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"

// project
import DatePickerCard from "./DatePickerCard"

//  ------------------------------ | BLOCK - ACTION BUTTON GROUP BADGE | ------------------------------  //

export default function ActionButtonGroupBadge() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4">
      <div className="flex w-fit overflow-hidden rounded-lg border border-border">
        <ButtonGroup className="bg-muted/50 dark:bg-muted/20">
          <Button
            variant="ghost"
            size="sm"
            className="h-auto rounded-none px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted dark:hover:bg-muted/80"
          >
            Small
          </Button>
          <ButtonGroupSeparator className="bg-border" />
          <Button
            variant="ghost"
            size="sm"
            className="h-auto rounded-none px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted dark:hover:bg-muted/80"
          >
            Button
          </Button>
          <ButtonGroupSeparator className="bg-border" />
          <Button
            variant="ghost"
            size="sm"
            className="h-auto rounded-none px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted dark:hover:bg-muted/80"
          >
            Group
          </Button>
          <ButtonGroupSeparator className="bg-border" />
          <Button
            variant="ghost"
            size="icon-sm"
            className="h-auto rounded-none px-3 py-1.5 text-foreground hover:bg-muted dark:hover:bg-muted/80"
          >
            <PlusIcon className="size-3.5" />
          </Button>
        </ButtonGroup>
      </div>
      <div className="flex items-center gap-2">
        <Dialog>
          <DialogTrigger
            render={
              <Button className="rounded-lg border-border bg-background text-xs font-semibold text-foreground hover:bg-accent/10" />
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
  )
}
