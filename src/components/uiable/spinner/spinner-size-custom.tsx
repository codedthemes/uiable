//  ------------------------------ | SPINNER - SIZE CUSTOM | ------------------------------  //

export default function SpinnerSizeCustom() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div
        className="inline-block border-[2px] border-slate-800 dark:border-white/50 rounded-full size-10 animate-spin border-l-transparent dark:border-l-transparent"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div
        className="inline-flex bg-slate-800 dark:bg-white/50 rounded-full opacity-75 size-5 animate-ping"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
