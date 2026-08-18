//  ------------------------------ | SPINNER - BORDER SECONDARY | ------------------------------  //

export default function SpinnerBorderSecondary() {
  return (
    <div
      className="border-secondary-500 inline-block size-8 animate-spin rounded-full border-[3.5px] border-l-transparent dark:border-l-transparent"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
