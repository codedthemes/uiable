//  ------------------------------ | SPINNER - GROWING SECONDARY | ------------------------------  //

export default function SpinnerGrowingSecondary() {
  return (
    <div
      className="inline-flex bg-secondary rounded-full opacity-75 size-4 animate-ping"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
