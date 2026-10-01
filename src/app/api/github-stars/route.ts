// next
import { NextResponse } from "next/server"

// project-imports
import { fetchGithubStarCount } from "@/utils/github"

// constant
export const revalidate = 3600

export async function GET() {
  const count = await fetchGithubStarCount()
  return NextResponse.json({ count })
}
