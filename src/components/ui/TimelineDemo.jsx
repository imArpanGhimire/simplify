import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { QrCode, Menu, Smartphone, TrendingUp } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";


export function TimelineDemo() {
    const { isDark } = useTheme();

    const data = [
        {
            title: "Step 1",
            content: (
                <div>
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className={`${isDark ? "bg-slate-800" : "bg-sky-100"} p-2 sm:p-3 rounded-lg`}>
                            <QrCode className={`w-6 h-6 sm:w-8 sm:h-8 ${isDark ? "text-teal-300" : "text-sky-600"}`} />
                        </div>
                        <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? "text-slate-200" : "text-slate-900"}`}>
                            Sign Up Free
                        </h3>
                    </div>

                    <p className={`mb-6 sm:mb-8 text-sm sm:text-base font-normal font-outfit ${isDark ? "text-slate-200" : "text-neutral-500"
                        }`}>
                        Create your account in under 2 minutes. No credit card required. Start with our free plan and upgrade when you're ready.
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        <span className={`${isDark ? "bg-slate-800 text-slate-200" : "bg-sky-50 text-sky-700"} px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium`}>
                            ✓ Instant Setup
                        </span>
                        <span className={`${isDark ? "bg-slate-800 text-slate-200" : "bg-sky-50 text-sky-700"} px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium`}>
                            ✓ No Credit Card
                        </span>
                    </div>
                </div>
            ),
        },

        {
            title: "Step 2",
            content: (
                <div>
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className={`${isDark ? "bg-slate-800" : "bg-sky-100"} p-2 sm:p-3 rounded-lg`}>
                            <Menu className={`w-6 h-6 sm:w-8 sm:h-8 ${isDark ? "text-teal-300" : "text-sky-600"}`} />
                        </div>
                        <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? "text-slate-200" : "text-slate-900"}`}>
                            Design Your Menu
                        </h3>
                    </div>

                    <p className={`mb-6 sm:mb-8 text-sm sm:text-base font-normal font-outfit ${isDark ? "text-slate-200" : "text-neutral-500"
                        }`}>
                        Upload your dishes with stunning photos, descriptions, and prices. Our drag-and-drop builder makes it effortless to create beautiful menus.
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        <span className={`${isDark ? "bg-slate-800 text-slate-200" : "bg-sky-50 text-sky-700"} px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium`}>
                            ✓ Photo Upload
                        </span>
                        <span className={`${isDark ? "bg-slate-800 text-slate-200" : "bg-sky-50 text-sky-700"} px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium`}>
                            ✓ Easy Editor
                        </span>
                    </div>
                </div>
            ),
        },

        {
            title: "Step 3",
            content: (
                <div>
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className={`${isDark ? "bg-slate-800" : "bg-sky-100"} p-2 sm:p-3 rounded-lg`}>
                            <Smartphone className={`w-6 h-6 sm:w-8 sm:h-8 ${isDark ? "text-teal-300" : "text-sky-600"}`} />
                        </div>
                        <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? "text-slate-200" : "text-slate-900"}`}>
                            Generate QR Code
                        </h3>
                    </div>

                    <p className={`mb-6 sm:mb-8 text-sm sm:text-base font-normal font-outfit ${isDark ? "text-slate-200" : "text-neutral-500"
                        }`}>
                        Click one button to generate your custom QR code. Download it in high resolution, print it, and place it on your tables.
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        <span className={`${isDark ? "bg-slate-800 text-slate-200" : "bg-sky-50 text-sky-700"} px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium`}>
                            ✓ One-Click Generate
                        </span>
                        <span className={`${isDark ? "bg-slate-800 text-slate-200" : "bg-sky-50 text-sky-700"} px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium`}>
                            ✓ HD Download
                        </span>
                    </div>
                </div>
            ),
        },

        {
            title: "Step 4",
            content: (
                <div>
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className={`${isDark ? "bg-slate-800" : "bg-sky-100"} p-2 sm:p-3 rounded-lg`}>
                            <TrendingUp className={`w-6 h-6 sm:w-8 sm:h-8 ${isDark ? "text-teal-300" : "text-sky-600"}`} />
                        </div>
                        <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? "text-slate-200" : "text-slate-900"}`}>
                            Watch Sales Grow
                        </h3>
                    </div>

                    <p className={`mb-6 sm:mb-8 text-sm sm:text-base font-normal font-outfit ${isDark ? "text-slate-200" : "text-neutral-500"
                        }`}>
                        Customers scan, browse, and order seamlessly. Track analytics, update menus in real-time, and watch your efficiency soar.
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        <span className={`${isDark ? "bg-slate-800 text-slate-200" : "bg-sky-50 text-sky-700"} px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium`}>
                            ✓ Real-time Updates
                        </span>
                        <span className={`${isDark ? "bg-slate-800 text-slate-200" : "bg-sky-50 text-sky-700"} px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium`}>
                            ✓ Analytics Dashboard
                        </span>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className={`relative w-full overflow-clip ${isDark ? "bg-transparent" : "bg-slate-100"}`}>
            <Timeline data={data} />
        </div>
    );
}
