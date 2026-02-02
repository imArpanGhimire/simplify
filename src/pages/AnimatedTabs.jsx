import React from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"; // adjust path if needed

const tabs = [
  { id: "about", label: "About", path: "/about" },
  { id: "contact", label: "Contact", path: "/contact" },
];

const AnimatedTabs = () => {
  const location = useLocation();
  const { isDark } = useTheme(); // 👈 read theme

  return (
    <div className="flex items-center gap-12 uppercase font-outfit">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;

        return (
          <NavLink
            key={tab.id}
            to={tab.path}
            className={`relative px-4 py-2 text-sm font-medium transition-colors cursor-pointer
              ${isDark ? "text-slate-100 hover:text-white" : "text-zinc-700 hover:text-black"}
            `}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {/* ACTIVE BG */}
            {isActive && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full bg-teal-500"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}

            {/* TEXT */}
            <span
              className={`relative z-10 ${
                isActive ? "text-white" : ""
              }`}
            >
              {tab.label}
            </span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default AnimatedTabs;
