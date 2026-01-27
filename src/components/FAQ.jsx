import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How easy is it to set up the QR menu system?",
            answer: "Very simple! Our setup process takes just a few minutes. We provide you with QR codes that you can print and place on your tables. Your menu is already configured and ready to go live immediately."
        },
        {
            question: "What devices do customers need to use the QR menu?",
            answer: "Customers only need a smartphone with a camera and internet connection. They can scan the QR code using any built-in camera app or QR scanner—no app download required."
        },
        {
            question: "Can I update my menu items and prices anytime?",
            answer: "Yes! You have complete control over your menu. Update items, prices, descriptions, and availability anytime from your dashboard. Changes go live instantly across all tables."
        },
        {
            question: "How do you handle payment processing?",
            answer: "We support all major payment methods including credit cards, debit cards, digital wallets, and UPI. Payments are processed securely through our integrated payment gateway."
        },
        {
            question: "What happens if customers have technical issues?",
            answer: "Our dedicated support team is available 24/7 to help. We also provide staff training to help your team assist customers with any issues they may encounter."
        },
        {
            question: "Is there a contract or can I cancel anytime?",
            answer: "No long-term contracts required! You can use our service month-to-month with flexible plans. Cancel anytime with no penalties. We're confident you'll love the results."
        }
    ];

    return (
        <div>
            <div className="min-h-screen p-8 bg-transparent mt-20" style={{ fontFamily: 'Outfit, sans-serif' }}>
                <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            max-height: 1000px;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 1;
            max-height: 1000px;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            max-height: 0;
            transform: translateY(-20px);
          }
        }

        .faq-content-open {
          animation: slideDown 0.7s ease-out forwards;
        }

        .faq-content-close {
          animation: slideUp 0.5s ease-out forwards;
        }

        .chevron-open {
          transform: rotate(180deg);
          transition: transform 0.4s ease-out;
        }

        .chevron-closed {
          transform: rotate(0deg);
          transition: transform 0.4s ease-out;
        }

        * {
          font-family: 'Outfit', sans-serif;
        }
      `}</style>

                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-black mb-4">Common Questions</h1>
                        <p className="text-zinc-600 text-lg">Restaurant owners asking about Simplify QR menu service</p>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-0 rounded-xl p-8">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-white border-opacity-20 last:border-b-0 transition-all duration-300 overflow-hidden"
                            >
                                {/* Question Button */}
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-0 py-4 flex items-center justify-between text-left hover:opacity-80 transition-all duration-200 group"
                                >
                                    <span className="text-zinc-700 font-normal text-lg transition-colors duration-200">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-zinc-700 flex-shrink-0 ${openIndex === index ? 'chevron-open' : 'chevron-closed'
                                            }`}
                                    />
                                </button>

                                {/* Answer */}
                                {openIndex === index && (
                                    <div className="faq-content-open px-0 pb-4">
                                        <p className="text-zinc-500 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Footer CTA */}
                    <Link to='/Contact'>
                        <div className="mt-10    text-center">
                            <p className="text-zinc-600 mb-4">Still have any questions?</p>
                            <button className="px-8 py-3 bg-teal-500 text-white font-semibold rounded-lg  cursor-pointer">
                                Ask query
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FAQ