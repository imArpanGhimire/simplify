"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export const Timeline = ({ data }) => {
  const { isDark } = useTheme();

  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className={`
        w-full font-sans px-4 sm:px-6 md:px-10
        ${isDark
          ? "bg-transparent"
          : "bg-linear-to-br from-slate-200 via-sky-100 to-teal-100"}
      `}
    >
      {/* HEADER */}
      <div className="max-w-7xl mx-auto pt-16 sm:pt-20 lg:pt-30 px-4 md:px-8 lg:px-10">
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 font-family-frick max-w-4xl
            ${isDark ? "text-slate-200" : "text-black"}
          `}
        >
          How <i className="text-teal-500 font-semibold">Simplify</i> Works
        </h2>

        <p
          className={`text-xs sm:text-sm md:text-base max-w-sm font-outfit
            ${isDark ? "text-slate-400" : "text-neutral-700"}
          `}
        >
          Simple steps to transform your restaurant&apos;s ordering experience
        </p>
      </div>

      {/* TIMELINE */}
      <div
        ref={ref}
        className="relative max-w-7xl mx-auto pb-12 sm:pb-16 md:pb-20"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 sm:pt-10 md:pt-20 md:gap-10"
          >
            {/* LEFT COLUMN */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className={`h-8 sm:h-10 absolute left-3 md:left-3 w-8 sm:w-10 rounded-full flex items-center justify-center
                  ${isDark ? "bg-slate-800" : "bg-white"}
                `}
              >
                <div
                  className={`h-3 w-3 sm:h-4 sm:w-4 rounded-full border p-2
                    ${isDark
                      ? "bg-teal-400 border-teal-300"
                      : "bg-neutral-200 border-neutral-300"}
                  `}
                />
              </div>

              <h3
                className={`hidden md:block text-xl md:pl-20 md:text-5xl font-bold
                  ${isDark ? "text-slate-400" : "text-neutral-500"}
                `}
              >
                {item.title}
              </h3>
            </div>

            {/* CONTENT */}
            <div className="relative pl-16 sm:pl-20 pr-4 md:pl-4 w-full">
              <h3
                className={`md:hidden block text-xl sm:text-2xl mb-3 sm:mb-4 font-bold
                  ${isDark ? "text-slate-400" : "text-neutral-500"}
                `}
              >
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* VERTICAL LINE */}
        <div
          style={{ height: height + "px" }}
          className={`
            absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]
            ${isDark
              ? "bg-[linear-gradient(to_bottom,transparent,rgba(148,163,184,0.3),transparent)]"
              : "bg-[linear-gradient(to_bottom,transparent,var(--tw-gradient-stops),transparent)] from-transparent via-neutral-200 to-transparent"}
          `}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px]
              bg-gradient-to-t from-teal-500 via-sky-500 to-transparent
              rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
