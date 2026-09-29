"use client"

import { useEffect, useState } from "react"

// next
import { useRouter } from "next/navigation"

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

// project-imports
import { NAV_COMPONENTS, NAV_BLOCKS, NAV_DOCS } from "@/components-grid"

// assets
import {
  IconComponents,
  IconLayoutDashboard,
  IconSparkles,
  type Icon as TablerIcon,
} from "@tabler/icons-react"

// types
interface NavSearchDialogProps {
  open: boolean
  setOpen: (open: boolean) => void
}

interface CommandResultItemProps {
  icon: TablerIcon
  value: string
  title: string
  onSelect: () => void
}

// ------------------------------ | NAVBAR SEARCH DIALOG | ------------------------------  //

function CommandResultItem({
  icon: Icon,
  value,
  title,
  onSelect,
}: CommandResultItemProps) {
  return (
    <CommandItem value={value} onSelect={onSelect}>
      <Icon aria-hidden="true" className="size-4" />
      <span>{title}</span>
    </CommandItem>
  )
}

export default function NavSearchDialog({
  open,
  setOpen,
}: NavSearchDialogProps) {
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
                {NAV_DOCS.map((doc) => (
                  <CommandResultItem
                    key={doc.slug}
                    icon={IconSparkles}
                    value={doc.title}
                    title={doc.title}
                    onSelect={() =>
                      runCommand(() => router.push(`/doc/${doc.slug}`))
                    }
                  />
                ))}
              </CommandGroup>
              {NAV_COMPONENTS.map((section) => (
                <CommandGroup key={section.title} heading={section.title}>
                  {section.items.map((item) => (
                    <CommandResultItem
                      key={item.slug}
                      icon={IconComponents}
                      value={item.title}
                      title={item.title}
                      onSelect={() =>
                        runCommand(() =>
                          router.push(`/components/${item.slug}`)
                        )
                      }
                    />
                  ))}
                </CommandGroup>
              ))}
              {NAV_BLOCKS.map((section) => (
                <CommandGroup
                  key={`block-${section.title}`}
                  heading={`Blocks - ${section.title}`}
                >
                  {section.items.map((item) => (
                    <CommandResultItem
                      key={item.slug}
                      icon={IconLayoutDashboard}
                      value={`${item.title} block`}
                      title={item.title}
                      onSelect={() =>
                        runCommand(() => router.push(`/blocks/${item.slug}`))
                      }
                    />
                  ))}
                </CommandGroup>
              ))}
            </>
          ) : (
            <CommandGroup heading="Suggestions">
              <CommandResultItem
                icon={IconSparkles}
                value="Introduction"
                title={NAV_DOCS[0].title}
                onSelect={() =>
                  runCommand(() => router.push(`/doc/${NAV_DOCS[0].slug}`))
                }
              />
              <CommandResultItem
                icon={IconComponents}
                value="Components"
                title="Components"
                onSelect={() => runCommand(() => router.push("/components"))}
              />
              <CommandResultItem
                icon={IconLayoutDashboard}
                value="Blocks"
                title="Blocks"
                onSelect={() => runCommand(() => router.push("/blocks"))}
              />
            </CommandGroup>
          )}
        </CommandList>
      </Command>
    </CommandDialog>
  )
}
