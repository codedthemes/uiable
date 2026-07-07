"use client"

import { useMemo } from "react"

// shadcn
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScrollerScrollable,
} from "@/components/ui/message-scroller"

// project imports
import { MessageAnimated } from "@/components/message-animated"

type ReadingStateMessage = {
  id: string
  role: "assistant" | "user"
  text: string
  scrollAnchor?: boolean
}

const readingStateMessages: ReadingStateMessage[] = [
  {
    id: "reading-1",
    role: "assistant",
    text: "Start at the top to see how the footer updates as you scroll through the transcript.",
  },
  {
    id: "reading-2",
    role: "user",
    scrollAnchor: true,
    text: "Can you explain how the reading state changes when I move through the conversation?",
  },
  {
    id: "reading-3",
    role: "assistant",
    text: "The footer updates based on whether you are at the top, in the middle, or the end of the transcript.",
  },
  {
    id: "reading-4",
    role: "user",
    scrollAnchor: true,
    text: "I want to keep reading without the scroller jumping me back to the end.",
  },
  {
    id: "reading-5",
    role: "assistant",
    text: "That is exactly what the reading state is for: preserve your place until you choose to move again.",
  },
  {
    id: "reading-6",
    role: "user",
    scrollAnchor: true,
    text: "Now scroll down to the end and see the footer update again.",
  },
]

function ReadingStateFooter() {
  const { start, end } = useMessageScrollerScrollable()

  const footerMessage = useMemo(() => {
    if (!start) {
      return "You are at the top. You can only scroll down."
    }

    if (!end) {
      return "You are at the bottom. You can only scroll up."
    }

    return "You can scroll both ways."
  }, [start, end])

  return (
    <div className="text-center text-sm text-muted-foreground">
      {footerMessage}
    </div>
  )
}

function ReadingStateContent() {
  return (
    <div className="relative flex flex-col gap-4">
      <Card className="mx-auto mb-0 flex h-140 w-full max-w-sm flex-col gap-0 overflow-hidden">
        <CardHeader className="border-b">
          <CardTitle>Scroll Status</CardTitle>
          <CardDescription>
            Where the reader can go scroll to based on current scroll position.
          </CardDescription>
        </CardHeader>

        <CardContent className="min-h-0 flex-1 overflow-hidden p-0 pt-3">
          <MessageScroller>
            <MessageScrollerViewport className="px-4">
              <MessageScrollerContent className="p-(--card-spacing)">
                {readingStateMessages.map((message) => (
                  <MessageAnimated
                    key={message.id}
                    message={message}
                    scrollAnchor={message.scrollAnchor ?? false}
                    showAvatar={false}
                  />
                ))}
              </MessageScrollerContent>
            </MessageScrollerViewport>
            <MessageScrollerButton />
          </MessageScroller>
        </CardContent>

        <CardFooter className="px-3 py-3">
          <ReadingStateFooter />
        </CardFooter>
      </Card>
      <p className="px-0.5 text-center text-xs text-muted-foreground">
        Scroll the transcript to see the footer update.
      </p>
    </div>
  )
}

//  ------------------------------ | MESSAGE SCROLLER - READING STATE | ------------------------------  //

export function MessageScrollerReadingState() {
  return (
    <MessageScrollerProvider defaultScrollPosition="start" scrollMargin={24}>
      <ReadingStateContent />
    </MessageScrollerProvider>
  )
}
