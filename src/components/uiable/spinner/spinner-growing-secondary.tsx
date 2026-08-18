//  ------------------------------ | SPINNER - GROWING SECONDARY | ------------------------------  //

export default function SpinnerGrowingSecondary() {
  return (
    <div
      className="inline-flex size-4 animate-ping rounded-full bg-secondary opacity-75"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
