//  ------------------------------ | SPINNER - BORDER SUCCESS | ------------------------------  //

export default function SpinnerBorderSuccess() {
  return (
    <div
      className="inline-block border-[3.5px] border-green-600 rounded-full size-8 animate-spin border-l-transparent dark:border-l-transparent"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
