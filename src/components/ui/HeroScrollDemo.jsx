"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import dashboardImg from "../../images/rstdash.png";
import { useTheme } from "../../context/ThemeContext";

export function HeroScrollDemo() {
    const { isDark } = useTheme();

    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-semibold font-family-frick px-4 ${isDark ? 'text-slate-100' : 'text-slate-900'
                            }`}>
                            All you need <br />
                            <span className="text-3xl sm:text-4xl md:text-[5rem] font-bold mt-1 leading-none text-teal-500">
                                In one dashboard
                            </span>
                        </h1>
                    </>
                }
            >
                <img
                    src={dashboardImg}
                    height={620}
                    width={1200}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top w-[1200px] max-w-none xl:max-w-full"
                    draggable={false}
                />
            </ContainerScroll>
        </div>
    );
}