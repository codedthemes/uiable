// project-imports
import { TreeViewItem, TreeViewFolderItem } from "@/components/tree-view"

export interface TreeFileInput {
  /** Raw registry path — kept as the node identifier for source lookups. */
  path: string
  /** Canonical install destination, e.g. "src/branding.json". */
  target?: string
}

// Registry `target` values use shadcn path aliases; expand them so the tree
// reads as a real, copy-pasteable location under `src/`.
const TARGET_ALIASES: Record<string, string> = {
  "@components": "src/components",
  "@lib": "src/lib",
  "@hooks": "src/hooks",
  "@ui": "src/components/ui",
}

/**
 * Resolve a file to its full path from the project root (`src/...`).
 *
 * Prefers the registry `target` (the canonical install location) and falls
 * back to `path`, collapsing any leading `./` / `../` segments so shared
 * files like `../../../branding.json` render as `src/branding.json`.
 */
export function resolveDisplayPath({ path, target }: TreeFileInput): string {
  const raw = (target?.trim() || path).replace(/\\/g, "/")
  const resolved: string[] = []

  for (const segment of raw.split("/")) {
    if (!segment || segment === ".") continue
    if (segment === "..") {
      resolved.pop()
      continue
    }
    resolved.push(segment)
  }

  const aliasKey = resolved[0]
  if (aliasKey && TARGET_ALIASES[aliasKey]) {
    resolved.splice(0, 1, ...TARGET_ALIASES[aliasKey].split("/"))
  }

  if (resolved[0] !== "src") {
    resolved.unshift("src")
  }

  return resolved.join("/")
}

/**
 * Merge folder chains that have a single sub-folder and nothing else into one
 * node (`src` + `components` + `uiable` -> `src/components/uiable`) so the row
 * shows a full, copy-pasteable path instead of a deep staircase of folders.
 */
function collapseFolderChains(nodes: TreeViewItem[]): TreeViewItem[] {
  return nodes.map((node) => {
    if (node.type !== "folder") return node

    let current: TreeViewFolderItem = node
    while (current.items.length === 1 && current.items[0].type === "folder") {
      const child = current.items[0] as TreeViewFolderItem
      current = {
        ...child,
        name: `${current.name}/${child.name}`,
      }
    }

    return { ...current, items: collapseFolderChains(current.items) }
  })
}

export function buildFileTree(
  files: Array<string | TreeFileInput>
): TreeViewItem[] {
  const root: TreeViewItem[] = []

  for (const file of files) {
    const input: TreeFileInput =
      typeof file === "string" ? { path: file } : file
    const displayPath = resolveDisplayPath(input)
    const parts = displayPath.split("/")
    let currentLevel = root

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      const isFile = i === parts.length - 1

      let existingNode = currentLevel.find((node) => node.name === part)

      if (!existingNode) {
        if (isFile) {
          // Keep the original registry path as the identifier so source
          // lookups and selection state keep working.
          existingNode = { name: part, type: "file", path: input.path }
        } else {
          existingNode = { name: part, type: "folder", items: [] }
        }
        currentLevel.push(existingNode)
      }

      if (existingNode.type === "folder") {
        currentLevel = existingNode.items
      }
    }
  }

  return collapseFolderChains(root)
}
