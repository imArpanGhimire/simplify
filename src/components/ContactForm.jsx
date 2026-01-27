import React from "react";

/* ================= INPUT STYLES ================= */

const inputStyle =
    "mt-1 w-full bg-transparent px-1 py-3 text-zinc-700 placeholder:text-zinc-400 outline-none border-b  border-zinc-300 focus:border-teal-500 transition";

/* ================= CARD WRAPPER ================= */

const cardWrapper =
    "relative w-full max-w-6xl mx-auto rounded-[clamp(28px,4vw,48px)] overflow-hidden";

const ContactForm = () => {
    return (
        <>
            {/* ================= FORM CARD ================= */}
            <form>
                <div
                    className={`${cardWrapper}
            bg-gradient-to-r from-neutral-100 via-white/20 to-transparent
          `}
                >
                    {/* inner highlight */}
                    <div className="pointer-events-none absolute inset-0 rounded-[inherit]" />

                    <div className="relative p-14">
                        <h2 className="text-2xl font-semibold mb-2 text-zinc-700">
                            Write us a message
                        </h2>
                        <p className="text-zinc-600 mb-10">
                            Fill out the form and we’ll get back to you.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                            {/* Full Name */}
                            <div className="flex flex-col">
                                <label className="text-sm font-medium">
                                    Full name *
                                </label>
                                <input
                                    required
                                    type="text"
                                    className={inputStyle}
                                    placeholder="Mero naam"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col">
                                <label className="text-sm font-medium">
                                    Email *
                                </label>
                                <input
                                    required
                                    type="email"
                                    className={inputStyle}
                                    placeholder="meronaam@ho.com"
                                />
                            </div>

                            {/* Subject */}
                            <div className="flex flex-col">
                                <label className="text-sm font-medium">
                                    Subject *
                                </label>
                                <select required className={inputStyle}>
                                    <option value="">Select a topic …</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="support">Technical Support</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="query">Query</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div className="md:col-span-3 flex flex-col">
                                <label className="text-sm font-medium">
                                    Message *
                                </label>

                                <div className="relative mt-1">


                                    <textarea
                                        required
                                        rows={7}
                                        className="w-full focus:border-teal-500 bg-transparent border-t border-r rounded-xl border-zinc-300 px-1 py-3 text-zinc-700 placeholder:text-zinc-400 outline-none resize-none"
                                        placeholder="Tell us what's on your mind…"
                                    />
                                </div>
                            </div>

                            {/* Submit */}
                            <div className="md:col-span-3 flex justify-start">
                                <button
                                    type="submit"
                                    className="
                    mt-4 inline-flex items-center justify-center
                    rounded-xl bg-teal-500 px-8 py-3
                    text-white font-medium
                    shadow-[0_10px_30px_-10px_rgba(13,148,136,0.8),inset_0_-2px_0_rgba(0,0,0,0.2)]
                    hover:bg-teal-600 active:translate-y-[1px]
                    transition
                  "
                                >
                                    Send message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;
