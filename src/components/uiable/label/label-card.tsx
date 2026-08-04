// shadcn
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

//  ------------------------------ | LABEL - CARD | ------------------------------  //

export default function LabelCard() {
  return (
    <Label
      htmlFor="security-alerts"
      className="p-sm-6 flex cursor-pointer items-start justify-between gap-4 rounded-lg border border-border p-5 transition-colors hover:bg-accent/40"
    >
      <div className="flex flex-col gap-1.5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-base leading-none font-semibold">
            Two-Factor Authentication
          </span>
          <Badge variant="default">Recommended</Badge>
        </div>
        <p className="text-sm leading-normal font-normal text-muted-foreground">
          Require an authentication code via SMS or authenticator app whenever
          you sign in to your account.
        </p>
      </div>
      <Switch id="security-alerts" defaultChecked className="mt-1 shrink-0" />
    </Label>
  )
}
