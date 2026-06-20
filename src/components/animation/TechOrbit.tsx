"use client";

// third party
import { motion } from "framer-motion";

// assets
import { BaseUi, Shadcn, Tailwind } from "@/images/svg/icons";
import { IconBrandNextjs, IconBrandReact } from "@tabler/icons-react";
import { AnimationLogo, AnimationBg } from "@/images/svg/landing";


// Duration and ease definitions for orbital movement
const ORBIT_1_DURATION = 25; // Clockwise inner orbit
const ORBIT_2_DURATION = 35; // Counter-clockwise middle orbit
const ORBIT_3_DURATION = 45; // Clockwise outer orbit

type TechNodeProps = {
    icon: React.ReactNode;
    startAngle: number;
    orbitDuration: number;
    orbitDirection: "clockwise" | "counter-clockwise";
};

function TechNode({ icon, startAngle, orbitDuration, orbitDirection }: TechNodeProps) {
    const isClockwise = orbitDirection === "clockwise";

    // The parent orbit container will rotate by 360 or -360.
    // To keep the child upright, it needs to counter-rotate in the opposite direction.
    const initialRotation = -startAngle;
    const animateRotation = isClockwise
        ? -startAngle - 360
        : -startAngle + 360;

    return (
        <div
            className="absolute inset-0 pointer-events-none"
            style={{ transform: `rotate(${startAngle}deg)` }}
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                <motion.div
                    whileHover={{ scale: 1.15, boxShadow: "0 10px 25px rgba(59,130,246,0.15)" }}
                    animate={{ rotate: animateRotation }}
                    style={{ rotate: initialRotation }}
                    transition={{
                        rotate: {
                            repeat: Infinity,
                            duration: orbitDuration,
                            ease: "linear"
                        }
                    }}
                    className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-[#4680FF14] backdrop-blur-[34px] border border-slate-200 dark:border-slate-800 shadow-md text-foreground transition-colors cursor-pointer"
                >
                    {icon}
                </motion.div>
            </div>
        </div>
    );
}



//  ------------------------------ | COMPONENTS TECH ORBITS | ------------------------------  //

export default function TechOrbit() {
    return (
        <div className="relative flex h-full w-full min-h-[380px] sm:min-h-[440px] md:min-h-[500px] items-center justify-center overflow-hidden rounded-3xl py-10 select-none border border-border/40">

            {/* SVG Background */}
            <AnimationBg className="top-auto left-auto -bottom-10 -right-[60px]" />

            {/* Orbit Container Centered in the Bottom-Right Area */}
            <div className="absolute right-[6%] bottom-[12%] flex items-center justify-center">

                {/* Orbit 3 (Outer - radius ~360px) */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: ORBIT_3_DURATION,
                        ease: "linear"
                    }}
                    className="absolute flex items-center justify-center rounded-full w-[520px] h-[520px] sm:w-[680px] sm:h-[680px] md:w-[760px] md:h-[760px]"
                >
                    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                        <circle cx="50%" cy="50%" r="50%" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-muted-foreground" />
                    </svg>
                    {/* shadcn  */}
                    <TechNode
                        startAngle={90}
                        orbitDuration={ORBIT_3_DURATION}
                        orbitDirection="clockwise"
                        icon={<Shadcn />}
                    />

                    {/* Tailwind 2 */}
                    <TechNode
                        startAngle={135}
                        orbitDuration={ORBIT_3_DURATION}
                        orbitDirection="clockwise"
                        icon={<Tailwind />}
                    />

                    {/* Code/Slash (//) */}
                    <TechNode
                        startAngle={180}
                        orbitDuration={ORBIT_3_DURATION}
                        orbitDirection="clockwise"
                        icon={<IconBrandNextjs />}
                    />
                </motion.div>

                {/* Orbit 2 (Middle - radius ~240px) */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                        repeat: Infinity,
                        duration: ORBIT_2_DURATION,
                        ease: "linear"
                    }}
                    className="absolute flex items-center justify-center rounded-full w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] md:w-[520px] md:h-[520px]"
                >
                    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                        <circle cx="50%" cy="50%" r="50%" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-muted-foreground" />
                    </svg>
                    {/* React */}
                    <TechNode
                        startAngle={105}
                        orbitDuration={ORBIT_2_DURATION}
                        orbitDirection="counter-clockwise"
                        icon={<IconBrandReact />}
                    />

                    {/* TypeScript */}
                    <TechNode
                        startAngle={165}
                        orbitDuration={ORBIT_2_DURATION}
                        orbitDirection="counter-clockwise"
                        icon={<BaseUi />}
                    />
                </motion.div>

                {/* Orbit 1 (Inner - radius ~140px) */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: ORBIT_1_DURATION,
                        ease: "linear"
                    }}
                    className="absolute flex items-center justify-center rounded-full w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px]"
                >
                    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                        <circle cx="50%" cy="50%" r="50%" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-muted-foreground" />
                    </svg>
                    {/* Next.js */}
                    <TechNode
                        startAngle={0}
                        orbitDuration={ORBIT_1_DURATION}
                        orbitDirection="clockwise"
                        icon={<BaseUi />}
                    />

                    <TechNode
                        startAngle={90}
                        orbitDuration={ORBIT_1_DURATION}
                        orbitDirection="clockwise"
                        icon={<IconBrandNextjs />}
                    />

                    <TechNode
                        startAngle={180}
                        orbitDuration={ORBIT_1_DURATION}
                        orbitDirection="clockwise"
                        icon={<Tailwind />}
                    />

                    <TechNode
                        startAngle={270}
                        orbitDuration={ORBIT_1_DURATION}
                        orbitDirection="clockwise"
                        icon={<IconBrandReact />}
                    />

                </motion.div>

                {/* Center Blue Pulse Logo */}
                <motion.div
                    animate={{ scale: [1, 1.05, 1], }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-20 flex h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 items-center justify-center rounded-full cursor-pointer "
                >
                    <AnimationLogo width={110} height={110} />
                </motion.div>
            </div>
        </div>
    );
}
