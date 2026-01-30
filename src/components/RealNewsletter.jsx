import React from 'react';

const RealNewsletter = () => {
    return (
        <section className="w-full py-20 px-6 flex justify-center">
            <div className="relative max-w-4xl w-full sm:w-auto rounded-3xl bg-gradient-to-r from-slate-200/10 to-transparent p-10 md:p-14 shadow-sm overflow-hidden">
                {/* Subtle gradient blob */}
                {/* <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl"></div> */}

                <div className="relative z-10 text-center font-outfit">
                    <h2 className="text-3xl md:text-4xl text-slate-800 mb-4">
                        Stay Updated with us 📲
                    </h2>

                    <p className="text-zinc-500 max-w-xl mx-auto mb-8">
                        Sign up to get the latest features, tips, and exclusive offers straight to your inbox.
                    </p>


                    <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 rounded-xl px-5 py-3 text-slate-800 placeholder-slate-500 bg-slate-100/50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />

                        <button
                            type="submit"
                            className="rounded-xl px-7 py-3 bg-teal-500 text-white font-medium shadow-md hover:bg-teal-600 active:scale-[0.98] transition"
                        >
                            Subscribe
                        </button>
                    </form>

                    <p className="text-xs text-slate-500 mt-4">
                        By subscribing, you agree to our privacy policy.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RealNewsletter;
