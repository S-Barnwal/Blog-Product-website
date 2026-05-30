import React from "react";
import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

function Footer() {
    return (
        <footer className="relative mt-20 overflow-hidden border-t border-white/10 bg-[#0A0715]">

            {/* Background Effects */}
            <div className="absolute -top-32 left-0 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />

            <div className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">

                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            to="/"
                            className="group inline-block"
                        >
                            <h2 className="text-3xl sm:text-4xl font-black tracking-tight transition-all duration-300 group-hover:scale-105">

                                <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(250,204,21,0.35)]">
                                    Smart
                                </span>

                                <span className="text-white">
                                    Hub
                                </span>

                            </h2>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm sm:text-base leading-7 text-zinc-400">
                            Discover premium blogs, products, and insights
                            through a beautifully crafted experience designed
                            for modern readers and creators.
                        </p>

                        <div className="mt-6 flex items-center gap-3">

                            <span className="rounded-full border border-yellow-400/20 bg-yellow-400/5 px-4 py-2 text-xs uppercase tracking-[3px] text-yellow-400">
                                Premium Content
                            </span>

                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                            Quick Links
                        </h3>

                        <div className="mt-6 flex flex-col gap-4">

                            <Link
                                to="/"
                                className="group flex items-center text-zinc-400 transition-all duration-300 hover:text-yellow-400"
                            >
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    Home
                                </span>
                            </Link>

                            <Link
                                to="/blogs"
                                className="group flex items-center text-zinc-400 transition-all duration-300 hover:text-yellow-400"
                            >
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    Blogs
                                </span>
                            </Link>

                            <Link
                                to="/products"
                                className="group flex items-center text-zinc-400 transition-all duration-300 hover:text-yellow-400"
                            >
                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                    Products
                                </span>
                            </Link>

                        </div>
                    </motion.div>

                    {/* Social */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                            Connect With Us
                        </h3>

                        <p className="mt-4 text-zinc-400 text-sm leading-6">
                            Follow us on social platforms and stay updated
                            with the latest content and releases.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-4">

                            {[FaGithub, FaLinkedin, FaInstagram, FaTwitter].map(
                                (Icon, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl text-white transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:text-yellow-400 hover:shadow-[0_10px_30px_rgba(250,204,21,0.15)]"
                                    >
                                        <Icon className="transition-transform duration-300 group-hover:scale-110" />
                                    </a>
                                )
                            )}

                        </div>
                    </motion.div>

                </div>

                {/* Divider */}
                <div className="mt-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Bottom */}
                <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

                    <p className="text-sm text-zinc-500">
                        © {new Date().getFullYear()} SmartHub. All rights reserved.
                    </p>

                    <p className="text-sm text-zinc-500">
                        Crafted with ❤️ by{" "}
                        <span className="font-medium text-yellow-400">
                            Snehaa
                        </span>
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;