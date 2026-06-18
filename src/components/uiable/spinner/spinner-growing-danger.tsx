//  ------------------------------ | SPINNER - GROWING DANGER | ------------------------------  //

export default function SpinnerGrowingDanger() {
  return (
    <div
      className="inline-flex bg-destructive rounded-full opacity-75 size-4 animate-ping"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
