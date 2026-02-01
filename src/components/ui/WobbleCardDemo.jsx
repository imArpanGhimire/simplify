"use client";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import { FastForward, MonitorSmartphone, ShieldOff, Zap } from "lucide-react";

export function WobbleCardDemo() {
    return (
        <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl mx-auto w-full">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-slate-400 min-h-[300px] lg:min-h-[250px]"
                className="">
                <div className="max-w-xs">
                    <h2
                        className="inline-flex gap-2 items-center  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white font-outfit">
                        <MonitorSmartphone /> No App Downloads
                    </h2>
                    <p className="mt-4 text-base/6 text-neutral-100 font-outfit text-justify">
                        Customers simply scan and order. No apps to install, no friction in the ordering process. Your customers get instant access to your menu from any device, any time.
                    </p>
                </div>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[250px] bg-teal-500">
                <h2
                    className="inline-flex items-center gap-2 max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-slate-900 font-outfit">
                    <FastForward /> Quick Setup
                </h2>
                <p className="mt-4 max-w-[26rem]   text-base/6 text-slate-700 font-outfit text-justify">
                    Go live in minutes, not days. <br />  <br /> Create your menu, generate QR codes, and start taking orders immediately. No technical knowledge required - our simple dashboard guides you through every step.
                </p>
            </WobbleCard>
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-3 bg-gray-400 min-h-[300px] lg:min-h-[250px] xl:min-h-[250px]">
                <div className="max-w-sm">
                    <h2
                        className="inline-flex gap-2 items-center max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white font-outfit">
                        <ShieldOff />  No Hardware Required
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-base/6 text-neutral-100 font-outfit text-justify">
                        Works with any device. No expensive tablets, terminals, or proprietary equipment needed. Save on upfront costs and maintenance while keeping your system flexible and scalable.
                    </p>
                </div>
                <img
                    src="/linear.webp"
                    width={500}
                    height={500}
                    alt="analytics dashboard"
                    className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl" />
            </WobbleCard>
        </div>
    );
}