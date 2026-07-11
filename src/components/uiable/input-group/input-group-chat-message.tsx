"use client"

import { useState } from "react"
// assets
import { PaperclipIcon, SendIcon, SmileIcon } from "lucide-react"

// shadcn
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

//  ------------------------------ | INPUT GROUP - CHAT MESSAGE | ------------------------------  //

export default function InputGroupChatMessage() {
  const [value, setValue] = useState("")
  const maxLength = 2000

  return (
    <div className="grid w-full max-w-md gap-4">
      <InputGroup>
        <InputGroupTextarea
          id="chat-message-input"
          placeholder="Type a message..."
          className="min-h-[80px]"
          value={value}
          onChange={(e) => setValue(e.target.value.slice(0, maxLength))}
        />
        <InputGroupAddon align="block-end" className="border-t border-border">
          <InputGroupButton aria-label="Attach file" variant="ghost">
            <PaperclipIcon />
          </InputGroupButton>
          <InputGroupButton aria-label="Add emoji" variant="ghost">
            <SmileIcon />
          </InputGroupButton>
          <InputGroupText className="ml-auto text-xs">
            {value.length}/{maxLength}
          </InputGroupText>
          <InputGroupButton
            type="submit"
            variant="default"
            size="sm"
            className="ml-2"
          >
            Send
            <SendIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
