"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
// project imports
import { NAV_CATEGORIES } from "@/components-grid"
// assets
import { IconComponents, IconSparkles } from "@tabler/icons-react"

// shadcn
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

// ------------------------------ | NAVBAR SEARCH DIALOG | ------------------------------  //

export default function NavSearchDialog({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (open: boolean) => void
}) {
  const router = useRouter()
  const [search, setSearch] = useState("")
  const [prevOpen, setPrevOpen] = useState(open)

  if (open !== prevOpen) {
    setPrevOpen(open)
    if (!open) {
      setSearch("")
    }
  }

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(!open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [open, setOpen])

  const runCommand = (command: () => void) => {
    setOpen(false)
    command()
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <Command>
        <CommandInput
          placeholder="Type a command or search..."
          value={search}
          onValueChange={setSearch}
        />
        <CommandList>
          {search.length > 0 ? (
            <>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Documentation">
                <CommandItem
                  value="Introduction"
                  onSelect={() =>
                    runCommand(() => router.push("/doc/introduction"))
                  }
                >
                  <IconSparkles className="mr-2 size-4" />
                  <span>Introduction</span>
                </CommandItem>
                <CommandItem
                  value="Installation"
                  onSelect={() =>
                    runCommand(() => router.push("/doc/installation"))
                  }
                >
                  <IconSparkles className="mr-2 size-4" />
                  <span>Installation</span>
                </CommandItem>
                <CommandItem
                  value="Shadcn CLI"
                  onSelect={() => runCommand(() => router.push("/doc/cli"))}
                >
                  <IconSparkles className="mr-2 size-4" />
                  <span>Shadcn CLI</span>
                </CommandItem>
              </CommandGroup>
              {NAV_CATEGORIES.map((section) => (
                <CommandGroup key={section.title} heading={section.title}>
                  {section.items.map((item) => (
                    <CommandItem
                      key={item.slug}
                      value={item.title}
                      onSelect={() =>
                        runCommand(() =>
                          router.push(`/components/${item.slug}`)
                        )
                      }
                    >
                      <IconComponents className="mr-2 size-4" />
                      <span>{item.title}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </>
          ) : (
            <CommandGroup heading="Suggestions">
              <CommandItem
                value="Introduction"
                onSelect={() =>
                  runCommand(() => router.push("/doc/introduction"))
                }
              >
                <IconSparkles className="mr-2 size-4" />
                <span>Introduction</span>
              </CommandItem>
              <CommandItem
                value="Components"
                onSelect={() => runCommand(() => router.push("/components"))}
              >
                <IconComponents className="mr-2 size-4" />
                <span>Components</span>
              </CommandItem>
            </CommandGroup>
          )}
        </CommandList>
      </Command>
    </CommandDialog>
  )
}
