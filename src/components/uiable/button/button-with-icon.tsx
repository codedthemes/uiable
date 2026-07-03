// shadcn
import { Button } from "@/components/ui/button";

// assets
import { IconGitBranch, IconGitFork } from "@tabler/icons-react";

//  ------------------------------ | BUTTON WITH ICON | ------------------------------  //

export default function ButtonWithIcon() {
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      <Button className="gap-1">
        <IconGitBranch /> New Branch
      </Button>
      <Button className="gap-1" variant="secondary">
        Fork
        <IconGitFork />
      </Button>
    </div>
  );
}
