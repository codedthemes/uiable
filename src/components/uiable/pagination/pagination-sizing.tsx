// shadcn
import {
  PaginationContent,
  PaginationItem,
  PaginationLink
} from "@/components/ui/pagination";

//  ------------------------------ | PAGINATION - SIZING | ------------------------------  //

export default function PaginationSizing() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h6 className="mb-3 text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Large Pagination
        </h6>
        <PaginationContent className="justify-start">
          <PaginationItem>
            <PaginationLink href="#" size="lg">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" size="lg" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" size="lg">
              3
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </div>

      <div>
        <h6 className="mb-3 text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Small Pagination
        </h6>
        <PaginationContent className="justify-start">
          <PaginationItem>
            <PaginationLink href="#" size="sm">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" size="sm" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" size="sm">
              3
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </div>
    </div>
  );
}
