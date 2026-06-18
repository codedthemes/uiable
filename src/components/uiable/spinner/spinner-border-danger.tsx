//  ------------------------------ | SPINNER - BORDER DANGER | ------------------------------  //

export default function SpinnerBorderDanger() {
  return (
    <div
      className="inline-block border-[3.5px] border-destructive rounded-full size-8 animate-spin border-l-transparent dark:border-l-transparent"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
