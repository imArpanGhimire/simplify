import { Mail, Phone, MapPin, QrCode } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-teal-500 text-slate-100 pt-20 relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))]"></div>
            <div className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]" style={{ backgroundImage: "url(/noise.webp)", backgroundSize: "30%" }}></div>
            <div className="max-w-7xl mx-auto px-8 relative z-10">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-md">
                                <QrCode className="text-white" size={20} />
                            </div>
                            <Link to='/'>
                                <span className="text-2xl font-bold font-family-frick italic">Simplify</span>
                            </Link>
                        </div>

                        <p className="text-slate-100 text-sm leading-relaxed max-w-xs font-outfit">
                            Making restaurant management simple, one QR at a time.
                        </p>
                    </div>

                    {/* Learn More */}
                    <div className="flex flex-col gap-4 font-outfit">
                        <h3 className="font-semibold text-slate-100 uppercase tracking-wide">Learn More</h3>
                        <ul className="space-y-2 text-slate-100 text-sm">
                            <li>
                                <Link to="/Learnmore" className="hover:text-white/80 transition-colors duration-200">
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <Link to="/Learnmore" className="hover:text-white/80 transition-colors duration-200">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4 font-outfit">
                        <h3 className="font-semibold text-slate-100 uppercase tracking-wide">Quick Links</h3>
                        <ul className="space-y-2 text-slate-100 text-sm">
                            <li>
                                <Link to="/about" className="hover:text-white/80 transition-colors duration-200">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-white/80 transition-colors duration-200">
                                    Contact Us
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* Get in Touch */}
                    <div className="flex flex-col gap-4 font-outfit">
                        <h3 className="font-semibold text-slate-100 uppercase tracking-wide">Get in Touch</h3>
                        <ul className="space-y-3 text-slate-100 text-sm">
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-white" />
                                <a href="mailto:hello@simplify.com" className="hover:text-white/80 transition-colors duration-200">
                                    hello@simplify.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="text-white" />
                                <a href="tel:+9779812345678" className="hover:text-white/80 transition-colors duration-200">
                                    +977 9812 345 678
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin size={16} className="text-white" />
                                <span>Kathmandu, Nepal</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/30 mb-8"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 font-outfit">
                    <p className="text-white text-sm">
                        © {new Date().getFullYear()} Simplify. All rights reserved.
                    </p>

                    <div className="flex gap-6 text-white text-sm">
                        <a href="#" className="hover:text-white/80 transition-colors duration-200">
                            Privacy
                        </a>
                        <a href="#" className="hover:text-white/80 transition-colors duration-200">
                            Terms
                        </a>
                        <a href="#" className="hover:text-white/80 transition-colors duration-200">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;