//  ------------------------------ | SPINNER - GROWING DARK | ------------------------------  //

export default function SpinnerGrowingDark() {
  return (
    <div
      className="inline-flex bg-slate-800 dark:bg-white/50 rounded-full opacity-75 size-4 animate-ping"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
