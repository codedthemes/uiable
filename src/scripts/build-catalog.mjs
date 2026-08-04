// Generates public/registry-index.json: a lightweight, searchable catalog of every
// uiable registry item, with the metadata the custom MCP tools need (category,
// description, preview URL, install command, keywords). Run after `shadcn build`.
//
//   node src/scripts/build-catalog.mjs
//
// Output is consumed by packages/uiable-mcp at runtime (via UIABLE_CATALOG / URL).

import { readFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, "../..")

const registry = JSON.parse(
  readFileSync(resolve(root, "registry.json"), "utf8")
)
const uiRegistry = JSON.parse(
  readFileSync(resolve(root, "src/components/uiable/registry.json"), "utf8")
)
const blocksRegistry = JSON.parse(
  readFileSync(
    resolve(root, "src/components/uiable/blocks/registry.json"),
    "utf8"
  )
)
const primitiveRegistry = JSON.parse(
  readFileSync(resolve(root, "src/components/ui/registry.json"), "utf8")
)

// Track which item names belong to the ui primitives registry for kind classification
const primitiveNames = new Set(
  (primitiveRegistry.items || []).map((i) => i.name)
)

registry.items = [
  ...(primitiveRegistry.items || []),
  ...(uiRegistry.items || []),
  ...(blocksRegistry.items || []),
]

// Namespace + base URL. Override via env when publishing; defaults to the
// registry.json homepage (currently a local dev URL — fine until publish).
const NAMESPACE = process.env.UIABLE_NAMESPACE || "@uiable"
const BASE_URL = (
  process.env.UIABLE_BASE_URL ||
  registry.homepage ||
  "http://localhost:3000"
).replace(/\/$/, "")

// ── Custom order for blocks ───────────────────────────────────────────
// Sequence is now controlled via block-sequences.json during registry generation.

// Categories that denote a composable page-level block (vs a primitive component).
const BLOCK_CATEGORIES = new Set([
  "chat",
  "feature",
  "e-commerce",
  "cta",
  "contact",
  "content",
  "faq",
  "statistics",
  "footer",
  "gallery",
  "hero",
  "pricing",
  "process",
  "portfolio",
  "team",
  "testimonial",
  "navbar",
  "auth-layout",
  "dashboard-layout",
  "component-layout",
  "doc-layout",
  "landing",
])

const isBlock = (item) =>
  item.type === "registry:block" ||
  (item.categories || []).some((c) => BLOCK_CATEGORIES.has(c))

// Cheap keyword extraction for server-side search recall.
const keywordsFor = (item) => {
  const text = `${item.title} ${item.description} ${(item.categories || []).join(" ")} ${item.name}`
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/[\s-]+/)
    .filter(
      (w) => w.length > 2 && w !== "uiable" && w !== "variant" && w !== "for"
    )
  return [...new Set(words)]
}

const items = registry.items.map((item) => {
  let kind
  if (isBlock(item)) kind = "block"
  else if (primitiveNames.has(item.name)) kind = "primitive"
  else kind = "component"
  return {
    name: item.name,
    kind,
    type: item.type,
    title: item.title,
    description: item.description,
    categories: item.categories || [],
    dependencies: item.dependencies || [],
    registryDependencies: item.registryDependencies || [],
    files: (item.files || []).map((f) => f.target || f.path),
    keywords: keywordsFor(item),
    addCommand: `npx shadcn@latest add ${NAMESPACE}/${item.name}`,
    url: `${BASE_URL}/r/${item.name}.json`,
    previewUrl: `${BASE_URL}/preview/${item.name}`,
  }
})

const customSort = (aStr, bStr) => {
  const aParts = aStr.split(/(\d+)/)
  const bParts = bStr.split(/(\d+)/)
  for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
    const a = aParts[i] || ""
    const b = bParts[i] || ""
    if (a !== b) {
      const numA = parseInt(a, 10)
      const numB = parseInt(b, 10)
      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB
      }
      return a.localeCompare(b)
    }
  }
  return 0
}

// Apply custom sort dynamically based on extracted sequence metadata.
// Everything else is sorted alphabetically with numeric collation (1, 2 … 10, not 1, 10, 2).
items.sort((a, b) => {
  if (a.order !== undefined && b.order !== undefined) {
    if (a.order !== b.order) return a.order - b.order
  } else if (a.order !== undefined) {
    return -1 // Items with explicit order come first
  } else if (b.order !== undefined) {
    return 1
  }
  return customSort(a.name, b.name)
})

const blocks = items.filter((i) => i.kind === "block")
const primitives = items.filter((i) => i.kind === "primitive")
const components = items.filter((i) => i.kind === "component")

const catalog = {
  name: registry.name,
  namespace: NAMESPACE,
  baseUrl: BASE_URL,
  generatedFrom: "registry.json",
  counts: {
    total: items.length,
    blocks: blocks.length,
    primitives: primitives.length,
    components: components.length,
  },
  categories: [...new Set(items.flatMap((i) => i.categories))].sort(),
  items,
}

const outPath = resolve(root, "public", "registry-index.json")
writeFileSync(outPath, JSON.stringify(catalog, null, 2) + "\n", "utf8")

console.log(
  `Wrote ${outPath}\n  ${catalog.counts.total} items (${catalog.counts.blocks} blocks, ${catalog.counts.components} components, ${catalog.counts.primitives} primitives)\n  ${catalog.categories.length} categories\n  base: ${BASE_URL}  namespace: ${NAMESPACE}`
)
