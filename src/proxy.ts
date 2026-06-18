import { NextRequest, NextResponse } from "next/server"

const SESSION_COOKIE_NAME = "session"

// Routes that don't require authentication
const PUBLIC_PATHS = ["/auth/login", "/auth/register", "/api/auth/session"]

function isPublicPath(pathname: string) {
  return PUBLIC_PATHS.some((p) => pathname.startsWith(p))
}

function isProtectedPath(pathname: string) {
  // Protect the dashboard and preview routes; leave landing page and auth pages open
  return (
    pathname.startsWith("/preview") ||
    pathname.startsWith("/components") ||
    pathname.startsWith("/blocks") ||
    pathname.startsWith("/doc")
  )
}

export function proxy(request: NextRequest) {
  // Skip auth entirely in local development — devs don't need Firebase credentials
  if (process.env.NODE_ENV === "development") return NextResponse.next()

  const { pathname } = request.nextUrl
  const session = request.cookies.get(SESSION_COOKIE_NAME)?.value

  if (isPublicPath(pathname)) {
    // Redirect logged-in users away from login page
    if (session && pathname.startsWith("/auth/login")) {
      return NextResponse.redirect(new URL("/components", request.url))
    }
    return NextResponse.next()
  }

  if (isProtectedPath(pathname) && !session) {
    const loginUrl = new URL("/auth/login", request.url)
    loginUrl.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all paths except static files and Next.js internals
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
