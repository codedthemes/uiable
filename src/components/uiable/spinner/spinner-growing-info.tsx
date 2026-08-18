//  ------------------------------ | SPINNER - GROWING INFO | ------------------------------  //

export default function SpinnerGrowingInfo() {
  return (
    <div
      className="inline-flex size-4 animate-ping rounded-full bg-cyan-500 opacity-75"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
