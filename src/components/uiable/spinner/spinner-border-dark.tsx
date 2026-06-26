//  ------------------------------ | SPINNER - BORDER DARK | ------------------------------  //

export default function SpinnerBorderDark() {
  return (
    <div
      className="inline-block size-8 animate-spin rounded-full border-[3.5px] border-slate-800 border-l-transparent dark:border-white/50 dark:border-l-transparent"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
