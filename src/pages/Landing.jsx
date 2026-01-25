import { ClockArrowUp, Scan, Smartphone, TabletSmartphone, TrendingDown, Utensils } from 'lucide-react'
import React from 'react'
import { TimelineDemo } from '../components/ui/TimelineDemo'
import { Link } from 'react-router-dom'
import AnimatedTabs from './AnimatedTabs'
import Cards from '../components/Cards'

const Landing = () => {
  return (
    <>
      <div className='flex justify-between gap-2    p-2'>
        <div className='  px-8 w-1/2 mt-15 py-3 pt-0 flex flex-col  '>
          {/* landing left  */}
          <div className='w-full mt-15 '>
            <h1 className='text-3xl font-semibold font-family-frick mb-6 italic'>Ordering became <br />   <span className='text-teal-500'>Effortless</span></h1>
            <p className='w-98 mb-7 font-outfit'>Transform your restaurant experience with QR code menus. No apps, no downloads - just scan and order. </p>


            <div className='flex flex-col gap-6 '>
              <div className='flex  gap-4 items-center'>
                <Smartphone />
                <div className='flex flex-col '>
                  <h1 className='font-semibold'>Instant access</h1>
                  <p className='text-sm text-zinc-600 font-outfit'>Customers scan Qr codes to view your menu instantly</p>
                </div>
              </div>
              <div className='flex  gap-4 items-center'>
                <ClockArrowUp />
                <div className='flex flex-col '>
                  <h1 className='font-semibold'>Saves time</h1>
                  <p className='text-sm text-zinc-600 font-outfit'>Customers scan Qr codes to view your menu instantly</p>
                </div>
              </div>
              <div className='flex  gap-4 items-center'>
                <TrendingDown />
                <div className='flex flex-col '>
                  <h1 className='font-semibold'>Reduce wages</h1>
                  <p className='text-sm text-zinc-600 font-outfit'>Customers scan Qr codes to view your menu instantly</p>
                </div>
              </div>
            </div>


            {/* left side btn  */}
            {/* left side btn */}
            <div className="flex justify-start gap-15 mt-8">
              <Link to="/Getstarted">
                <button
                  className="
        cursor-pointer font-outfit p-3 text-sm rounded-xl 
        bg-slate-100 text-black
        shadow-[inset_0_-2px_6px_rgba(0,0,0,0.25)]
        hover:bg-teal-500 hover:text-white  
        transition-all
      "
                >
                  Get started
                </button>
              </Link>

              <Link to="/LearnMore">
                <button
                  className="
        cursor-pointer font-outfit  p-3 text-sm rounded-xl
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
        <div className='  px-8 w-1/2 mt-15 flex items-center justify-center py-2'>
          <p> k halne ho ya</p>
        </div>



      </div>
      <Cards />


    </>
  )
}

export default Landing
