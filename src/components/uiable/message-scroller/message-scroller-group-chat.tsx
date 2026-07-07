"use client"

import { useState } from "react"

// third party
import { motion } from "framer-motion"

// shadcn
import { Bubble, BubbleContent } from "@/components/ui/bubble"
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
import { Marker, MarkerContent } from "@/components/ui/marker"
import { Message, MessageContent, MessageHeader } from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// assets
import { RotateCwIcon } from "lucide-react"

const currentUser = "Grace"

const initialItems = [
  {
    id: "group-1",
    type: "message",
    sender: "Grace",
    role: "participant",
    text: "@mary, the astrophage line keeps matching Venus energy output. Can you check my math?",
  },
  {
    id: "group-2",
    type: "message",
    sender: "Mary (Agent)",
    role: "assistant",
    text: "Yes. Confirmed. The curve points to a microorganism harvesting stellar energy and breeding near carbon dioxide. If @rocky agrees, this is the clue we need.",
  },
  {
    id: "group-3",
    type: "message",
    sender: "Grace",
    role: "participant",
    text: "ping @rocky",
    scrollAnchor: true,
  },
] satisfies GroupChatItem[]

const rockyMarker = {
  id: "group-4",
  type: "event",
  text: "Rocky has joined the chat",
  scrollAnchor: true,
} satisfies GroupChatItem

const rockyMessage = {
  id: "group-5",
  type: "message",
  sender: "Rocky",
  role: "participant",
  text: "Amaze. Astrophage eats light, makes heat, goes to carbon dioxide. Rocky has fuel model. Grace is smart.",
} satisfies GroupChatItem

type GroupChatItem =
  | {
      id: string
      type: "event"
      text: string
      scrollAnchor?: boolean
    }
  | {
      id: string
      type: "message"
      sender: string
      role: "assistant" | "participant"
      text: string
      scrollAnchor?: boolean
    }

function GroupChatMessage({
  item,
}: {
  item: Extract<GroupChatItem, { type: "message" }>
}) {
  const isCurrentUser = item.sender === currentUser
  const variant = isCurrentUser
    ? "muted"
    : item.role === "assistant"
      ? "ghost"
      : "tinted"

  return (
    <MessageScrollerItem messageId={item.id} scrollAnchor={item.scrollAnchor}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Message align={isCurrentUser ? "end" : "start"}>
          <MessageContent>
            {!isCurrentUser && <MessageHeader>{item.sender}</MessageHeader>}
            <Bubble variant={variant}>
              <BubbleContent className="p-3 text-sm leading-relaxed">
                {item.text}
              </BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
      </motion.div>
    </MessageScrollerItem>
  )
}

function GroupChatMarker({
  item,
  scrollAnchor = false,
}: {
  item: Extract<GroupChatItem, { type: "event" }>
  scrollAnchor?: boolean
}) {
  return (
    <MessageScrollerItem scrollAnchor={scrollAnchor}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Marker variant="separator">
          <MarkerContent>{item.text}</MarkerContent>
        </Marker>
      </motion.div>
    </MessageScrollerItem>
  )
}

//  ------------------------------ | MESSAGE SCROLLER - GROUP CHAT | ------------------------------  //

export function MessageScrollerGroupChat() {
  const [demoKey, setDemoKey] = useState(0)
  const [rockyTurn, setRockyTurn] = useState<"idle" | "marker" | "message">(
    "idle"
  )
  const items =
    rockyTurn === "message"
      ? [...initialItems, rockyMarker, rockyMessage]
      : rockyTurn === "marker"
        ? [...initialItems, rockyMarker]
        : initialItems
  const buttonLabel =
    rockyTurn === "idle" ? "Add Rocky" : "Send Message as Rocky"
  const isComplete = rockyTurn === "message"

  return (
    <div className="relative flex flex-col gap-4">
      <Card className="mx-auto mb-0 flex h-140 w-full max-w-sm flex-col gap-0">
        <CardHeader className="grid grid-cols-[1fr_auto] gap-x-4 border-b">
          <CardTitle>Group Chat</CardTitle>
          <CardDescription>
            A group chat with several participants and an assistant. The Marker
            is marked as a turn.
          </CardDescription>
          <CardAction>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    aria-label="Reset conversation"
                    disabled={rockyTurn === "idle"}
                    onClick={() => {
                      setRockyTurn("idle")
                      setDemoKey((key) => key + 1)
                    }}
                  >
                    <RotateCwIcon />
                  </Button>
                }
              />
              <TooltipContent>
                <p>Reset</p>
              </TooltipContent>
            </Tooltip>
          </CardAction>
        </CardHeader>
        <CardContent className="min-h-0 flex-1 overflow-hidden p-0 pt-3">
          <MessageScrollerProvider>
            <MessageScroller key={demoKey}>
              <MessageScrollerViewport className="px-4">
                <MessageScrollerContent className="p-(--card-spacing)">
                  {items.map((item) =>
                    item.type === "message" ? (
                      <GroupChatMessage key={item.id} item={item} />
                    ) : (
                      <GroupChatMarker
                        key={item.id}
                        item={item}
                        scrollAnchor={item.scrollAnchor}
                      />
                    )
                  )}
                </MessageScrollerContent>
              </MessageScrollerViewport>
              <MessageScrollerButton />
            </MessageScroller>
          </MessageScrollerProvider>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-2 border-t">
          <Button
            type="button"
            disabled={isComplete}
            onClick={() =>
              setRockyTurn((turn) => (turn === "idle" ? "marker" : "message"))
            }
            className="w-full"
            variant="secondary"
          >
            {buttonLabel}
          </Button>
          <p className="text-xs text-muted-foreground">
            {rockyTurn === "idle"
              ? "This will create a marker and make it the anchor"
              : "Now send Rocky's reply into the conversation"}
          </p>
        </CardFooter>
      </Card>
      <div className="mx-auto max-w-sm px-0.5 text-center text-xs text-balance text-muted-foreground">
        When a user joins, a marker is created. scrollAnchor on the marker marks
        it as the next turn
      </div>
    </div>
  )
}
