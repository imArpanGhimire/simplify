import React, { useState } from 'react'
import ContactForm from '../components/ContactForm'
import toast from 'react-hot-toast';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
    const { isDark } = useTheme();

    const inputStyle =
        "mt-1 w-full rounded-xl px-4 py-3 text-zinc-700 placeholder:text-zinc-400 outline-none ring-1 ring-zinc-200 focus:ring-2 focus:ring-teal-600 focus:bg-neutral-100";
    const cardWrapper =
        "relative w-full max-w-6xl mx-auto rounded-[clamp(28px,4vw,48px)] overflow-hidden";

    return (
        <div>
            <div className="font-outfit px-4 sm:px-6 py-16 sm:py-20 lg:py-28 rounded-4xl mt-4 sm:mt-6">
                {/* HERO CARD */}
                <div
                    className={`${cardWrapper} ${isDark
                            ? 'bg-gradient-to-r from-slate-800/50 via-slate-700/50 to-slate-800/50'
                            : 'bg-gradient-to-r from-transparent via-white/20 to-neutral-100'
                        }`}
                >
                    <div className="pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-10 xl:px-16 text-center">
                        {/* Badge */}
                        <div className={`inline-flex items-center gap-2 mb-6 sm:mb-8 lg:mb-10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full ${isDark
                                ? 'bg-teal-900/40 border border-teal-700'
                                : 'bg-teal-100/40 border border-teal-200'
                            }`}>
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-500 rounded-full"></span>
                            <span className={`text-xs sm:text-sm font-medium ${isDark ? 'text-teal-400' : 'text-teal-700'
                                }`}>
                                We're here to help
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-frick mb-4 sm:mb-6 tracking-tight leading-[1.05] ${isDark ? 'text-slate-100' : 'text-zinc-900'
                            }`}>
                            Let's Connect
                            <span className="text-teal-500">.</span>
                        </h1>

                        {/* Subheading */}
                        <p className={`text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed px-4 ${isDark ? 'text-slate-300' : 'text-zinc-500'
                            }`}>
                            Questions about our digital menu experience or ready to partner
                            with us? <br className="hidden sm:block" /> Send us a message and we'll respond shortly.
                        </p>
                    </div>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact