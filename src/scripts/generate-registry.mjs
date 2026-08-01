import fs from "fs"
import path from "path"

const blockSequencesPath = path.join(
  process.cwd(),
  "src",
  "components",
  "uiable",
  "blocks",
  "block-sequences.json"
)
let blockSequences = []
if (fs.existsSync(blockSequencesPath)) {
  try {
    const rawData = JSON.parse(fs.readFileSync(blockSequencesPath, "utf-8"))
    if (Array.isArray(rawData)) {
      blockSequences = rawData
    } else {
      for (const key in rawData) {
        if (Array.isArray(rawData[key])) {
          blockSequences.push(...rawData[key])
        }
      }
    }
  } catch (e) {
    console.error("Could not parse block-sequences.json", e)
  }
}

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

// Function to extract dependencies from a file
function extractDependencies(filePath) {
  const content = fs.readFileSync(filePath, "utf-8")
  const registryDependencies = new Set()
  const dependencies = new Set()

  // Match all imports and exports
  const importRegex = /(?:from|import\()\s*['"]([^'"]+)['"]/g
  let match
  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1]

    if (
      importPath.startsWith("@/components/ui/") ||
      importPath.startsWith("@/components/uiable/")
    ) {
      // It's a primitive component, prefix with @uiable/
      const parts = importPath.split("/")
      let componentName = parts[parts.length - 1].replace(/\.tsx?$/, "")
      if (componentName === "index" && parts.length > 1) {
        componentName = parts[parts.length - 2]
      }
      if (componentName) {
        registryDependencies.add(`@uiable/${componentName}`)
      }
    } else if (
      !importPath.startsWith(".") &&
      !importPath.startsWith("@/") &&
      !importPath.startsWith("~/")
    ) {
      // It's an external dependency (npm package)
      // Exclude node builtins and react, next
      if (
        !["react", "react-dom", "next"].includes(importPath) &&
        !importPath.startsWith("node:")
      ) {
        // Only get the package name, handle scoped packages
        let pkgName = importPath
        if (pkgName.startsWith("@")) {
          const parts = pkgName.split("/")
          if (parts.length > 1) {
            pkgName = `${parts[0]}/${parts[1]}`
          }
        } else {
          pkgName = pkgName.split("/")[0]
        }
        dependencies.add(pkgName)
      }
    }
  }

  return {
    registryDependencies: Array.from(registryDependencies).sort(),
    dependencies: Array.from(dependencies).sort(),
  }
}

function generateUiRegistry() {
  const uiPath = path.join(process.cwd(), "src", "components", "ui")
  if (!fs.existsSync(uiPath)) return
  const files = fs.readdirSync(uiPath)

  const items = []

  for (const file of files) {
    if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      const basename = file.replace(/\.tsx?$/, "")
      const { registryDependencies, dependencies } = extractDependencies(
        path.join(uiPath, file)
      )

      const item = {
        name: basename,
        type: "registry:ui",
        title: toTitleCase(basename),
        description: `${toTitleCase(basename)} component.`,
        files: [
          {
            path: file,
            type: "registry:component",
            target: `@components/ui/${file}`,
          },
        ],
        categories: [basename],
      }

      if (registryDependencies.length > 0)
        item.registryDependencies = registryDependencies
      if (dependencies.length > 0) item.dependencies = dependencies

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

  fs.writeFileSync(
    path.join(uiPath, "registry.json"),
    JSON.stringify(registryContent, null, 2)
  )
  console.log(`Generated ui/registry.json with ${items.length} items.`)
}

function generateUiableRegistry() {
  const uiablePath = path.join(process.cwd(), "src", "components", "uiable")
  if (!fs.existsSync(uiablePath)) return
  const dirs = fs.readdirSync(uiablePath, { withFileTypes: true })

  const items = []

  for (const dirent of dirs) {
    if (dirent.isDirectory() && dirent.name !== "blocks") {
      const category = dirent.name
      const categoryPath = path.join(uiablePath, category)
      const files = fs.readdirSync(categoryPath)

      for (const file of files) {
        if (file.endsWith(".tsx") || file.endsWith(".ts")) {
          const basename = file.replace(/\.tsx?$/, "")
          const { registryDependencies, dependencies } = extractDependencies(
            path.join(categoryPath, file)
          )

          let descriptionTitle = basename
          if (basename.startsWith(`${category}-`)) {
            descriptionTitle = basename.substring(category.length + 1)
          }

          const item = {
            name: `uiable-${basename}`,
            type: "registry:ui",
            title: toTitleCase(basename),
            description: `${toTitleCase(category)} ${toTitleCase(descriptionTitle)} variant for component.`,
            files: [
              {
                path: `${category}/${file}`,
                type: "registry:component",
                target: `@components/uiable/${category}/${file}`,
              },
            ],
            categories: [category],
          }

          if (registryDependencies.length > 0)
            item.registryDependencies = registryDependencies
          if (dependencies.length > 0) item.dependencies = dependencies

          items.push(item)
        }
      }
    }
  }

  items.sort((a, b) => customSort(a.name, b.name))

  const registryContent = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "uiable",
    homepage: "https://uiable.com",
    items: items,
  }

  fs.writeFileSync(
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
    } else if (
      entry.isFile() &&
      (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts"))
    ) {
      blockFiles.push(relPath)
    }
  }
  return blockFiles.sort() // Sort files for consistent output
}

