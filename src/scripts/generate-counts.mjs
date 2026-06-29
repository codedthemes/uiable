//  ------------------------------ | SCRIPT - GENERATE COUNTS | ------------------------------  //

import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, "../..")
const registry = JSON.parse(
  fs.readFileSync(path.join(root, "registry.json"), "utf8")
)
const uiRegistry = JSON.parse(
  fs.readFileSync(
    path.join(root, "src/components/uiable/registry.json"),
    "utf8"
  )
)
const blocksRegistry = JSON.parse(
  fs.readFileSync(
    path.join(root, "src/components/uiable/blocks/registry.json"),
    "utf8"
  )
)
registry.items = [...(uiRegistry.items || []), ...(blocksRegistry.items || [])]

const counts = {}
registry.items.forEach((item) => {
  if (item.categories) {
    item.categories.forEach((cat) => {
      counts[cat] = (counts[cat] || 0) + 1
    })
  }
})
fs.writeFileSync(
  path.join(root, "src/category-counts.json"),
  JSON.stringify(counts, null, 2)
)
