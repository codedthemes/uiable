// shadcn
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

//  ------------------------------ | PAGINATION - ROUNDED | ------------------------------  //

export default function PaginationRounded() {
  return (
    <Pagination className="justify-start">
      <PaginationContent className="gap-2">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="rounded-full bg-secondary/50 hover:bg-secondary"
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="rounded-full bg-secondary/50 hover:bg-secondary"
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive className="rounded-full">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="rounded-full bg-secondary/50 hover:bg-secondary"
          >
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            className="rounded-full bg-secondary/50 hover:bg-secondary"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
