"use client"

// shadcn
import { Separator } from "@/components/ui/separator"

// project
import { CHANGELOG_DATA } from "@/data/changelog-data"

// assets
import { ExternalLink } from "lucide-react"

// types
type ChangelogRelease = (typeof CHANGELOG_DATA)[number]

interface ChangelogEntryProps {
  release: ChangelogRelease
  isLast?: boolean
}

//  ------------------------------ | COMPONENT - CHANGELOG ENTRY | ------------------------------  //

export default function ChangelogEntry({
  release,
  isLast = false,
}: ChangelogEntryProps) {
  return (
    <article aria-labelledby={release.anchor} className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-row items-baseline gap-2">
          <h2
            id={release.anchor}
            className="group relative scroll-mt-24 text-xl font-semibold tracking-tight text-foreground"
          >
            <a
              href={`#${release.anchor}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              aria-label={`Version ${release.version}`}
            >
              v{release.version}
              {release.title && (
                <span className="text-base font-normal text-muted-foreground">
                  — {release.title}
                </span>
              )}
            </a>
          </h2>

          <span className="text-muted-foreground">-</span>
          <p className="text-sm text-muted-foreground">{release.date}</p>
        </div>

        <div className="flex flex-col gap-6">
          {release.categories.map((category) => (
            <div key={category.title} className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-foreground">
                  {category.title}
                </h3>
                <span className="text-xs text-muted-foreground">
                  {category.items.length}{" "}
                  {category.items.length === 1 ? "change" : "changes"}
                </span>
              </div>
              <ul
                className="ml-6 flex list-disc flex-col gap-2 marker:text-muted-foreground"
                role="list"
              >
                {category.items.map((item, index) => {
                  const text = typeof item === "string" ? item : item.text
                  const previewUrl =
                    typeof item === "string" ? undefined : item.previewUrl

                  return (
                    <li
                      key={index}
                      className="text-sm leading-relaxed text-muted-foreground"
                    >
                      {text}
                      {previewUrl && (
                        <a
                          href={previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 inline-flex items-center gap-1 font-medium text-primary hover:underline"
                        >
                          Preview
                          <ExternalLink className="size-3" />
                        </a>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {!isLast && <Separator />}
    </article>
  )
}
