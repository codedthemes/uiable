//  ------------------------------ | UTILS - PREVIEW SLUG | ------------------------------  //

// A block file lives at `<category>/<name>/<name>.tsx`, so a naive preview URL
// repeats the final segment (e.g. `cta/cta-13/cta-13`). Collapse the duplicated
// trailing segment for a clean URL — without touching the file naming.
export function toPreviewSlug(filePath: string) {
  const parts = filePath.split("/")
  const len = parts.length
  if (len >= 2 && parts[len - 1] === parts[len - 2]) {
    parts.pop()
  }
  return parts.join("/")
}

// Inverse of toPreviewSlug: a collapsed slug such as `cta/cta-13` maps to the
// nested `cta/cta-13/cta-13.tsx` file, so re-append the duplicated segment.
export function fromPreviewSlug(slug: string) {
  const last = slug.split("/").pop()
  return `${slug}/${last}`
}
