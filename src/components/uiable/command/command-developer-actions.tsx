"use client"

import { useState } from "react"
// assets
import {
  ArrowUpRight,
  Boxes,
  Bug,
  Code2,
  GitBranch,
  Play,
  Sparkles,
  TerminalSquare,
  type LucideIcon,
} from "lucide-react"

// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
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

interface ActionItem {
  title: string
  hint: string
  meta: string
  icon: LucideIcon
}

const actions: ActionItem[] = [
  {
    title: "Run preview deployment",
    hint: "⌘↵",
    meta: "Deploy",
    icon: Play,
  },
  {
    title: "Open feature branch",
    hint: "⌘B",
    meta: "Branch",
    icon: GitBranch,
  },
  {
    title: "Inspect failing checks",
    hint: "⌘C",
    meta: "CI",
    icon: Bug,
  },
  {
    title: "Spin up local stack",
    hint: "⌘L",
    meta: "Setup",
    icon: TerminalSquare,
  },
  {
    title: "Open shared components",
    hint: "⌘S",
    meta: "Library",
    icon: Boxes,
  },
  {
    title: "Generate release notes",
    hint: "⌘N",
    meta: "Docs",
    icon: Sparkles,
  },
]

//  ------------------------------ | COMMAND - DEVELOPER ACTIONS | ------------------------------  //

export function CommandDeveloperActions() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => setOpen(true)}>Open developer actions</Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Developer actions"
        description="Run your most frequent product and engineering flows"
      >
        <Command>
          <CommandInput placeholder="Search actions..." />
          <CommandList>
            <CommandEmpty>No workflow actions found.</CommandEmpty>
            <CommandGroup heading="Flow shortcuts">
              {actions.map((action) => {
                const Icon = action.icon

                return (
                  <CommandItem
                    key={action.title}
                    className="flex items-center justify-between gap-3 px-2 py-2"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="rounded-lg bg-primary/10 text-primary after:rounded-lg after:border-none">
                        <AvatarFallback className="rounded-lg bg-transparent text-primary">
                          <Icon className="size-4" />
                        </AvatarFallback>
                      </Avatar>
                      <h6 className="space-y-1 font-medium">{action.title}</h6>
                    </div>
                    <CommandShortcut>{action.hint}</CommandShortcut>
                  </CommandItem>
                )
              })}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Quick launch">
              <CommandItem className="px-3 py-3">
                <Code2 className="size-4" />
                <h6 className="font-medium">Open release checklist</h6>
                <CommandShortcut>
                  <ArrowUpRight className="ms-auto size-4 text-muted-foreground" />
                </CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}
