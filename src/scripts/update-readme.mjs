// third-party
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

//  ------------------------------ | SCRIPT - UPDATE README | ------------------------------  //

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, "../..")

const BASE_URL = "https://uiable.com"
const readmePath = path.join(root, "README.md")
const gridPath = path.join(root, "src/components-grid.ts")
const uiableDir = path.join(root, "src/components/uiable")
const blocksDir = path.join(root, "src/components/uiable/blocks")

// 1. DYNAMICALLY LOAD NAV GRID DATA FROM src/components-grid.ts
function loadNavGrid() {
  let tsCode = fs.readFileSync(gridPath, "utf8")
  // Strip interface definitions, type annotations and export keywords
  tsCode = tsCode.replace(/export interface [\s\S]*?\n\}/g, "")
  tsCode = tsCode.replace(/: (NavSection|DocItem|CategoryItem)\[\]/g, "")
  tsCode = tsCode.replace(/export /g, "")

  const fn = new Function(tsCode + "; return { NAV_COMPONENTS, NAV_BLOCKS };")
  return fn()
}

// Helper to convert slug/name to Title Case
function toTitleCase(str) {
  return str
    .split("-")
    .map((word) => {
      const lower = word.toLowerCase()
      if (lower === "otp") return "OTP"
      if (lower === "kbd") return "Kbd"
      if (lower === "cta") return "CTA"
      if (lower === "faq") return "FAQ"
      if (lower === "saas") return "SaaS"
      if (lower === "ui") return "UI"
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(" ")
}

// 2. GENERATE COMPONENTS MARKDOWN DYNAMICALLY
function generateComponentsMarkdown(navComponents) {
  const actualCompDirs = fs.existsSync(uiableDir)
    ? fs.readdirSync(uiableDir).filter((f) => {
        const p = path.join(uiableDir, f)
        return (
          fs.statSync(p).isDirectory() &&
          !["blocks", "themes", "layout", "changelog"].includes(f)
        )
      })
    : []

  const processedSlugs = new Set()
  let markdown = "## Components\n\n"

  navComponents.forEach((section) => {
    const validItems = section.items.filter((item) => {
      processedSlugs.add(item.slug)
      return actualCompDirs.includes(item.slug)
    })

    if (validItems.length > 0) {
      markdown += `### ${section.title}\n\n<div>\n`
      validItems.forEach((item) => {
        markdown += `  <a href="${BASE_URL}/components/${item.slug}" title="${item.title}"><kbd>${item.title}</kbd></a>\n`
      })
      markdown += `</div>\n\n`
    }
  })

  // Catch any remaining component directories in workspace not in NAV_COMPONENTS
  const extraSlugs = actualCompDirs.filter((slug) => !processedSlugs.has(slug))
  if (extraSlugs.length > 0) {
    markdown += `### Utils\n\n<div>\n`
    extraSlugs.forEach((slug) => {
      const title = toTitleCase(slug)
      markdown += `  <a href="${BASE_URL}/components/${slug}" title="${title}"><kbd>${title}</kbd></a>\n`
    })
    markdown += `</div>\n\n`
  }

  return markdown
}

// 3. GENERATE BLOCKS MARKDOWN DYNAMICALLY
function generateBlocksMarkdown(navBlocks) {
  if (!fs.existsSync(blocksDir)) return "## Blocks\n\n"

  const blockItemsMap = new Map()
  navBlocks.forEach((section) => {
    section.items.forEach((item) => {
      blockItemsMap.set(item.slug, item.title)
    })
  })

  const actualBlockCats = fs
    .readdirSync(blocksDir)
    .filter((f) => fs.statSync(path.join(blocksDir, f)).isDirectory())
    .sort()

  let markdown =
    "## Blocks\n\nPre-built page sections ready to drop into your project.\n\n"

  actualBlockCats.forEach((catSlug) => {
    const catPath = path.join(blocksDir, catSlug)
    let subDirs = fs
      .readdirSync(catPath)
      .filter((f) => fs.statSync(path.join(catPath, f)).isDirectory())

    if (subDirs.length === 0) return

    subDirs.sort((a, b) => {
      const numA = parseInt(a.replace(/^[^\d]+/, ""), 10)
      const numB = parseInt(b.replace(/^[^\d]+/, ""), 10)
      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB
      }
      return a.localeCompare(b)
    })

    const catTitle = blockItemsMap.get(catSlug) || toTitleCase(catSlug)
    markdown += `### ${catTitle}\n\n<div>\n`

    subDirs.forEach((sub) => {
      let displayTitle = ""
      if (sub.startsWith(catSlug + "-")) {
        const suffix = sub.substring(catSlug.length + 1)
        displayTitle = `${catTitle} ${suffix}`
      } else if (sub === "error404-1") displayTitle = "Error 404 1"
      else if (sub === "error404-2") displayTitle = "Error 404 2"
      else if (sub === "error500-1") displayTitle = "Error 500 1"
      else if (sub === "error500-2") displayTitle = "Error 500 2"
      else displayTitle = toTitleCase(sub)

      const href = `${BASE_URL}/preview/${catSlug}/${sub}`
      markdown += `  <a href="${href}" title="${displayTitle}"><kbd>${displayTitle}</kbd></a>\n`
    })

    markdown += `</div>\n\n`
  })

  return markdown
}

// 6. UPDATE README.MD FILE
function updateReadme() {
  const { NAV_COMPONENTS, NAV_BLOCKS } = loadNavGrid()

  const readmeContent = fs.readFileSync(readmePath, "utf8")

  const compStart = readmeContent.indexOf("## Components")
  if (compStart === -1) {
    console.error("Could not find ## Components section in README.md")
    process.exit(1)
  }

  const footerIndex = readmeContent.indexOf(
    "<br />\n\n> Components are added based on practical frontend needs"
  )
  if (footerIndex === -1) {
    console.error("Could not find footer section in README.md")
    process.exit(1)
  }

  const headerPart = readmeContent.substring(0, compStart)
  const footerPart = readmeContent.substring(footerIndex)

  const compMarkdown = generateComponentsMarkdown(NAV_COMPONENTS)
  const blockMarkdown = generateBlocksMarkdown(NAV_BLOCKS)

  const updatedReadme = `${headerPart}${compMarkdown}---\n\n${blockMarkdown}${footerPart}`

  fs.writeFileSync(readmePath, updatedReadme, "utf8")
  console.log("README.md has been dynamically updated with Components, Blocks!")
}

updateReadme()
