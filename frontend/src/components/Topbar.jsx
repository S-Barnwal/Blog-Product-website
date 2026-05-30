import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Topbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Blogs", path: "/blogs" },
        { name: "Products", path: "/products" },
    ];

    return (
        <header className="sticky top-0 z-50">
            {/* Glass Background */}
            <div className="absolute inset-0 border-b border-white/10 bg-[#0B0618]/70 backdrop-blur-2xl" />

            {/* Glow Line */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-20 flex items-center justify-between">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="group flex items-center"
                    >
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight transition-all duration-300 group-hover:scale-105">

                            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(250,204,21,0.35)]">
                                Smart
                            </span>

                            <span className="text-white">
                                Hub
                            </span>

                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-2 lg:gap-3">

                        {navLinks.map((link) => {
                            const isActive =
                                location.pathname === link.path;

                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                        isActive
                                            ? "text-yellow-400"
                                            : "text-zinc-300 hover:text-yellow-400"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute inset-0 rounded-full border border-yellow-400/20 bg-yellow-400/10"
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 30,
                                            }}
                                        />
                                    )}

                                    <span className="relative z-10">
                                        {link.name}
                                    </span>
                                </Link>
                            );
                        })}

                    </nav>

                    {/* Explore Button */}
                    <Link
                        to="/blogs"
                        className="hidden md:flex items-center justify-center px-6 lg:px-7 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(250,204,21,0.35)]"
                    >
                        Explore
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden h-11 w-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl text-white transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/10"
                    >
                        {isOpen ? (
                            <FaTimes size={20} />
                        ) : (
                            <FaBars size={20} />
                        )}
                    </button>

                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>

                {isOpen && (

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -20,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                        className="md:hidden relative"
                    >

                        <div className="mx-4 mb-4 overflow-hidden rounded-3xl border border-white/10 bg-[#0B0618]/95 backdrop-blur-2xl">

                            <div className="p-4 space-y-2">

                                {navLinks.map((link) => {
                                    const isActive =
                                        location.pathname ===
                                        link.path;

                                    return (
                                        <Link
                                            key={link.path}
                                            to={link.path}
                                            onClick={() =>
                                                setIsOpen(false)
                                            }
                                            className={`flex items-center px-4 py-4 rounded-2xl transition-all duration-300 ${
                                                isActive
                                                    ? "border border-yellow-400/20 bg-yellow-400/10 text-yellow-400"
                                                    : "text-white hover:bg-white/5 hover:text-yellow-400"
                                            }`}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}

                                <Link
                                    to="/blogs"
                                    onClick={() =>
                                        setIsOpen(false)
                                    }
                                    className="mt-4 flex items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 py-4 text-black font-semibold transition-all duration-300 hover:scale-[1.02]"
                                >
                                    Explore
                                </Link>

                            </div>

                        </div>

                    </motion.div>

                )}

            </AnimatePresence>
        </header>
    );
}

export default Topbar;