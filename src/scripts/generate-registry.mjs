// third-party
import fs from "fs"
import path from "path"
import prettier from "prettier"

// ---------------------------------------------------------------------------
// Layout constants
// ---------------------------------------------------------------------------

const ROOT = process.cwd()
const SRC_DIR = path.join(ROOT, "src")
const UI_DIR = path.join(SRC_DIR, "components", "ui")
const UIABLE_DIR = path.join(SRC_DIR, "components", "uiable")
const BLOCKS_DIR = path.join(UIABLE_DIR, "blocks")

// `cn` — shadcn's own `init` writes this file and its transformer rewrites
// `@/lib/utils` to whatever alias the consumer configured, so bundling ours
// would clobber theirs. Traced but never emitted.
const UTILS_FILE = path.join(SRC_DIR, "lib", "utils.ts")

// Tried in order when an import has no extension, both as `<path><ext>` and
// as `<path>/index<ext>`, mirroring how tsc/bundlers resolve `@/foo`.
const RESOLVE_EXTENSIONS = [
  ".tsx",
  ".ts",
  ".jsx",
  ".js",
  ".mjs",
  ".cjs",
  ".json",
]

// Provided by the consumer's own framework install — never emitted as an npm
// dependency. Matched after the specifier is reduced to its package name, so
// subpath imports (`next/link`, `react-dom/client`) are excluded too.
const IGNORED_PACKAGES = new Set(["react", "react-dom", "next"])

// True for real component source files — excludes *.test.tsx/*.spec.tsx so
// test files never get their own registry entry.
function isSourceComponentFile(name) {
  return (
    (name.endsWith(".tsx") || name.endsWith(".ts")) &&
    !name.endsWith(".test.tsx") &&
    !name.endsWith(".test.ts") &&
    !name.endsWith(".spec.tsx") &&
    !name.endsWith(".spec.ts")
  )
}

// Only write if content has actually changed (normalizes line endings)
async function smartWriteFileSync(filePath, content) {
  if (filePath.endsWith(".json")) {
    content = await prettier.format(content, {
      parser: "json",
      printWidth: 1000,
    })
  }
  if (fs.existsSync(filePath)) {
    const existing = fs.readFileSync(filePath, "utf8")
    if (existing.replace(/\r\n/g, "\n") === content.replace(/\r\n/g, "\n")) {
      return // Content unchanged — skip write
    }
  }
  fs.writeFileSync(filePath, content)
}

function readExistingBadges(registryPath) {
  const badges = new Map()
  if (!fs.existsSync(registryPath)) return badges
  try {
    const existing = JSON.parse(fs.readFileSync(registryPath, "utf8"))
    for (const item of existing.items || []) {
      if (item.badge) badges.set(item.name, item.badge)
    }
  } catch (e) {
    console.error(`Could not read badges from ${registryPath}`, e)
  }
  return badges
}

function applyBadges(items, badges) {
  return items.map((item) => {
    const badge = badges.get(item.name)
    if (!badge) return item
    const { name, type, title, description, ...rest } = item
    return { name, type, title, description, badge, ...rest }
  })
}

function readBlockNameList(filePath) {
  const names = []
  if (fs.existsSync(filePath)) {
    try {
      const rawData = JSON.parse(fs.readFileSync(filePath, "utf-8"))
      if (Array.isArray(rawData)) {
        names.push(...rawData)
      } else {
        for (const key in rawData) {
          if (Array.isArray(rawData[key])) {
            names.push(...rawData[key])
          }
        }
      }
    } catch (e) {
      console.error(`Could not parse ${path.basename(filePath)}`, e)
    }
  }
  return names
}

const blockSequencesPath = path.join(
  process.cwd(),
  "src",
  "data",
  "block-sequences.json"
)
const blockSequences = readBlockNameList(blockSequencesPath)

const proBlocksPath = path.join(process.cwd(), "src", "data", "pro-blocks.json")
const proBlockNames = new Set(readBlockNameList(proBlocksPath))

const proComponentsPath = path.join(
  process.cwd(),
  "src",
  "data",
  "pro-components.json"
)
const proComponentNames = new Set(readBlockNameList(proComponentsPath))

