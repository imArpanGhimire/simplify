import React from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

const tabs = [
    { id: "about", label: "About", path: "/about" },
    { id: "contact", label: "Contact ", path: "/contact" },
];

const AnimatedTabs = () => {
    const location = useLocation();

    return (
        <div className="flex items-center gap-12 uppercase font-outfit">
            {tabs.map((tab) => (
                <NavLink
                    key={tab.id}
                    to={tab.path}
                    className="relative px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:text-black cursor-pointer"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                >
                    {/* ACTIVE BG (pill) */}
                    {location.pathname === tab.path && (
                        <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 rounded-full bg-teal-500"
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        />
                    )}
                    {/* TEXT */}
                    <span
                        className={`relative z-10 ${location.pathname === tab.path ? "text-white" : ""
                            }`}
                    >
                        {tab.label}
                    </span>
                </NavLink>
            ))}
        </div>
    );
};

export default AnimatedTabs;