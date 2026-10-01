// Client-side helper for lazily loading a registry item's source file
// (used by the code-viewer dialog's file tree).

export async function fetchFileSource(
  name: string,
  path: string
): Promise<string | null> {
  try {
    const res = await fetch(
      `/api/source/${encodeURIComponent(name)}?path=${encodeURIComponent(path)}`
    )
    if (!res.ok) return null
    const data = await res.json()
    return typeof data.code === "string" ? data.code : null
  } catch {
    return null
  }
}
