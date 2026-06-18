"use client";

// shadcn
import { Input } from "@/components/ui/input";

// project
import { cn } from "@/lib/utils";

// assets
import { Search } from "lucide-react";

interface ComponentSearchProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}

//  ------------------------------ | SHARED - COMPONENT SEARCH | ------------------------------  //

export default function ComponentSearch({
  value,
  onChange,
  className,
  placeholder = "Search Doc/Blocks/Components",
}: ComponentSearchProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
      <Input
        id="component-search-input"
        placeholder={placeholder}
        className="pl-8 py-1.5 h-auto bg-card"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
