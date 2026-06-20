//  ------------------------------ | SPINNER - GROWING INFO | ------------------------------  //

export default function SpinnerGrowingInfo() {
  return (
    <div
      className="inline-flex bg-cyan-500 rounded-full opacity-75 size-4 animate-ping"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
