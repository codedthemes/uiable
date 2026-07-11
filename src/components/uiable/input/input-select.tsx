"use client"

import { useState } from "react"

// shadcn
import { Field, FieldLabel } from "@/components/ui/field"
import { InputGroup, InputGroupInput } from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

//  ------------------------------ | INPUT - SELECT | ------------------------------  //

export function InputSelect() {
  const [countryCode, setCountryCode] = useState("+1")
  const [phoneNumber, setPhoneNumber] = useState("")

  return (
    <Field>
      <FieldLabel htmlFor="phone-number">Phone Number</FieldLabel>
      <InputGroup className="overflow-hidden">
        {/* Country Code Select Dropdown */}
        <Select
          value={countryCode}
          onValueChange={(val) => val && setCountryCode(val)}
        >
          <SelectTrigger className="order-first h-full rounded-none rounded-l-lg border-y-0 border-r border-l-0 border-border bg-transparent py-2 pr-3 pl-3 text-sm font-medium shadow-none focus:bg-transparent focus:ring-0 focus-visible:ring-0 dark:hover:bg-transparent">
            <SelectValue placeholder="US (+1)" />
          </SelectTrigger>
          <SelectContent className="min-w-32">
            <SelectGroup>
              <SelectItem value="+1">US (+1)</SelectItem>
              <SelectItem value="+44">UK (+44)</SelectItem>
              <SelectItem value="+91">IN (+91)</SelectItem>
              <SelectItem value="+81">JP (+81)</SelectItem>
              <SelectItem value="+49">DE (+49)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Phone Input */}
        <InputGroupInput
          id="phone-number"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="(555) 000-0000"
          className="pl-3"
        />
      </InputGroup>
    </Field>
  )
}
