"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import dashboardImg from "../../images/rstdash.png";

export function HeroScrollDemo() {
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-slate-900 font-family-frick">
                            All you need <br />
                            <span className="text-4xl md:text-[5rem] font-bold mt-1 leading-none text-teal-500">
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
                    className="mx-auto  rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                />
            </ContainerScroll>
        </div>
    );
}
