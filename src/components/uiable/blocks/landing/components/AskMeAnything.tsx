// shadcn

// assets
import {
  CircleQuestionMark,
  GitPullRequestArrow,
  Plus,
  Sparkles,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

//  ------------------------------ | BLOCK - ASK ME ANYTHING | ------------------------------  //

export default function AskMeAnything() {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border bg-card px-4 py-4">
      <div className="flex flex-nowrap gap-2 xl:gap-1.5">
        <Badge
          variant="outline"
          className="cursor-pointer rounded-full px-3 py-1.5 text-xs leading-3 font-normal tracking-normal text-accent-foreground hover:bg-accent xl:px-2 xl:py-1"
        >
          Spend today?
        </Badge>

        <Badge
          variant="outline"
          className="cursor-pointer rounded-full px-3 py-1.5 text-xs leading-3 font-normal tracking-normal text-accent-foreground hover:bg-accent xl:px-2 xl:py-1"
        >
          Trending Topic
        </Badge>
        <Badge
          variant="outline"
          className="cursor-pointer rounded-full px-3 py-1.5 text-xs leading-3 font-normal tracking-normal text-accent-foreground hover:bg-accent xl:px-2 xl:py-1"
        >
          <Plus className="size-3.5" />
        </Badge>
      </div>

      <InputGroup className="h-11 gap-0 rounded-full border border-border bg-white px-0 transition-all focus-within:border-primary/40 focus-within:ring-2 focus-within:ring-primary/10 dark:bg-background">
        <InputGroupAddon
          align="inline-start"
          className="flex items-center py-0 pr-2 pl-4 text-muted-foreground/80"
        >
          <Sparkles className="size-4" />
        </InputGroupAddon>
        <InputGroupInput
          type="text"
          placeholder="Ask me anything .."
          className="h-full border-0 bg-transparent py-0 text-xs text-foreground outline-none placeholder:text-muted-foreground/60 focus-visible:ring-0 focus-visible:ring-offset-0 sm:text-sm"
        />
        <InputGroupAddon
          align="inline-end"
          className="flex items-center gap-3 py-0 pr-4 pl-2 text-muted-foreground/80"
        >
          <GitPullRequestArrow className="size-4 cursor-pointer transition-colors hover:text-foreground" />
          <CircleQuestionMark className="size-4 cursor-pointer transition-colors hover:text-foreground" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
