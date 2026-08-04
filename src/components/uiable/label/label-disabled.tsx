// shadcn
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

//  ------------------------------ | LABEL - DISABLED | ------------------------------  //

export default function LabelDisabled() {
  return (
    <div className="p-sm-8 flex w-full max-w-sm flex-col gap-6 rounded-lg border border-border p-5">
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="username-active"
          className="cursor-pointer text-base font-medium"
        >
          Username
        </Label>
        <Input
          id="username-active"
          type="text"
          placeholder="Enter your username"
          defaultValue="johndoe"
        />
        <p className="text-xs text-muted-foreground">
          Your public display name on the platform.
        </p>
      </div>
      <div className="group flex flex-col gap-2" data-disabled="true">
        <div className="flex items-center justify-between">
          <Label
            htmlFor="username-disabled"
            className="cursor-pointer text-base font-medium group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
          >
            Organization ID
          </Label>
          <Badge variant="secondary">Locked</Badge>
        </div>
        <Input
          id="username-disabled"
          type="text"
          defaultValue="ORG-84920-X"
          disabled
          className="peer"
        />
        <p className="text-xs text-muted-foreground">
          Contact your workspace administrator to modify this field.
        </p>
      </div>
    </div>
  )
}
