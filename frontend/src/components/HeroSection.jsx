import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

function HeroSection() {
    return (
        <section className="relative overflow-hidden min-h-screen flex items-center">

            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">

                <div className="absolute top-10 left-0 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-yellow-500/10 blur-[120px]" />

                <div className="absolute right-0 top-1/3 h-[350px] w-[350px] md:h-[600px] md:w-[600px] rounded-full bg-purple-600/20 blur-[180px]" />

                <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[180px]" />

                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >

                        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/5 backdrop-blur-xl px-4 py-2 text-yellow-400 text-xs sm:text-sm uppercase tracking-[3px]">
                            Smart Content Platform
                        </div>

                        <h1 className="mt-8 font-black leading-[0.95]">

                            <span className="block text-white text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
                                Blogs,
                            </span>

                            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl xl:text-8xl">
                                Products
                            </span>

                            <span className="block text-white text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
                                & Insights
                            </span>

                        </h1>

                        <p className="mt-6 sm:mt-8 text-zinc-400 text-base sm:text-lg leading-7 sm:leading-8 max-w-xl mx-auto lg:mx-0">
                            Explore premium blogs, discover innovative products,
                            and stay connected with a beautifully crafted
                            experience built for modern users.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mt-8 sm:mt-10">

                            <Link
                                to="/blogs"
                                className="group w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(250,204,21,0.35)] text-center"
                            >
                                Explore Blogs
                            </Link>

                            <Link
                                to="/products"
                                className="group w-full sm:w-auto px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:text-yellow-400 text-center"
                            >
                                Explore Products
                            </Link>

                        </div>

                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >

                        <div className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-5 sm:p-8 transition-all duration-500 hover:border-yellow-400/20 hover:shadow-[0_20px_80px_rgba(168,85,247,0.15)]">

                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.03] via-transparent to-purple-500/[0.05]" />

                            <div className="relative grid grid-cols-2 gap-4 sm:gap-6">

                                {[
                                    {
                                        value: "500+",
                                        label: "Blogs",
                                    },
                                    {
                                        value: "300+",
                                        label: "Products",
                                    },
                                    {
                                        value: "25K+",
                                        label: "Users",
                                    },
                                    {
                                        value: "1M+",
                                        label: "Views",
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="group rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-6 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:border-yellow-400/30 hover:bg-white/[0.06] hover:shadow-[0_20px_50px_rgba(250,204,21,0.15)]"
                                    >
                                        <h3 className="text-3xl sm:text-4xl font-black text-yellow-400 transition-all duration-300 group-hover:scale-110">
                                            {item.value}
                                        </h3>

                                        <p className="mt-2 text-sm sm:text-base text-zinc-400">
                                            {item.label}
                                        </p>
                                    </div>
                                ))}

                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}

export default HeroSection;