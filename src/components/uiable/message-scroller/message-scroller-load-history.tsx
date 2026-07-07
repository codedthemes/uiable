"use client"

import { useCallback, useState } from "react"
// assets
import { RotateCwIcon } from "lucide-react"

// third party
import { toast } from "sonner"

// shadcn
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
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
} from "@/components/ui/message-scroller"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
// projects
import { MessageAnimated } from "@/components/message-animated"

type ChatMessage = {
  id: string
  role: "assistant" | "user"
  text: string
}

const initialMessages: ChatMessage[] = [
  {
    id: "load-history-4",
    role: "assistant",
    text: "Only the export queue worker changed. The deploy moved large CSV jobs onto the shared retry policy, which made each failed attempt hold a worker slot longer than before.",
  },
  {
    id: "load-history-5",
    role: "user",
    text: "Do we need to roll back?",
  },
  {
    id: "load-history-6",
    role: "assistant",
    text: "Not yet. Queue depth is recovering after we reduced retry concurrency, and the oldest pending job is now under five minutes old.",
  },
]

const earlierMessages: ChatMessage[] = [
  {
    id: "load-history-1",
    role: "assistant",
    text: "The app deploy did not include checkout, pricing, or billing API changes.",
  },
  {
    id: "load-history-2",
    role: "assistant",
    text: "Do we need to roll back? This is a support thread with several failed export jobs, but the internal queue recovery looks stable.",
  },
  {
    id: "load-history-3",
    role: "assistant",
    text: "Keep rollback ready if the queue starts climbing again, but the current trend points toward recovery.",
  },
]

//  ------------------------------ | MESSAGE SCROLLER - LOAD HISTORY | ------------------------------  //

export function MessageScrollerLoadHistory() {
  const [messages, setMessages] = useState(initialMessages)
  const [historyLoaded, setHistoryLoaded] = useState(false)

  const loadEarlierMessages = useCallback(() => {
    if (historyLoaded) {
      return
    }

    setMessages((current) => [...earlierMessages, ...current])
    setHistoryLoaded(true)
    toast.success("History loaded", {
      description: "Scroll up to see earlier messages.",
    })
  }, [historyLoaded])

  const resetDemo = useCallback(() => {
    setMessages(initialMessages)
    setHistoryLoaded(false)
  }, [])

  return (
    <MessageScrollerProvider defaultScrollPosition="end" scrollMargin={24}>
      <div className="relative flex flex-col gap-4">
        <Card className="mx-auto mb-0 flex h-140 w-full max-w-sm flex-col gap-0 overflow-hidden">
          <CardHeader className="grid grid-cols-[1fr_auto] gap-x-4 border-b">
            <div className="flex flex-col gap-1">
              <CardTitle>Load History</CardTitle>
              <CardDescription>
                Prepended messages keep your place.
              </CardDescription>
            </div>
            <CardAction>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      aria-label="Reset load history demo"
                      onClick={resetDemo}
                    >
                      <RotateCwIcon />
                    </Button>
                  }
                />
                <TooltipContent>Reset</TooltipContent>
              </Tooltip>
            </CardAction>
          </CardHeader>
          <CardContent className="min-h-0 flex-1 overflow-hidden p-0 pt-3">
            <MessageScroller>
              <MessageScrollerViewport className="px-4">
                <MessageScrollerContent className="p-(--card-spacing)">
                  {messages.map((message) => (
                    <MessageAnimated
                      key={message.id}
                      message={message}
                      showAvatar={false}
                    />
                  ))}
                </MessageScrollerContent>
              </MessageScrollerViewport>
              <MessageScrollerButton />
            </MessageScroller>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 border-t px-3 py-3">
            <Button
              type="button"
              disabled={historyLoaded}
              onClick={loadEarlierMessages}
              className="w-full"
            >
              {historyLoaded ? "History Loaded" : "Load History"}
            </Button>
            <p className="text-xs text-muted-foreground">
              Restore earlier messages while keeping your place.
            </p>
          </CardFooter>
        </Card>
      </div>
    </MessageScrollerProvider>
  )
}
