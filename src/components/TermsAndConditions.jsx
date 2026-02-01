import { CheckCheck, CircleCheckBig, CircleCheckBigIcon, QrCode } from "lucide-react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const sections = [
    {
        id: "overview",
        title: "Overview",
        icon: "📄",
        content: `These Terms govern your use of Simplify — a QR-based digital menu platform for restaurants and cafés. They apply whether you are a customer ("User") or a restaurant/café owner ("Admin"). Using the platform means you accept these Terms.`
    },
    {
        id: "users",
        title: "For Users",
        icon: "👤",
        content: `• Browse menus and place orders only for their intended purpose.
• Do not scrape, automate, or extract platform data.
• Do not redistribute menu content without the owner's permission.
• Understand that menu details (prices, availability) are set by the Admin and may change at any time.
• Do not submit fraudulent orders, reviews, or feedback.`
    },
    {
        id: "admins",
        title: "For Store Owners",
        icon: "🏪",
        content: `• Keep all menu content accurate — including pricing, availability, and allergen info.
• Comply with local food safety and labeling laws.
• Do not publish misleading or deceptive content.
• Respond to customer inquiries promptly.
• Do not mimic another establishment's branding.
• Violating these rules may result in account suspension or removal.`
    },
    {
        id: "ip",
        title: "Intellectual Property",
        icon: "©️",
        content: `Simplify's branding and tools are owned by Simplify Inc. Menu content uploaded by Admins remains their property. By uploading, Admins grant Simplify a license to display it on the platform. Users may not copy or redistribute any content without permission.`
    },
    {
        id: "orders",
        title: "Orders & Payments",
        icon: "💳",
        content: `Orders are between the User and the Admin. Simplify facilitates but is not a party to the transaction. Payments are processed by third-party gateways — Simplify does not store card details. Refunds and disputes are handled directly with the Admin.`
    },
    {
        id: "privacy",
        title: "Privacy",
        icon: "🔒",
        content: `We collect basic usage data (device info, browsing activity) to operate the platform. We do not sell personal data. Admins may see anonymized stats for their menus. Full details are in our Privacy Policy. You may request access or deletion of your data at any time.`
    },
    {
        id: "liability",
        title: "Liability & Disclaimers",
        icon: "⚠️",
        content: `The Service is provided "as is." We make no guarantees on accuracy, uptime, or fitness for any purpose. We are not liable for indirect or consequential damages. We are not responsible for menu content provided by Admins — always confirm allergen info directly with the establishment.`
    },
    {
        id: "termination",
        title: "Termination",
        icon: "🚪",
        content: `We may suspend or terminate any account for violating these Terms, without notice. You may close your account anytime by contacting support. Admin content will be removed after termination. Inactive accounts may be removed.`
    },
    {
        id: "disputes",
        title: "Disputes & Governing Law",
        icon: "⚖️",
        content: `Disputes must first be raised with Simplify support. If unresolved in 30 days, the matter goes to binding arbitration. This waives your right to a jury trial or class action. These Terms are governed by the laws of [State/Country].`
    },
    {
        id: "changes",
        title: "Changes",
        icon: "🔄",
        content: `We may update these Terms at any time. Changes will be reflected in the "Last Updated" date. Continuing to use the platform after an update means you accept the new Terms.`
    },
    {
        id: "contact",
        title: "Contact",
        icon: "📬",
        content: `Questions or concerns? Reach out:

support@Simplify.com — General support
legal@Simplify.com — Legal inquiries
kathmandu,Nepal`
    }
];

