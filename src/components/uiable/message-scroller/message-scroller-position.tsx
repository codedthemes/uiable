"use client"

import { useState } from "react"

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
} from "@/components/ui/message-scroller"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

// project imports
import { MessageAnimated } from "@/components/message-animated"

type SavedThreadMessage = {
  id: string
  role: "assistant" | "user"
  text: string
  scrollAnchor?: boolean
}

const savedThreadMessages: SavedThreadMessage[] = [
  {
    id: "position-1",
    role: "assistant",
    text: "This is the first message the user sent in the conversation.",
  },
  {
    id: "position-2",
    role: "user",
    text: "Workspace creation rose 8%, but first invite completion only rose 2%.",
  },
  {
    id: "position-3",
    role: "assistant",
    text: "This is the last message the user sent in the conversation.",
  },
  {
    id: "position-4",
    role: "user",
    scrollAnchor: true,
    text: "Start with the invite step. Teams are creating workspaces but waiting to add collaborators. We should compare invite adoption across account size, check whether users who skip invites still return within 24 hours, and review the empty-state copy on the first project screen.",
  },
  {
    id: "position-5",
    role: "assistant",
    text: "If that pattern holds, the next experiment should make collaboration useful earlier instead of prompting for invites harder. Choosing last-anchor keeps the latest user prompt visible with the reply starting below it.",
  },
  {
    id: "position-6",
    role: "user",
    text: "Also check how layout changes behave when images load or markdown expands. The saved thread should still open in the right place and let me scroll through the transcript naturally.",
  },
]

const positions = [
  { value: "start", label: "start" },
  { value: "end", label: "end" },
  { value: "last-anchor", label: "last-anchor" },
] as const

type PositionValue = (typeof positions)[number]["value"]

//  ------------------------------ | MESSAGE SCROLLER - POSITION | ------------------------------  //

export function MessageScrollerPosition() {
  const [demoKey, setDemoKey] = useState(0)
  const [position, setPosition] = useState<PositionValue>("start")

  return (
    <MessageScrollerProvider
      key={demoKey}
      defaultScrollPosition={position}
      scrollMargin={24}
    >
      <div className="relative flex flex-col gap-4">
        <Card className="mx-auto mb-0 flex h-140 w-full max-w-sm flex-col gap-0 overflow-hidden">
          <CardHeader className="border-b">
            <CardTitle>Opening Position</CardTitle>
            <CardDescription>
              Choose where a saved transcript opens.
            </CardDescription>
          </CardHeader>
          <CardContent className="min-h-0 flex-1 overflow-hidden px-0 py-3">
            <MessageScroller className="h-full">
              <MessageScrollerViewport className="h-96 px-4">
                <MessageScrollerContent className="p-(--card-spacing)">
                  {savedThreadMessages.map((message) => (
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
          <CardFooter className="flex flex-col gap-2 px-3 py-3">
            <ToggleGroup
              value={[position]}
              onValueChange={(value) => {
                const nextValue = value[0]

                if (
                  nextValue === "start" ||
                  nextValue === "end" ||
                  nextValue === "last-anchor"
                ) {
                  setPosition(nextValue)
                  setDemoKey((key) => key + 1)
                }
              }}
              className="grid w-full grid-cols-3 gap-1 border bg-muted p-1"
            >
              {positions.map((option) => (
                <ToggleGroupItem
                  key={option.value}
                  value={option.value}
                  className="flex h-10 flex-1 items-center justify-center px-3 text-center text-xs font-medium data-[state=on]:bg-background"
                >
                  {option.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </CardFooter>
        </Card>
      </div>
    </MessageScrollerProvider>
  )
}
