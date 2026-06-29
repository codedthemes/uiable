//  ------------------------------ | SPINNER - SIZE CUSTOM | ------------------------------  //

export default function SpinnerSizeCustom() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div
        className="inline-block size-10 animate-spin rounded-full border-[2px] border-slate-800 border-l-transparent dark:border-white/50 dark:border-l-transparent"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div
        className="inline-flex size-5 animate-ping rounded-full bg-slate-800 opacity-75 dark:bg-white/50"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
