"use client"

import { useEffect, useState } from "react"

// project-imports
import { formatStarCount } from "@/utils/github"

//  ------------------------------ | HOOK - USE GITHUB STAR COUNT | ------------------------------  //

const GITHUB_STARS_FALLBACK = "122"

export function useGithubStarCount() {
  const [stars, setStars] = useState(GITHUB_STARS_FALLBACK)

  useEffect(() => {
    const controller = new AbortController()

    fetch("/api/github-stars", {
      signal: controller.signal,
      cache: "no-store",
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data: { count: number | null }) => {
        if (typeof data.count === "number") {
          setStars(formatStarCount(data.count))
        }
      })
      .catch(() => {
        // Keep the fallback count if the live count can't be fetched.
      })

    return () => controller.abort()
  }, [])

  return stars
}
