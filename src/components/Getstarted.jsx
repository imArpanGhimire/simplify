import { Eye, EyeClosed, ScanQrCode } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Getstarted = () => {
    const [showpassword, setshowpassword] = useState(true)

    const UserSignUpData = {
        email: "",
        password: ""
    }

    const [singupform, setsignupform] = useState(
        UserSignUpData
    )

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setsignupform((prev) => ({ ...prev, [name]: value }))
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        console.log(singupform)

        // submit vayesi form ko input field empty haneko 
        setsignupform(UserSignUpData)
    }

    return (
        <div className='w-full px-4 sm:px-8 lg:px-[15vw] min-h-screen flex items-center justify-center bg-zinc-950 py-8 sm:py-0'>
            <div className='flex flex-col lg:flex-row w-full max-w-7xl gap-4 lg:gap-0'>
                {/* Left side - Benefits */}
                <div
                    className='w-full lg:w-1/2 rounded-3xl lg:rounded-4xl h-auto lg:h-4/5 flex justify-center items-center gap-2 flex-col p-6 sm:p-8 lg:p-10'
                    style={{
                        background: 'linear-gradient(to bottom, rgb(24, 24, 27) 0%, rgb(24, 24, 27) 40%, rgb(20, 184, 166) 90%, rgb(20, 184, 166) 100%)'
                    }}
                >
                    <div className='flex flex-col p-4 rounded-3xl text-center items-center gap-2 w-full sm:w-4/5'>
                        <p className="inline-flex items-center gap-2 text-2xl sm:text-3xl lg:text-4xl font-bold">
                            <ScanQrCode className='text-teal-500 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10' />
                            <span className="text-teal-500 italic font-outfit">Simplify</span>
                        </p>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-200 mt-4 font-outfit">Join Our Movement</h3>
                        <p className="text-stone-400 mt-2 font-outfit text-xs sm:text-sm">Let's build the future of restaurants together.</p>
                    </div>
                    <div className='w-full sm:w-4/5 space-y-3 sm:space-y-4'>
                        <div className='flex gap-3 sm:gap-4'>
                            <div className='flex flex-col items-center flex-shrink-0'>
                                <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-stone-600'></div>
                                <div className='w-0.5 h-16 sm:h-20 bg-stone-600'></div>
                            </div>
                            <div className="text-slate-200 p-3 sm:p-4 border border-gray-600 rounded-2xl sm:rounded-3xl flex-1 bg-zinc-800/60 backdrop-blur">
                                <h2 className="font-semibold flex items-center gap-2 text-sm sm:text-base">📊 Boost Your Business</h2>
                                <p className="text-gray-400 text-xs sm:text-sm mt-1">Increase orders, reduce costs, and scale faster with our proven platform.</p>
                            </div>
                        </div>
                        <div className='flex gap-3 sm:gap-4'>
                            <div className='flex flex-col items-center flex-shrink-0'>
                                <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-stone-600'></div>
                                <div className='w-0.5 h-16 sm:h-20 bg-stone-600'></div>
                            </div>
                            <div className="text-slate-200 p-3 sm:p-4 border border-gray-600 rounded-2xl sm:rounded-3xl flex-1 bg-zinc-800/60 backdrop-blur">
                                <h2 className="font-semibold flex items-center gap-2 text-sm sm:text-base">🎯 Smart Tools for Growth</h2>
                                <p className="text-gray-400 text-xs sm:text-sm mt-1">Analytics, customer insights, and automation built to help you succeed.</p>
                            </div>
                        </div>
                        <div className='flex gap-3 sm:gap-4'>
                            <div className='flex flex-col items-center flex-shrink-0'>
                                <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-stone-600'></div>
                                <div className='w-0.5 h-16 sm:h-20 bg-stone-600'></div>
                            </div>
                            <div className="text-slate-200 p-3 sm:p-4 border border-gray-600 rounded-2xl sm:rounded-3xl flex-1 bg-zinc-800/60 backdrop-blur">
                                <h2 className="font-semibold flex items-center gap-2 text-sm sm:text-base">🤝 Trust Built on Results</h2>
                                <p className="text-gray-400 text-xs sm:text-sm mt-1">Numerous restaurants trust us. You will too, once you see the difference.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side - Form */}
                <div className='w-full lg:w-1/2 bg-zinc-950 text-slate-200 h-auto lg:h-4/5 rounded-3xl lg:rounded-4xl flex flex-col p-6 sm:p-8 lg:p-12'>
                    {/* Header */}
                    <div className='text-center mb-8 sm:mb-12'>
                        <h2 className='text-slate-200 text-xl sm:text-2xl lg:text-3xl font-outfit font-semibold'>
                            Create your <span className='italic text-teal-500 font-outfit font-bold text-2xl sm:text-3xl lg:text-4xl'>Simplify</span> account
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-400 mt-2">Join thousands of restaurants transforming their business</p>
                    </div>

                    {/* Social buttons */}
                    <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8'>
                        <button className='flex-1 flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-600 px-4 py-2.5 sm:py-3 rounded-lg transition bg-slate-900/50 hover:bg-slate-800/50'>
                            <i className="fa-brands fa-google"></i>
                            <p className='text-xs sm:text-sm font-medium'>Google</p>
                        </button>
                        <button className='flex-1 flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-600 px-4 py-2.5 sm:py-3 rounded-lg transition bg-slate-900/50 hover:bg-slate-800/50'>
                            <i className="fa-brands fa-apple"></i>
                            <p className='text-xs sm:text-sm font-medium'>Apple</p>
                        </button>
                    </div>

                    {/* Divider */}
                    <div className='flex items-center gap-4 mb-6 sm:mb-8'>
                        <div className='flex-1 h-px bg-slate-700'></div>
                        <p className='text-xs text-slate-500 uppercase'>or</p>
                        <div className='flex-1 h-px bg-slate-700'></div>
                    </div>

                    {/* Form */}
                    <form className='flex flex-col gap-4 sm:gap-6 flex-1' onSubmit={handlesubmit}>
                        {/* Email */}
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="email" className='text-xs sm:text-sm font-medium text-slate-300'>Email Address</label>
                            <input
                                onChange={handleInputChange}
                                type="email"
                                name='email'
                                value={singupform.email}
                                id="email"
                                placeholder='you@example.com'
                                className='px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-slate-900 border border-slate-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition text-white placeholder-slate-500'
                            />
                        </div>

                        {/* Password */}
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="password" className='text-xs sm:text-sm font-medium text-slate-300'>Password</label>
                            <div className='relative'>
                                <input
                                    onChange={handleInputChange}
                                    type={showpassword ? "text" : "password"}
                                    name='password'
                                    value={singupform.password}
                                    id="password"
                                    placeholder='*******'
                                    className='w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-slate-900 border border-slate-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition text-white placeholder-slate-500'
                                />
                                <button type='button' className='absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300' onClick={() => setshowpassword(!showpassword)}>
                                    {showpassword ? <Eye size={18} className='sm:w-5 sm:h-5' /> : <EyeClosed size={18} className='sm:w-5 sm:h-5' />}
                                </button>
                            </div>
                        </div>

                        {/* Terms */}
                        <div className='flex items-start gap-2 text-xs'>
                            <input type='checkbox' className='w-3.5 h-3.5 sm:w-4 sm:h-4 rounded border-slate-600 bg-slate-900 mt-0.5' />
                            <span className='text-slate-400 text-xs sm:text-sm'>
                                I agree to the{' '}
                                <Link to='/TermsAndConditions' className='text-teal-500 hover:text-teal-400'>Terms and Conditions</Link>
                                {' '}and{' '}
                                <Link to='/Privacy' className='text-teal-500 hover:text-teal-400'>Privacy Policy</Link>
                            </span>
                        </div>

                        {/* Sign up button */}
                        <button
                            type='submit'
                            className='mt-auto w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2.5 sm:py-3 text-sm sm:text-base rounded-lg transition'
                        >
                            Create Account
                        </button>
                    </form>

                    {/* Sign in link */}
                    <div className='text-center pt-4 sm:pt-6 border-t border-slate-700 mt-4 sm:mt-6'>
                        <p className='text-xs sm:text-sm text-slate-400'>
                            Already have an account? <Link to='/Login' className='text-teal-500 hover:underline font-semibold'>Sign in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Getstarted