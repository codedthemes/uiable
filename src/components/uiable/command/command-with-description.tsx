"use client"

import { useState } from "react"
// assets
import { AtSignIcon, MapPin, Smartphone, User } from "lucide-react"

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
} from "@/components/ui/command"

interface Contact {
  id: string
  icon: typeof User
  title: string
  description: string
}

const contacts: Contact[] = [
  {
    id: "john",
    icon: User,
    title: "John Doe",
    description: "Software Engineer",
  },
  {
    id: "email",
    icon: AtSignIcon,
    title: "jane@example.com",
    description: "Email",
  },
  {
    id: "phone",
    icon: Smartphone,
    title: "+1 (555) 123-4567",
    description: "Mobile",
  },
  {
    id: "location",
    icon: MapPin,
    title: "San Francisco, CA",
    description: "Location",
  },
  {
    id: "contact2",
    icon: User,
    title: "Sarah Johnson",
    description: "Product Designer",
  },
  {
    id: "email2",
    icon: AtSignIcon,
    title: "sarah.johnson@example.com",
    description: "Email",
  },
  {
    id: "phone2",
    icon: Smartphone,
    title: "+1 (555) 987-6543",
    description: "Mobile",
  },
  {
    id: "location2",
    icon: MapPin,
    title: "New York, NY",
    description: "Location",
  },
]

//  ------------------------------ | COMMAND - WITH DESCRIPTION | ------------------------------  //

export function CommandWithDescription() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => setOpen(true)}>Open contacts</Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Contacts"
        description="Search and view contact information"
      >
        <Command>
          <CommandInput placeholder="Search contacts, emails, or phone numbers..." />
          <CommandList>
            <CommandEmpty>No contacts found.</CommandEmpty>
            <CommandGroup heading="Contacts">
              {contacts.map((contact) => {
                const Icon = contact.icon

                return (
                  <CommandItem
                    key={contact.id}
                    className="flex items-center justify-between gap-3 px-3 py-3"
                  >
                    <div className="flex flex-1 items-center gap-3">
                      <Avatar className="rounded-lg bg-primary/10 text-primary after:rounded-lg after:border-none">
                        <AvatarFallback className="rounded-lg bg-transparent text-primary">
                          <Icon className="size-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">
                          {contact.title}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {contact.description}
                        </div>
                      </div>
                    </div>
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}
