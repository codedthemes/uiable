"use client"

import * as React from "react"

// third-party
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

// assets
import { ChevronRight } from "lucide-react"

//  ------------------------------ | TYPES & CONTEXT | ------------------------------  //

interface TreeViewContextValue {
  selectedValues: string[]
  expandedValues: string[]
  toggleExpand: (value: string) => void
  selectItem: (value: string, e?: React.SyntheticEvent) => void
  multiSelect?: boolean
  showGuideLines?: boolean
  guideLineStyle?: "solid" | "dashed" | "dotted"
  indent: number
  dir?: "ltr" | "rtl"
  searchQuery?: string
}

const TreeViewContext = React.createContext<TreeViewContextValue | null>(null)

export function useTreeView() {
  const context = React.useContext(TreeViewContext)
  if (!context) {
    throw new Error("useTreeView must be used within a <TreeView />")
  }
  return context
}

interface TreeItemContextValue {
  value: string
  level: number
  isExpanded: boolean
  isSelected: boolean
  hasChildren: boolean
  disabled?: boolean
}

const TreeItemContext = React.createContext<TreeItemContextValue | null>(null)

export function useTreeItem() {
  const context = React.useContext(TreeItemContext)
  if (!context) {
    throw new Error("useTreeItem must be used within a <TreeItem />")
  }
  return context
}

//  ------------------------------ | TREE VIEW ROOT | ------------------------------  //

