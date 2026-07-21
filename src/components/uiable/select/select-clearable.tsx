"use client"

import { useState } from "react"
// assets
import { X } from "lucide-react"

// shadcn
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const categories = [
  { label: "Engineering", value: "engineering" },
  { label: "Design", value: "design" },
  { label: "Product Management", value: "product" },
  { label: "Marketing", value: "marketing" },
  { label: "Customer Success", value: "support" },
]

//  ------------------------------ | SELECT - CLEARABLE | ------------------------------  //

export function SelectClearable() {
  const [value, setValue] = useState<string | null>("design")

  const selectedCategory = categories.find((item) => item.value === value)

  return (
    <div className="relative w-full max-w-64">
      <Select
        items={categories}
        value={value}
        onValueChange={(val) => setValue(val)}
      >
        <SelectTrigger className="w-full">
          <SelectValue>
            {selectedCategory ? (
              selectedCategory.label
            ) : (
              <span className="text-muted-foreground">
                Select department...
              </span>
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {categories.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {value && (
        <Button
          type="button"
          variant="ghost"
          size="icon-xs"
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            setValue(null)
          }}
          className="absolute top-1/2 right-7 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          aria-label="Clear selection"
        >
          <X className="size-3.5" />
        </Button>
      )}
    </div>
  )
}