// Theme tokens that live in our globals.css but that shadcn's `init` never
// writes — a consumer installing a component that uses one would get the markup
// with no animation. Items are matched by utility class and carry the token
// (and its keyframes) along in the payload.
const themeExtensionsPath = path.join(
  process.cwd(),
  "src",
  "data",
  "theme-extensions.json"
)
const themeExtensions = (() => {
  if (!fs.existsSync(themeExtensionsPath)) return []
  try {
    const raw = JSON.parse(fs.readFileSync(themeExtensionsPath, "utf-8"))
    return (raw.extensions || []).filter((e) => e && e.utility)
  } catch (e) {
    console.error("Could not parse theme-extensions.json", e)
    return []
  }
})()

// Helper to get title case
function toTitleCase(str) {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

// Robust custom numeric sort function
function customSort(aStr, bStr) {
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

// ---------------------------------------------------------------------------
// Local module resolution
// ---------------------------------------------------------------------------

function toPosix(p) {
  return p.split("\\").join("/")
}

// True when `file` sits inside `dir` (a file equal to `dir` is not "within").
function isWithin(dir, file) {
  const rel = path.relative(dir, file)
  return rel !== "" && !rel.startsWith("..") && !path.isAbsolute(rel)
}

function isFile(candidate) {
  return fs.existsSync(candidate) && fs.statSync(candidate).isFile()
}

// Resolves a local import specifier to an absolute file on disk, or null when
// it is a bare npm specifier or points at something that doesn't exist.
//
// `@/x` maps to `src/x` and `@/public/x` to `public/x` per tsconfig `paths`;
// `~/x` and relative specifiers resolve the way a bundler would, including
// extensionless files and directory `index.*` barrels.
function resolveLocalImport(importPath, importerFile) {
  let base
  if (importPath.startsWith("@/public/")) {
    base = path.join(ROOT, "public", importPath.slice("@/public/".length))
  } else if (importPath.startsWith("@/")) {
    base = path.join(SRC_DIR, importPath.slice(2))
  } else if (importPath.startsWith("~/")) {
    base = path.join(ROOT, importPath.slice(2))
  } else if (importPath.startsWith(".")) {
    base = path.resolve(path.dirname(importerFile), importPath)
  } else {
    return null // bare npm specifier
  }

  if (isFile(base)) return base

  for (const ext of RESOLVE_EXTENSIONS) {
    if (isFile(base + ext)) return base + ext
  }

  if (fs.existsSync(base) && fs.statSync(base).isDirectory()) {
    for (const ext of RESOLVE_EXTENSIONS) {
      const indexFile = path.join(base, `index${ext}`)
      if (isFile(indexFile)) return indexFile
    }
  }

  return null
}

// Reduces a bare specifier to its installable package name, keeping the scope
// for scoped packages (`@radix-ui/react-slot/foo` -> `@radix-ui/react-slot`).
function toPackageName(importPath) {
  if (importPath.startsWith("@")) {
    const parts = importPath.split("/")
    return parts.length > 1 ? `${parts[0]}/${parts[1]}` : importPath
  }
  return importPath.split("/")[0]
}

// The registry item name a standalone component file is published under —
// matches how generateUiRegistry/generateUiableRegistry name their items, so
// every `@uiable/<name>` we emit resolves to a real entry.
function registryItemName(absFile) {
  const base = path.basename(absFile).replace(/\.(tsx|ts|jsx|js)$/, "")
  if (base === "index") return path.basename(path.dirname(absFile))
  return base
}

// A file that ships as its own registry entry, so dependents reference it by
// name instead of inlining a copy. Everything under `blocks/` is deliberately
// excluded: block internals (`blocks/landing/components/*`) are private helpers
// that only ever ship bundled with their parent block.
function isRegistryItemFile(absFile) {
  if (isWithin(BLOCKS_DIR, absFile)) return false
  return isWithin(UI_DIR, absFile) || isWithin(UIABLE_DIR, absFile)
}

// Matches `from "x"`, `import("x")`, `require("x")` and bare `import "x"`.
const MODULE_SPECIFIER_REGEXES = [
  /(?:from|import\(|require\()\s*['"]([^'"]+)['"]/g,
  /\bimport\s+['"]([^'"]+)['"]/g,
]

function readModuleSpecifiers(absFile) {
  if (absFile.endsWith(".json")) return [] // data files have no imports
  const content = fs.readFileSync(absFile, "utf-8")
  const specifiers = []
  for (const regex of MODULE_SPECIFIER_REGEXES) {
    regex.lastIndex = 0
    let match
    while ((match = regex.exec(content)) !== null) {
      specifiers.push(match[1])
    }
  }
  return specifiers
}

const unresolvedImports = new Map()

function noteUnresolved(importPath, importerFile) {
  const importers = unresolvedImports.get(importPath) || new Set()
  importers.add(toPosix(path.relative(ROOT, importerFile)))
  unresolvedImports.set(importPath, importers)
}

// Walks an item's own source files and every local file they reach, collecting
// what the shadcn CLI needs to install the item into a fresh project:
//
//   localFiles          extra on-disk files to bundle (assets, private helpers,
//                       shared hooks/lib) that live outside the item's folder
//   registryDependencies other registry entries to install first
//   dependencies        npm packages to install
//
// Recursion stops at files that are registry entries in their own right (they
// carry their own dependency payload) and at bare npm specifiers.
function traceDependencies(entryFiles) {
  const localFiles = new Set()
  const registryDependencies = new Set()
  const dependencies = new Set()
  const seen = new Set()

  function visit(absFile) {
    if (seen.has(absFile)) return
    seen.add(absFile)

    for (const importPath of readModuleSpecifiers(absFile)) {
      const resolved = resolveLocalImport(importPath, absFile)

      if (!resolved) {
        if (
          importPath.startsWith(".") ||
          importPath.startsWith("@/") ||
          importPath.startsWith("~/")
        ) {
          // Looks local but isn't on disk — record it rather than silently
          // shipping an item that cannot compile once installed.
          noteUnresolved(importPath, absFile)
          continue
        }
        const pkgName = toPackageName(importPath)
        if (!IGNORED_PACKAGES.has(pkgName) && !pkgName.startsWith("node:")) {
          dependencies.add(pkgName)
        }
        continue
      }

      if (resolved === UTILS_FILE) continue

      if (isRegistryItemFile(resolved)) {
        registryDependencies.add(`@uiable/${registryItemName(resolved)}`)
        continue
      }

      localFiles.add(resolved)
      visit(resolved)
    }
  }

  for (const entry of entryFiles) visit(entry)

  // An item's own files are emitted by the caller; drop them here so a helper
  // that a sibling imports isn't listed twice.
  for (const entry of entryFiles) localFiles.delete(entry)

  return {
    localFiles: Array.from(localFiles).sort(),
    registryDependencies: Array.from(registryDependencies).sort(),
    dependencies: Array.from(dependencies).sort(),
  }
}

// `registry:file` entries must carry an explicit target, which we always set;
// hook/lib typing just gives the CLI a sensible home for shared helpers.
function registryFileType(absFile) {
  if (!/\.(tsx|ts|jsx|js|mjs|cjs)$/.test(absFile)) return "registry:file"
  if (isWithin(path.join(SRC_DIR, "hooks"), absFile)) return "registry:hook"
  if (isWithin(path.join(SRC_DIR, "lib"), absFile)) return "registry:lib"
  return "registry:component"
}

// Where the file lands in the consumer's project.
//
// shadcn resolves an `@<alias>/rest` target through the consumer's
// components.json aliases — only `components`, `ui`, `lib` and `hooks` are
// recognised. Anything else under src/ (branding.json, images/**) has no alias,
// so it is emitted as a plain `src/…` path, which shadcn rewrites to the
// project root when the consumer has no src directory.
function registryFileTarget(absFile) {
  const relToSrc = toPosix(path.relative(SRC_DIR, absFile))

  if (relToSrc.startsWith("../")) {
    return toPosix(path.relative(ROOT, absFile)) // outside src/, e.g. public/
  }
  for (const alias of ["components", "ui", "lib", "hooks"]) {
    if (relToSrc.startsWith(`${alias}/`)) return `@${relToSrc}`
  }
  return `src/${relToSrc}`
}

// `path` stays relative to the registry.json that declares it — split-registry-by-tier
// resolves it against that file's directory before re-relativizing to the repo root,
// so traced files outside the item's own folder resolve correctly too.
function toRegistryFileEntry(absFile, registryDir) {
  return {
    path: toPosix(path.relative(registryDir, absFile)),
    type: registryFileType(absFile),
    target: registryFileTarget(absFile),
  }
}

// Collects the non-standard theme tokens an item's sources actually use, so
// the payload carries the CSS a fresh project would otherwise be missing.
function collectThemeExtensions(absFiles) {
  if (themeExtensions.length === 0) return {}

  const cssVars = {}
  const css = {}
  let matched = false

  for (const absFile of absFiles) {
    if (!/\.(tsx|ts|jsx|js)$/.test(absFile)) continue
    const content = fs.readFileSync(absFile, "utf-8")
    for (const ext of themeExtensions) {
      if (!content.includes(ext.utility)) continue
      matched = true
      for (const [scope, vars] of Object.entries(ext.cssVars || {})) {
        cssVars[scope] = { ...(cssVars[scope] || {}), ...vars }
      }
      Object.assign(css, ext.css || {})
    }
  }

  if (!matched) return {}
  const result = {}
  if (Object.keys(cssVars).length > 0) result.cssVars = cssVars
  if (Object.keys(css).length > 0) result.css = css
  return result
}

// Assembles files[] + dependency arrays for one item: its own files first (in
// the order the caller collected them), then every traced local file.
function buildItemPayload(ownFiles, registryDir) {
  const { localFiles, registryDependencies, dependencies } =
    traceDependencies(ownFiles)

  const files = [
    ...ownFiles.map((f) => toRegistryFileEntry(f, registryDir)),
    ...localFiles.map((f) => toRegistryFileEntry(f, registryDir)),
  ]

  const { cssVars, css } = collectThemeExtensions([...ownFiles, ...localFiles])

  return { files, registryDependencies, dependencies, cssVars, css }
}

async function generateUiRegistry() {
  const uiPath = path.join(process.cwd(), "src", "components", "ui")
  if (!fs.existsSync(uiPath)) return
  const files = fs.readdirSync(uiPath)

  const items = []

  for (const file of files) {
    if (isSourceComponentFile(file)) {
      const basename = file.replace(/\.tsx?$/, "")
      const {
        files: itemFiles,
        registryDependencies,
        dependencies,
        cssVars,
        css,
      } = buildItemPayload([path.join(uiPath, file)], uiPath)

      const item = {
        name: basename,
        type: "registry:ui",
        title: toTitleCase(basename),
        description: `${toTitleCase(basename)} component.`,
        files: itemFiles,
        categories: [basename],
      }

      if (registryDependencies.length > 0)
        item.registryDependencies = registryDependencies
      if (dependencies.length > 0) item.dependencies = dependencies
      if (cssVars) item.cssVars = cssVars
      if (css) item.css = css

      items.push(item)
    }
  }

  items.sort((a, b) => customSort(a.name, b.name))

  const registryContent = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "uiable",
    homepage: "https://uiable.com",
    items: items,
  }

  await smartWriteFileSync(
    path.join(uiPath, "registry.json"),
    JSON.stringify(registryContent, null, 2)
  )
  console.log(`Generated ui/registry.json with ${items.length} items.`)
}

async function generateUiableRegistry() {
  const uiablePath = path.join(process.cwd(), "src", "components", "uiable")
  if (!fs.existsSync(uiablePath)) return
  const dirs = fs.readdirSync(uiablePath, { withFileTypes: true })

  let items = []

  for (const dirent of dirs) {
    if (dirent.isDirectory() && dirent.name !== "blocks") {
      const category = dirent.name
      const categoryPath = path.join(uiablePath, category)

      function getComponentFiles(dirPath, relPath = "") {
        let results = []
        const entries = fs.readdirSync(dirPath, { withFileTypes: true })
        for (const entry of entries) {
          const entryPath = path.join(dirPath, entry.name)
          const entryRelPath = relPath ? `${relPath}/${entry.name}` : entry.name
          if (entry.isDirectory()) {
            results = results.concat(getComponentFiles(entryPath, entryRelPath))
          } else if (isSourceComponentFile(entry.name)) {
            results.push(entryRelPath)
          }
        }
        return results
      }

      const files = getComponentFiles(categoryPath)

      for (const file of files) {
        const basename = path.basename(file).replace(/\.tsx?$/, "")
        const {
          files: itemFiles,
          registryDependencies,
          dependencies,
          cssVars,
          css,
        } = buildItemPayload([path.join(categoryPath, file)], uiablePath)

        let descriptionTitle = basename
        if (basename.startsWith(`${category}-`)) {
          descriptionTitle = basename.substring(category.length + 1)
        }

        const item = {
          name: basename,
          type: "registry:ui",
          title: toTitleCase(basename),
          description: `${toTitleCase(category)} ${toTitleCase(descriptionTitle)} variant for component.`,
          files: itemFiles,
          categories: [category],
        }

        if (proComponentNames.has(basename)) item.pro = true

        if (registryDependencies.length > 0)
          item.registryDependencies = registryDependencies
        if (dependencies.length > 0) item.dependencies = dependencies
        if (cssVars) item.cssVars = cssVars
        if (css) item.css = css

        items.push(item)
      }
    }
  }

  items.sort((a, b) => customSort(a.name, b.name))
  items = applyBadges(items, existingUiableBadges)

  const registryContent = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "uiable",
    homepage: "https://uiable.com",
    items: items,
  }

  await smartWriteFileSync(
    path.join(uiablePath, "registry.json"),
    JSON.stringify(registryContent, null, 2)
  )
  console.log(`Generated uiable/registry.json with ${items.length} items.`)
}

function getBlockFiles(dirPath, basePath, blockFiles = []) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)
    const relPath = path.relative(basePath, fullPath).replace(/\\/g, "/")

    if (entry.isDirectory()) {
      getBlockFiles(fullPath, basePath, blockFiles)
    } else if (entry.isFile() && isSourceComponentFile(entry.name)) {
      blockFiles.push(relPath)
    }
  }
  return blockFiles.sort() // Sort files for consistent output
}

