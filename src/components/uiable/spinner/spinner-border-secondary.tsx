//  ------------------------------ | SPINNER - BORDER SECONDARY | ------------------------------  //

export default function SpinnerBorderSecondary() {
  return (
    <div
      className="inline-block border-[3.5px] border-secondary-500 rounded-full size-8 animate-spin border-l-transparent dark:border-l-transparent"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
