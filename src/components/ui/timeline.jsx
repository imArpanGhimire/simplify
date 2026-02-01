"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-linear-to-br from-slate-200 via-sky-100 to-teal-100 font-sans px-4 sm:px-6 md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto pt-16 sm:pt-20 lg:pt-30 pb-[-50px] px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 font-family-frick text-black max-w-4xl">
          How <i className="text-teal-500 font-semibold">Simplify</i> Works
        </h2>
        <p className="text-neutral-700 text-xs sm:text-sm md:text-base max-w-sm font-outfit">
          Simple steps to transform your restaurant's ordering experience
        </p>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-12 sm:pb-16 md:pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 sm:pt-10 md:pt-20 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 sm:h-10 absolute left-3 md:left-3 w-8 sm:w-10 rounded-full bg-white flex items-center justify-center">
                <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500">
                {item.title}
              </h3>
            </div>
            <div className="relative pl-16 sm:pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl sm:text-2xl mb-3 sm:mb-4 text-left font-bold text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]
          bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
          from-transparent via-neutral-200 to-transparent
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px]
            bg-gradient-to-t from-teal-500 via-sky-500 to-transparent
            from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};