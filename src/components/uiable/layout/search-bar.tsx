// shadcn
import { Input } from "@/components/ui/input";

// assets
import { SearchNormal1 } from "iconsax-reactjs";

//  ------------------------------ | LAYOUT - SEARCH BAR | ------------------------------  //

export default function SearchBar() {
  return (
    <div className="relative w-49.5 hidden md:block">
      <SearchNormal1 className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
      <Input
        id="search-bar-input"
        type="search"
        placeholder="Ctrl + K"
        className="border rounded-xl h-auto block text-base pl-10 py-[.66rem] pr-3 w-full placeholder:text-[#bec8d0] disabled:bg-secondary-200/10 disabled:pointer-events-none focus:outline-none focus:border-primary dark:focus:border-primary border-border bg-input"
      />
    </div>
  );
}
