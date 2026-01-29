import { ScanQrCode } from 'lucide-react'
import React from 'react'
const Login = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center gap-1'>
            <div
                className='w-1/2 rounded-4xl h-4/5  flex justify-center items-center gap-2 flex-col'
                style={{
                    background: 'linear-gradient(to bottom, rgb(74, 222, 128) 0%, rgb(74, 222, 128) 10%, rgb(24, 24, 27) 40%, rgb(24, 24, 27) 100%)'
                }}
            >
                <div className='flex flex-col p-4 rounded-3xl text-center items-center gap-2 w-4/5'>
                    <p className="inline-flex items-center gap-2 text-4xl font-bold">
                        <ScanQrCode />
                        <span className="text-zinc-700 italic font-outfit">Simplify</span>
                    </p>
                    <h3 className="text-2xl font-bold text-white mt-4 font-outfit">Get started with us</h3>
                    <p className="text-white mt-2 font-outfit text-sm">Complete these easy steps to register your account.</p>
                </div>
                <div className='w-4/5 space-y-4'>
                    <div className='flex gap-4'>
                        <div className='flex flex-col items-center flex-shrink-0'>
                            <div className='w-3 h-3 rounded-full bg-neutral-600'></div>
                            <div className='w-0.5 h-20 bg-neutral-600'></div>
                        </div>
                        <div className="text-white p-4 border border-gray-600 rounded-3xl flex-1 bg-neutral-700/30 backdrop-blur">
                            <h2 className="font-semibold flex items-center gap-2">🔗 Create your restaurant account</h2>
                            <p className="text-gray-400 text-sm mt-1">Sign up with your restaurant or cafe details to get started.</p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='flex flex-col items-center flex-shrink-0'>
                            <div className='w-3 h-3 rounded-full bg-neutral-600'></div>
                            <div className='w-0.5 h-20 bg-gray-600'></div>
                        </div>
                        <div className="text-white p-4 border border-gray-600 rounded-3xl flex-1 bg-neutral-700/30 backdrop-blur">
                            <h2 className="font-semibold flex items-center gap-2">📱 Generate QR menus</h2>
                            <p className="text-gray-400 text-sm mt-1">Create beautiful, interactive QR menus in minutes.</p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='flex flex-col items-center flex-shrink-0'>
                            <div className='w-3 h-3 rounded-full bg-neutral-600'></div>
                            <div className='w-0.5 h-20 bg-gray-600'></div>
                        </div>
                        <div className="text-white p-4 border border-gray-600 rounded-3xl flex-1 bg-neutral-700/30 backdrop-blur">
                            <h2 className="font-semibold flex items-center gap-2">🚀 Start serving customers</h2>
                            <p className="text-gray-400 text-sm mt-1">Share your QR menu and track customer engagement in real-time.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2 bg-zinc-700 h-4/5 rounded-4xl '>
            </div>
        </div>
    )
}
export default Login