const treeViewVariants = cva(
  "group/tree flex w-full flex-col font-sans text-sm select-none",
  {
    variants: {
      variant: {
        default: "",
        bordered: "rounded-xl border border-border/80 bg-card p-2 shadow-xs",
        ghost: "bg-transparent",
      },
      size: {
        sm: "text-xs [--tree-item-height:1.75rem]",
        default: "text-sm [--tree-item-height:2.125rem]",
        lg: "text-base [--tree-item-height:2.5rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface TreeViewProps
  extends
    Omit<React.ComponentProps<"div">, "defaultValue">,
    VariantProps<typeof treeViewVariants> {
  value?: string | string[]
  defaultValue?: string | string[]
  onValueChange?: (value: string | string[]) => void
  expandedValues?: string[]
  defaultExpandedValues?: string[]
  onExpandedChange?: (expanded: string[]) => void
  multiSelect?: boolean
  showGuideLines?: boolean
  guideLineStyle?: "solid" | "dashed" | "dotted"
  indent?: number
  dir?: "ltr" | "rtl"
  searchQuery?: string
}

function TreeView({
  className,
  variant,
  size,
  value,
  defaultValue,
  onValueChange,
  expandedValues: controlledExpanded,
  defaultExpandedValues = [],
  onExpandedChange,
  multiSelect = false,
  showGuideLines = false,
  guideLineStyle = "solid",
  indent = 18,
  dir = "ltr",
  searchQuery = "",
  children,
  ...props
}: TreeViewProps) {
  // Selected state
  const isControlledValue = value !== undefined
  const [internalSelected, setInternalSelected] = React.useState<string[]>(
    () => {
      if (defaultValue) {
        return Array.isArray(defaultValue) ? defaultValue : [defaultValue]
      }
      return []
    }
  )

  const selectedValues = React.useMemo(() => {
    if (isControlledValue) {
      return Array.isArray(value) ? value : value ? [value] : []
    }
    return internalSelected
  }, [isControlledValue, value, internalSelected])

  // Expanded state
  const isControlledExpanded = controlledExpanded !== undefined
  const [internalExpanded, setInternalExpanded] = React.useState<string[]>(
    defaultExpandedValues
  )

  const expandedValues = React.useMemo(() => {
    return isControlledExpanded ? controlledExpanded : internalExpanded
  }, [isControlledExpanded, controlledExpanded, internalExpanded])

  const toggleExpand = React.useCallback(
    (itemValue: string) => {
      const next = expandedValues.includes(itemValue)
        ? expandedValues.filter((v) => v !== itemValue)
        : [...expandedValues, itemValue]

      if (!isControlledExpanded) {
        setInternalExpanded(next)
      }
      onExpandedChange?.(next)
    },
    [expandedValues, isControlledExpanded, onExpandedChange]
  )

  const selectItem = React.useCallback(
    (itemValue: string) => {
      let next: string[]
      if (multiSelect) {
        next = selectedValues.includes(itemValue)
          ? selectedValues.filter((v) => v !== itemValue)
          : [...selectedValues, itemValue]
      } else {
        next = selectedValues.includes(itemValue) ? [] : [itemValue]
      }

      if (!isControlledValue) {
        setInternalSelected(next)
      }
      onValueChange?.(multiSelect ? next : next[0] || "")
    },
    [multiSelect, selectedValues, isControlledValue, onValueChange]
  )

  return (
    <TreeViewContext.Provider
      value={{
        selectedValues,
        expandedValues,
        toggleExpand,
        selectItem,
        multiSelect,
        showGuideLines,
        guideLineStyle,
        indent,
        dir,
        searchQuery,
      }}
    >
      <div
        role="tree"
        aria-multiselectable={multiSelect}
        data-slot="tree-view"
        data-guidelines={showGuideLines ? "true" : undefined}
        dir={dir}
        className={cn(treeViewVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </div>
    </TreeViewContext.Provider>
  )
}

//  ------------------------------ | TREE ITEM | ------------------------------  //

export interface TreeItemProps extends React.ComponentProps<"div"> {
  value: string
  hasChildren?: boolean
  disabled?: boolean
  level?: number
}

function TreeItem({
  value,
  hasChildren = false,
  disabled = false,
  level = 0,
  className,
  children,
  ...props
}: TreeItemProps) {
  const { expandedValues, selectedValues, indent } = useTreeView()
  const isExpanded = expandedValues.includes(value)
  const isSelected = selectedValues.includes(value)

  return (
    <TreeItemContext.Provider
      value={{
        value,
        level,
        isExpanded,
        isSelected,
        hasChildren,
        disabled,
      }}
    >
      <div
        role="treeitem"
        data-slot="tree-item"
        data-value={value}
        data-level={level}
        data-expanded={hasChildren ? isExpanded : undefined}
        data-selected={isSelected}
        data-disabled={disabled}
        aria-expanded={hasChildren ? isExpanded : undefined}
        aria-selected={isSelected}
        aria-disabled={disabled}
        style={
          {
            "--tree-item-level": level,
            "--tree-indent": `${indent}px`,
          } as React.CSSProperties
        }
        className={cn("group/item relative flex flex-col", className)}
        {...props}
      >
        {children}
      </div>
    </TreeItemContext.Provider>
  )
}

//  ------------------------------ | TREE ITEM ROW / TRIGGER | ------------------------------  //

const treeItemRowVariants = cva(
  "group/row relative flex w-full items-center gap-2 rounded-lg px-2 text-foreground transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      activeStyle: {
        default:
          "hover:bg-accent/60 data-[selected=true]:bg-accent data-[selected=true]:font-medium data-[selected=true]:text-accent-foreground",
        subtle:
          "hover:bg-muted/50 data-[selected=true]:bg-primary/10 data-[selected=true]:font-medium data-[selected=true]:text-primary",
        indicator:
          "hover:bg-accent/50 data-[selected=true]:bg-accent/80 before:data-[selected=true]:absolute before:data-[selected=true]:top-1.5 before:data-[selected=true]:bottom-1.5 before:data-[selected=true]:left-0 before:data-[selected=true]:w-1 before:data-[selected=true]:rounded-full before:data-[selected=true]:bg-primary",
      },
    },
    defaultVariants: {
      activeStyle: "default",
    },
  }
)

export interface TreeItemRowProps
  extends
    React.ComponentProps<"div">,
    VariantProps<typeof treeItemRowVariants> {
  onToggleExpand?: () => void
  disabled?: boolean
}

function TreeItemRow({
  className,
  activeStyle,
  onClick,
  onKeyDown,
  children,
  disabled: propDisabled,
  ...props
}: TreeItemRowProps) {
  const { selectItem, toggleExpand, indent } = useTreeView()
  const {
    value,
    level,
    disabled: contextDisabled,
    isSelected,
    hasChildren,
    isExpanded,
  } = useTreeItem()
  const disabled = propDisabled ?? contextDisabled

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return
    onClick?.(e)
    if (!e.defaultPrevented) {
      selectItem(value)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(e)
    if (e.defaultPrevented || disabled) return

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      selectItem(value)
    } else if (e.key === "ArrowRight") {
      if (hasChildren && !isExpanded) {
        e.preventDefault()
        toggleExpand(value)
      }
    } else if (e.key === "ArrowLeft") {
      if (hasChildren && isExpanded) {
        e.preventDefault()
        toggleExpand(value)
      }
    }
  }

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      data-slot="tree-item-row"
      data-selected={isSelected}
      data-expanded={isExpanded}
      data-disabled={disabled}
      aria-disabled={disabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={{
        paddingLeft:
          level > 0 ? `calc(${level * indent}px + 0.5rem)` : undefined,
        minHeight: "var(--tree-item-height, 2.125rem)",
      }}
      className={cn(
        "cursor-pointer",
        treeItemRowVariants({ activeStyle, className })
      )}
      {...props}
    >
      {children}
    </div>
  )
}

//  ------------------------------ | TREE ITEM TOGGLE / CHEVRON | ------------------------------  //

export interface TreeItemToggleProps extends React.ComponentProps<"span"> {
  icon?: React.ReactNode
}

function TreeItemToggle({
  className,
  icon,
  onClick,
  ...props
}: TreeItemToggleProps) {
  const { toggleExpand } = useTreeView()
  const { value, isExpanded, hasChildren, disabled } = useTreeItem()

  if (!hasChildren) {
    return (
      <span className={cn("size-4 shrink-0", className)} aria-hidden="true" />
    )
  }

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation()
    if (disabled) return
    onClick?.(e)
    if (!e.defaultPrevented) {
      toggleExpand(value)
    }
  }

  return (
    <span
      role="button"
      tabIndex={-1}
      data-slot="tree-item-toggle"
      data-expanded={isExpanded}
      onClick={handleClick}
      aria-label={isExpanded ? "Collapse" : "Expand"}
      className={cn(
        "flex size-5 shrink-0 cursor-pointer items-center justify-center rounded-sm text-muted-foreground/70 transition-all hover:bg-muted hover:text-foreground active:scale-90",
        className
      )}
      {...props}
    >
      {icon ? (
        icon
      ) : (
        <ChevronRight
          className={cn(
            "size-3.5 transition-transform duration-200 ease-in-out",
            isExpanded && "rotate-90 text-foreground"
          )}
        />
      )}
    </span>
  )
}

//  ------------------------------ | TREE ITEM ICON | ------------------------------  //

function TreeItemIcon({
  className,
  children,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="tree-item-icon"
      className={cn(
        "flex size-4.5 shrink-0 items-center justify-center text-muted-foreground transition-colors group-data-[selected=true]/row:text-primary [&>svg]:size-4",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

//  ------------------------------ | TREE ITEM LABEL | ------------------------------  //

export interface TreeItemLabelProps extends React.ComponentProps<"span"> {
  highlightMatch?: boolean
}

function TreeItemLabel({
  className,
  highlightMatch = true,
  children,
  ...props
}: TreeItemLabelProps) {
  const { searchQuery } = useTreeView()

  const renderedContent = React.useMemo(() => {
    if (!highlightMatch || !searchQuery || typeof children !== "string") {
      return children
    }

    const query = searchQuery.trim().toLowerCase()
    if (!query) return children

    const text = children
    const index = text.toLowerCase().indexOf(query)
    if (index === -1) return children

    const before = text.substring(0, index)
    const match = text.substring(index, index + query.length)
    const after = text.substring(index + query.length)

    return (
      <>
        {before}
        <mark className="rounded-xs bg-primary/20 px-0.5 font-semibold text-foreground">
          {match}
        </mark>
        {after}
      </>
    )
  }, [children, highlightMatch, searchQuery])

  return (
    <span
      data-slot="tree-item-label"
      className={cn("flex-1 truncate text-left font-normal", className)}
      {...props}
    >
      {renderedContent}
    </span>
  )
}

//  ------------------------------ | TREE ITEM BADGE | ------------------------------  //

function TreeItemBadge({
  className,
  children,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="tree-item-badge"
      className={cn(
        "ml-auto flex items-center justify-center rounded-md bg-muted px-1.5 py-0.5 text-[11px] font-medium text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

//  ------------------------------ | TREE ITEM ACTIONS | ------------------------------  //

function TreeItemActions({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="tree-item-actions"
      onClick={(e) => e.stopPropagation()}
      className={cn(
        "ml-auto flex items-center gap-1 opacity-0 transition-opacity duration-150 group-focus-within/row:opacity-100 group-hover/row:opacity-100",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

//  ------------------------------ | TREE ITEM CONTENT (CHILDREN CONTAINER) | ------------------------------  //

export interface TreeItemContentProps extends React.ComponentProps<"div"> {
  animated?: boolean
}

function TreeItemContent({
  className,
  animated = true,
  children,
  ...props
}: TreeItemContentProps) {
  const { showGuideLines, guideLineStyle, indent } = useTreeView()
  const { isExpanded, hasChildren, level } = useTreeItem()

  if (!hasChildren || !isExpanded) {
    return null
  }

  const borderStyleClass =
    guideLineStyle === "dashed"
      ? "border-dashed"
      : guideLineStyle === "dotted"
        ? "border-dotted"
        : "border-solid"

  return (
    <div
      role="group"
      data-slot="tree-item-content"
      data-guidelines={showGuideLines ? "true" : undefined}
      className={cn(
        "relative flex flex-col transition-all duration-200 ease-in-out",
        animated && "animate-in duration-200 fade-in-50",
        className
      )}
      style={{
        ...props.style,
      }}
      {...props}
    >
      {showGuideLines && (
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute top-0 bottom-2 border-l border-border/80",
            borderStyleClass
          )}
          style={{
            left: `calc(${(level + 1) * indent}px - 2px)`,
          }}
        />
      )}
      {children}
    </div>
  )
}

export {
  TreeView,
  TreeItem,
  TreeItemRow,
  TreeItemToggle,
  TreeItemIcon,
  TreeItemLabel,
  TreeItemBadge,
  TreeItemActions,
  TreeItemContent,
  treeViewVariants,
  treeItemRowVariants,
}
