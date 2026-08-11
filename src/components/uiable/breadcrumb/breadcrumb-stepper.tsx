import Link from "next/link"

// shadcn
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

//  ------------------------------ | BREADCRUMB - STEPPER | ------------------------------  //

export default function BreadcrumbStepper() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="gap-2 sm:gap-3">
        <BreadcrumbItem>
          <BreadcrumbLink
            render={<Link href="#" />}
            className="flex items-center gap-2"
          >
            <Badge
              variant="secondary"
              className="flex size-5 items-center justify-center rounded-full bg-muted p-0 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-muted-foreground"
            >
              1
            </Badge>
            <span>Home</span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink
            render={<Link href="#" />}
            className="flex items-center gap-2"
          >
            <Badge
              variant="secondary"
              className="flex size-5 items-center justify-center rounded-full bg-muted p-0 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-muted-foreground"
            >
              2
            </Badge>
            <span>Components</span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="flex items-center gap-2">
            <Badge className="flex size-5 items-center justify-center rounded-full p-0 text-xs font-medium">
              3
            </Badge>
            <span>Breadcrumb</span>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
