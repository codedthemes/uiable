"use client";

// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// project
import { cn } from "@/lib/utils";

// assets
import { AtSign, MoreVertical, Plus } from "lucide-react";

//  ------------------------------ | BLOCK - PROFILE CARD | ------------------------------  //

export default function ProfileCard() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/10 text-primary">
              <AtSign className="h-5 w-5" />
            </div>
            <div>
              <h6 className="font-semibold text-sm leading-tight">Able pro</h6>
              <p className="text-xs text-muted-foreground">@ableprodevelop</p>
            </div>
          </div>
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
        <div className="flex items-center justify-between">
          <div className="flex -space-x-2 overflow-hidden">
            <Avatar className="h-8 w-8 border-2 border-background">
              <AvatarImage src="https://cdn.uiable.com/user/avatar-1.jpg" />
            </Avatar>
            <Avatar className="h-8 w-8 border-2 border-background">
              <AvatarImage src="https://cdn.uiable.com/user/avatar-3.jpg" />
            </Avatar>
            <Avatar className="h-8 w-8 border-2 border-background">
              <AvatarImage src="https://cdn.uiable.com/user/avatar-4.jpg" />
            </Avatar>
            <Avatar className="h-8 w-8 border-2 border-background">
              <AvatarImage src="https://cdn.uiable.com/user/avatar-5.jpg" />
            </Avatar>
            <Avatar className="h-8 w-8 border-2 border-background">
              <AvatarFallback className="bg-primary/10 text-primary text-[10px] font-bold">
                +2
              </AvatarFallback>
            </Avatar>
          </div>
          <Button
            variant="default"
            size="icon"
            className="h-10 w-10 rounded-full"
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
