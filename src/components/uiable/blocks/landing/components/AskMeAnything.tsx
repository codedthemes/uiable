// shadcn
import { Badge } from "@/components/ui/badge"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"

// assets
import {
  CircleQuestionMark,
  GitPullRequestArrow,
  Plus,
  Sparkles,
} from "lucide-react"

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
          aria-label="Add custom topic"
          className="cursor-pointer rounded-full px-3 py-1.5 text-xs leading-3 font-normal tracking-normal text-accent-foreground hover:bg-accent xl:px-2 xl:py-1"
        >
          <Plus aria-hidden="true" className="size-3.5" />
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
          className="gap-3 py-0 pr-4 pl-2 text-muted-foreground/80"
        >
          <InputGroupButton
            aria-label="Compare answers"
            size="icon-xs"
            className="hover:text-foreground"
          >
            <GitPullRequestArrow className="size-4" />
          </InputGroupButton>
          <InputGroupButton
            aria-label="Get help"
            size="icon-xs"
            className="hover:text-foreground"
          >
            <CircleQuestionMark className="size-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
