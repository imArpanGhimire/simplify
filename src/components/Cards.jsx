import React from 'react'
import { WobbleCardDemo } from './ui/WobbleCardDemo'
import WaveDiv from './Newsletter'
import { BackgroundBeamsDemo } from './ui/BackgroundBeamsDemo'
import Newsletter from './Newsletter'
import FAQ from './FAQ'
import { useTheme } from '../context/ThemeContext'

const Cards = () => {
    const { isDark } = useTheme()

    return (
        <div className='mt-32'>
            <h2 className={`font-semibold text-3xl text-center font-outfit ${isDark ? 'text-slate-100' : 'text-gray-900'
                }`}>
                Why choose <i className='text-teal-500 text-4xl font-family-frick'>Simplify</i>
            </h2>
            <h2 className={`font-semibold text-3xl text-center font-outfit mb-8 ${isDark ? 'text-slate-100' : 'text-gray-900'
                }`}>
                How are we <b className={`text-4xl font-family-frick ${isDark ? 'text-slate-400' : 'text-zinc-600'
                    }`}>Different?</b>
            </h2>
            <WobbleCardDemo />
            {/* <WaveDiv /> */}
            <Newsletter />
            {/* <FAQ /> */}
        </div>
    )
}

export default Cards