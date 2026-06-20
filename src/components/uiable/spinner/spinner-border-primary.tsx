//  ------------------------------ | SPINNER - BORDER PRIMARY | ------------------------------  //

export default function SpinnerBorderPrimary() {
  return (
    <div
      className="inline-block border-[3.5px] border-primary rounded-full size-8 animate-spin border-l-transparent dark:border-l-transparent"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