export default function TermsAndConditions() {
    const [activeSection, setActiveSection] = useState("overview");
    const [scrolled, setScrolled] = useState(false);
    const [iAgreeDisappear, setiAgreeDisappear] = useState(true)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Auto-highlight whichever section is currently scrolled into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: "-30% 0px -60% 0px" }
        );
        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - 105;
        window.scrollTo({ top, behavior: "smooth" });
        setActiveSection(id);
    };


    // i agree button click 
    function iAgree() {
        toast.success("Thanks! You accepted our Terms and Conditions.", { icon: <CircleCheckBigIcon />, style: { background: "#fefefe", color: "#14B8A6", fontFamily: "outfit" } })
        setiAgreeDisappear(false)

    }


    useEffect(() => {
        const active = document.getElementById(`tab-${activeSection}`);
        if (active) active.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    }, [activeSection]);

    return (
        <div className="min-h-screen font-outfit " style={{ background: "#f1f5f9" }}>
            {/* Header */}
            <header
                className="sticky top-0 z-50 transition-all duration-300 "
                style={{
                    background: scrolled ? "rgba(20,184,166,0.95)" : "#14b8a6",
                    backdropFilter: scrolled ? "blur(12px)" : "none",
                    boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.13)" : "none",
                }}
            >
                <div className="max-w-4xl mx-auto px-4 py-3.5 flex items-center justify-between ">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8   flex items-center justify-center text-white font-bold text-sm rounded-lg" style={{ background: "rgba(255,255,255,0.2)" }}><QrCode /></div>
                        <Link to='/'>
                            <span className="text-white font-semibold text-2xl"><i>Simplify</i></span>

                        </Link>
                    </div>
                    <span className="text-white text-xs opacity-70">Terms & Conditions</span>
                </div>
            </header>

            {/* Hero */}
            <div className="relative overflow-hidden " style={{ background: "linear-gradient(135deg, #0d9488, #14b8a6 50%, #5eead4)", padding: "40px 16px 48px" }}>
                <div className="absolute rounded-full opacity-10" style={{ width: "240px", height: "240px", background: "white", top: "-60px", right: "-60px" }} />
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <span className="inline-block px-3 py-0.5 rounded-full text-xs mb-3" style={{ background: "rgba(255,255,255,0.18)", color: "white" }}>
                        Last Updated: February 1, 2026
                    </span>
                    <h1 className="text-3xl font-bold text-white mb-2">Terms & Conditions</h1>
                    <p className="text-white opacity-75 text-sm max-w-xl mx-auto">
                        These terms apply to all Simplify users — customers and store owners alike.
                    </p>
                </div>
            </div>

            {/* Sticky horizontal pill tab bar */}
            <div className="sticky z-40" style={{ top: "50px", background: "#f1f5f9", paddingTop: "12px", paddingBottom: "8px" }}>
                <div
                    className="max-w-4xl mx-auto flex gap-2 overflow-x-auto"
                    style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch", paddingLeft: "18px", paddingRight: "16px" }}
                >
                    {sections.map((s) => (
                        <button
                            key={s.id}
                            id={`tab-${s.id}`}
                            onClick={() => scrollTo(s.id)}
                            className="shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap"
                            style={{
                                background: activeSection === s.id ? "#14b8a6" : "white",
                                color: activeSection === s.id ? "white" : "#475569",
                                boxShadow: activeSection === s.id ? "0 2px 8px rgba(20,184,166,0.35)" : "0 1px 3px rgba(0,0,0,0.08)",
                                border: activeSection === s.id ? "1px solid transparent" : "1px solid #e2e8f0",
                            }}
                        >
                            <span style={{ fontSize: "13px" }}>{s.icon}</span>
                            {s.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-6">
                <main className="flex flex-col gap-3">
                    {sections.map((section, i) => (
                        <div
                            key={section.id}
                            id={section.id}
                            className="rounded-xl shadow-sm border overflow-hidden"
                            style={{ background: "white", borderColor: "#e2e8f0", animation: `fadeUp 0.35s ease ${i * 0.05}s both` }}
                        >
                            <div
                                className="flex items-center gap-2.5 px-5 py-3 cursor-pointer"
                                style={{ background: "linear-gradient(135deg, #f0fdfa, #ccfbf1)", borderBottom: "1px solid #ccfbf1" }}
                                onClick={() => setActiveSection(section.id)}
                            >
                                <span>{section.icon}</span>
                                <span className="text-xs font-bold rounded px-1.5 py-0.5" style={{ background: "#14b8a6", color: "white" }}>
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <h2 className="text-sm font-semibold" style={{ color: "#0f766e" }}>{section.title}</h2>
                            </div>

                            <div className="px-5 py-4">
                                {section.content.split("\n\n").map((block, bi) => (
                                    <p key={bi} className="text-xs leading-relaxed mb-2 last:mb-0" style={{ color: "#64748b" }}>
                                        {block.split("\n").map((line, li) => (
                                            <span key={li}>
                                                {line}
                                                {li < block.split("\n").length - 1 && <br />}
                                            </span>
                                        ))}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Agreement footer */}
                    {iAgreeDisappear &&
                        <div className="rounded-xl bg-teal-500 text-slate-100 p-5 text-center relative overflow-hidden">
                            {/* Radial gradient overlay — same as footer */}
                            <div className="absolute inset-0 [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))]"></div>
                            {/* Noise texture overlay — same as footer */}
                            <div className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]" style={{ backgroundImage: "url(/noise.webp)", backgroundSize: "30%" }}></div>
                            {/* Content above the overlays */}
                            <div className="relative z-10">
                                <h3 className="text-sm font-bold mb-1 text-slate-100">You Agree to These Terms?</h3>
                                <p className="text-xs mb-3 text-slate-100">
                                    Continuing to use Simplify means you have read and accepted these Terms.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                                    <Link to='/TermsAndConditions'>
                                        <button onClick={iAgree} className="cursor-pointer px-5 py-2 rounded-lg border border-slate-100 text-slate-100 text-xs font-semibold shadow transition-all duration-150 hover:shadow-md">
                                            I Agree
                                        </button>
                                    </Link>
                                    <Link to='/contact'>
                                        <button className="cursor-pointer px-5 py-2 rounded-lg text-xs font-semibold border transition-all duration-150 text-slate-100 hover:bg-white hover:text-teal-500">
                                            Contact Support
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>}

                </main>
            </div>


            <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
}