async function generateBlocksRegistry() {
  const blocksPath = path.join(
    process.cwd(),
    "src",
    "components",
    "uiable",
    "blocks"
  )
  if (!fs.existsSync(blocksPath)) return

  const categories = fs.readdirSync(blocksPath, { withFileTypes: true })

  let items = []

  for (const categoryDir of categories) {
    if (categoryDir.isDirectory()) {
      const category = categoryDir.name
      const categoryPath = path.join(blocksPath, category)
      const blocks = fs.readdirSync(categoryPath, { withFileTypes: true })

      for (const blockDir of blocks) {
        if (blockDir.isDirectory()) {
          const blockName = blockDir.name

          // DO NOT consider folder named exactly "components" as a block
          if (blockName === "components") {
            continue
          }

          const blockPath = path.join(categoryPath, blockName)

          if (category === "layout") {
            const innerFiles = fs.readdirSync(blockPath, {
              withFileTypes: true,
            })
            let hasOnlyFiles = true
            for (const f of innerFiles) {
              if (f.isDirectory()) hasOnlyFiles = false
            }
            if (hasOnlyFiles) {
              for (const f of innerFiles) {
                if (f.isFile() && isSourceComponentFile(f.name)) {
                  const innerBlockName = f.name.replace(/\.tsx?$/, "")
                  const filePath = path.join(blockPath, f.name)
                  const {
                    files: blockFiles,
                    registryDependencies,
                    dependencies,
                    cssVars,
                    css,
                  } = buildItemPayload([filePath], blocksPath)

                  const item = {
                    name: `block-${innerBlockName}`,
                    type: "registry:block",
                    title: toTitleCase(innerBlockName),
                    description: `${toTitleCase(innerBlockName)} variant for block.`,
                    files: blockFiles,
                    categories: [blockName],
                  }

                  if (proBlockNames.has(innerBlockName)) item.pro = true
                  let orderIndex = blockSequences.indexOf(innerBlockName)
                  if (orderIndex !== -1) item.order = orderIndex + 1
                  if (registryDependencies.length > 0)
                    item.registryDependencies = registryDependencies
                  if (dependencies.length > 0) item.dependencies = dependencies
                  if (cssVars) item.cssVars = cssVars
                  if (css) item.css = css
                  items.push(item)
                }
              }
              continue
            }
          }

          const ownFiles = getBlockFiles(blockPath, blocksPath).map((rel) =>
            path.join(blocksPath, rel)
          )

          const {
            files: blockFiles,
            registryDependencies,
            dependencies,
            cssVars,
            css,
          } = buildItemPayload(ownFiles, blocksPath)

          const item = {
            name: `block-${blockName}`,
            type: "registry:block",
            title: toTitleCase(blockName),
            description: `${toTitleCase(blockName)} variant for block.`,
            files: blockFiles,
            categories: category === "layout" ? [blockName] : [category],
          }

          if (proBlockNames.has(blockName)) {
            item.pro = true
          }

          let orderIndex = blockSequences.indexOf(blockName)
          if (orderIndex !== -1) {
            item.order = orderIndex + 1
          }

          if (registryDependencies.length > 0)
            item.registryDependencies = registryDependencies
          if (dependencies.length > 0) item.dependencies = dependencies
          if (cssVars) item.cssVars = cssVars
          if (css) item.css = css

          items.push(item)
        } else if (blockDir.isFile() && isSourceComponentFile(blockDir.name)) {
          const blockName = blockDir.name.replace(/\.tsx?$/, "")
          const filePath = path.join(categoryPath, blockDir.name)

          const {
            files: blockFiles,
            registryDependencies,
            dependencies,
            cssVars,
            css,
          } = buildItemPayload([filePath], blocksPath)

          const item = {
            name: `block-${blockName}`,
            type: "registry:block",
            title: toTitleCase(blockName),
            description: `${toTitleCase(blockName)} variant for block.`,
            files: blockFiles,
            categories: category === "layout" ? [blockName] : [category],
          }

          if (proBlockNames.has(blockName)) {
            item.pro = true
          }

          let orderIndex = blockSequences.indexOf(blockName)
          if (orderIndex !== -1) {
            item.order = orderIndex + 1
          }

          if (registryDependencies.length > 0)
            item.registryDependencies = registryDependencies
          if (dependencies.length > 0) item.dependencies = dependencies
          if (cssVars) item.cssVars = cssVars
          if (css) item.css = css

          items.push(item)
        }
      }
    }
  }

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
  items = applyBadges(items, existingBlockBadges)

  const registryContent = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "uiable",
    homepage: "https://uiable.com",
    items: items,
  }

  await smartWriteFileSync(
    path.join(blocksPath, "registry.json"),
    JSON.stringify(registryContent, null, 2)
  )
  console.log(`Generated blocks/registry.json with ${items.length} items.`)
}

