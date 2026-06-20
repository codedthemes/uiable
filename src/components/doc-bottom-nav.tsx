import Link from "next/link";

// shadcn
import { Card, CardContent } from "@/components/ui/card";

// assets
import { ChevronLeft, ChevronRight } from "lucide-react";

type NavItem = {
  name: string;
  url: string;
};

type ComponentNavigationProps = {
  previousItem: NavItem | null;
  nextItem: NavItem | null;
};

//  ------------------------------ | COMPONENT - DOC BOTTOM NAV | ------------------------------  //

export default function DocBottomNav({
  previousItem,
  nextItem
}: ComponentNavigationProps) {
  return (
    <div className="flex flex-col sm:flex-row *:flex-1 gap-4 mt-10 w-full">
      {previousItem && (
        <Link href={previousItem.url} className="group">
          <Card className="mb-0 group-hover:border-primary/40 transition-all">
            <CardContent className="p-5">
              <div className="flex items-center">
                <div className="shrink-0">
                  <ChevronLeft className="group-hover:text-primary transition-all" />
                </div>
                <div className="flex flex-col grow text-right">
                  <p className="min-w-20 text-center text-[12px] absolute right-5 -top-3 bg-card px-3 py-0.5 rounded-full transition-all border border-border group-hover:bg-primary group-hover:border-primary group-hover:text-white">
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
          <Card className="mb-0 group-hover:border-primary/40 transition-all">
            <CardContent className="p-5">
              <div className="flex items-center">
                <div className="flex flex-col grow text-left">
                  <p className="min-w-20 text-center text-[12px] absolute left-5 -top-3 bg-card px-3 py-0.5 rounded-full transition-all border border-border group-hover:bg-primary group-hover:border-primary group-hover:text-white">
                    Next
                  </p>
                  <p className="h6 text-xl">{nextItem.name}</p>
                </div>
                <div className="shrink-0">
                  <ChevronRight className="group-hover:text-primary transition-all" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      )}
    </div>
  );
}
