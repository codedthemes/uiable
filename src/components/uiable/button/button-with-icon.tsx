// shadcn

// assets
import { IconGitBranch, IconGitFork } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"

//  ------------------------------ | BUTTON WITH ICON | ------------------------------  //

export default function ButtonWithIcon() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Button className="gap-1">
        <IconGitBranch /> New Branch
      </Button>
      <Button className="gap-1" variant="secondary">
        Fork
        <IconGitFork />
      </Button>
    </div>
  )
}
