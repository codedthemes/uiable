import { useState } from "react";

// shadcn
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from "@/components/ui/input-otp";

// ------------------------------ | ONE TIME PASSWORD CARD | ------------------------------ //

export default function OneTimePasswordCard() {
  const [otp, setOtp] = useState("42");

  return (
    <div className="border border-border rounded-xl p-4 flex flex-col gap-2 bg-card">
      <p className="font-sans text-sm font-medium leading-5 tracking-normal text-foreground">
        One-Time Password
      </p>
      <div className="flex justify-start">
        <InputOTP maxLength={6} value={otp} onChange={setOtp}>
          <InputOTPGroup>
            <InputOTPSlot index={0} className="w-9 h-9" />
            <InputOTPSlot index={1} className="w-9 h-9" />
            <InputOTPSlot index={2} className="w-9 h-9" />
            <InputOTPSlot index={3} className="w-9 h-9" />
            <InputOTPSlot index={4} className="w-9 h-9" />
            <InputOTPSlot index={5} className="w-9 h-9" />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <p className="font-sans text-xs font-normal leading-3 tracking-normal text-muted-foreground">
        Please enter the one-time password sent to your phone.
      </p>
    </div>
  );
}
