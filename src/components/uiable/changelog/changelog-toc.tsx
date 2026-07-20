"use client"

// project
import TableOfContents from "@/components/uiable/layout/table-of-contents"
import { CHANGELOG_DATA } from "@/data/changelog-data"

//  ------------------------------ | COMPONENT - CHANGELOG TOC | ------------------------------  //

export default function ChangelogToc() {
  const tocItems = CHANGELOG_DATA.map((release) => ({
    title: `v${release.version} - ${release.date}`,
    url: `#${release.anchor}`,
  }))

  return <TableOfContents items={tocItems} />
}
