import { useState } from "react"
// assets
import {
  Bot,
  CheckCheck,
  Code2,
  Copy,
  Lightbulb,
  Send,
  Sparkles,
  User,
} from "lucide-react"

// shadcn
import { Avatar, AvatarBadge, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface ChatMessage {
  id: string
  sender: "user" | "assistant"
  text: string
  time: string
  codeSnippet?: string
  suggestions?: string[]
}

const initialMessages: ChatMessage[] = [
  {
    id: "msg-1",
    sender: "user",
    text: "Can you help me build a custom cross-browser Scroll Area component that feels native on macOS and Windows?",
    time: "10:14 AM",
  },
  {
    id: "msg-2",
    sender: "assistant",
    text: "Absolutely! Native browser scrollbars often break visual consistency across different OS environments. Using our anatomical ScrollArea primitive ensures clean overlay scrollbars while preserving full keyboard and screen-reader accessibility.",
    time: "10:14 AM",
    codeSnippet: `<ScrollArea className="h-72 w-full rounded-md border">
  <div className="p-4">
    {/* Your long or wide content here */}
  </div>
  <ScrollBar orientation="vertical" />
</ScrollArea>`,
  },
  {
    id: "msg-3",
    sender: "user",
    text: "That looks super clean! How does it handle wide overflowing data grids or image carousels where we also need horizontal scrolling?",
    time: "10:16 AM",
  },
  {
    id: "msg-4",
    sender: "assistant",
    text: "You can seamlessly enable horizontal scrolling simply by adding a `<ScrollBar orientation='horizontal' />` component inside the root. You can even include both orientations simultaneously for large 2D tables or code viewers!",
    time: "10:16 AM",
    suggestions: [
      "Show horizontal scroll demo",
      "Explain Base UI accessibility",
      "Add custom thumb styling",
    ],
  },
]

//  ------------------------------ | SCROLL AREA - CHAT SCROLLER | ------------------------------  //

export default function ScrollAreaChatScroller() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [inputVal, setInputVal] = useState("")
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleSend = () => {
    if (!inputVal.trim()) return
    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: "user",
      text: inputVal.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    }
    setMessages((prev) => [...prev, newMsg])
    setInputVal("")
  }

  const handleCopyCode = (id: string, code?: string) => {
    if (!code) return
    navigator.clipboard.writeText(code)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleSuggestionClick = (text: string) => {
    setInputVal(text)
  }

  return (
    <Card className="w-full max-w-[650px] overflow-hidden border border-border/60 bg-card/60 backdrop-blur-md">
      {/* Chat Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/40 bg-card/80 px-3.5 py-3 sm:gap-3 sm:px-5 sm:py-3.5">
        <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <Avatar className="size-8 shrink-0 shadow-inner after:border-none sm:size-9">
            <AvatarFallback className="bg-primary/10 text-primary">
              <Bot className="size-4 sm:size-5" />
            </AvatarFallback>
            <AvatarBadge className="bg-green-500" />
          </Avatar>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <h4 className="truncate text-xs font-semibold tracking-tight text-foreground sm:text-sm">
                Antigravity AI Assistant
              </h4>
              <Badge
                variant="outline"
                className="hidden h-4 shrink-0 px-1.5 text-[10px] text-primary sm:inline-flex"
              >
                v3.1 Pro
              </Badge>
            </div>
            <p className="truncate text-xs text-muted-foreground">
              Dynamic multi-height conversational scroller
            </p>
          </div>
        </div>
        <Badge
          variant="secondary"
          className="max-w-[130px] shrink-0 gap-1 truncate px-2 py-1 text-[10px] font-normal sm:max-w-none sm:gap-1.5 sm:px-2.5 sm:text-[11px]"
        >
          <Sparkles className="size-3 shrink-0 text-yellow-500" />
          <span className="hidden truncate sm:inline">Active Session</span>
          <span className="truncate sm:hidden">Active</span>
        </Badge>
      </div>

      {/* Scrollable Conversation viewport */}
      <ScrollArea className="h-[380px] w-full px-3 py-4 sm:px-5">
        <div className="flex flex-col gap-4 pb-2">
          {messages.map((msg) => {
            const isUser = msg.sender === "user"

            return (
              <div
                key={msg.id}
                className={`flex gap-2.5 sm:gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}
              >
                {/* Avatar */}
                <Avatar className="size-7 shrink-0 shadow-sm sm:size-8">
                  <AvatarFallback
                    className={
                      isUser
                        ? "bg-primary text-white"
                        : "border border-border/60 bg-muted text-foreground"
                    }
                  >
                    {isUser ? (
                      <User className="size-3.5 sm:size-4" />
                    ) : (
                      <Bot className="size-3.5 sm:size-4" />
                    )}
                  </AvatarFallback>
                </Avatar>

                {/* Message Bubble */}
                <div
                  className={`flex max-w-[88%] min-w-0 flex-col gap-1.5 rounded-lg px-3 py-2.5 text-xs leading-relaxed shadow-xs sm:max-w-[82%] sm:px-4 sm:py-3 ${
                    isUser
                      ? "rounded-tr-xs bg-primary text-white"
                      : "rounded-tl-xs border border-border/60 bg-card text-foreground"
                  }`}
                >
                  <p className="break-words">{msg.text}</p>

                  {/* Optional Code Snippet */}
                  {msg.codeSnippet && (
                    <div className="mt-1.5 w-full max-w-full min-w-0 overflow-hidden rounded-lg border border-slate-800 bg-slate-950 font-mono text-[11px] text-slate-100 shadow-md dark:border-slate-800">
                      <div className="flex items-center justify-between gap-2 border-b border-slate-800 bg-slate-900/60 px-2.5 py-1.5 sm:px-3">
                        <div className="flex min-w-0 items-center gap-1.5 text-slate-400">
                          <Code2 className="size-3.5 shrink-0 text-primary" />
                          <span className="truncate">scroll-area-demo.tsx</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            handleCopyCode(msg.id, msg.codeSnippet)
                          }
                          className="h-6 shrink-0 gap-1 px-2 text-[10px] text-slate-300 hover:bg-slate-800 hover:text-white"
                        >
                          <Copy className="size-3 shrink-0" />
                          <span>
                            {copiedId === msg.id ? "Copied!" : "Copy"}
                          </span>
                        </Button>
                      </div>
                      <pre className="max-w-full overflow-x-auto p-2.5 leading-normal text-emerald-400 sm:p-3">
                        {msg.codeSnippet}
                      </pre>
                    </div>
                  )}

                  {/* Quick Suggestion Chips */}
                  {msg.suggestions && (
                    <div className="mt-2 flex flex-wrap gap-1.5 pt-1">
                      {msg.suggestions.map((chip, idx) => (
                        <Button
                          key={idx}
                          size="sm"
                          variant="outline"
                          onClick={() => handleSuggestionClick(chip)}
                          className="h-auto max-w-full gap-1 rounded-lg border-primary/30 bg-primary/5 px-2.5 py-1 text-left text-[11px] leading-tight font-medium break-words whitespace-normal text-primary hover:bg-primary/15 hover:text-primary dark:border-primary/30"
                        >
                          <Lightbulb className="size-3 shrink-0" />
                          <span className="min-w-0 break-words">{chip}</span>
                        </Button>
                      ))}
                    </div>
                  )}

                  {/* Timestamp & Read Receipt */}
                  <div
                    className={`flex items-center gap-1 pt-0.5 text-[10px] ${
                      isUser
                        ? "justify-end text-white"
                        : "text-muted-foreground"
                    }`}
                  >
                    <span>{msg.time}</span>
                    {isUser && (
                      <CheckCheck className="size-3 shrink-0 text-current" />
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </ScrollArea>

      {/* Footer Input */}
      <div className="border-t border-border/40 bg-card/80 p-3 sm:p-3.5">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSend()
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Ask AI Assistant about custom scrollbar styling..."
            className="min-w-0 flex-1 rounded-lg border border-border/60 bg-muted/30 px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
          />
          <Button
            type="submit"
            size="sm"
            disabled={!inputVal.trim()}
            className="h-8 shrink-0 gap-1 px-2.5 text-xs sm:px-3"
          >
            <Send className="size-3.5 shrink-0" />
            <span>Send</span>
          </Button>
        </form>
      </div>
    </Card>
  )
}
