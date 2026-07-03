//  ------------------------------ | SPINNER - BORDER DARK | ------------------------------  //

export default function SpinnerBorderDark() {
  return (
    <div
      className="inline-block border-[3.5px] border-slate-800 dark:border-white/50 rounded-full size-8 animate-spin border-l-transparent dark:border-l-transparent"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
