import { ClockArrowUp, Scan, Smartphone, TabletSmartphone, TrendingDown, Utensils } from 'lucide-react'
import React from 'react'
import { TimelineDemo } from '../components/ui/TimelineDemo'
import { Link } from 'react-router-dom'
import AnimatedTabs from './AnimatedTabs'
import Cards from '../components/Cards'

const Landing = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row justify-between gap-2 p-2'>
        <div className='px-4 sm:px-6 md:px-8 w-full lg:w-1/2 mt-8 sm:mt-10 lg:mt-15 py-3 pt-0 flex flex-col'>
          {/* landing left  */}
          <div className='w-full mt-8 sm:mt-10 lg:mt-15'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-semibold font-family-frick mb-4 sm:mb-6 italic'>
              Ordering became <br /> <span className='text-teal-500'>Effortless</span>
            </h1>
            <p className='w-full sm:w-98 mb-5 sm:mb-7 font-outfit text-sm sm:text-base '>
              Transform your restaurant experience with QR code menus. No apps, no downloads - just scan and order.
            </p>
            <div className='flex flex-col gap-4 sm:gap-6'>
              <div className='flex gap-3 sm:gap-4 items-center'>
                <Smartphone className='w-5 h-5 sm:w-6 sm:h-6' />
                <div className='flex flex-col'>
                  <h1 className='font-semibold text-sm sm:text-base'>Instant access</h1>
                  <p className='text-xs sm:text-sm text-zinc-600 font-outfit '>Customers scan Qr codes to view your menu instantly</p>
                </div>
              </div>
              <div className='flex gap-3 sm:gap-4 items-center'>
                <ClockArrowUp className='w-5 h-5 sm:w-6 sm:h-6' />
                <div className='flex flex-col'>
                  <h1 className='font-semibold text-sm sm:text-base'>Saves time</h1>
                  <p className='text-xs sm:text-sm text-zinc-600 font-outfit '>Customers scan Qr codes to view your menu instantly</p>
                </div>
              </div>
              <div className='flex gap-3 sm:gap-4 items-center'>
                <TrendingDown className='w-5 h-5 sm:w-6 sm:h-6' />
                <div className='flex flex-col'>
                  <h1 className='font-semibold text-sm sm:text-base'>Reduce wages</h1>
                  <p className='text-xs sm:text-sm text-zinc-600 font-outfit'>Customers scan Qr codes to view your menu instantly</p>
                </div>
              </div>
            </div>
            {/* left side btn */}
            <div className="flex flex-col sm:flex-row justify-start gap-4 sm:gap-15 mt-6 sm:mt-8">
              <Link to="/Getstarted" className='w-full sm:w-auto'>
                <button
                  className="
        w-full sm:w-auto cursor-pointer font-outfit p-3 text-sm rounded-xl 
        bg-slate-100 text-black
        shadow-[inset_0_-2px_6px_rgba(0,0,0,0.25)]
        hover:bg-teal-500 hover:text-white  
        transition-all
      "
                >
                  Get started
                </button>
              </Link>
              <Link to="/LearnMore" className='w-full sm:w-auto'>
                <button
                  className="
        w-full sm:w-auto cursor-pointer font-outfit p-3 text-sm rounded-xl
        bg-teal-500 text-white
        shadow-[inset_0_-2px_6px_rgba(0,0,0,0.35)]
        hover:bg-slate-100 hover:text-black   
        transition-all
      "
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* landing right  */}
        <div className='px-4 sm:px-6 md:px-8 w-full lg:w-1/2 mt-8 lg:mt-15 flex items-center justify-center py-2'>
          <p className='text-sm sm:text-base'>k halne ho ya</p>
        </div>
      </div>
      <Cards />
    </>
  )
}

export default Landing