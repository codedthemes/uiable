"use client"

import { useState } from "react"
// assets
import { Check, Eye, EyeOff, X } from "lucide-react"

// shadcn
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

//  ------------------------------ | INPUT - VALIDATION | ------------------------------  //

export function InputValidation() {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  // Validation criteria
  const hasMinLength = password.length >= 8
  const hasNumber = /\d/.test(password)
  const hasUppercase = /[A-Z]/.test(password)
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password)

  const allMet = hasMinLength && hasNumber && hasUppercase && hasSpecial
  const isStarted = password.length > 0

  return (
    <Field>
      <FieldLabel htmlFor="validation-password">Create Password</FieldLabel>
      <div className="relative">
        <Input
          id="validation-password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter a strong password"
          className={`pr-10 transition-colors duration-200 ${
            isStarted
              ? allMet
                ? "border-emerald-500 focus:border-emerald-500 focus-visible:ring-emerald-500/20 dark:border-emerald-500/70"
                : "border-destructive/60 focus:border-destructive focus-visible:ring-destructive/20"
              : ""
          }`}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute top-1/2 right-1.5 -translate-y-1/2 text-muted-foreground hover:text-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          {showPassword ? (
            <EyeOff className="pointer-events-none size-4" />
          ) : (
            <Eye className="pointer-events-none size-4" />
          )}
        </Button>
      </div>

      <div className="mt-3 space-y-1.5 rounded-lg border border-border bg-muted/20 p-3 text-xs">
        <p className="font-semibold text-muted-foreground">
          Password Requirements:
        </p>
        <ul className="space-y-1">
          {[
            { met: hasMinLength, label: "At least 8 characters" },
            { met: hasUppercase, label: "At least one uppercase letter (A-Z)" },
            { met: hasNumber, label: "At least one number (0-9)" },
            {
              met: hasSpecial,
              label: "At least one special character (e.g. @, #, $, %)",
            },
          ].map((req, i) => (
            <li key={i} className="flex items-center gap-2">
              {req.met ? (
                <Check className="size-3.5 stroke-[3px] text-emerald-500" />
              ) : (
                <X
                  className={`size-3.5 ${isStarted ? "text-destructive" : "text-muted-foreground"}`}
                />
              )}
              <span
                className={
                  req.met
                    ? "font-medium text-foreground"
                    : "text-muted-foreground"
                }
              >
                {req.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <FieldDescription>
        Live password strength requirements checklist.
      </FieldDescription>
    </Field>
  )
}