function cleanRegistryDirs() {
  const dirsToClean = [
    path.join(process.cwd(), ".registry-build"),
    path.join(process.cwd(), ".pro-registry"),
  ]

  const filesToClean = [
    path.join(process.cwd(), "public", "registry-index.json"),
  ]

  dirsToClean.forEach((dir) => {
    if (fs.existsSync(dir)) {
      console.log(`Cleaning directory: ${dir}`)
      fs.rmSync(dir, { recursive: true, force: true })
    }
  })

  filesToClean.forEach((file) => {
    if (fs.existsSync(file)) {
      console.log(`Cleaning file: ${file}`)
      fs.unlinkSync(file)
    }
  })
}

// Imports that look local but resolve to nothing on disk would ship an item
// that cannot compile once installed, so surface them rather than swallowing.
function reportUnresolvedImports() {
  if (unresolvedImports.size === 0) return
  console.warn(
    `\nWarning: ${unresolvedImports.size} local import(s) could not be resolved and were skipped:`
  )
  for (const [importPath, importers] of unresolvedImports) {
    console.warn(`  ${importPath}`)
    for (const importer of importers) console.warn(`    <- ${importer}`)
  }
  console.warn("")
}

const existingUiableBadges = readExistingBadges(
  path.join(UIABLE_DIR, "registry.json")
)
const existingBlockBadges = readExistingBadges(
  path.join(BLOCKS_DIR, "registry.json")
)

console.log("Cleaning old registry files...")
cleanRegistryDirs()
console.log("Generating registries...")
await generateUiRegistry()
await generateUiableRegistry()
await generateBlocksRegistry()
reportUnresolvedImports()
console.log(
  "All registries generated successfully! Please wait for registry build..."
)
