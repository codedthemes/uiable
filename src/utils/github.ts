//  ------------------------------ | UTILS - GITHUB | ------------------------------  //

const GITHUB_STARGAZERS_COUNT_URL =
  "https://api.github.com/repos/codedthemes/uiable/stargazers/count"

export async function fetchGithubStarCount(): Promise<number | null> {
  try {
    const res = await fetch(GITHUB_STARGAZERS_COUNT_URL, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null

    const data = (await res.json()) as { count: number }
    return typeof data.count === "number" ? data.count : null
  } catch (error) {
    console.error("[github] Failed to fetch star count:", error)
    return null
  }
}

export function formatStarCount(count: number): string {
  return new Intl.NumberFormat("en-US", { notation: "compact" }).format(count)
}
