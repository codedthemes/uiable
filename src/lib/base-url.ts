// Resolve the PUBLIC base URL for server-side redirects.
// Behind a proxy, request.url is the internal bind address (0.0.0.0:3000).
// Order: APP_URL (runtime) → NEXT_PUBLIC_APP_URL (build-time) → x-forwarded-host → origin.
function isUsable(url: string | undefined): url is string {
  return Boolean(
    url &&
    !url.includes("localhost") &&
    !url.includes("0.0.0.0") &&
    !url.includes("127.0.0.1")
  )
}

export function getBaseUrl(request: Request): string {
  const appUrl = process.env.APP_URL?.trim()
  if (isUsable(appUrl)) return appUrl.replace(/\/+$/, "")

  const publicUrl = process.env.NEXT_PUBLIC_APP_URL?.trim()
  if (isUsable(publicUrl)) return publicUrl.replace(/\/+$/, "")

  const forwardedHost = request.headers.get("x-forwarded-host")
  if (forwardedHost) {
    const proto = request.headers.get("x-forwarded-proto") ?? "https"
    return `${proto}://${forwardedHost}`
  }

  return new URL(request.url).origin
}
