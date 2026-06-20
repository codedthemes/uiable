import Link from "next/link";

//  ------------------------------ | PAGE - 404 NOT FOUND | ------------------------------  //

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <div className="flex flex-col items-center gap-6 text-center max-w-md">
        <h1 className="text-8xl font-bold text-primary">404</h1>
        <div className="flex flex-col gap-2">
          <h2>Page Not Found</h2>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