function generateBlocksRegistry() {
  const blocksPath = path.join(
    process.cwd(),
    "src",
    "components",
    "uiable",
    "blocks"
  )
  if (!fs.existsSync(blocksPath)) return
  const categories = fs.readdirSync(blocksPath, { withFileTypes: true })

  const items = []

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
          const fileRels = getBlockFiles(blockPath, blocksPath)

          const blockFiles = []
          const allRegDeps = new Set()
          const allDeps = new Set()

          for (const rel of fileRels) {
            const filePath = path.join(blocksPath, rel)
            blockFiles.push({
              path: rel,
              type: "registry:component",
              target: `@components/uiable/blocks/${rel}`,
            })

            const { registryDependencies, dependencies } =
              extractDependencies(filePath)
            registryDependencies.forEach((d) => allRegDeps.add(d))
            dependencies.forEach((d) => allDeps.add(d))
          }

          const item = {
            name: `uiable-block-${blockName}`,
            type: "registry:block",
            title: toTitleCase(blockName),
            description: `${toTitleCase(blockName)} variant for block.`,
            files: blockFiles,
            categories: [category],
          }

          let orderIndex = blockSequences.indexOf(blockName)
          if (orderIndex !== -1) {
            item.order = orderIndex + 1
          }

          if (allRegDeps.size > 0)
            item.registryDependencies = Array.from(allRegDeps).sort()
          if (allDeps.size > 0) item.dependencies = Array.from(allDeps).sort()

          items.push(item)
        } else if (
          blockDir.isFile() &&
          (blockDir.name.endsWith(".tsx") || blockDir.name.endsWith(".ts"))
        ) {
          const blockName = blockDir.name.replace(/\.tsx?$/, "")
          const relPath = `${category}/${blockDir.name}`
          const filePath = path.join(categoryPath, blockDir.name)

          const blockFiles = [
            {
              path: relPath,
              type: "registry:component",
              target: `@components/uiable/blocks/${relPath}`,
            },
          ]

          const { registryDependencies, dependencies } =
            extractDependencies(filePath)

          const item = {
            name: `uiable-block-${blockName}`,
            type: "registry:block",
            title: toTitleCase(blockName),
            description: `${toTitleCase(blockName)} variant for block.`,
            files: blockFiles,
            categories: [category],
          }

          let orderIndex = blockSequences.indexOf(blockName)
          if (orderIndex !== -1) {
            item.order = orderIndex + 1
          }

          if (registryDependencies.length > 0)
            item.registryDependencies = registryDependencies
          if (dependencies.length > 0) item.dependencies = dependencies

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

  const registryContent = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "uiable",
    homepage: "https://uiable.com",
    items: items,
  }

  fs.writeFileSync(
    path.join(blocksPath, "registry.json"),
    JSON.stringify(registryContent, null, 2)
  )
  console.log(`Generated blocks/registry.json with ${items.length} items.`)
}

console.log("Generating registries...")
generateUiRegistry()
generateUiableRegistry()
generateBlocksRegistry()
console.log("All registries generated successfully!")
