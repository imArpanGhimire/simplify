import React from 'react';
import { MessageSquare, Bell, BarChart3, Globe, Edit3, CreditCard } from 'lucide-react';
import { HeroScrollDemo } from '../components/ui/HeroScrollDemo';
import { Link } from 'react-router-dom'


const About = () => {
    const features = [
        {
            icon: <MessageSquare className="w-6 h-6 text-teal-500" />,
            title: "Customer feedback",
            description: "Genuine reviews and feedbacks of customer"
        },
        {
            icon: <Bell className="w-6 h-6 text-teal-500" />,
            title: "Real time notifications",
            description: "Get instant orders of customer, never miss their request."
        },
        {
            icon: <BarChart3 className="w-6 h-6 text-teal-500" />,
            title: "Analytics dashboard",
            description: "Track sales, popular items and customers behaviour with detailed insights"
        },
        {
            icon: <Globe className="w-6 h-6 text-teal-500" />,
            title: "Multi-language support",
            description: "Serve international customers without hesitations"
        },
        {
            icon: <Edit3 className="w-6 h-6 text-teal-500" />,
            title: "Easy menu updates",
            description: "Change prices, add items, or update descriptions instantly without reprinting"
        },
        {
            icon: <CreditCard className="w-6 h-6 text-teal-500" />,
            title: "Payment integration",
            description: "Accept payments seamlessly with integrated digital payment solutions"
        }
    ];

    return (


        <div className="mt-0 mb-5">

            <HeroScrollDemo />


            <div className="max-w-6xl mx-auto px-4">
                {/* Header Section - More compact */}
                <div className="text-center mb-12 font-outfit">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Everything you need to <span className="text-teal-500">grow</span>
                    </h2>
                    <p className="text-base text-gray-600 max-w-xl mx-auto">
                        Powerful features designed to streamline your restaurant operations
                    </p>
                </div>

                {/* Features Grid - Compact cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 font-outfit">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative p-6 bg-transparent rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.05)]"
                        >
                            {/* Icon with gradient background - smaller */}
                            <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                {feature.icon}
                            </div>

                            {/* Title - smaller */}
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                                {feature.title}
                            </h3>

                            {/* Description - smaller */}
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Decorative gradient on hover */}
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section - more compact */}
                <div className="mt-16 text-center font-outfit">
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-sky-100 rounded-full">
                        <span className="text-sm text-teal-700 font-medium">Ready to transform your restaurant?</span>

                        <Link to='/Getstarted'>
                            <button className="px-4 cursor-pointer py-1.5 bg-teal-500 text-white rounded-full text-sm font-semibold hover:bg-teal-600 transition-colors duration-300 shadow-sm hover:shadow-md">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>



        </div>


    );
};

export default About;