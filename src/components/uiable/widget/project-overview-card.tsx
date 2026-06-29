"use client"

// shadcn
// assets
import { MoreVertical, Plus } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// project
import ProjectOverviewItem from "./project-overview-item"

//  ------------------------------ | BLOCK - PROJECT OVERVIEW CARD | ------------------------------  //

export default function ProjectOverviewCard() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <CardTitle className="text-lg font-bold">Project overview</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "h-8 w-8 shrink-0 rounded-xl"
              )}
            >
              <MoreVertical className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Today</DropdownMenuItem>
              <DropdownMenuItem>Weekly</DropdownMenuItem>
              <DropdownMenuItem>Monthly</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="grid grid-cols-12 items-center gap-6">
          <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <ProjectOverviewItem
              title="Total Tasks"
              value="34,686"
              series={[5, 25, 3, 10, 4, 50, 0]}
              color="var(--primary)"
            />
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <ProjectOverviewItem
              title="Pending Tasks"
              value="3,786"
              series={[0, 50, 4, 10, 3, 25, 5]}
              color="#DC2626"
            />
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <Button className="h-11 w-full rounded-xl" variant="default">
              <Plus className="mr-2 h-4 w-4" /> Add project
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
