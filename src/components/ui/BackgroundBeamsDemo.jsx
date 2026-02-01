"use client";
import React from "react";
import { BackgroundBeams } from "../ui/BackgroundBeams";
import { useNavigate } from "react-router-dom";

export function BackgroundBeamsDemo() {
    const navigate = useNavigate();

    return (
        <>
            <div className="h-80 mt-20 mb-8  w-full rounded-md bg-transparent relative flex flex-col items-center justify-center antialiased">
                <div className="max-w-2xl mx-auto px-4 flex flex-col justify-center items-center">
                    <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                        Transform Your Meal Experience
                    </h1>
                    <p className="font-outfit text-justify text-neutral-500 max-w-lg mx-auto mt-8 text-md text-center relative z-10">
                        Join thousands of restaurants using QR code menus to streamline operations, reduce costs, and enhance customer experience. Get started in minutes, not days. No hardware required, no complicated setup.
                    </p>
                </div>
                <BackgroundBeams />
            </div >

        </>
    );
}