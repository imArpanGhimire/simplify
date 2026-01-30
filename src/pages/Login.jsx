import { Eye, EyeClosed, ScanQrCode } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    const [showpassword, setshowpassword] = useState(true)
    return (
        <div className='w-full px-[15vw] h-screen flex items-center justify-center  bg-zinc-950'>
            <div
                className='w-1/2 rounded-4xl h-4/5 flex justify-center items-center gap-2 flex-col'
                style={{
                    background: 'linear-gradient(to bottom, rgb(24, 24, 27) 0%, rgb(24, 24, 27) 40%, rgb(20, 184, 166) 90%, rgb(20, 184, 166) 100%)'
                }}
            >
                <div className='flex flex-col p-4 rounded-3xl text-center items-center gap-2 w-4/5'>
                    <p className="inline-flex items-center gap-2 text-4xl font-bold">
                        <ScanQrCode className='text-teal-500' />
                        <span className="text-teal-500 italic font-outfit">Simplify</span>
                    </p>
                    <h3 className="text-2xl font-bold text-slate-200 mt-4 font-outfit">Welcome back</h3>
                    <p className="text-stone-400 mt-2 font-outfit text-sm">Let's make your place shine again.</p>
                </div>
                <div className='w-4/5 space-y-4'>
                    <div className='flex gap-4'>
                        <div className='flex flex-col items-center flex-shrink-0'>
                            <div className='w-3 h-3 rounded-full bg-stone-600'></div>
                            <div className='w-0.5 h-20 bg-stone-600'></div>
                        </div>
                        <div className="text-slate-200 p-4 border border-gray-600 rounded-3xl flex-1 bg-zinc-800/60 backdrop-blur">
                            <h2 className="font-semibold flex items-center gap-2">🤝 Your Trust, Our Priority</h2>
                            <p className="text-gray-400 text-sm mt-1">We're on our way to earn the trust of numerous restaurants.</p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='flex flex-col items-center flex-shrink-0'>
                            <div className='w-3 h-3 rounded-full bg-stone-600'></div>
                            <div className='w-0.5 h-20 bg-stone-600'></div>
                        </div>
                        <div className="text-slate-200 p-4 border border-gray-600 rounded-3xl flex-1 bg-zinc-800/60 backdrop-blur">
                            <h2 className="font-semibold flex items-center gap-2">😋 Customers Love Us</h2>
                            <p className="text-gray-400 text-sm mt-1">They scan, they smile, they order. It's that simple.</p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='flex flex-col items-center flex-shrink-0'>
                            <div className='w-3 h-3 rounded-full bg-stone-600'></div>
                            <div className='w-0.5 h-20 bg-stone-600'></div>
                        </div>
                        <div className="text-slate-200 p-4 border border-gray-600 rounded-3xl flex-1 bg-zinc-800/60 backdrop-blur">
                            <h2 className="font-semibold flex items-center gap-2">💰 More Orders, Less Stress</h2>
                            <p className="text-gray-400 text-sm mt-1">Watch your sales grow while you focus on what you do best.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2 bg-zinc-950 text-slate-200 h-4/5 rounded-4xl flex flex-col p-12'>
                {/* Header */}
                <div className='text-center mb-12'>
                    <h2 className='text-slate-200 text-3xl font-outfit font-semibold'>Sign in to <span className='italic text-teal-500 font-outfit font-bold text-4xl'>Simplify</span></h2>
                    <p className="text-sm text-slate-400 mt-2">Enter your data to sign in your account</p>
                </div>

                {/* Social buttons */}
                <div className='flex gap-4 mb-8'>
                    <button className='flex-1 flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-600 px-4 py-3 rounded-lg transition bg-slate-900/50 hover:bg-slate-800/50'>
                        <i className="fa-brands fa-google "></i>
                        <p className='text-sm font-medium'>Google</p>
                    </button>
                    <button className='flex-1 flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-600 px-4 py-3 rounded-lg transition bg-slate-900/50 hover:bg-slate-800/50'>
                        <i className="fa-brands fa-apple"></i>
                        <p className='text-sm font-medium'>Apple</p>
                    </button>
                </div>

                {/* Divider */}
                <div className='flex items-center gap-4 mb-8'>
                    <div className='flex-1 h-px bg-slate-700'></div>
                    <p className='text-xs text-slate-500 uppercase'>or</p>
                    <div className='flex-1 h-px bg-slate-700'></div>
                </div>

                {/* Form */}
                <form className='flex flex-col gap-6 flex-1'>
                    {/* Email */}
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email" className='text-sm font-medium text-slate-300'>Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder='you@example.com'
                            className='px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition text-white placeholder-slate-500'
                        />
                    </div>

                    {/* Password */}
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="password" className='text-sm font-medium text-slate-300'>Password</label>
                        <div className='relative'>
                            <input
                                type={showpassword ? "text" : "password"}
                                id="password"
                                placeholder='*******'
                                className='w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition text-white placeholder-slate-500'
                            />
                            <button type='button' className='absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300' onClick={() => setshowpassword(!showpassword)}>
                                {showpassword ? <Eye size={20} /> : <EyeClosed size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Remember & Forgot */}
                    <div className='flex items-center justify-between text-sm'>
                        <label className='flex items-center gap-2 cursor-pointer'>
                            <input type='checkbox' className='w-4 h-4 rounded border-slate-600 bg-slate-900' />
                            <span className='text-slate-400'>Remember me</span>
                        </label>
                        <a href='#' className='text-teal-500 hover:text-teal-400 font-medium'>Forgot Password?</a>
                    </div>

                    {/* Sign in button */}
                    <button
                        type='submit'
                        className='mt-auto w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition'
                    >
                        Sign in
                    </button>
                </form>

                {/* Sign up link */}
                <div className='text-center pt-6 border-t border-slate-700 mt-6'>
                    <p className='text-sm text-slate-400'>
                        Don't have an account? <Link to='/Getstarted' className='text-teal-500 hover:underline font-semibold'>Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Login