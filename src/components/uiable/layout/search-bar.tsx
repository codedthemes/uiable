// shadcn

// assets
import { SearchNormal1 } from "iconsax-reactjs"

import { Input } from "@/components/ui/input"

//  ------------------------------ | LAYOUT - SEARCH BAR | ------------------------------  //

export default function SearchBar() {
  return (
    <div className="relative hidden w-49.5 md:block">
      <SearchNormal1 className="absolute top-3.5 left-3.5 h-4 w-4 text-muted-foreground" />
      <Input
        id="search-bar-input"
        type="search"
        placeholder="Ctrl + K"
        className="disabled:bg-secondary-200/10 block h-auto w-full rounded-xl border border-border bg-input py-[.66rem] pr-3 pl-10 text-base placeholder:text-[#bec8d0] focus:border-primary focus:outline-none disabled:pointer-events-none dark:focus:border-primary"
      />
    </div>
  )
}
