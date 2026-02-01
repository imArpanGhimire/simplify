import { ShieldCheck, QrCode, CircleCheckBigIcon } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const sections = [
    {
        id: "overview",
        title: "Overview",
        icon: "🔐",
        content: `This Privacy Policy explains how Simplify collects, uses, and protects information when you use our QR-based digital menu platform for restaurants and cafés. It applies to customers ("Users") and restaurant/café owners ("Admins"). By using Simplify, you agree to this Policy.`,
    },
    {
        id: "collect",
        title: "Information We Collect",
        icon: "📊",
        content: `We collect only the information needed to operate and improve the platform.

For Users:
• Device information (browser, OS, language, screen size)
• Usage data (pages viewed, interactions, time spent)
• Approximate location (city/country-level — not precise GPS)

For Admins:
• Account details (name/email for login and support)
• Business details (restaurant/café name and optional contact info)
• Menu content (items, prices, descriptions, allergens, images)

We do NOT collect:
• Credit/debit card details
• Precise GPS location
• Sensitive personal data`,
    },
    {
        id: "use",
        title: "How We Use Data",
        icon: "⚙️",
        content: `We use information to:
• Display menus correctly and improve platform performance
• Provide Admin analytics (aggregated or anonymized where possible)
• Prevent misuse, fraud, spam, or automated scraping
• Communicate important service updates and support replies

We do not sell or rent your personal data.`,
    },
    {
        id: "cookies",
        title: "Cookies & Analytics",
        icon: "🍪",
        content: `Simplify may use cookies or similar technologies to:
• Maintain sessions and basic app functionality
• Understand general usage trends
• Improve reliability and user experience

You can disable cookies in your browser, but some features may not work properly.`,
    },
    {
        id: "sharing",
        title: "Data Sharing",
        icon: "🤝",
        content: `We share data only when necessary:
• With trusted service providers (hosting, analytics, email delivery, etc.)
• With payment gateways (if enabled) — Simplify does not store your card details
• When required by law or legal request
• To protect platform security, users, and our legal rights

Third parties are required to handle data securely and only for the purpose we provide.`,
    },
    {
        id: "security",
        title: "Security",
        icon: "🛡️",
        content: `We use reasonable security measures such as:
• HTTPS encryption in transit
• Secure hosting and access controls
• Limited internal access to data

No system is 100% secure. We cannot guarantee absolute security, but we continuously work to protect user information.`,
    },
    {
        id: "rights",
        title: "Your Rights",
        icon: "👤",
        content: `You may request:
• Access to your data
• Correction of inaccurate data
• Deletion of your data
• Withdrawal of consent where applicable

To make a request, contact our support team. We may verify identity before processing certain requests.`,
    },
    {
        id: "retention",
        title: "Data Retention",
        icon: "🧹",
        content: `We keep data only as long as needed:
• Usage data may be retained for analytics and security purposes
• Admin content may remain while your account is active
• After termination, Admin content is removed within a reasonable period unless retention is required by law

Inactive accounts may be removed over time.`,
    },
    {
        id: "children",
        title: "Children’s Privacy",
        icon: "🧒",
        content: `Simplify is not intended for children under 13. We do not knowingly collect personal information from children. If you believe a child has provided data, contact us so we can delete it.`,
    },
    {
        id: "changes",
        title: "Changes to This Policy",
        icon: "🔄",
        content: `We may update this Privacy Policy from time to time. Changes will be shown in the "Last Updated" date. Continued use of the platform after an update means you accept the updated Policy.`,
    },
    {
        id: "contact",
        title: "Contact",
        icon: "📬",
        content: `Questions or privacy requests? Contact us:

support@Simplify.com — General support
legal@Simplify.com — Privacy & legal inquiries
Kathmandu, Nepal`,
    },
];

