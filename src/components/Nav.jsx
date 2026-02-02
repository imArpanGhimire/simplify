import React, { useState } from "react";
import { ScanQrCode, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedTabs from "../pages/AnimatedTabs";
import { useTheme } from "../context/ThemeContext";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    return (
        <>
            <nav className="px-8 flex items-center justify-between relative z-50">
                {/* LOGO */}
                <div className="text-3xl font-bold">
                    <Link to="/">
                        <p className="inline-flex items-center gap-2">
                            <ScanQrCode className={isDark ? 'text-teal-400' : 'text-gray-800'} />
                            <span className={`font-family-frick italic ${isDark ? 'text-slate-100' : 'text-zinc-700'}`}>
                                Simplify
                            </span>
                        </p>
                    </Link>
                </div>

                {/* NAV LINKS - Hidden below 900px */}
                <div className="hidden lg:flex items-center gap-6">
                    <AnimatedTabs />

                    {/* Theme Toggle Button */}

                </div>

                {/* RIGHT BUTTON - Hidden below 900px */}

                <div className="hidden lg:flex items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${isDark
                            ? 'bg-slate-700 hover:bg-slate-600 text-yellow-300'
                            : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
                            }`}
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <Link to='/Login'>
                        <button className="bg-teal-500 hover:bg-teal-600 cursor-pointer font-semibold text-white px-6 py-2 rounded-full text-sm transition-colors">
                            LOGIN
                        </button>
                    </Link>
                </div>

                {/* ANIMATED HAMBURGER MENU - Visible only below 900px */}
                <button
                    className="lg:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5 cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-0.5 transition-all duration-300 ${isDark ? 'bg-slate-100' : 'bg-zinc-700'} ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 transition-all duration-300 ${isDark ? 'bg-slate-100' : 'bg-zinc-700'} ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 transition-all duration-300 ${isDark ? 'bg-slate-100' : 'bg-zinc-700'} ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </nav>

            {/* MOBILE MENU */}
            {isMenuOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    <div className={`fixed top-0 right-0 h-screen w-64 shadow-2xl z-40 lg:hidden animate-slide-in ${isDark ? 'bg-slate-800' : 'bg-slate-300'
                        }`}>
                        <div className="flex flex-col gap-6 px-8 py-20">
                            <Link
                                to="/about"
                                className={`font-medium uppercase font-outfit transition-colors ${isDark ? 'text-slate-100 hover:text-teal-400' : 'text-zinc-700 hover:text-teal-500'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                to="/contact"
                                className={`font-medium uppercase font-outfit transition-colors ${isDark ? 'text-slate-100 hover:text-teal-400' : 'text-zinc-700 hover:text-teal-500'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>

                            {/* Theme Toggle in Mobile Menu */}
                            <button
                                onClick={toggleTheme}
                                className={`flex items-center gap-2 p-3 rounded-lg transition-colors ${isDark
                                    ? 'bg-slate-700 hover:bg-slate-600 text-yellow-300'
                                    : 'bg-slate-200 hover:bg-slate-100 text-slate-700'
                                    }`}
                            >
                                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                                <span className={`font-medium text-sm ${isDark ? 'text-slate-100' : 'text-slate-700'
                                    }`}>
                                    {isDark ? 'Light Mode' : 'Dark Mode'}
                                </span>
                            </button>

                            <Link to='/Login' onClick={() => setIsMenuOpen(false)}>
                                <button className="w-full bg-teal-500 hover:bg-teal-600 cursor-pointer font-semibold text-white px-6 py-2 rounded-full text-sm transition-colors">
                                    LOGIN
                                </button>
                            </Link>
                        </div>
                    </div>
                </>
            )}

            <style jsx>{`
                @keyframes slide-in {
                    from {
                        transform: translateX(100%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }
                
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                .animate-slide-in {
                    animation: slide-in 0.3s ease-out;
                }
                
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
            `}</style>
        </>
    );
};

export default Nav;