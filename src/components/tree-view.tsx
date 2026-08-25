import { HTMLAttributes, memo, useCallback, useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

// project-imports
import { cn } from "@/lib/utils"

// assets
import { ChevronRightIcon, FileIcon, FolderIcon } from "lucide-react"

export type TreeViewFileItem = { name: string; type: "file"; path?: string }
export type TreeViewFolderItem = {
  name: string
  type: "folder"
  items: TreeViewItem[]
  path?: string
}
export type TreeViewItem = TreeViewFileItem | TreeViewFolderItem

export interface TreeViewProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onSelect"
> {
  data: TreeViewItem[]
  selected?: string
  defaultSelected?: string
  onSelect?: (item: TreeViewFileItem) => void
}

const INDENT_STEP = 12
const FOLDER_BASE_INDENT = 8
const FILE_BASE_INDENT = FOLDER_BASE_INDENT + 20

interface RowProps {
  depth: number
  selectedFile: string | undefined
  onSelect: (item: TreeViewFileItem) => void
}

const TreeFileRow = memo(function TreeFileRow({
  item,
  depth,
  isSelected,
  onSelect,
}: {
  item: TreeViewFileItem
  depth: number
  isSelected: boolean
  onSelect: (item: TreeViewFileItem) => void
}) {
  return (
    <Button
      role="treeitem"
      aria-selected={isSelected}
      variant="ghost"
      size="sm"
      onClick={() => onSelect(item)}
      className={cn(
        "w-full justify-start gap-2 rounded-none hover:bg-accent/50",
        isSelected
          ? "bg-accent font-medium text-accent-foreground"
          : "text-muted-foreground"
      )}
      style={{ paddingLeft: FILE_BASE_INDENT + depth * INDENT_STEP }}
    >
      <FileIcon className="h-4 w-4 shrink-0" />
      <span className="truncate">{item.name}</span>
    </Button>
  )
})

function TreeFolderRow({
  item,
  depth,
  selectedFile,
  onSelect,
}: RowProps & { item: TreeViewFolderItem }) {
  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger
        role="treeitem"
        render={
          <Button
            variant="ghost"
            size="sm"
            className="group w-full justify-start gap-1 transition-none hover:bg-accent hover:text-accent-foreground"
            style={{ paddingLeft: FOLDER_BASE_INDENT + depth * INDENT_STEP }}
          />
        }
      >
        <ChevronRightIcon className="h-4 w-4 shrink-0 transition-transform group-data-[state=open]:rotate-90" />
        <FolderIcon className="h-4 w-4 shrink-0" />
        <span className="truncate">{item.name}</span>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div role="group" className="flex flex-col gap-0.5">
          {item.items.map((child) => (
            <TreeRow
              key={child.path || child.name}
              item={child}
              depth={depth + 1}
              selectedFile={selectedFile}
              onSelect={onSelect}
            />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

function TreeRow({ item, ...rest }: RowProps & { item: TreeViewItem }) {
  if (item.type === "folder") {
    return <TreeFolderRow item={item} {...rest} />
  }
  const identifier = item.path || item.name
  return (
    <TreeFileRow
      item={item}
      depth={rest.depth}
      isSelected={rest.selectedFile === identifier}
      onSelect={rest.onSelect}
    />
  )
}

export function TreeView({
  data,
  selected,
  defaultSelected,
  onSelect,
  className,
  ...props
}: TreeViewProps) {
  const [internalSelected, setInternalSelected] = useState<string | undefined>(
    defaultSelected
  )
  const isControlled = selected !== undefined
  const selectedFile = isControlled ? selected : internalSelected

  const handleSelect = useCallback(
    (item: TreeViewFileItem) => {
      if (!isControlled) {
        setInternalSelected(item.path || item.name)
      }
      onSelect?.(item)
    },
    [isControlled, onSelect]
  )

  return (
    <div className={cn("w-full overflow-y-auto", className)} {...props}>
      <div role="tree" className="flex flex-col gap-0.5 py-2">
        {data.map((item) => (
          <TreeRow
            key={item.path || item.name}
            item={item}
            depth={0}
            selectedFile={selectedFile}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  )
}
