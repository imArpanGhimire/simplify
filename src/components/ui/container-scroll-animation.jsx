"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";

export const ContainerScroll = ({ titleComponent, children }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const rotate = useTransform(
        scrollYProgress,
        [0, 0.6],
        [155, 0] // 👈 VERY sloppy → upright
    );
    const scale = useTransform(
        scrollYProgress,
        [0, 1],
        [0.8, 1]
    );
    const headerTranslate = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -100]
    );
    return (
        <div
            ref={containerRef}
            className="h-[40rem] sm:h-[50rem] md:h-[65rem] flex items-center justify-center relative p-2 sm:p-4 md:p-20"
        >
            <div
                className="py-10 sm:py-20 md:py-40 w-full relative"
                style={{ perspective: "1400px" }}
            >
                <Header translate={headerTranslate} titleComponent={titleComponent} />
                <Card rotate={rotate} scale={scale}>
                    {children}
                </Card>
            </div>
        </div>
    );
};

export const Header = ({ translate, titleComponent }) => {
    return (
        <motion.div
            style={{ translateY: translate }}
            className="max-w-5xl mx-auto text-center"
        >
            {titleComponent}
        </motion.div>
    );
};

export const Card = ({ rotate, scale, children }) => {
    return (
        <motion.div
            style={{
                rotateX: rotate,
                scale,
                transformOrigin: "bottom center", // 👈 KEY PART
                boxShadow:
                    "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026",
            }}
            className="max-w-5xl -mt-8 sm:-mt-12 mx-auto h-[20rem] sm:h-[30rem] md:h-[40rem] w-full border-2 sm:border-4 border-[#6C6C6C] p-1 sm:p-2 md:p-6 bg-[#222222] rounded-[20px] sm:rounded-[30px]"
        >
            <div className="h-full w-full overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100 p-1 sm:p-2 md:p-4">
                {children}
            </div>
        </motion.div>
    );
};