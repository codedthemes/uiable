"use client"

import { use, useEffect, useState } from "react"

// next
import { notFound } from "next/navigation"

// project-imports
import { blockWrapperClasses, blockChildClasses } from "./preview-classes"
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
        if (typeof window !== "undefined" && window.self !== window.top) {
          document.documentElement.classList.add("in-iframe-preview")
          document.body.classList.add("in-iframe-preview")
        }
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

  useEffect(() => {
    if (typeof window !== "undefined" && window.self !== window.top) {
      document.documentElement.classList.add("in-iframe-preview")
      document.body.classList.add("in-iframe-preview")
    }
  }, [])

  if (!Comp) {
    return (
      <>
        <ThemePresetStyles />
        <div className="h-20 w-full animate-pulse bg-card" />
      </>
    )
  }

  // This page only ever renders as a visual preview (iframe-embedded or
  // opened directly) — clicking a real link inside the block would otherwise
  // navigate away to this app's own routes (e.g. the Logo's "/"), replacing the
  // preview. Only suppress that navigation: block clicks that land on an anchor
  // with an href. Every other click (tab switches, accordions, dialogs, etc.)
  // is left alone so interactive blocks stay functional in the preview.
  const suppressPreviewClicks = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (event.target as HTMLElement)?.closest?.("a[href]")
    if (anchor) {
      event.preventDefault()
      event.stopPropagation()
    }
  }

  return (
    <>
      <ThemePresetStyles />
      <style>{`
          html.in-iframe-preview, body.in-iframe-preview {
            overflow-x: hidden !important;
          }

          /* Normalizes multi-vh scroll runways (e.g. min-h-[220vh], lg:min-h-[350vh]) in iframe previews */
          .in-iframe-preview [class*="min-h-["][class*="vh]"] {
            min-height: auto !important;
          }

          /* ONLY targets sticky elements that are INSIDE a multi-vh scroll runway */
          .in-iframe-preview [class*="min-h-["][class*="vh]"] [class*="sticky"] {
            position: relative !important;
            top: auto !important;
          }

          /* ONLY targets screen-height stages that are INSIDE a multi-vh scroll runway */
          .in-iframe-preview [class*="min-h-["][class*="vh]"] [class*="min-h-screen"],
          .in-iframe-preview [class*="min-h-["][class*="vh]"] .h-screen {
            height: auto !important;
            min-height: 0 !important;
          }

          /* ONLY targets fixed background layers that are INSIDE a multi-vh scroll runway */
          .in-iframe-preview [class*="min-h-["][class*="vh]"] .fixed {
            position: absolute !important;
          }
        `}</style>
      <div
        onClickCapture={suppressPreviewClicks}
        className={["min-h-screen bg-card", blockWrapperClasses[filePath]]
          .filter(Boolean)
          .join(" ")}
      >
        {blockChildClasses[filePath] ? (
          <div className={blockChildClasses[filePath]}>
            <Comp />
          </div>
        ) : (
          <Comp />
        )}
      </div>
    </>
  )
}
