import { ClockArrowUp, Scan, Smartphone, TabletSmartphone, TrendingDown, Utensils } from 'lucide-react'
import React from 'react'
import { TimelineDemo } from '../components/ui/TimelineDemo'
import { Link } from 'react-router-dom'
import AnimatedTabs from './AnimatedTabs'

const Landing = () => {
  return (
    <>
      <div className='flex justify-between gap-2    p-2'>
        <div className='  px-8 w-1/2 mt-15 py-2 flex flex-col '>
          {/* landing left  */}
          <div className='w-full mt-15 '>
            <h1 className='text-3xl font-semibold font-family-frick mb-6 italic'>Ordering became <br />   <span className='text-teal-500'>Effortless</span></h1>
            <p className='w-98 mb-8 font-outfit'>Transform your restaurant experience with QR code menus. No apps, no downloads - just scan and order. </p>


            <div className='flex flex-col gap-2'>
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
            <div className='flex  justify-start gap-15'>
              <Link to='/Getstarted'>
                <button className='cursor-pointer hover:bg-teal-500 hover:text-white hover:border-teal-500  border-2 font-outfit   border-slate-400 rounded-xl p-2 mt-8'>Get started</button>

              </Link>
              <Link to='/LearnMore'>
                <button className='cursor-pointer hover:bg-transparent border-2 border-transparent hover:text-black hover:border-2 hover:border-slate-400  bg-teal-500 rounded-xl text-sm font-outfit p-3 mt-8 text-white'>Learn More</button>

              </Link>
            </div>

          </div>
        </div>




        {/* landing right  */}
        <div className='  px-8 w-1/2 mt-15 flex items-center justify-center py-2'>
          <p> k halne ho ya</p>
        </div>
      </div>

      <p>yo tala aru aru ni halna baki xa</p>

    </>
  )
}

export default Landing
