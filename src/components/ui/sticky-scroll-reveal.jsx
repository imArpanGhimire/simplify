"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
    const [activeCard, setActiveCard] = useState(0);
    const contentRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            contentRefs.current.forEach((ref, index) => {
                if (ref) {
                    const { offsetTop, offsetHeight } = ref;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveCard(index);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const linearGradients = [
        "linear-gradient(to bottom right, #06b6d4, #10b981)",
        "linear-gradient(to bottom right, #14b8a6, #0d9488)",
        "linear-gradient(to bottom right, #2dd4bf, #14b8a6)",
        "linear-gradient(to bottom right, #5eead4, #2dd4bf)",
    ];

    return (
        <div className="relative flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 p-10">
            {/* Left side - Scrolling content */}
            <div className="relative flex-1 max-w-2xl">
                {content.map((item, index) => (
                    <div
                        key={item.title + index}
                        ref={(el) => (contentRefs.current[index] = el)}
                        className="min-h-screen flex items-center py-20"
                    >
                        <div>
                            <motion.h2
                                initial={{ opacity: 0.3 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                transition={{ duration: 0.3 }}
                                className="text-2xl font-bold text-slate-900"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0.3 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                transition={{ duration: 0.3 }}
                                className="text-lg mt-10 max-w-sm text-slate-600 font-outfit"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right side - Sticky visual */}
            <div className="hidden lg:block flex-1 relative">
                <div className="sticky top-20 h-[500px] w-full max-w-md">
                    {content.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeCard === index ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ background: linearGradients[index] }}
                            className={cn(
                                "absolute inset-0 rounded-md overflow-hidden",
                                contentClassName
                            )}
                        >
                            {item.content}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};