"use client"

import { memo, useMemo, useState } from "react"

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
import { Message, MessageContent } from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// assets
import { ArrowUpIcon, RotateCwIcon } from "lucide-react"

const animationPresets = {
  fade: {
    label: "Fade",
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.2, ease: "easeOut" as const },
  },
  "slide-up": {
    label: "Slide Up",
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.24, ease: "easeOut" as const },
  },
  "slide-side": {
    label: "Slide Side",
    initial: { opacity: 0, x: 16 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.24, ease: "easeOut" as const },
  },
  pop: {
    label: "Pop",
    initial: { opacity: 0, scale: 0.96, y: 8 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.22, ease: "easeOut" as const },
  },
  "spring-bounce": {
    label: "Spring Bounce",
    initial: { opacity: 0, y: 16, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { type: "spring", stiffness: 450, damping: 30, mass: 0.55 },
  },
  "blur-fade": {
    label: "Blur Fade",
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    transition: { duration: 0.26, ease: "easeOut" as const },
  },
  "scale-fade": {
    label: "Scale Fade",
    initial: { opacity: 0, scale: 0.96 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.22, ease: "easeOut" as const },
  },
} as const

type AnimationPreset = keyof typeof animationPresets

type AnimationPresetConfig = (typeof animationPresets)[AnimationPreset]
const animationPresetEntries = Object.entries(animationPresets) as [
  AnimationPreset,
  AnimationPresetConfig,
][]

type DemoMessage = {
  id: string
  role: "assistant" | "user"
  text: string
  preset: AnimationPreset
}

const initialMessages: DemoMessage[] = [
  {
    id: "animating-1",
    role: "assistant",
    text: "New messages animate into the transcript while the scroller keeps the live edge in view.",
    preset: "fade",
  },
  {
    id: "animating-2",
    role: "user",
    text: "I want to see animating message options in the scroller demo.",
    preset: "spring-bounce",
  },
]

const defaultMessageText: Record<AnimationPreset, string> = {
  fade: "This preset fades the new row into the transcript more gently.",
  "slide-up":
    "This preset slides the new message up from below while fading in.",
  "slide-side": "This preset slides the new message in from the side.",
  pop: "This preset makes the incoming row feel bouncy and lively.",
  "spring-bounce": "This preset uses a spring bounce for a tactile entrance.",
  "blur-fade": "This preset fades the message in while clearing a blur effect.",
  "scale-fade": "This preset scales the message in while fading it.",
}

const AnimatedMessage = memo(function AnimatedMessage({
  message,
  anchor,
}: {
  message: DemoMessage
  anchor: boolean
}) {
  const preset = animationPresets[message.preset]
  const isUser = message.role === "user"

  return (
    <MessageScrollerItem messageId={message.id} scrollAnchor={anchor}>
      <motion.div
        initial={preset.initial}
        animate={preset.animate}
        transition={preset.transition}
      >
        <Message align={isUser ? "end" : "start"}>
          <MessageContent>
            <Bubble variant={isUser ? "default" : "muted"}>
              <BubbleContent className="p-3 text-sm leading-relaxed dark:text-white">
                {message.text}
              </BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
      </motion.div>
    </MessageScrollerItem>
  )
})

//  ------------------------------ | MESSAGE SCROLLER - ANIMATING | ------------------------------  //

export function MessageScrollerAnimating() {
  const [messages, setMessages] = useState<DemoMessage[]>(initialMessages)
  const [preset, setPreset] = useState<AnimationPreset>("fade")
  const [draft, setDraft] = useState("")

  const nextRole: DemoMessage["role"] =
    messages[messages.length - 1]?.role === "user" ? "assistant" : "user"

  const messageRows = useMemo(
    () =>
      messages.map((message) => (
        <AnimatedMessage
          key={message.id}
          message={message}
          anchor={message.role === "user"}
        />
      )),
    [messages]
  )

  const handleSend = () => {
    const text = draft.trim() || defaultMessageText[preset]
    const nextMessage: DemoMessage = {
      id: `${nextRole}-${Date.now()}`,
      role: nextRole,
      text,
      preset,
    }

    setMessages((current) => [...current, nextMessage])
    setDraft("")
  }

  const resetDemo = () => {
    setMessages(initialMessages)
    setDraft("")
  }

  return (
    <div className="relative flex flex-col gap-4">
      <Card className="mx-auto mb-0 flex h-[38rem] w-full max-w-sm flex-col gap-0 overflow-hidden">
        <CardHeader className="grid grid-cols-[1fr_auto] gap-x-4 border-b">
          <div>
            <CardTitle>Animation</CardTitle>
            <CardDescription>
              Choose how user messages are animated when they are added to the
              conversation.
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
                    aria-label="Reset animating demo"
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

        <CardContent className="min-h-0 flex-1 overflow-hidden px-0 py-3">
          <MessageScrollerProvider autoScroll scrollMargin={24}>
            <MessageScroller>
              <MessageScrollerViewport className="px-4">
                <MessageScrollerContent className="p-(--card-spacing)">
                  {messageRows}
                </MessageScrollerContent>
              </MessageScrollerViewport>
              <MessageScrollerButton />
            </MessageScroller>
          </MessageScrollerProvider>
        </CardContent>

        <CardFooter className="flex flex-row items-center justify-between gap-3 border-t px-3 py-3">
          <Select
            value={preset}
            onValueChange={(value) => setPreset(value as AnimationPreset)}
          >
            <SelectTrigger size="sm" className="min-w-[11rem]">
              <SelectValue placeholder="Animation" />
            </SelectTrigger>
            <SelectContent className="min-w-[11rem]">
              <SelectGroup>
                {animationPresetEntries.map(([key, presetConfig]) => (
                  <SelectItem key={key} value={key}>
                    {presetConfig.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button type="button" onClick={handleSend} size="icon">
            <ArrowUpIcon />
            <span className="sr-only">Send message</span>
          </Button>
        </CardFooter>
      </Card>
      <p className="mx-auto max-w-xs px-0.5 text-center text-xs text-muted-foreground">
        Select an animation then click send to see it in action.
      </p>
    </div>
  )
}
