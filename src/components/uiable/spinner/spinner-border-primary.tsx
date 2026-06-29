//  ------------------------------ | SPINNER - BORDER PRIMARY | ------------------------------  //

export default function SpinnerBorderPrimary() {
  return (
    <div
      className="inline-block size-8 animate-spin rounded-full border-[3.5px] border-primary border-l-transparent dark:border-l-transparent"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
