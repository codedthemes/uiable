"use client"

import { useState } from "react"

// shadcn
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

//  ------------------------------ | INPUT OTP - OUTLINED | ------------------------------  //

export function InputOTPOutlined() {
  const [value, setValue] = useState("")

  return (
    <div className="flex flex-col items-center gap-4">
      <InputOTP maxLength={6} value={value} onChange={(val) => setValue(val)}>
        <InputOTPGroup className="gap-2">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <InputOTPSlot
              key={i}
              index={i}
              className="rounded-md border-2 border-border bg-background shadow-none transition-colors duration-150 focus-within:border-primary data-[active=true]:border-primary data-[active=true]:shadow-sm dark:bg-background"
            />
          ))}
        </InputOTPGroup>
      </InputOTP>

      <p className="text-sm text-muted-foreground">
        {value.length === 6 ? "✓ Code complete" : "Enter your 6-digit code"}
      </p>
    </div>
  )
}
