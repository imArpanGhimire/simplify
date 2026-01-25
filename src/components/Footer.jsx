import React from 'react'
const Footer = () => {
    return (
        <footer className="relative mt-auto">
            {/* Curved background shape */}
            <div className="relative -mb-1">
                <svg
                    viewBox="0 0 1100 100"
                    preserveAspectRatio="none"
                    className="w-full h-20"
                >
                    <path
                        d="M0,50 Q300,5 600,8 T1200,50 L1200,100 L0,100 Z"
                        fill="#14b8a6"
                    />
                </svg>
            </div>
            {/* Footer content */}
            <div className="bg-teal-500 pb-6 px-8">
                <div className="container mx-auto flex items-center justify-between text-white flex-wrap gap-8">
                    <div>
                        <h3 className="font-bold mb-1">About</h3>
                        <p className="text-teal-100 text-sm">Your company description</p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-1">Links</h3>
                        <div className="flex gap-4 text-teal-100 text-sm">
                            <a href="#" className="hover:text-white">Home</a>
                            <a href="#" className="hover:text-white">Services</a>
                            <a href="#" className="hover:text-white">Contact</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold mb-1">Contact</h3>
                        <p className="text-teal-100 text-sm">email@example.com | +1 234 567 890</p>
                    </div>
                    <p className="text-teal-100 text-sm">&copy; 2026 Your Company</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer