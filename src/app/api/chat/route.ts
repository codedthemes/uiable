// project-imports
import { getMockStreamResponse } from "@/lib/ai"

export async function POST(req: Request) {
  const { messages } = await req.json()
  const stream = getMockStreamResponse(messages)

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "x-vercel-ai-data-stream": "v1",
    },
  })
}
