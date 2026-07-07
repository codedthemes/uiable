"use client"

import { useMemo } from "react"

// shadcn
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScroller,
  useMessageScrollerVisibility,
} from "@/components/ui/message-scroller"

// project imports
import { MessageAnimated } from "@/components/message-animated"

type TranscriptMessage = {
  id: string
  role: "assistant" | "user"
  text: string
  scrollAnchor?: boolean
}

const transcriptMessages: TranscriptMessage[] = [
  {
    id: "reader-1",
    role: "assistant",
    text: "Review the incident handoff and tell me what to read first.",
  },
  {
    id: "reader-2",
    role: "user",
    scrollAnchor: true,
    text: "Start with the summary and the impact section. The regression affected the upload queue, but the recovery path completed for every queued job.",
  },
  {
    id: "reader-3",
    role: "assistant",
    scrollAnchor: true,
    text: "The impact was limited to delayed processing and a short wave of customer confusion. No records were dropped.",
  },
  {
    id: "reader-4",
    role: "user",
    scrollAnchor: true,
    text: "What actions are open? Keep the retry window enabled until the next deploy, then add a queue-depth alert as the long-term fix.",
  },
  {
    id: "reader-5",
    role: "assistant",
    scrollAnchor: true,
    text: "The alert should fire on sustained queue growth, not a single short spike. I would also add a short owner note beside each follow-up item.",
  },
  {
    id: "reader-6",
    role: "user",
    text: "Give me the follow-up checklist. After that, compare the queue recovery graph with the deploy timeline so the handoff shows exactly when processing returned to baseline.",
  },
]

const anchorLabels = {
  "reader-2": "Summary",
  "reader-3": "Impact",
  "reader-4": "Open actions",
  "reader-5": "Alert note",
} as const

function ReaderPosition() {
  const { currentAnchorId } = useMessageScrollerVisibility()
  const { scrollToMessage } = useMessageScroller()

  const anchors = useMemo(
    () =>
      transcriptMessages.filter(
        (message) =>
          message.scrollAnchor &&
          Object.prototype.hasOwnProperty.call(anchorLabels, message.id)
      ),
    []
  )

  return (
    <div className="relative flex flex-col gap-4">
      <Card className="mx-auto mb-0 flex h-140 w-full max-w-sm flex-col gap-0 overflow-hidden">
        <CardHeader className="border-b">
          <CardTitle>Transcript Outline</CardTitle>
          <CardDescription>Track the current anchored turn.</CardDescription>
        </CardHeader>

        <CardContent className="min-h-0 flex-1 overflow-hidden px-0 py-3">
          <MessageScroller>
            <MessageScrollerViewport className="px-4">
              <MessageScrollerContent className="p-(--card-spacing)">
                {transcriptMessages.map((message) => (
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

            <div className="absolute end-2 top-1/2 -translate-y-1/2 md:block">
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      aria-label="Open transcript outline"
                      className="h-9 w-9 p-0"
                    >
                      <span className="sr-only">Open outline</span>
                      <div className="flex flex-col gap-1">
                        <span className="block h-0.5 w-4 bg-muted-foreground" />
                        <span className="block h-0.5 w-4 bg-muted-foreground" />
                        <span className="block h-0.5 w-4 bg-muted-foreground" />
                      </div>
                    </Button>
                  }
                />

                <DropdownMenuContent
                  side="left"
                  align="center"
                  className="w-48 border bg-background p-1 shadow-md"
                >
                  <div className="flex flex-col">
                    {anchors.map((anchor) => {
                      const isActive = anchor.id === currentAnchorId

                      return (
                        <DropdownMenuItem
                          key={anchor.id}
                          onClick={() =>
                            scrollToMessage(anchor.id, { behavior: "smooth" })
                          }
                          className={`flex flex-col items-start gap-1 px-3 py-2 hover:bg-muted/60 ${
                            isActive ? "bg-muted/60 font-semibold" : ""
                          }`}
                        >
                          <div className="text-sm">
                            {
                              anchorLabels[
                                anchor.id as keyof typeof anchorLabels
                              ]
                            }
                          </div>
                        </DropdownMenuItem>
                      )
                    })}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </MessageScroller>
        </CardContent>
      </Card>
      <p className="px-0.5 text-center text-xs text-muted-foreground">
        Open the outline to jump between anchored turns as you read.
      </p>
    </div>
  )
}

//  ------------------------------ | MESSAGE SCROLLER - READER POSITION | ------------------------------  //

export function MessageScrollerReaderPosition() {
  return (
    <MessageScrollerProvider scrollMargin={24}>
      <ReaderPosition />
    </MessageScrollerProvider>
  )
}
