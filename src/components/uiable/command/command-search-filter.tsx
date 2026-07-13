"use client"

import { useState } from "react"
// assets
import { Filter, Sparkles } from "lucide-react"

// shadcn
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const categories = [
  { value: "all", label: "All" },
  { value: "design", label: "Design" },
  { value: "docs", label: "Documentation" },
  { value: "product", label: "Product" },
]

const sortOptions = [
  { value: "recommended", label: "Recommended" },
  { value: "newest", label: "Newest" },
  { value: "popular", label: "Most Popular" },
  { value: "updated", label: "Recently Updated" },
]

//  ------------------------------ | COMMAND - SEARCH AND FILTER | ------------------------------  //

export function CommandSearchAndFilter() {
  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState("all")
  const [sort, setSort] = useState("recommended")

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => setOpen(true)}>Search and filter</Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search and filter"
        description="Find the right item by focus, owner, and status"
      >
        <Command>
          <CommandInput placeholder="Search docs, tasks, and product views..." />
          <CommandList>
            <CommandEmpty>No content matched your filters.</CommandEmpty>

            {/* Category Filter Group */}
            <CommandGroup
              heading={
                <div className="flex items-center gap-2">
                  <Filter className="size-4 text-muted-foreground" />
                  <span className="-mb-[2px] text-xs font-semibold tracking-wide uppercase">
                    Category
                  </span>
                </div>
              }
              className="py-2"
            >
              <div className="px-2 py-2">
                <RadioGroup value={category} onValueChange={setCategory}>
                  {categories.map((cat) => (
                    <CommandItem key={cat.value}>
                      <RadioGroupItem
                        value={cat.value}
                        id={`cat-${cat.value}`}
                      />
                      <label
                        htmlFor={`cat-${cat.value}`}
                        className="flex-1 cursor-pointer text-sm text-foreground"
                      >
                        {cat.label}
                      </label>
                    </CommandItem>
                  ))}
                </RadioGroup>
              </div>
            </CommandGroup>

            <CommandSeparator />

            {/* Sort Filter Group */}
            <CommandGroup
              heading={
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-muted-foreground" />
                  <span className="-mb-[2px] text-xs font-semibold tracking-wide uppercase">
                    Sort by
                  </span>
                </div>
              }
              className="py-2"
            >
              <div className="px-2 py-2">
                <RadioGroup value={sort} onValueChange={setSort}>
                  {sortOptions.map((opt) => (
                    <CommandItem key={opt.value}>
                      <RadioGroupItem
                        value={opt.value}
                        id={`sort-${opt.value}`}
                      />
                      <label
                        htmlFor={`sort-${opt.value}`}
                        className="flex-1 cursor-pointer text-sm text-foreground"
                      >
                        {opt.label}
                      </label>
                    </CommandItem>
                  ))}
                </RadioGroup>
              </div>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}
