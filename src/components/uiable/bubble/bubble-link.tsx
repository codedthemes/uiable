"use client"

// shadcn
import { Bubble, BubbleContent, BubbleGroup } from "@/components/ui/bubble"

// third party
import { toast } from "sonner"

//  ------------------------------ | BUBBLE - LINK & BUTTONS | ------------------------------  //

export function BubbleLink() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8">
      <Bubble variant="muted">
        <BubbleContent>How can I help you today?</BubbleContent>
      </Bubble>
      <BubbleGroup>
        <Bubble variant="tinted" align="end">
          <BubbleContent
            render={
              <button
                onClick={() => toast.success("You clicked forgot password")}
              >
                I forgot my password
              </button>
            }
          />
        </Bubble>
        <Bubble variant="tinted" align="end">
          <BubbleContent
            render={
              <button
                onClick={() =>
                  toast.success("You clicked help with subscription")
                }
              >
                I need help with my subscription
              </button>
            }
          />
        </Bubble>
        <Bubble variant="tinted" align="end">
          <BubbleContent
            render={
              <button
                onClick={() =>
                  toast.success("You clicked something else. Talk to a human.")
                }
              >
                Something else. Talk to a human.
              </button>
            }
          />
        </Bubble>
      </BubbleGroup>
    </div>
  )
}
