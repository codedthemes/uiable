//  ------------------------------ | SPINNER - GROWING WARNING | ------------------------------  //

export default function SpinnerGrowingWarning() {
  return (
    <div
      className="inline-flex size-4 animate-ping rounded-full bg-yellow-500 opacity-75"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
