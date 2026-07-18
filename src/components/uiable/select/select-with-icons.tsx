"use client"

import { useState } from "react"
// assets
import { Building2, Coins, CreditCard, Smartphone, Wallet } from "lucide-react"

// shadcn
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const paymentMethods = [
  {
    label: "Credit Card",
    value: "card",
    icon: CreditCard,
    description: "Visa, Mastercard, Amex",
  },
  {
    label: "PayPal",
    value: "paypal",
    icon: Wallet,
    description: "Fast & secure checkout",
  },
  {
    label: "Bank Transfer",
    value: "bank",
    icon: Building2,
    description: "Direct account transfer",
  },
  {
    label: "Apple Pay",
    value: "apple",
    icon: Smartphone,
    description: "One-touch mobile payment",
  },
  {
    label: "Cryptocurrency",
    value: "crypto",
    icon: Coins,
    description: "BTC, ETH, USDC",
  },
]

//  ------------------------------ | SELECT - WITH ICONS | ------------------------------  //

export function SelectWithIcons() {
  const [value, setValue] = useState("card")
  const selectedMethod = paymentMethods.find((item) => item.value === value)

  return (
    <Select
      items={paymentMethods}
      value={value}
      onValueChange={(val) => val && setValue(val)}
    >
      <SelectTrigger className="w-full max-w-64">
        <SelectValue>
          {selectedMethod && (
            <span className="flex items-center gap-2.5">
              <selectedMethod.icon className="size-4 text-muted-foreground" />
              <span>{selectedMethod.label}</span>
            </span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {paymentMethods.map((item) => {
            const Icon = item.icon
            return (
              <SelectItem key={item.value} value={item.value}>
                <span className="flex items-center gap-2.5">
                  <Icon className="size-4 text-muted-foreground" />
                  <span>{item.label}</span>
                </span>
              </SelectItem>
            )
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
