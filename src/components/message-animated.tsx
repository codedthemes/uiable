"use client"

// shadcn
// third party
import { motion } from "framer-motion"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Message, MessageAvatar, MessageContent } from "@/components/ui/message"
import { MessageScrollerItem } from "@/components/ui/message-scroller"

type ChatMessage = {
  id: string
  role: "user" | "assistant" | "system"
  text?: string
  content?: string
  parts?: any[]
}

interface MessageAnimatedProps {
  message: ChatMessage
  scrollAnchor?: boolean
  userVariant?:
    | "default"
    | "secondary"
    | "muted"
    | "tinted"
    | "outline"
    | "ghost"
    | "destructive"
  assistantVariant?:
    | "default"
    | "secondary"
    | "muted"
    | "tinted"
    | "outline"
    | "ghost"
    | "destructive"
  showAvatar?: boolean
}

//  ------------------------------ | MESSAGE SCROLLER - ANIMATED | ------------------------------  //

export function MessageAnimated({
  message,
  scrollAnchor = false,
  userVariant = "default",
  assistantVariant = "muted",
  showAvatar = true,
}: MessageAnimatedProps) {
  const isUser = message.role === "user"
  const variant = isUser ? userVariant : assistantVariant

  return (
    <MessageScrollerItem messageId={message.id} scrollAnchor={scrollAnchor}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Message align={isUser ? "end" : "start"}>
          {showAvatar && (
            <MessageAvatar>
              <Avatar className="size-8">
                <AvatarImage
                  src={
                    isUser
                      ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&auto=format&q=60"
                      : "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&fit=crop&auto=format&q=60"
                  }
                  alt={message.role}
                />
                <AvatarFallback className="text-xs">
                  {isUser ? "US" : "AI"}
                </AvatarFallback>
              </Avatar>
            </MessageAvatar>
          )}
          <MessageContent>
            <Bubble variant={variant}>
              <BubbleContent className="p-3 text-sm leading-relaxed dark:text-white">
                {message.text}
              </BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
      </motion.div>
    </MessageScrollerItem>
  )
}
