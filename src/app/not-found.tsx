import Link from "next/link"

//  ------------------------------ | PAGE - 404 NOT FOUND | ------------------------------  //

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-foreground">
      <div className="flex max-w-md flex-col items-center gap-6 text-center">
        <h1 className="text-8xl font-bold text-primary">404</h1>
        <div className="flex flex-col gap-2">
          <h2>Page Not Found</h2>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
