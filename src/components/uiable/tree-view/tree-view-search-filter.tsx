"use client"

import { useMemo, useState } from "react"

// shadcn
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  TreeView,
  TreeItem,
  TreeItemRow,
  TreeItemToggle,
  TreeItemIcon,
  TreeItemLabel,
  TreeItemContent,
} from "@/components/ui/tree-view"

// assets
import {
  Box,
  Compass,
  Database,
  Layers,
  Search,
  Sliders,
  X,
} from "lucide-react"

interface ComponentCategory {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  items: { id: string; label: string; badge?: string }[]
}

const UI_LIBRARY_DATA: ComponentCategory[] = [
  {
    id: "inputs",
    label: "Inputs & Forms",
    icon: Sliders,
    items: [
      { id: "button", label: "Button" },
      { id: "checkbox", label: "Checkbox" },
      { id: "combobox", label: "Combobox" },
      { id: "date-picker", label: "Date Picker" },
      { id: "input-otp", label: "Input OTP" },
      { id: "switch", label: "Switch" },
    ],
  },
  {
    id: "navigation",
    label: "Navigation & Menus",
    icon: Compass,
    items: [
      { id: "breadcrumb", label: "Breadcrumb" },
      { id: "dropdown-menu", label: "Dropdown Menu" },
      { id: "navigation-menu", label: "Navigation Menu" },
      { id: "pagination", label: "Pagination" },
      { id: "tabs", label: "Tabs" },
    ],
  },
  {
    id: "data-display",
    label: "Data Display",
    icon: Database,
    items: [
      { id: "avatar", label: "Avatar" },
      { id: "badge", label: "Badge" },
      { id: "data-table", label: "Data Table" },
      { id: "timeline", label: "Timeline" },
      { id: "tree-view", label: "Tree View" },
    ],
  },
  {
    id: "overlays",
    label: "Feedback & Overlays",
    icon: Layers,
    items: [
      { id: "alert-dialog", label: "Alert Dialog" },
      { id: "drawer", label: "Drawer" },
      { id: "modal-dialog", label: "Modal Dialog" },
      { id: "popover", label: "Popover" },
      { id: "tooltip", label: "Tooltip" },
    ],
  },
]

//  ------------------------------ | TREE VIEW - SEARCH FILTER | ------------------------------  //

export default function TreeViewSearchFilter() {
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState<string | string[]>("tree-view")
  const [expanded, setExpanded] = useState<string[]>([
    "inputs",
    "navigation",
    "data-display",
    "overlays",
  ])

  // Filter data based on search term
  const filteredData = useMemo(() => {
    const trimmed = query.trim().toLowerCase()
    if (!trimmed) return UI_LIBRARY_DATA

    return UI_LIBRARY_DATA.map((cat) => {
      const categoryMatches = cat.label.toLowerCase().includes(trimmed)
      const matchingItems = cat.items.filter((item) =>
        item.label.toLowerCase().includes(trimmed)
      )

      if (categoryMatches) {
        return cat
      }

      if (matchingItems.length > 0) {
        return {
          ...cat,
          items: matchingItems,
        }
      }

      return null
    }).filter(Boolean) as ComponentCategory[]
  }, [query])

  // Total matching leaves count
  const totalLeafMatches = useMemo(() => {
    return filteredData.reduce((acc, cat) => acc + cat.items.length, 0)
  }, [filteredData])

  const handleQueryChange = (value: string) => {
    setQuery(value)
    if (value.trim()) {
      const lower = value.toLowerCase().trim()
      const matched = UI_LIBRARY_DATA.filter((cat) => {
        const hasMatchingParent =
          cat.label.toLowerCase().includes(lower) ||
          cat.id.toLowerCase().includes(lower)
        if (hasMatchingParent) return true

        return cat.items.some(
          (item) =>
            item.label.toLowerCase().includes(lower) ||
            item.id.toLowerCase().includes(lower)
        )
      }).map((cat) => cat.id)
      setExpanded(matched)
    }
  }

  return (
    <div className="w-full max-w-lg space-y-4 rounded-lg border bg-card p-4 text-card-foreground">
      {/* Search Input Bar */}
      <div className="relative flex items-center">
        <Search className="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
        <Input
          placeholder="Filter components (e.g. tree, dialog, button)..."
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          className="h-9 pr-9 pl-9 text-sm"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setQuery("")}
            className="absolute right-1 size-7 text-muted-foreground hover:text-foreground"
          >
            <X className="size-3.5" />
          </Button>
        )}
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between px-1 text-xs text-muted-foreground">
        <span>Component Registry</span>
        <span>
          {query ? (
            <span className="font-medium text-foreground">
              {totalLeafMatches} match{totalLeafMatches !== 1 ? "es" : ""} found
            </span>
          ) : (
            `${UI_LIBRARY_DATA.reduce((a, c) => a + c.items.length, 0)} components total`
          )}
        </span>
      </div>

      {/* Tree Content */}
      <div className="max-h-[320px] min-h-[260px] overflow-y-auto rounded-lg bg-background/50 p-2">
        {filteredData.length === 0 ? (
          <div className="flex h-full min-h-[242px] flex-col items-center justify-center text-center text-muted-foreground">
            <Box className="mb-2 size-8 stroke-[1.5] text-muted-foreground/50" />
            <p className="text-sm font-medium text-foreground">
              No components matched
            </p>
            <p className="text-xs">Try searching for a different keyword</p>
          </div>
        ) : (
          <TreeView
            value={selected}
            onValueChange={setSelected}
            expandedValues={expanded}
            onExpandedChange={setExpanded}
            searchQuery={query}
          >
            {filteredData.map((cat) => {
              const CategoryIcon = cat.icon || Box

              return (
                <TreeItem key={cat.id} value={cat.id} hasChildren level={0}>
                  <TreeItemRow activeStyle="indicator">
                    <TreeItemToggle />
                    <TreeItemIcon>
                      <CategoryIcon className="text-primary" />
                    </TreeItemIcon>
                    <TreeItemLabel>{cat.label}</TreeItemLabel>
                  </TreeItemRow>

                  <TreeItemContent>
                    {cat.items.map((item) => (
                      <TreeItem key={item.id} value={item.id} level={1}>
                        <TreeItemRow activeStyle="indicator">
                          <TreeItemToggle />
                          <TreeItemIcon>
                            <Box className="size-3.5 text-muted-foreground" />
                          </TreeItemIcon>
                          <TreeItemLabel>{item.label}</TreeItemLabel>
                        </TreeItemRow>
                      </TreeItem>
                    ))}
                  </TreeItemContent>
                </TreeItem>
              )
            })}
          </TreeView>
        )}
      </div>

      {/* Selected Indicator */}
      <div className="flex items-center justify-between border-t pt-3 text-xs text-muted-foreground">
        <span>Selected Component:</span>
        <Badge variant="outline" className="font-mono text-xs">
          {selected || "None"}
        </Badge>
      </div>
    </div>
  )
}
