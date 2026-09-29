"use client"

import { useState } from "react"

// shadcn
import {
  TreeView,
  TreeItem,
  TreeItemRow,
  TreeItemToggle,
  TreeItemLabel,
  TreeItemBadge,
  TreeItemContent,
} from "@/components/ui/tree-view"

// third-party
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { cn } from "cn"

// assets
import { CheckIcon, MinusIcon } from "lucide-react"

// Custom Checkbox supporting indeterminate icon
function TreeCheckbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer relative flex size-[17.5px] shrink-0 items-center justify-center rounded-[4px] border transition-colors outline-none",
        "border-border dark:bg-input/30",
        "data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
        "data-indeterminate:border-primary data-indeterminate:bg-primary data-indeterminate:text-primary-foreground dark:data-indeterminate:bg-primary",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none [&>svg]:size-3 [&>svg]:stroke-3"
        render={(indicatorProps, state) => (
          <span {...indicatorProps}>
            {state.indeterminate ? <MinusIcon /> : <CheckIcon />}
          </span>
        )}
      />
    </CheckboxPrimitive.Root>
  )
}

interface PermissionNode {
  id: string
  label: string
  children?: PermissionNode[]
}

const PERMISSIONS_DATA: PermissionNode[] = [
  {
    id: "user-management",
    label: "User Management",
    children: [
      { id: "users-view", label: "View Users" },
      { id: "users-create", label: "Create & Invite Users" },
      { id: "users-edit", label: "Edit Roles & Permissions" },
      { id: "users-delete", label: "Delete & Suspend Users" },
    ],
  },
  {
    id: "database-access",
    label: "Database & Storage",
    children: [
      { id: "db-read", label: "Read Collections" },
      { id: "db-write", label: "Insert & Update Records" },
      { id: "db-schema", label: "Modify Schema & Migrations" },
    ],
  },
  {
    id: "infrastructure",
    label: "Infrastructure & API",
    children: [
      { id: "api-keys", label: "Generate & Revoke API Keys" },
      { id: "deployments", label: "Trigger Deployments" },
      { id: "audit-logs", label: "Access Security Audit Logs" },
    ],
  },
]

//  ------------------------------ | TREE VIEW - CHECKBOX SELECT | ------------------------------  //

export default function TreeViewCheckboxSelect() {
  const [selected, setSelected] = useState<string[]>([
    "users-view",
    "users-create",
    "db-read",
  ])
  const [expanded, setExpanded] = useState<string[]>([
    "user-management",
    "database-access",
    "infrastructure",
  ])

  // Helper to collect all child IDs for a node
  const getAllChildIds = (node: PermissionNode): string[] => {
    if (!node.children || node.children.length === 0) return [node.id]
    return node.children.flatMap(getAllChildIds)
  }

  // Determine state of parent: true (all checked), false (none), "indeterminate" (some)
  const isNodeChecked = (node: PermissionNode): boolean => {
    if (!node.children || node.children.length === 0) {
      return selected.includes(node.id)
    }
    const childIds = getAllChildIds(node)
    return childIds.length > 0 && childIds.every((id) => selected.includes(id))
  }

  const isNodeIndeterminate = (node: PermissionNode): boolean => {
    if (!node.children || node.children.length === 0) {
      return false
    }
    const childIds = getAllChildIds(node)
    const checkedCount = childIds.filter((id) => selected.includes(id)).length
    return checkedCount > 0 && checkedCount < childIds.length
  }

  // Toggle selection
  const handleToggleNode = (node: PermissionNode, e: React.MouseEvent) => {
    e.stopPropagation()
    const childIds = getAllChildIds(node)
    const isAllSelected = childIds.every((id) => selected.includes(id))

    if (isAllSelected) {
      setSelected((prev) => prev.filter((id) => !childIds.includes(id)))
    } else {
      setSelected((prev) => Array.from(new Set([...prev, ...childIds])))
    }
  }

  return (
    <TreeView
      expandedValues={expanded}
      onExpandedChange={setExpanded}
      className="w-full max-w-sm gap-1 rounded-lg p-2"
    >
      {PERMISSIONS_DATA.map((group) => {
        const checked = isNodeChecked(group)
        const indeterminate = isNodeIndeterminate(group)
        const childIds = getAllChildIds(group)
        const selectedChildrenCount = childIds.filter((id) =>
          selected.includes(id)
        ).length

        return (
          <TreeItem key={group.id} value={group.id} hasChildren level={0}>
            <TreeItemRow activeStyle="subtle">
              <TreeItemToggle />
              <div
                className="flex items-center justify-center p-1"
                onClick={(e) => handleToggleNode(group, e)}
              >
                <TreeCheckbox
                  checked={checked}
                  indeterminate={indeterminate}
                  className="cursor-pointer"
                />
              </div>
              <TreeItemLabel>{group.label}</TreeItemLabel>
              <TreeItemBadge>
                {selectedChildrenCount}/{childIds.length}
              </TreeItemBadge>
            </TreeItemRow>

            <TreeItemContent>
              {group.children?.map((child) => {
                const isChecked = selected.includes(child.id)

                return (
                  <TreeItem key={child.id} value={child.id} level={1}>
                    <TreeItemRow
                      activeStyle="subtle"
                      onClick={(e) => handleToggleNode(child, e)}
                    >
                      <TreeItemToggle />
                      <div className="flex items-center justify-center p-1">
                        <TreeCheckbox
                          checked={isChecked}
                          className="cursor-pointer"
                        />
                      </div>
                      <TreeItemLabel>{child.label}</TreeItemLabel>
                    </TreeItemRow>
                  </TreeItem>
                )
              })}
            </TreeItemContent>
          </TreeItem>
        )
      })}
    </TreeView>
  )
}
