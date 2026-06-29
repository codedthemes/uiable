"use client"

// shadcn
// assets
import { Search } from "lucide-react"

// project
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

interface ComponentSearchProps {
  value: string
  onChange: (value: string) => void
  className?: string
  placeholder?: string
}

//  ------------------------------ | SHARED - COMPONENT SEARCH | ------------------------------  //

export default function ComponentSearch({
  value,
  onChange,
  className,
  placeholder = "Search...",
}: ComponentSearchProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <Search className="absolute top-2.5 left-3 h-3.5 w-3.5 text-muted-foreground" />
      <Input
        id="component-search-input"
        placeholder={placeholder}
        className="h-auto bg-card py-1.5 pl-8"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
