import { ClockArrowUp, Smartphone, TrendingDown } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Cards from '../components/Cards'
import landingImg from '../images/landing.png'
import { useTheme } from '../context/ThemeContext'

const Landing = () => {
  const { isDark } = useTheme()

  return (
    <>
      <div className='flex flex-col-reverse lg:flex-row justify-between gap-2 p-2'>
        <div className='px-4 sm:px-6 md:px-8 w-full lg:w-1/2 mt-8 sm:mt-10 lg:mt-15 py-3 pt-0 flex flex-col items-center lg:items-start'>
          <div className='w-full mt-8 sm:mt-10 lg:mt-15 text-center lg:text-left'>
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-semibold font-family-frick mb-4 sm:mb-6 italic ${isDark ? 'text-slate-100' : 'text-gray-900'
              }`}>
              Ordering became <br /> <span className='text-teal-500'>Effortless</span>
            </h1>
            <p className={`w-full sm:w-98 mb-5 sm:mb-7 font-outfit text-sm sm:text-base mx-auto lg:mx-0 ${isDark ? 'text-slate-300' : 'text-gray-700'
              }`}>
              Transform your restaurant experience with QR code menus. No apps, no downloads - just scan and order.
            </p>
            <div className='flex flex-col gap-4 sm:gap-6 items-center lg:items-start'>
              <div className='flex gap-3 sm:gap-4 items-center w-full sm:w-auto'>
                <Smartphone className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 ${isDark ? 'text-teal-400' : 'text-gray-800'}`} />
                <div className='flex flex-col text-left'>
                  <h1 className={`font-semibold text-sm sm:text-base ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>
                    Instant access
                  </h1>
                  <p className={`text-xs sm:text-sm font-outfit ${isDark ? 'text-slate-400' : 'text-zinc-600'}`}>
                    Customers scan QR codes to view your menu instantly
                  </p>
                </div>
              </div>
              <div className='flex gap-3 sm:gap-4 items-center w-full sm:w-auto'>
                <ClockArrowUp className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 ${isDark ? 'text-teal-400' : 'text-gray-800'}`} />
                <div className='flex flex-col text-left'>
                  <h1 className={`font-semibold text-sm sm:text-base ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>
                    Saves time
                  </h1>
                  <p className={`text-xs sm:text-sm font-outfit ${isDark ? 'text-slate-400' : 'text-zinc-600'}`}>
                    Reduce waiting time and improve customer experience
                  </p>
                </div>
              </div>
              <div className='flex gap-3 sm:gap-4 items-center w-full sm:w-auto'>
                <TrendingDown className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 ${isDark ? 'text-teal-400' : 'text-gray-800'}`} />
                <div className='flex flex-col text-left'>
                  <h1 className={`font-semibold text-sm sm:text-base ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>
                    Reduce costs
                  </h1>
                  <p className={`text-xs sm:text-sm font-outfit ${isDark ? 'text-slate-400' : 'text-zinc-600'}`}>
                    Lower operational costs with digital solutions
                  </p>
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-15 mt-6 sm:mt-8">
              <Link to="/Getstarted" className='w-full sm:w-auto'>
                <button className={`w-full sm:w-auto cursor-pointer font-outfit p-3 text-sm rounded-xl transition-all ${isDark
                    ? 'bg-slate-700 text-slate-100 hover:bg-teal-500 hover:text-white shadow-[inset_0_-2px_6px_rgba(0,0,0,0.35)]'
                    : 'bg-slate-100 text-black hover:bg-teal-500 hover:text-white shadow-[inset_0_-2px_6px_rgba(0,0,0,0.25)]'
                  }`}>
                  Get started
                </button>
              </Link>
              <Link to="/LearnMore" className='w-full sm:w-auto'>
                <button className="w-full sm:w-auto cursor-pointer font-outfit p-3 text-sm rounded-xl bg-teal-500 text-white shadow-[inset_0_-2px_6px_rgba(0,0,0,0.35)] hover:bg-teal-600 transition-all">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Right side image */}
        <div className='px-4 sm:px-6 md:px-8 w-full lg:w-1/2 mt-8 lg:mt-15 flex items-center justify-center py-2'>
          <img
            src={landingImg}
            alt="Landing illustration"
            className='w-full max-w-md lg:max-w-full h-auto object-contain'
          />
        </div>
      </div>
      <Cards />
    </>
  )
}

export default Landing