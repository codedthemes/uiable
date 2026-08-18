// shadcn
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// assets
import { InfoIcon } from "lucide-react"

//  ------------------------------ | LABEL - REQUIRED | ------------------------------  //

export default function LabelRequired() {
  return (
    <div className="p-sm-8 flex w-full max-w-sm flex-col gap-2 rounded-lg border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <Label
          htmlFor="email-required"
          className="cursor-pointer text-base font-medium"
        >
          Email address{" "}
          <span className="font-semibold text-destructive">*</span>
        </Label>
        <Tooltip>
          <TooltipTrigger
            render={
              <button
                type="button"
                aria-label="Help"
                className="inline-flex size-4 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground focus:outline-none"
              />
            }
          >
            <InfoIcon className="size-4" />
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>We will use this email for important security notifications.</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <Input
        id="email-required"
        type="email"
        placeholder="alex.smith@company.com"
        required
      />
      <p className="text-xs text-muted-foreground">
        Must be a valid corporate or personal email address.
      </p>
    </div>
  )
}
