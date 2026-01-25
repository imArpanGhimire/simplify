"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
    {
        title: "Sign Up Free",
        description:
            "Create your account in under 2 minutes. No credit card required. Start with our free plan and upgrade when you're ready. Get your restaurant online instantly.",
        content: (
            <div
                className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                Sign Up Free
            </div>
        ),
    },
    {
        title: "Design Your Menu",
        description:
            "Upload your dishes with stunning photos, descriptions, and prices. Our drag-and-drop builder makes it effortless to create beautiful menus that make customers hungry.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/linear.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="menu design demo" />
            </div>
        ),
    },
    {
        title: "Generate QR Code",
        description:
            "Click one button to generate your custom QR code. Download it in high resolution, print it, and place it on your tables. That's it—you're ready to take orders.",
        content: (
            <div
                className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
                Generate QR Code
            </div>
        ),
    },
    {
        title: "Start Receiving Orders",
        description:
            "Watch orders come in real-time on your dashboard. Manage everything from one place—accept orders, track sales, and delight your customers with seamless service.",
        content: (
            <div
                className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--teal-600))] text-white">
                Start Receiving Orders
            </div>
        ),
    },
];

export function StickyScrollRevealDemo() {
    return (
        <div className="w-full py-4">
            <StickyScroll content={content} />
        </div>
    );
}