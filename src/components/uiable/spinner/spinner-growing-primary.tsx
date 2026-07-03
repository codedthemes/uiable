//  ------------------------------ | SPINNER - GROWING PRIMARY | ------------------------------  //

export default function SpinnerGrowingPrimary() {
  return (
    <div
      className="inline-flex bg-primary rounded-full opacity-75 size-4 animate-ping"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
