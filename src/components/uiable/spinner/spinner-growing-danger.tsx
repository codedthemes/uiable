//  ------------------------------ | SPINNER - GROWING DANGER | ------------------------------  //

export default function SpinnerGrowingDanger() {
  return (
    <div
      className="inline-flex size-4 animate-ping rounded-full bg-destructive opacity-75"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
