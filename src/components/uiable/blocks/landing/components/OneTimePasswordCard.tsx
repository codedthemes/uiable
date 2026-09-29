"use client"

import { useState } from "react"

// shadcn
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

const OTP_LENGTH = 6

// ------------------------------ | ONE TIME PASSWORD CARD | ------------------------------ //

export default function OneTimePasswordCard() {
  const [otp, setOtp] = useState("42")

  return (
    <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4">
      <p className="font-sans text-sm leading-5 font-medium tracking-normal text-foreground">
        One-Time Password
      </p>
      <div className="flex justify-start">
        <InputOTP maxLength={OTP_LENGTH} value={otp} onChange={setOtp}>
          <InputOTPGroup>
            {Array.from({ length: OTP_LENGTH }, (_, index) => (
              <InputOTPSlot key={index} index={index} className="h-9 w-9" />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </div>
      <p className="font-sans text-xs leading-3 font-normal tracking-normal text-muted-foreground">
        Please enter the one-time password sent to your phone.
      </p>
    </div>
  )
}
