//  ------------------------------ | SPINNER - GROWING PRIMARY | ------------------------------  //

export default function SpinnerGrowingPrimary() {
  return (
    <div
      className="inline-flex size-4 animate-ping rounded-full bg-primary opacity-75"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
