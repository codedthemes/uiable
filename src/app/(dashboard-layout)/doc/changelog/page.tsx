"use client"

import { useEffect } from "react"

// shadcn
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// project
import branding from "@/branding.json"
import DocsNavigation from "@/components/doc-bottom-nav"
import ChangelogEntry from "@/components/uiable/changelog/changelog-entry"
import ChangelogMobileToc from "@/components/uiable/changelog/changelog-mobile-toc"
import ChangelogToc from "@/components/uiable/changelog/changelog-toc"
import { CHANGELOG_DATA } from "@/data/changelog-data"

//  ------------------------------ | PAGE - CHANGELOG | ------------------------------  //

export default function ChangelogPage() {
  // Deep linking: scroll to anchor from URL hash on mount
  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash) {
      // Allow the DOM to settle first
      requestAnimationFrame(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      })
    }
  }, [])

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardContent>
          <div className="flex flex-row gap-6 text-muted-foreground">
            <div className="flex grow flex-col gap-8">
              <section
                id="changelog"
                className="flex scroll-mt-24 flex-col gap-8"
              >
                <div className="flex flex-col gap-2">
                  <h4 className="group relative scroll-mt-20">Changelog</h4>
                  <p className="text-muted-foreground">
                    Latest updates and announcements for {branding.brandName}.
                    Track new components, improvements, and breaking changes
                    across releases.
                  </p>
                </div>

                <ChangelogMobileToc />

                <Separator />

                <div className="flex flex-col gap-10">
                  {CHANGELOG_DATA.map((release, index) => (
                    <ChangelogEntry
                      key={release.version}
                      release={release}
                      isLast={index === CHANGELOG_DATA.length - 1}
                    />
                  ))}
                </div>
              </section>
              <DocsNavigation
                previousItem={{
                  name: "Components",
                  url: "/doc/components",
                }}
                nextItem={null}
              />
            </div>
            <Separator orientation="vertical" className="max-xl:hidden" />
            <div className="hidden w-sidebar-width shrink-0 xl:block">
              <div className="sticky top-20">
                <Card className="border-0 bg-transparent">
                  <CardHeader className="px-0 py-3">
                    <h5>On this page</h5>
                  </CardHeader>
                  <CardContent className="px-0 py-3">
                    <ChangelogToc />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
