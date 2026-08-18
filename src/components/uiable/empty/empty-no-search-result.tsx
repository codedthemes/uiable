// shadcn
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

// third-party
import { SearchNormal1 } from "iconsax-reactjs"

//  ------------------------------ | EMPTY - NO SEARCH RESULT | ------------------------------  //

export default function EmptyNoSearchResult() {
  return (
    <Empty className="p-sm-8 rounded-lg border border-solid border-border p-4">
      <EmptyHeader>
        <EmptyMedia variant="default">
          <SearchNormal1 />
        </EmptyMedia>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription className="max-w-md">
          We couldn't find anything matching your search query. Try adjusting
          your filters or using different keywords.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button className="dark:border-border" variant="outline">
          Clear filters
        </Button>
      </EmptyContent>
    </Empty>
  )
}
