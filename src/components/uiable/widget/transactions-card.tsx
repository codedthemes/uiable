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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// project
import TransactionItem from "./transaction-item";
import { cn } from "@/lib/utils";

// assets
import { MoreVertical } from "lucide-react";

//  ------------------------------ | BLOCK - TRANSACTIONS CARD | ------------------------------  //

export default function TransactionsCard() {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="p-6 pb-0 flex items-center justify-between mb-4">
          <CardTitle className="text-lg font-bold">Transactions</CardTitle>
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
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent h-auto p-0 px-6 gap-6">
            <TabsTrigger
              value="all"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-4 px-0"
            >
              All Transaction
            </TabsTrigger>
            <TabsTrigger
              value="success"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-4 px-0"
            >
              Success
            </TabsTrigger>
            <TabsTrigger
              value="pending"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-4 px-0"
            >
              Pending
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-0 p-0">
            <div className="divide-y border-t-0">
              {[
                {
                  name: "Apple Inc.",
                  id: "ABLE-PRO-T00232",
                  amount: "$210,000",
                  change: "10.6%",
                  type: "down",
                  initial: "AI",
                },
                {
                  name: "Spotify Music",
                  id: "ABLE-PRO-T10232",
                  amount: "-10,000",
                  change: "30.6%",
                  type: "up",
                  initial: "SM",
                },
                {
                  name: "Medium",
                  id: "06:30 pm",
                  amount: "-26",
                  change: "5%",
                  type: "right",
                  initial: "MD",
                },
                {
                  name: "Uber",
                  id: "08:40 pm",
                  amount: "+210,000",
                  change: "10.6%",
                  type: "up",
                  initial: "U",
                },
                {
                  name: "Ola Cabs",
                  id: "07:40 pm",
                  amount: "+210,000",
                  change: "10.6%",
                  type: "up",
                  initial: "OC",
                },
              ].map((item, idx) => (
                <TransactionItem
                  key={idx}
                  {...item}
                  type={item.type as "up" | "down" | "right"}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="success" className="mt-0 p-0">
            <div className="p-6 text-center text-muted-foreground text-sm">
              Success transactions will appear here.
            </div>
          </TabsContent>
          <TabsContent value="pending" className="mt-0 p-0">
            <div className="p-6 text-center text-muted-foreground text-sm">
              Pending transactions will appear here.
            </div>
          </TabsContent>
        </Tabs>
        <div className="p-6 border-t mt-4">
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full rounded-xl">
              View all History
            </Button>
            <Button className="w-full rounded-xl">Create new</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
