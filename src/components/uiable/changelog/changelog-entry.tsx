"use client"

// shadcn
import { Separator } from "@/components/ui/separator"

// project-imports
import { CHANGELOG_DATA } from "@/data/changelog-data"

// types
type ChangelogRelease = (typeof CHANGELOG_DATA)[number]

interface ChangelogEntryProps {
  release: ChangelogRelease
  isLast?: boolean
}

const openPreview = (url: string) =>
  window.open(url, "_blank", "noopener,noreferrer")

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
          {release.categories.map((category) => {
            const changeCount = category.items.reduce(
              (total, item) =>
                total +
                (typeof item === "string" ? 1 : item.links?.length || 1),
              0
            )
            return (
              <div key={category.title} className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {changeCount} {changeCount === 1 ? "change" : "changes"}
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
                    const links =
                      typeof item === "string" ? undefined : item.links

                    return (
                      <li
                        key={index}
                        className="text-sm leading-relaxed text-muted-foreground"
                      >
                        {links && links.length > 0 ? (
                          <>
                            <span className="font-semibold text-foreground/80">
                              {text}:
                            </span>{" "}
                            {links.map((link, linkIndex) => (
                              <span key={`${link.label}-${linkIndex}`}>
                                <button
                                  type="button"
                                  onClick={() => openPreview(link.url)}
                                  className="cursor-pointer text-left transition-colors hover:text-primary"
                                >
                                  {link.label}
                                </button>
                                {linkIndex < links.length - 1 && ", "}
                              </span>
                            ))}
                          </>
                        ) : previewUrl ? (
                          <button
                            type="button"
                            onClick={() => openPreview(previewUrl)}
                            className="cursor-pointer text-left transition-colors hover:text-primary"
                          >
                            {text}
                          </button>
                        ) : (
                          text
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>

      {!isLast && <Separator />}
    </article>
  )
}
