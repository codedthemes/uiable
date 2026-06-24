import { NextResponse } from "next/server"

// ------------------------------ | API - MAILERLITE SUBSCRIBE | ------------------------------ //

const API_KEY = process.env.MAILERLITE_API_KEY
const API_ENDPOINT = process.env.MAILERLITE_API_ENDPOINT
const DEFAULT_GROUP = process.env.MAILERLITE_GROUP?.trim() ?? "uiable_landing"

const authHeaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${API_KEY}`,
}

interface MailerLiteGroup {
  id: string | number
  name: string
}

async function getOrCreateGroupId(
  groupNameOrId: string
): Promise<string | null> {
  // Already a numeric ID — use directly
  if (/^\d+$/.test(groupNameOrId)) return groupNameOrId

  try {
    // 1. Search for existing group by name
    const searchRes = await fetch(
      `${API_ENDPOINT}/groups?filter[name]=${encodeURIComponent(groupNameOrId)}`,
      { headers: authHeaders }
    )

    if (searchRes.ok) {
      const { data }: { data?: MailerLiteGroup[] } = await searchRes.json()
      const match =
        data?.find(
          (g) => g.name.toLowerCase() === groupNameOrId.toLowerCase()
        ) ?? data?.[0]

      if (match?.id) return String(match.id)
    }

    // 2. Create group if not found
    const createRes = await fetch(`${API_ENDPOINT}/groups`, {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify({ name: groupNameOrId }),
    })

    if (createRes.ok) {
      const { data }: { data?: MailerLiteGroup } = await createRes.json()
      if (data?.id) return String(data.id)
    }
  } catch (err) {
    console.error(` Failed to resolve group "${groupNameOrId}":`, err)
  }

  return null
}

export async function POST(request: Request) {
  try {
    const { email, group_name } = (await request.json()) as {
      email?: string
      group_name?: string
    }

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Basic email format guard
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    const body: Record<string, unknown> = { email }

    const groupsList = (group_name ?? DEFAULT_GROUP)
      .split(",")
      .map((g) => g.trim())
      .filter(Boolean)

    if (groupsList.length > 0) {
      // Resolve all groups in parallel instead of sequentially
      const resolvedIds = (
        await Promise.all(groupsList.map(getOrCreateGroupId))
      ).filter((id): id is string => id !== null)

      if (resolvedIds.length > 0) body.groups = resolvedIds
    }

    const res = await fetch(`${API_ENDPOINT}/subscribers`, {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      const errorData = await res.json()
      console.error(" Subscription error:", errorData)
      return NextResponse.json(
        { error: errorData?.message ?? "Failed to subscribe" },
        { status: res.status }
      )
    }

    return NextResponse.json(
      { message: "Subscribed successfully!" },
      { status: 200 }
    )
  } catch (err) {
    console.error(" Internal error:", err)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
