import React from 'react'
import { BackgroundBeamsDemo } from './ui/BackgroundBeamsDemo'
import { Link } from 'react-router-dom'

const Newsletter = () => {
    return (
        <div className="flex flex-col items-center">
            <BackgroundBeamsDemo />
            <Link to='/Getstarted'
                className="flex justify-center cursor-pointer font-outfit p-3 text-sm rounded-xl bg-teal-500 text-white shadow-[inset_0_-2px_6px_rgba(0,0,0,0.35)] hover:bg-slate-100 hover:text-black transition-all -mt-8">
                Start your journey
            </Link>
        </div>
    )
}
export default Newsletter