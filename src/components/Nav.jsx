import React from "react";
import { ScanQrCode } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedTabs from "../pages/AnimatedTabs";


const Nav = () => {
    return (
        <nav className="px-8 flex items-center justify-between">
            {/* LOGO */}
            <div className="text-3xl font-bold italic text-gray-800">
                <Link to="/">
                    <p className="inline-flex items-center gap-2">
                        <ScanQrCode />
                        <span className="text-zinc-700">Simplify</span>
                    </p>
                </Link>
            </div>

            {/* NAV LINKS (Animated Component here) */}
            <AnimatedTabs />

            {/* RIGHT BUTTON */}
            <button className="bg-teal-500 hover:bg-teal-600 cursor-pointer font-semibold text-white px-6 py-2 rounded-full text-sm">
                Sign-In
            </button>
        </nav>
    );
};

export default Nav;
