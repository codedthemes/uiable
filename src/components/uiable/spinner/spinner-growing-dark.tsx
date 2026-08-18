//  ------------------------------ | SPINNER - GROWING DARK | ------------------------------  //

export default function SpinnerGrowingDark() {
  return (
    <div
      className="inline-flex size-4 animate-ping rounded-full bg-slate-800 opacity-75 dark:bg-white/50"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
