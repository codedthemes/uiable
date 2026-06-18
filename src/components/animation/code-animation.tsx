"use client";

import React, { useEffect, useState } from "react"

// third party
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// project imports
import { AnimationBg, AsteriskSpark } from "@/images/svg/landing";

// assets
import { ChevronLeft, ChevronRight, Slash } from 'lucide-react';

interface CodeAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
    backgroundCode?: string;
}

// Staggered dot animation variant factory
const dotVariants = (delay: number) => ({
    hidden: { margin: "0px", opacity: 0, scale: 0 },
    visible: {
        margin: "0 10px",
        opacity: 1,
        scale: 1,
        transition: { delay, type: "spring" as const, stiffness: 40, damping: 20 }
    },
    exit: {
        margin: "0px",
        opacity: 0,
        scale: 0,
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }
    }
});

// Slash animation variant
const slashVariants = {
    hidden: { width: 0, opacity: 0, scale: 0.5 },
    visible: {
        width: "auto",
        opacity: 1,
        scale: 1,
        transition: { delay: 3.2, type: "spring" as const, stiffness: 40, damping: 20 }
    },
    exit: {
        width: 0,
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }
    }
};

//  ------------------------------ | CODE ANIMATION | ------------------------------  //

export default function CodeAnimation({ className, backgroundCode }: CodeAnimationProps) {
    const [animKey, setAnimKey] = useState(0);

    // Re-trigger the animation loop
    useEffect(() => {
        const totalCycle = 6000; // 6s per cycle
        const interval = setInterval(() => { setAnimKey(k => k + 1); }, totalCycle);
        return () => clearInterval(interval);
    }, []);

    const codeTopRight = `// use the JFrame type until support for the
        // new component is finished
        JFrame frame = new JFrame("Hello Button");
        Container pane = frame.getContentPane();
        pane.add( hello );
        frame.pack();
        frame.show();      // display the frame
    }`;

    const codeBottomLeft = `/**
        * Simple HelloButton() method.
        * @version 1.0
        * @author john doe <doe.j@example.com>
        */
    HelloButton()
    {
    JButton hello = new JButton("Hello, world!");
    }`;

    return (
        <div className={cn("relative flex h-full w-full min-h-[380px] sm:min-h-[440px] md:min-h-[500px] items-center justify-center overflow-hidden rounded-3xl py-10 select-none border border-border/40 bg-white/30 dark:bg-slate-950/20", className)}>

            {/* SVG Background Layer */}
            <AnimationBg className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full p-4 sm:p-8 md:p-12" />

            {/* Faint Background Code - Top Right */}
            <div className="absolute top-4 right-4 sm:top-10 sm:-right-4 md:top-14 md:-right-2 flex flex-col justify-start items-start pointer-events-none z-0 overflow-hidden">
                <pre className="text-[10px] sm:text-[11px] font-mono text-blue-500/20 dark:text-slate-500/20 leading-[2.5] opacity-80 mix-blend-multiply dark:mix-blend-lighten text-left">
                    {backgroundCode || codeTopRight}
                </pre>
            </div>

            {/* Faint Background Code - Bottom Left */}
            <div className="absolute bottom-4 left-4 sm:-bottom-4 sm:left-10 md:-bottom-2 md:left-14 flex flex-col justify-end items-start pointer-events-none z-0 overflow-hidden">
                <pre className="text-[10px] sm:text-[11px] font-mono text-blue-500/20 dark:text-slate-500/20 leading-[2.5] opacity-80 mix-blend-multiply dark:mix-blend-lighten text-left">
                    {backgroundCode || codeBottomLeft}
                </pre>
            </div>

            {/* Center animated graphic */}
            <div className="relative z-10 flex items-center justify-center" key={animKey}>
                <motion.div
                    initial={{ marginRight: -90 }}
                    animate={{ marginRight: 0 }}
                    transition={{ delay: 0.1, type: "spring" as const, stiffness: 25, damping: 20 }}
                >
                    <ChevronLeft strokeWidth={1} className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[188px] lg:h-[188px]" />
                </motion.div>

                <motion.div
                    className="flex items-center justify-center"
                    initial={{ gap: 0 }}
                    animate={{ gap: 8 }}
                    transition={{ delay: 0.3, type: "spring" as const, stiffness: 30, damping: 18 }}
                >
                    {/* Dots */}
                    <motion.div
                        variants={dotVariants(0.6)}
                        initial="hidden"
                        animate="visible"
                        className="h-7 sm:h-[34px] md:h-[34px] lg:h-10 w-7 sm:w-[34px] md:w-[34px] lg:w-10 overflow-hidden rounded-full bg-[#4680FF] shadow-md shadow-blue-500/30 flex items-center justify-center"
                    >
                        <AsteriskSpark />
                    </motion.div>
                    <motion.div
                        variants={dotVariants(1.4)}
                        initial="hidden"
                        animate="visible"
                        className="h-7 sm:h-[34px] md:h-[34px] lg:h-10 w-7 sm:w-[34px] md:w-[34px] lg:w-10 overflow-hidden rounded-full bg-[#4680FF] shadow-md shadow-blue-500/30 flex items-center justify-center"
                    >
                        <AsteriskSpark />
                    </motion.div>
                    <motion.div
                        variants={dotVariants(2.2)}
                        initial="hidden"
                        animate="visible"
                        className="h-7 sm:h-[34px] md:h-[34px] lg:h-10 w-7 sm:w-[34px] md:w-[34px] lg:w-10 overflow-hidden rounded-full bg-[#4680FF] shadow-md shadow-blue-500/30 flex items-center justify-center"
                    >
                        <AsteriskSpark />
                    </motion.div>

                    {/* Slash */}
                    <motion.div
                        variants={slashVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center justify-center overflow-hidden text-slate-800 dark:text-slate-200"
                    >
                        <Slash strokeWidth={1} className="rotate-[150deg] shrink-0 w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] lg:w-[118px] lg:h-[118px]" />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ marginLeft: -90 }}
                    animate={{ marginLeft: 0 }}
                    transition={{ delay: 0.1, type: "spring" as const, stiffness: 25, damping: 20 }}
                >
                    <ChevronRight strokeWidth={1} className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[188px] lg:h-[188px]" />
                </motion.div>
            </div>
        </div>
    )
}
