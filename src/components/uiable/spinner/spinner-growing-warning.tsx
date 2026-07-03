//  ------------------------------ | SPINNER - GROWING WARNING | ------------------------------  //

export default function SpinnerGrowingWarning() {
  return (
    <div
      className="inline-flex bg-yellow-500 rounded-full opacity-75 size-4 animate-ping"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
