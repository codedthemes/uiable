"use client";

// shadcn
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// project
import ProjectOverviewItem from "./project-overview-item";
import { cn } from "@/lib/utils";

// assets
import { MoreVertical, Plus } from "lucide-react";

//  ------------------------------ | BLOCK - PROJECT OVERVIEW CARD | ------------------------------  //

export default function ProjectOverviewCard() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <CardTitle className="text-lg font-bold">Project overview</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "h-8 w-8 rounded-xl shrink-0",
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
        <div className="grid grid-cols-12 gap-6 items-center">
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
            <Button className="w-full rounded-xl h-11" variant="default">
              <Plus className="h-4 w-4 mr-2" /> Add project
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
