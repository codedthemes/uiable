// shadcn
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

//  ------------------------------ | PAGINATION - CARD | ------------------------------  //

export default function PaginationCard() {
  return (
    <Pagination className="justify-start">
      <div className="rounded-lg border p-1">
        <PaginationContent className="gap-1">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className="rounded-lg text-muted-foreground hover:text-foreground"
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="rounded-lg text-muted-foreground hover:text-foreground"
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive className="rounded-lg">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="rounded-lg text-muted-foreground hover:text-foreground"
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              className="rounded-lg text-muted-foreground hover:text-foreground"
            />
          </PaginationItem>
        </PaginationContent>
      </div>
    </Pagination>
  )
}
