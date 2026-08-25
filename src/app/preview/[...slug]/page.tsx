"use client"

import { use, useEffect, useState } from "react"

// next
import { notFound } from "next/navigation"

// project-imports
import { ThemePresetStyles } from "@/components/customizer/ThemePresetStyles"
import { fromPreviewSlug } from "@/utils/preview-slug"

//  ------------------------------ | PAGE - PREVIEW | ------------------------------  //

interface PreviewPageProps {
  params: Promise<{ slug: string[] }>
}

export default function PreviewPage({
  params: paramsPromise,
}: PreviewPageProps) {
  const params = use(paramsPromise)
  // The canonical preview URL collapses the duplicated trailing segment
  // (`cta/cta-13`, not `cta/cta-13/cta-13`). Reject the old duplicated form so
  // there is only one valid route per block.
  const slug = params.slug
  if (slug.length >= 2 && slug[slug.length - 1] === slug[slug.length - 2]) {
    notFound()
  }
  let filePath = slug.join("/")
  if (filePath.startsWith("src/")) {
    filePath = filePath.substring(4)
  }
  const [Comp, setComp] = useState<any>(null)

  useEffect(() => {
    // Restore the saved preset on mount so a reload / redirect keeps the
    // selected custom theme instead of falling back to default. The iframe is
    // same-origin, so it shares localStorage with the parent app.
    const savedPreset = localStorage.getItem("theme-preset")
    if (savedPreset && savedPreset !== "default") {
      document.body.classList.add(savedPreset)
    }
    const savedRadius = localStorage.getItem("theme-radius")
    if (savedRadius) {
      const radiusValue = /[a-z%]$/i.test(savedRadius.trim())
        ? savedRadius.trim()
        : `${savedRadius.trim()}rem`
      document.body.style.setProperty("--radius", radiusValue)
    }

    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "uiable-theme-sync") {
        document.documentElement.className = event.data.htmlClass
        document.body.className = event.data.bodyClass
        if (typeof event.data.bodyStyle === "string") {
          document.body.style.cssText = event.data.bodyStyle
        }
      }
    }
    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  useEffect(() => {
    let mounted = true
    // Try the blocks dir first, then the plain uiable dir, for a given path.
    const tryImport = async (candidate: string) => {
      try {
        return await import(`@/components/uiable/blocks/${candidate}.tsx`)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_err) {
        return await import(`@/components/uiable/${candidate}.tsx`)
      }
    }
    const load = async () => {
      try {
        let mod
        try {
          mod = await tryImport(filePath)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (_err) {
          // A collapsed block slug (e.g. `cta/cta-13`) maps to the nested
          // `cta/cta-13/cta-13.tsx` file — re-append the duplicated segment.
          mod = await tryImport(fromPreviewSlug(filePath))
        }
        if (mounted) {
          const component =
            mod.default ||
            mod.Component ||
            Object.values(mod).find((v) => typeof v === "function")
          setComp(() => component)
        }
      } catch (_err) {
        console.error("Preview import failed for", filePath, _err)
        if (mounted) {
          // eslint-disable-next-line react/display-name
          setComp(() => () => (
            <div className="rounded border bg-card p-4 text-sm text-destructive">
              Component not found: {filePath}
            </div>
          ))
        }
      }
    }
    load()
    return () => {
      mounted = false
    }
  }, [filePath])

  if (!Comp) {
    return (
      <>
        <ThemePresetStyles />
        <div className="h-20 w-full animate-pulse bg-card" />
      </>
    )
  }

  return (
    <>
      <ThemePresetStyles />
      <div className="min-h-screen bg-card">
        <Comp />
      </div>
    </>
  )
}
