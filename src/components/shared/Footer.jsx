"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816] text-white">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_40%)]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16">
                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
                    
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-3xl font-bold shadow-lg shadow-blue-500/30">
                                NR
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold tracking-wide">
                                    Noyon Raj
                                </h2>

                                <p className="text-sm text-gray-400">
                                    Full Stack Developer
                                </p>
                            </div>
                        </div>

                        <p className="mt-6 text-gray-400 leading-relaxed text-sm max-w-sm">
                            I build modern, scalable and high-performance web
                            applications using React, Next.js, Node.js and
                            MongoDB with clean UI/UX experiences.
                        </p>

                        <div className="mt-6 space-y-2 text-sm text-gray-400 flex flex-col items-center md:items-start">
                            <p>Email: Bnoyon223@gmail.com</p>
                            <p>Location: Bangladesh</p>
                            <p>Available For Freelance Projects</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-semibold mb-6">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-4 text-gray-400 text-sm">
                            <Link
                                href="/"
                                className="hover:text-blue-400 transition duration-300"
                            >
                                Home
                            </Link>

                            <Link
                                href="#about"
                                className="hover:text-blue-400 transition duration-300"
                            >
                                About
                            </Link>

                            <Link
                                href="#skills"
                                className="hover:text-blue-400 transition duration-300"
                            >
                                Skills
                            </Link>

                            <Link
                                href="#projects"
                                className="hover:text-blue-400 transition duration-300"
                            >
                                Projects
                            </Link>

                            <Link
                                href="#services"
                                className="hover:text-blue-400 transition duration-300"
                            >
                                Services
                            </Link>

                            <Link
                                href="#contact"
                                className="hover:text-blue-400 transition duration-300"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-semibold mb-6">
                            Services
                        </h3>

                        <div className="flex flex-col gap-4 text-gray-400 text-sm">
                            <p className="hover:text-blue-400 transition duration-300 cursor-pointer">
                                Frontend Development
                            </p>

                            <p className="hover:text-blue-400 transition duration-300 cursor-pointer">
                                Full Stack Web Development
                            </p>

                            <p className="hover:text-blue-400 transition duration-300 cursor-pointer">
                                Responsive Website Design
                            </p>

                            <p className="hover:text-blue-400 transition duration-300 cursor-pointer">
                                Performance Optimization
                            </p>

                            <p className="hover:text-blue-400 transition duration-300 cursor-pointer">
                                API Integration
                            </p>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-semibold mb-6">
                            Subscribe Newsletter
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                            Get updates about my latest projects, portfolio
                            improvements and modern web technologies.
                        </p>

                        <form className="space-y-4 w-full max-w-sm">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-sm transition"
                            />

                            <button
                                type="submit"
                                className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 py-3 text-sm font-semibold hover:scale-[1.02] transition duration-300"
                            >
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-5">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © 2026 Noyon Raj.{" "}
                        <span className="text-blue-200">
                            I Miss You Habiba.
                        </span>
                    </p>

                    <a
                        href="#top"
                        className="group relative overflow-hidden rounded-full border border-blue-500/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/10 hover:text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Back To Top

                            <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-[2px]">
                                ↑
                            </span>
                        </span>

                        {/* Animated Glow */}
                        <span className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-cyan-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </a>
                </div>
            </div>
        </footer>
    );
}



