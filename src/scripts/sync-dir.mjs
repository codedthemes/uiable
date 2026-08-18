// third-party
import fs from "fs"
import path from "path"

const sourceDir = process.argv[2]
const destDir = process.argv[3]

if (!sourceDir || !destDir) {
  console.error("Usage: node sync-dir.mjs <source-dir> <dest-dir>")
  process.exit(1)
}

function syncDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }

  const items = fs.readdirSync(src, { withFileTypes: true })
  const syncedFiles = new Set()

  for (const item of items) {
    const srcPath = path.join(src, item.name)
    const destPath = path.join(dest, item.name)

    if (item.isDirectory()) {
      const nestedSynced = syncDirectory(srcPath, destPath)
      for (const f of nestedSynced) {
        syncedFiles.add(path.join(item.name, f))
      }
    } else {
      let shouldCopy = true
      if (fs.existsSync(destPath)) {
        const srcContent = fs.readFileSync(srcPath, "utf8")
        const destContent = fs.readFileSync(destPath, "utf8")
        // Normalize line endings to LF before comparing so CRLF vs LF
        // differences (caused by Git autocrlf on Windows) don't trigger
        // false writes.
        if (
          srcContent.replace(/\r\n/g, "\n") ===
          destContent.replace(/\r\n/g, "\n")
        ) {
          shouldCopy = false
        }
      }

      if (shouldCopy) {
        fs.copyFileSync(srcPath, destPath)
        console.log(`Synced: ${destPath}`)
      }
      syncedFiles.add(item.name)
    }
  }

  return syncedFiles
}

function removeStaleFiles(dir, syncedFiles, basePath = "") {
  if (!fs.existsSync(dir)) return

  const items = fs.readdirSync(dir, { withFileTypes: true })
  for (const item of items) {
    const fullPath = path.join(dir, item.name)
    const relativePath = path.join(basePath, item.name)

    if (item.isDirectory()) {
      removeStaleFiles(fullPath, syncedFiles, relativePath)
      // Check if directory is empty
      if (fs.readdirSync(fullPath).length === 0) {
        fs.rmdirSync(fullPath)
      }
    } else {
      if (!syncedFiles.has(relativePath)) {
        fs.unlinkSync(fullPath)
        console.log(`Removed stale: ${fullPath}`)
      }
    }
  }
}

try {
  const syncedFiles = syncDirectory(sourceDir, destDir)
  removeStaleFiles(destDir, syncedFiles)
  console.log(`Sync completed from ${sourceDir} to ${destDir}`)
} catch (error) {
  console.error("Sync failed:", error)
  process.exit(1)
}
