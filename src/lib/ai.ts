import {
  ChatRequestOptions,
  ChatTransport,
  TextUIPart,
  UIDataTypes,
  UIMessage,
  UIMessageChunk,
  UITools,
} from "ai"

// Vercel AI SDK Configuration and utilities
export const AI_CONFIG = {
  model: "gemini-2.5-flash", // Default model
}

/**
 * Simulates a streaming AI chat response for offline/local testing
 * without requiring API keys, while adhering to the Vercel AI SDK data stream protocol.
 */
export function getMockStreamResponse(
  messages: UIChatMessage[]
): ReadableStream<UIMessageChunk> {
  const lastMessage = messages[messages.length - 1]
  const textPart = lastMessage?.parts.find(
    (part): part is TextUIPart => part.type === "text"
  )
  const promptText = textPart?.text ? String(textPart.text) : ""

  let responseText = "I'm a helpful AI assistant! How can I assist you today?"
  if (
    promptText.toLowerCase().includes("design a custom layout") ||
    promptText.toLowerCase().includes("help me design")
  ) {
    responseText =
      "I can help with that! A standard modern dashboard layout usually consists of a sticky header, a collapsable sidebar for navigation, and a main content grid. We can divide the main area into multiple cards containing metrics, charts, and activity feeds. How many columns are you aiming for?"
  } else if (
    promptText.toLowerCase().includes("3-column layout") ||
    promptText.toLowerCase().includes("3 columns")
  ) {
    responseText =
      "Excellent choice. That's a classic format: Sidebar (col 1, thin) for nav, Main Dashboard (col 2, wide) for primary widgets, and Details/Notifications (col 3, medium) on the right. Would you like me to generate the Tailwind CSS configuration and structural React elements for this?"
  } else if (
    promptText.toLowerCase().includes("yes") ||
    promptText.toLowerCase().includes("start")
  ) {
    responseText =
      "Here is a starter configuration. We'll use a responsive grid with CSS variables or Tailwind classes like grid-cols-12. The sidebar spans 2 cols, the main grid spans 7 cols, and the right panel spans 3 cols. Let me write out the component structures."
  }

  const words = responseText.split(" ")

  return new ReadableStream<UIMessageChunk>({
    async start(controller) {
      await new Promise((resolve) => setTimeout(resolve, 300))
      controller.enqueue({ type: "text-start", id: "assistant-response" })

      for (const word of words) {
        controller.enqueue({
          type: "text-delta",
          id: "assistant-response",
          delta: word + " ",
        })
        await new Promise((resolve) => setTimeout(resolve, 80))
      }

      controller.enqueue({ type: "text-end", id: "assistant-response" })
    },
  })
}

function makeId() {
  return Math.random().toString(36).slice(2, 9)
}

type UIChatMessage = UIMessage<unknown, UIDataTypes, UITools>

type ChatBuilder = {
  user(text: string): ChatBuilder
  assistant(text: string): ChatBuilder
  sleep(ms: number): ChatBuilder
  get(options: { count: number }): UIChatMessage[]
  next(options?: { after?: UIChatMessage[] }): UIChatMessage | null
  transport(options?: { chunkDelayMs?: number }): ChatTransport<UIChatMessage>
}

export function createChat(): ChatBuilder {
  const turns: UIChatMessage[] = []

  const api: ChatBuilder = {
    user(text: string) {
      turns.push({
        id: makeId(),
        role: "user",
        metadata: {},
        parts: [{ type: "text", text: String(text) }],
      })
      return api
    },
    assistant(text: string) {
      turns.push({
        id: makeId(),
        role: "assistant",
        metadata: {},
        parts: [{ type: "text", text: String(text) }],
      })
      return api
    },
    sleep(ms: number) {
      void ms
      return api
    },
    get({ count }: { count: number }) {
      return turns.slice(0, count)
    },
    next({ after }: { after?: UIChatMessage[] } = {}) {
      if (!after || after.length === 0) return turns[0] ?? null
      const last = after[after.length - 1]
      const idx = turns.findIndex((t) => t.id === last.id)
      return turns[idx + 1] ?? null
    },
    transport({ chunkDelayMs }: { chunkDelayMs?: number } = {}) {
      return {
        chunkDelayMs,
        sendMessages: async (
          options: {
            trigger: "submit-message" | "regenerate-message"
            chatId: string
            messageId: string | undefined
            messages: UIChatMessage[]
            abortSignal: AbortSignal | undefined
          } & ChatRequestOptions
        ) => {
          return getMockStreamResponse(options.messages)
        },
        reconnectToStream: async () => null,
      }
    },
  }

  return api
}

export function getMessageText(message: UIChatMessage | undefined | null) {
  if (!message) return ""

  const textPart = message.parts.find(
    (part): part is TextUIPart => part.type === "text"
  )
  return textPart?.text ?? ""
}
