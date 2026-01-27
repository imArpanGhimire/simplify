import React from 'react'
import ContactForm from '../components/ContactForm'

const Contact = () => {
    const inputStyle =
        "mt-1 w-full rounded-xl  px-4 py-3 text-zinc-700 placeholder:text-zinc-400 outline-none ring-1 ring-zinc-200 focus:ring-2 focus:ring-teal-600 focus:bg-neutral-100  ";

    const cardWrapper =
        "relative w-full max-w-6xl mx-auto rounded-[clamp(28px,4vw,48px)] overflow-hidden";
    return (
        <div>
            <div className="font-outfit px-6 py-28  rounded-4xl mt-6">

                {/* ================= HERO CARD ================= */}
                <div
                    className={`${cardWrapper} 
        bg-gradient-to-r    from-transparent via-white/20 to-neutral-100`}
                >
                    <div className="pt-28 pb-24 px-6 sm:px-10 lg:px-16 text-center">

                        {/* lets connect wala ko sub heading */}
                        <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 
            bg-teal-100/40 border border-teal-200 rounded-full">
                            <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                            <span className="text-teal-700 text-sm font-medium">
                                We're here to help
                            </span>
                        </div>

                        {/* lets connect ko heading */}
                        <h1 className="text-6xl md:text-7xl font-frick text-zinc-900 mb-6 tracking-tight leading-[1.05]">
                            Let's Connect
                            <span className="text-teal-500">.</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg md:text-md text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed">
                            Questions about our digital menu experience or ready to partner
                            with us? <br /> Send us a message and we’ll respond shortly.
                        </p>
                    </div>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact
