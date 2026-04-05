export default function Footer() {
    console.log("[Footer] Rendering footer");

    const sitemapLinks = [
        { label: "About", href: "#profil" },
        { label: "Educational", href: "#pendidikan" },
        { label: "Project", href: "#proyek" },
        { label: "Contact", href: "#kontak" },
    ];

    const socialLinks = [
        { label: "Email", href: "mailto:rmafdllhcptd@gmail.com" },
        {
            label: "GitHub",
            href: "https://github.com/muhammad-ramadhan-fadillah-tjiptadi",
        },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-ramadhan-fadillah-tjiptadi-970520330/" },
    ];

    return (
        <footer className="relative bg-surface">
            <div className="absolute top-0 left-12 sm:left-16 lg:left-24 right-12 sm:right-16 lg:right-24 h-px bg-white/5" />
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
                <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10 md:gap-14">
                    <div>
                        <h2
                            className="leading-[1.05] tracking-tight text-4xl sm:text-5xl font-medium mb-6"
                            style={{ fontFamily: "'Montserrat', sans-serif", color: "#DFDFDF" }}
                        >
                            Let&apos;s Build
                            <br />
                            <span style={{ color: "#8ff0a4" }}>Something Beautiful.</span>
                        </h2>
                    </div>

                    <div>
                        <p
                            className="text-xs font-semibold tracking-widest uppercase mb-3"
                            style={{ fontFamily: "'Montserrat', sans-serif", color: "#7f7f7f" }}
                        >
                            Sitemap
                        </p>
                        <div className="h-px bg-white/10 mb-4" />
                        <div className="space-y-3">
                            {sitemapLinks.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center justify-between text-[#DFDFDF] hover:text-[#8ff0a4] transition-colors duration-300"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    <span>{item.label}</span>
                                    <span className="text-[#7f7f7f]">↗</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p
                            className="text-xs font-semibold tracking-widest uppercase mb-3"
                            style={{ fontFamily: "'Montserrat', sans-serif", color: "#7f7f7f" }}
                        >
                            Socials
                        </p>
                        <div className="h-px bg-white/10 mb-4" />
                        <div className="space-y-3">
                            {socialLinks.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="flex items-center justify-between text-[#DFDFDF] hover:text-[#8ff0a4] transition-colors duration-300"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    <span>{item.label}</span>
                                    <span className="text-[#7f7f7f]">↗</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-white/5">
                    <p
                        className="text-sm text-[#7f7f7f]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        © {new Date().getFullYear()} Muhamad Ramadhan Fadilah Tjiptadi. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
