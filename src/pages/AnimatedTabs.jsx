import React, { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
    { id: "about", label: "About" },
    { id: "contact", label: "Contact us" },
];

const AnimatedTabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="flex items-center gap-12 uppercase font-outfit">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="relative px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:text-black cursor-pointer"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                >
                    {/* ACTIVE BG (pill) */}
                    {activeTab === tab.id && (
                        <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 rounded-full bg-teal-500 "
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        />
                    )}

                    {/* TEXT */}
                    <span
                        className={`relative z-10 ${activeTab === tab.id ? "text-white" : ""
                            }`}
                    >
                        {tab.label}
                    </span>
                </button>
            ))}
        </div>
    );
};

export default AnimatedTabs;