export default function Privacy() {
    const [activeSection, setActiveSection] = useState("overview");
    const [scrolled, setScrolled] = useState(false);
    const [iAgreeVisible, setIAgreeVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll spy: highlight active section
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

    function iAgree() {
        toast.success("Thanks! You accepted our Privacy Policy.", {
            icon: <CircleCheckBigIcon />,
            style: { background: "#fefefe", color: "#14B8A6", fontFamily: "outfit" },
        });
        setIAgreeVisible(false);
    }

    useEffect(() => {
        const active = document.getElementById(`tab-${activeSection}`);
        if (active) active.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    }, [activeSection]);

    return (
        <div className="min-h-screen font-outfit" style={{ background: "#f1f5f9" }}>
            {/* Header */}
            <header
                className="sticky top-0 z-50 transition-all duration-300"
                style={{
                    background: scrolled ? "rgba(20,184,166,0.95)" : "#14b8a6",
                    backdropFilter: scrolled ? "blur(12px)" : "none",
                    boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.13)" : "none",
                }}
            >
                <div className="max-w-4xl mx-auto px-4 py-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div
                            className="w-8 h-8 flex items-center justify-center text-white font-bold text-sm rounded-lg"
                            style={{ background: "rgba(255,255,255,0.2)" }}
                        >
                            <QrCode />
                        </div>
                        <Link to="/">
                            <span className="text-white font-semibold text-2xl">
                                <i>Simplify</i>
                            </span>
                        </Link>
                    </div>
                    <span className="text-white text-xs opacity-70">Privacy Policy</span>
                </div>
            </header>

            {/* Hero */}
            <div
                className="relative overflow-hidden"
                style={{
                    background: "linear-gradient(135deg, #0d9488, #14b8a6 50%, #5eead4)",
                    padding: "40px 16px 48px",
                }}
            >
                <div
                    className="absolute rounded-full opacity-10"
                    style={{ width: "240px", height: "240px", background: "white", top: "-60px", right: "-60px" }}
                />
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <span
                        className="inline-block px-3 py-0.5 rounded-full text-xs mb-3"
                        style={{ background: "rgba(255,255,255,0.18)", color: "white" }}
                    >
                        Last Updated: February 1, 2026
                    </span>

                    <div className="flex items-center justify-center gap-2 mb-2">
                        <ShieldCheck className="text-white" size={22} />
                        <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
                    </div>

                    <p className="text-white opacity-75 text-sm max-w-xl mx-auto">
                        This policy explains what data we collect, why we collect it, and how you can control it.
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
                            style={{
                                background: "white",
                                borderColor: "#e2e8f0",
                                animation: `fadeUp 0.35s ease ${i * 0.05}s both`,
                            }}
                        >
                            <div
                                className="flex items-center gap-2.5 px-5 py-3 cursor-pointer"
                                style={{
                                    background: "linear-gradient(135deg, #f0fdfa, #ccfbf1)",
                                    borderBottom: "1px solid #ccfbf1",
                                }}
                                onClick={() => setActiveSection(section.id)}
                            >
                                <span>{section.icon}</span>
                                <span className="text-xs font-bold rounded px-1.5 py-0.5" style={{ background: "#14b8a6", color: "white" }}>
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <h2 className="text-sm font-semibold" style={{ color: "#0f766e" }}>
                                    {section.title}
                                </h2>
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
                    {iAgreeVisible && (
                        <div className="rounded-xl bg-teal-500 text-slate-100 p-5 text-center relative overflow-hidden">
                            <div className="absolute inset-0 [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))]"></div>
                            <div
                                className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
                                style={{ backgroundImage: "url(/noise.webp)", backgroundSize: "30%" }}
                            ></div>

                            <div className="relative z-10">
                                <h3 className="text-sm font-bold mb-1 text-slate-100">Accept this Privacy Policy?</h3>
                                <p className="text-xs mb-3 text-slate-100">Continuing to use Simplify means you’ve read and accepted this policy.</p>

                                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                                    <button
                                        onClick={iAgree}
                                        className="cursor-pointer px-5 py-2 rounded-lg border border-slate-100 text-slate-100 text-xs font-semibold shadow transition-all duration-150 hover:shadow-md"
                                    >
                                        I Agree
                                    </button>

                                    <Link to="/contact">
                                        <button className="cursor-pointer px-5 py-2 rounded-lg text-xs font-semibold border transition-all duration-150 text-slate-100 hover:bg-white hover:text-teal-500">
                                            Contact Support
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
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
