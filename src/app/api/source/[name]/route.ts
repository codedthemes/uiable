// next
import { NextRequest, NextResponse } from "next/server"

// third-party
import { readFile } from "node:fs/promises"
import { join } from "node:path"

type RegistryItem = {
  name: string
  type: string
  files?: { path: string }[]
}

const UIABLE_DIR = "src/components/uiable"

async function findItem(name: string): Promise<RegistryItem | null> {
  const registrySubPaths = ["registry.json", "blocks/registry.json"]
  for (const subPath of registrySubPaths) {
    try {
      const registry = JSON.parse(
        await readFile(join(process.cwd(), UIABLE_DIR, subPath), "utf8")
      )
      const item = (registry.items || []).find(
        (i: RegistryItem) => i.name === name
      )
      if (item) return item
    } catch {
      continue
    }
  }
  return null
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params
  const { searchParams } = new URL(request.url)
  const pathParam = searchParams.get("path")

  const item = await findItem(name)
  if (!item || !item.files) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }

  const requestedPath = pathParam || item.files[0].path

  // Security check: Ensure the requested path actually belongs to this item
  if (!item.files.some((f) => f.path === requestedPath)) {
    return NextResponse.json(
      { error: "File not found in block" },
      { status: 403 }
    )
  }

  const mappedSubPath =
    item.type === "registry:block" ? `blocks/${requestedPath}` : requestedPath

  try {
    const code = await readFile(
      join(process.cwd(), UIABLE_DIR, mappedSubPath),
      "utf8"
    )
    return NextResponse.json(
      { code },
      { headers: { "Cache-Control": "no-store" } }
    )
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }
}
