// Splits the unified source registries (src/components/uiable/**/registry.json,
// each item optionally flagged "pro": true) into two clean registry.json
// files for `shadcn build` to consume separately — one for the public static
// output (public/r/**), one for the auth-gated pro output
// (.pro-registry/**). The "pro" flag is stripped before either file is
// written, so it never reaches the shadcn CLI or a consumer's installed code.
//
//   node src/scripts/split-registry-by-tier.mjs
//
// Run before `shadcn build .registry-build/public/registry.json --output public/r`
// or `shadcn build .registry-build/pro/registry.json --output .pro-registry/r-flat`.

// third-party
import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, relative, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, "../..")

const rootRegistry = JSON.parse(
  readFileSync(resolve(root, "registry.json"), "utf8")
)

// Item `files[].path` values are relative to the registry.json that declares
// them. Since the split output lives in a different directory, resolve each
// path to absolute here so it can be re-relativized against the new location
// when written out below.
const allItems = (rootRegistry.include || []).flatMap((relPath) => {
  const sourceDir = dirname(resolve(root, relPath))
  const included = JSON.parse(readFileSync(resolve(root, relPath), "utf8"))
  return (included.items || []).map((item) => {
    if (!item.files) return item
    return {
      ...item,
      files: item.files.map((file) => ({
        ...file,
        path: resolve(sourceDir, file.path),
      })),
    }
  })
})

const publicItems = []
const proItems = []

for (const item of allItems) {
  const { pro, ...rest } = item
  ;(pro ? proItems : publicItems).push(rest)
}

function toPosix(p) {
  return p.split("\\").join("/")
}

// Written as paths relative to the repo root (not to the split registry.json's
// own directory) — `shadcn build` resolves `files[].path` against its current
// working directory (always the repo root, since it's invoked via `npm run`),
// not against the registry.json file's location, despite what its own error
// messages suggest. A multi-level `../../`-style path relative to the split
// file's directory, or an absolute path, both get echoed verbatim into the
// aggregate `registry.json` output instead of being normalized — so either
// one leaks either a broken relative path or this machine's absolute path
// into committed output. Root-relative paths are what the per-item output
// files already show, confirming this is what `shadcn build` expects.
function writeRegistry(dir, name, items) {
  const outDir = resolve(root, dir)
  mkdirSync(outDir, { recursive: true })
  const relativizedItems = items.map((item) => {
    if (!item.files) return item
    return {
      ...item,
      files: item.files.map((file) => ({
        ...file,
        path: toPosix(relative(root, file.path)),
      })),
    }
  })
  writeFileSync(
    resolve(outDir, "registry.json"),
    JSON.stringify(
      {
        $schema: "https://ui.shadcn.com/schema/registry.json",
        name,
        homepage: rootRegistry.homepage,
        items: relativizedItems,
      },
      null,
      2
    ) + "\n",
    "utf8"
  )
}

writeRegistry(".registry-build/public", rootRegistry.name, publicItems)
writeRegistry(".registry-build/pro", `${rootRegistry.name}-pro`, proItems)

console.log(
  `Split ${allItems.length} items -> ${publicItems.length} public, ${proItems.length} pro`
)
