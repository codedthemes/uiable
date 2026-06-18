"use client";

// third party
import { motion } from "framer-motion";

// project imports
import { AnimationLogo, AnimationBg } from "@/images/svg/landing";

//  ------------------------------ | MOTION VISUAL | ------------------------------  //

export default function MotionVisual() {
    const pathString = "M 100 150 C 200 60, 400 340, 500 250";

    return (
        <div className="relative flex h-full w-full min-h-[380px] sm:min-h-[440px] md:min-h-[500px] items-center justify-center overflow-hidden rounded-3xl py-10 select-none border border-border/40">
            {/* SVG Background */}
            <AnimationBg className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full p-4 sm:p-8 md:p-12" />

            <svg
                viewBox="0 0 600 400"
                className="absolute inset-0 w-full h-full pointer-events-none"
            >

                {/* Left Guide Line and Control Point */}
                <line x1="100" y1="150" x2="200" y2="60" strokeWidth="2" className="stroke-slate-200 dark:stroke-slate-800" />
                <rect x="196" y="56" width="8" height="8" rx="1" className="fill-slate-300 dark:fill-slate-700" />

                {/* Right Guide Line and Control Point */}
                <line x1="500" y1="250" x2="400" y2="340" strokeWidth="2" className="stroke-slate-200 dark:stroke-slate-800" />
                <rect x="396" y="336" width="8" height="8" rx="1" className="fill-slate-300 dark:fill-slate-700" />

                {/* Main Bezier Curve */}
                <path d={pathString} fill="none" strokeWidth="2.5" className="stroke-slate-900 dark:stroke-slate-100" />

                {/* Endpoint Anchor Circles */}
                <circle cx="100" cy="150" r="8" strokeWidth="2" className="fill-white dark:fill-slate-950 stroke-slate-300 dark:stroke-slate-700" />
                <circle cx="500" cy="250" r="8" strokeWidth="2" className="fill-white dark:fill-slate-950 stroke-slate-300 dark:stroke-slate-700" />

                {/* Animated UI Badge */}
                <motion.g
                    animate={{
                        offsetDistance: ["0%", "100%"],
                        scale: [1, 1.4, 0.8, 1.2, 0.9, 1]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    style={{
                        offsetPath: `path('${pathString}')`,
                        offsetRotate: "0deg"
                    } as React.CSSProperties}
                >
                    <g transform="translate(-24, -24)" className="pointer-events-auto">
                        <AnimationLogo />
                    </g>
                </motion.g>
            </svg>
        </div>
    );
}

