// Splits the flat output of `shadcn build .registry-build/pro/registry.json`
// into per-type directories so the /r/[name] route can serve a pro item by
// searching {components,blocks,themes} without inspecting file contents.
//
//   node src/scripts/split-pro-registry.mjs
//
// Run after `shadcn build .registry-build/pro/registry.json --output .pro-registry/r-flat`.

import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, "../..")

const flatDir = resolve(root, ".pro-registry/r-flat")
const outRoot = resolve(root, ".pro-registry/r")

const TYPE_TO_DIR = {
  "registry:ui": "components",
  "registry:component": "components",
  "registry:block": "blocks",
  "registry:theme": "themes",
}

const files = readdirSync(flatDir).filter(
  (f) => f.endsWith(".json") && f !== "registry.json"
)

const counts = { components: 0, blocks: 0, themes: 0 }

for (const file of files) {
  const item = JSON.parse(readFileSync(resolve(flatDir, file), "utf8"))
  const dir = TYPE_TO_DIR[item.type]
  if (!dir) {
    console.warn(`Skipping ${file}: unrecognized type "${item.type}"`)
    continue
  }
  const destDir = resolve(outRoot, dir)
  mkdirSync(destDir, { recursive: true })
  writeFileSync(resolve(destDir, file), JSON.stringify(item, null, 2) + "\n", "utf8")
  counts[dir]++
}

console.log(
  `Split ${files.length} pro items -> ${counts.components} components, ${counts.blocks} blocks, ${counts.themes} themes`
)
