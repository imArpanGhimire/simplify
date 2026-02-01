import { Ban, BanIcon, CircleCheckBigIcon } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

/* ================= INPUT STYLES ================= */

const inputStyle =
    "mt-1 w-full bg-transparent px-1 py-3 text-zinc-700 placeholder:text-zinc-400 outline-none border-b border-zinc-300 focus:border-teal-500 transition";

/* ================= CARD WRAPPER ================= */

const cardWrapper =
    "relative w-full max-w-6xl mx-auto rounded-[clamp(28px,4vw,48px)] overflow-hidden";

const ContactForm = () => {

    const userdatas = {
        username: "",
        email: "",
        subject: "",
        message: ""
    }

    //todo  handling values of form 
    const [formvalues, setformvalues] = useState(userdatas)

    const handlevaluechange = (e) => {
        const { name, value } = e.target
        setformvalues(prev => ({ ...prev, [name]: value }))
    }






    const handlesubmit = (e) => {
        e.preventDefault()

        const trimmedData = {
            username: formvalues.username.trim(),
            email: formvalues.email.trim(),
            subject: formvalues.subject,
            message: formvalues.message.trim(),
        }

        if (!trimmedData.username) {
            toast.error("You need to enter your full name.")
            return
        }

        if (!trimmedData.message || trimmedData.message.length < 15) {
            toast.error("Describe your message in atleast 15 letters.", {
                icon: <BanIcon />,
                style: {
                    background: "#EF4444",
                    color: "white",
                    fontFamily: "Outfit",
                },
            })
            return
        }

        console.log(trimmedData)

        // Reset form
        setformvalues(userdatas)

        toast.success("Your message has been sent.", {
            icon: <CircleCheckBigIcon />,
            style: {
                background: "#14B8A6",
                color: "white",
                fontFamily: "Outfit",
            },
        })


    }






    return (
        <>
            {/* fomr card  */}
            <form onSubmit={handlesubmit}>
                <div
                    className={`${cardWrapper}
            bg-gradient-to-r from-neutral-100 via-white/20 to-transparent
          `}
                >
                    {/* inner highlight */}
                    <div className="pointer-events-none absolute inset-0 rounded-[inherit]" />

                    <div className="relative p-6 sm:p-8 md:p-10 lg:p-14">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-zinc-700">
                            Write us a message
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 mb-6 sm:mb-8 lg:mb-10">
                            Fill out the form and we'll get back to you.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
                            {/* username */}
                            <div className="flex flex-col">
                                <label className="text-xs sm:text-sm font-medium">
                                    Full name *
                                </label>
                                <input
                                    onChange={handlevaluechange}

                                    name="username"
                                    value={formvalues.username}
                                    type="text"
                                    className={inputStyle}
                                    placeholder="Mero naam"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col">
                                <label className="text-xs sm:text-sm font-medium">
                                    Email *
                                </label>
                                <input
                                    onChange={handlevaluechange}
                                    required
                                    type="email"
                                    name="email"
                                    value={formvalues.email}
                                    className={inputStyle}
                                    placeholder="meronaam@ho.com"
                                />
                            </div>

                            {/* Subject */}
                            <div className="flex flex-col">
                                <label className="text-xs sm:text-sm font-medium">
                                    Subject *
                                </label>
                                <select required className={inputStyle} name="subject" value={formvalues.subject} onChange={handlevaluechange}>
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
                                <label className="text-xs sm:text-sm font-medium">
                                    Message *
                                </label>

                                <div className="relative mt-1">
                                    <textarea

                                        onChange={handlevaluechange}

                                        name="message"
                                        value={formvalues.message}
                                        rows={7}
                                        className="w-full text-sm sm:text-base focus:border-teal-500 bg-transparent border-t border-r rounded-xl border-zinc-300 px-1 py-3 text-zinc-700 placeholder:text-zinc-400 outline-none resize-none"
                                        placeholder="Tell us what's on your mind…"
                                    />
                                </div>
                            </div>

                            {/* Submit */}
                            <div className="md:col-span-3 flex justify-start">
                                <button

                                    type="submit"
                                    className="
                    mt-4 inline-flex items-center justify-center w-full sm:w-auto
                    rounded-xl bg-teal-500 px-6 sm:px-8 py-2.5 sm:py-3
                    text-sm sm:text-base text-white font-medium
                    shadow-[0_10px_30px_-10px_rgba(13,148,136,0.8),inset_0_-2px_0_rgba(0,0,0,0.2)]
                    hover:bg-teal-600 
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