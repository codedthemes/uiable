// shadcn
import { Badge } from "@/components/ui/badge";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput
} from "@/components/ui/input-group";

// assets
import {
  Plus,
  Sparkles,
  GitPullRequestArrow,
  CircleQuestionMark
} from "lucide-react";

//  ------------------------------ | BLOCK - ASK ME ANYTHING | ------------------------------  //

export default function AskMeAnything() {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border bg-card px-4 py-4">
      <div className="flex flex-nowrap gap-2 xl:gap-1.5">
        <Badge
          variant="outline"
          className="cursor-pointer rounded-full px-3 py-1.5 text-xs xl:px-2 xl:py-1 font-normal leading-3 tracking-normal text-accent-foreground hover:bg-accent"
        >
          Spend today?
        </Badge>

        <Badge
          variant="outline"
          className="cursor-pointer rounded-full px-3 py-1.5 text-xs xl:px-2 xl:py-1 font-normal leading-3 tracking-normal text-accent-foreground hover:bg-accent"
        >
          Trending Topic
        </Badge>
        <Badge
          variant="outline"
          className="cursor-pointer rounded-full px-3 py-1.5 text-xs xl:px-2 xl:py-1 font-normal leading-3 tracking-normal text-accent-foreground hover:bg-accent"
        >
          <Plus className="size-3.5" />
        </Badge>
      </div>

      <InputGroup className="rounded-full bg-white dark:bg-background border border-border transition-all focus-within:border-primary/40 focus-within:ring-2 focus-within:ring-primary/10 h-11 px-0 gap-0">
        <InputGroupAddon
          align="inline-start"
          className="pl-4 pr-2 py-0 text-muted-foreground/80 flex items-center"
        >
          <Sparkles className="size-4" />
        </InputGroupAddon>
        <InputGroupInput
          type="text"
          placeholder="Ask me anything .."
          className="text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 h-full py-0 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none"
        />
        <InputGroupAddon
          align="inline-end"
          className="pl-2 pr-4 py-0 flex items-center gap-3 text-muted-foreground/80"
        >
          <GitPullRequestArrow className="size-4 cursor-pointer hover:text-foreground transition-colors" />
          <CircleQuestionMark className="size-4 cursor-pointer hover:text-foreground transition-colors" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
