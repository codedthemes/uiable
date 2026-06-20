//  ------------------------------ | SPINNER - GROWING SUCCESS | ------------------------------  //

export default function SpinnerGrowingSuccess() {
  return (
    <div
      className="inline-flex bg-green-600 rounded-full opacity-75 size-4 animate-ping"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
