// project-imports
import { TreeViewItem } from "@/components/tree-view"

export function buildFileTree(paths: string[]): TreeViewItem[] {
  const root: TreeViewItem[] = []

  for (const path of paths) {
    const parts = path.split("/")
    let currentLevel = root

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      const isFile = i === parts.length - 1

      let existingNode = currentLevel.find((node) => node.name === part)

      if (!existingNode) {
        if (isFile) {
          existingNode = { name: part, type: "file", path: path }
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

  return root
}
