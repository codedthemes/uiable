import Link from "next/link"
// assets
import { ChevronLeft, ChevronRight } from "lucide-react"

// shadcn
import { Card, CardContent } from "@/components/ui/card"

type NavItem = {
  name: string
  url: string
}

type ComponentNavigationProps = {
  previousItem: NavItem | null
  nextItem: NavItem | null
}

//  ------------------------------ | COMPONENT - DOC BOTTOM NAV | ------------------------------  //

export default function DocBottomNav({
  previousItem,
  nextItem,
}: ComponentNavigationProps) {
  return (
    <div className="mt-10 flex w-full flex-col gap-4 *:flex-1 sm:flex-row">
      {previousItem && (
        <Link href={previousItem.url} className="group">
          <Card className="mb-0 transition-all group-hover:border-primary/40">
            <CardContent className="p-5">
              <div className="flex items-center">
                <div className="shrink-0">
                  <ChevronLeft className="transition-all group-hover:text-primary" />
                </div>
                <div className="flex grow flex-col text-right">
                  <p className="absolute -top-3 right-5 min-w-20 rounded-full border border-border bg-card px-3 py-0.5 text-center text-[12px] transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    Previous
                  </p>
                  <p className="h6 text-xl">{previousItem.name}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      )}
      {nextItem && (
        <Link href={nextItem.url} className="group">
          <Card className="mb-0 transition-all group-hover:border-primary/40">
            <CardContent className="p-5">
              <div className="flex items-center">
                <div className="flex grow flex-col text-left">
                  <p className="absolute -top-3 left-5 min-w-20 rounded-full border border-border bg-card px-3 py-0.5 text-center text-[12px] transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    Next
                  </p>
                  <p className="h6 text-xl">{nextItem.name}</p>
                </div>
                <div className="shrink-0">
                  <ChevronRight className="transition-all group-hover:text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      )}
    </div>
  )
}
