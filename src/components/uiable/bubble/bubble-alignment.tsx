// shadcn
import { Bubble, BubbleContent } from "@/components/ui/bubble"

//  ------------------------------ | BUBBLE - ALIGNMENT | ------------------------------  //

export default function BubbleAlignment() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8">
      <Bubble variant="muted">
        <BubbleContent>
          This bubble is aligned to the start. This is the default alignment.
        </BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent className="dark:text-white">
          This bubble is aligned to the end. Use this for user messages.
        </BubbleContent>
      </Bubble>
    </div>
  )
}
