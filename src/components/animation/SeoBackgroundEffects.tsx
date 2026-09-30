"use client"

export function SeoBackgroundEffects() {
  return (
    <>
      <style>{`
        @keyframes trail-v {
          0% { transform: translateY(-200px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(1000px); opacity: 0; }
        }
        @keyframes trail-h {
          0% { transform: translateX(-300px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(2000px); opacity: 0; }
        }
        .animate-trail-v {
          animation: trail-v linear infinite;
        }
        .animate-trail-h {
          animation: trail-h linear infinite;
        }
      `}</style>

      {/* 3D Perspective Grid Background */}
      <div className="absolute inset-0 top-0 -z-20 flex justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_10%,black_40%,black_70%,transparent_100%)]">
        <div className="absolute top-[20%] h-[1000px] w-[2000px] origin-top [transform:perspective(500px)_rotateX(70deg)]">
          <svg
            width="2000"
            height="1000"
            className="absolute inset-0 opacity-80"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Static Base Grid */}
            <pattern
              id="grid-pattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(168,85,247,0.3)"
                strokeWidth="1"
              />
            </pattern>
            <rect width="2000" height="1000" fill="url(#grid-pattern)" />
          </svg>

          {/* Vertical Trails */}
          {[120, 360, 600, 840, 1020, 1260, 1500, 1740, 1920].map((x, i) => (
            <div
              key={`v-${i}`}
              className="animate-trail-v absolute top-0 h-[200px] w-[2px] bg-gradient-to-b from-transparent via-fuchsia-500 to-transparent shadow-[0_0_15px_theme(colors.fuchsia.500)]"
              style={{
                left: x - 1,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${6 + (i % 4)}s`,
              }}
            ></div>
          ))}

          {/* Horizontal Trails */}
          {[180, 420, 660, 900].map((y, i) => (
            <div
              key={`h-${i}`}
              className="animate-trail-h absolute left-0 h-[2px] w-[300px] bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_15px_theme(colors.purple.500)]"
              style={{
                top: y - 1,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${8 + (i % 3)}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Intense Horizontal Glow Effects Behind Dashboard */}
      <div className="absolute top-[55%] left-1/2 -z-10 h-[250px] w-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-fuchsia-700/60 blur-[100px]"></div>
      <div className="absolute top-[58%] left-1/2 -z-10 h-[100px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-purple-500/80 blur-[60px]"></div>
      <div className="absolute top-[60%] left-1/2 -z-10 h-[30px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-white/80 blur-[30px]"></div>
      <div className="absolute top-[60%] left-1/2 -z-10 h-[10px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-white blur-[10px]"></div>
    </>
  )
}

export default SeoBackgroundEffects
