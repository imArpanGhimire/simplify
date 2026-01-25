"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
    const [activeCard, setActiveCard] = useState(0);
    const [isVisible, setIsVisible] = useState(false); // NEW: track visibility
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end end"],
    });

    const cardLength = content.length;

    // Update active card
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / (cardLength - 1));
        const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
            const distance = Math.abs(latest - breakpoint);
            return distance < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc;
        }, 0);
        setActiveCard(closestBreakpointIndex);
    });

    // Check if the container is near viewport
    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const buffer = 50; // px before the div to trigger visibility
            if (rect.top < window.innerHeight - buffer && rect.bottom > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const backgroundColors = ["transparent", "transparent", "transparent", "transparent"];
    const linearGradients = [
        "linear-gradient(to bottom right, #06b6d4, #10b981)",
        "linear-gradient(to bottom right, #14b8a6, #0d9488)",
        "linear-gradient(to bottom right, #2dd4bf, #14b8a6)",
        "linear-gradient(to bottom right, #5eead4, #2dd4bf)",
    ];

    const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);
    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);

    return (
        <motion.div
            animate={{ background: backgroundColors[activeCard % backgroundColors.length] }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative flex h-120 justify-center space-x-10 overflow-y-auto rounded-md p-10"
            ref={ref}
        >
            <div className="div relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-20">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-2xl font-bold text-slate-900"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-kg mt-10 max-w-sm text-slate-600 font-outfit"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>

            {/* Sticky slider: only visible when isVisible is true */}
            {isVisible && (
                <div
                    style={{ background: backgroundGradient }}
                    className={cn(
                        "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block transition-opacity duration-500",
                        contentClassName
                    )}
                >
                    {content[activeCard]?.content ?? null}
                </div>
            )}
        </motion.div>
    );
};
