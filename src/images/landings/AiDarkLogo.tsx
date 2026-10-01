export default function AiDarkLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`group flex items-center gap-2.5 ${className}`}>
      {/* AI Neural Spark Icon */}
      <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-[1px] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]">
        <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-slate-950">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4.5 w-4.5 transition-transform duration-300 group-hover:rotate-12"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 4-Point Radiant AI Spark */}
            <path
              d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z"
              fill="url(#cortex-ai-dark-grad)"
            />
            {/* Center Core Glow */}
            <circle cx="12" cy="12" r="2.2" fill="#FFFFFF" fillOpacity="0.9" />
            {/* Satellite AI Nodes */}
            <circle cx="19" cy="5" r="1.5" fill="#38BDF8" />
            <circle cx="5" cy="19" r="1.2" fill="#F472B6" />
            <defs>
              <linearGradient
                id="cortex-ai-dark-grad"
                x1="2"
                y1="2"
                x2="22"
                y2="22"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#818CF8" />
                <stop offset="0.5" stopColor="#C084FC" />
                <stop offset="1" stopColor="#F472B6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Brand Name & AI Badge */}
      <div className="flex items-center gap-1.5">
        <span className="text-xl font-bold tracking-tight text-white">
          Cortex
        </span>
        <span className="rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-1.5 py-0.5 text-[10px] font-extrabold tracking-wider text-white uppercase shadow-[0_0_12px_rgba(168,85,247,0.35)]">
          AI
        </span>
      </div>
    </div>
  )
}
