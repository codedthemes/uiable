// shadcn
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/components/ui/bubble"

//  ------------------------------ | BUBBLE - GROUP | ------------------------------  //

export default function BubbleGroups() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8">
      <Bubble variant="muted">
        <BubbleContent>Can you tell me what&apos;s the issue?</BubbleContent>
      </Bubble>
      <BubbleGroup>
        <Bubble align="end">
          <BubbleContent className="dark:text-white">
            You tell me!
          </BubbleContent>
        </Bubble>
        <Bubble align="end">
          <BubbleContent className="dark:text-white">
            It worked yesterday. You broke it!
          </BubbleContent>
        </Bubble>
        <Bubble align="end">
          <BubbleContent className="dark:text-white">
            Find the bug and fix it.
          </BubbleContent>
          <BubbleReactions aria-label="Reactions: eyes" align="start">
            <span>👀</span>
          </BubbleReactions>
        </Bubble>
      </BubbleGroup>
      <Bubble variant="muted">
        <BubbleContent>
          Want me to diff yesterday&apos;s you against today&apos;s you?
          It&apos;s a bit embarrassing.
        </BubbleContent>
      </Bubble>
    </div>
  )
}
