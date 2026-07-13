"use client"

import { useState } from "react"
// assets
import { MailPlus, Sparkles, UsersRound } from "lucide-react"

// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

const members = [
  {
    name: "Alicia Lane",
    role: "Product designer",
    status: "Online",
    initials: "AL",
    image: "https://cdn.uiable.com/user/avatar-1.jpg",
  },
  {
    name: "Noah Patel",
    role: "Frontend engineer",
    status: "In review",
    initials: "NP",
    image: "https://cdn.uiable.com/user/avatar-2.jpg",
  },
  {
    name: "Mina Chen",
    role: "Growth strategist",
    status: "New invite",
    initials: "MC",
    image: "https://cdn.uiable.com/user/avatar-3.jpg",
  },
]

//  ------------------------------ | COMMAND - INVITE MEMBERS | ------------------------------  //

export function CommandInviteMembers() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => setOpen(true)}>Invite team members</Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Invite members"
        description="Bring in the right voices for the next sprint"
      >
        <Command>
          <CommandInput placeholder="Search teammates, roles, or channels..." />
          <CommandList>
            <CommandEmpty>No teammates found.</CommandEmpty>
            <CommandGroup heading="Suggested collaborators">
              {members.map((member) => (
                <CommandItem
                  key={member.name}
                  className="flex items-center justify-between gap-3 rounded-xl px-3 py-3"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="rounded-lg after:rounded-lg after:border-none">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {member.role}
                      </div>
                    </div>
                  </div>
                  <CommandShortcut>
                    <Badge
                      variant={
                        member.status === "Online" ? "default" : "outline"
                      }
                    >
                      {member.status}
                    </Badge>
                  </CommandShortcut>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Workspace actions">
              <CommandItem className="px-3 py-3">
                <UsersRound className="size-4" />
                <span>Create shared workspace</span>
              </CommandItem>
              <CommandItem className="px-3 py-3">
                <MailPlus className="size-4" />
                <span>Send onboarding note</span>
              </CommandItem>
              <CommandItem className="px-3 py-3">
                <Sparkles className="size-4" />
                <span>Generate welcome checklist</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}
