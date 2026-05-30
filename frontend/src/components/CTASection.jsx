import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

function CTASection() {
    return (
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative overflow-hidden rounded-[32px] sm:rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
            >

                {/* Background Glow */}
                <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl" />

                <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.04] via-transparent to-purple-500/[0.08] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Content */}
                <div className="relative z-10 px-6 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center rounded-full border border-yellow-400/20 bg-yellow-400/5 px-4 py-2 text-xs sm:text-sm uppercase tracking-[3px] text-yellow-400 backdrop-blur-xl">
                        Join The Community
                    </div>

                    {/* Heading */}
                    <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-white">
                        Ready To
                        <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                            Explore?
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-zinc-400">
                        Discover premium blogs and products designed to inspire,
                        educate, and empower modern users through beautifully
                        crafted experiences.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

                        <Link
                            to="/blogs"
                            className="group/btn w-full sm:w-auto min-w-[220px] rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-4 text-center font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(250,204,21,0.35)]"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Explore Blogs
                                <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                                    →
                                </span>
                            </span>
                        </Link>

                        <Link
                            to="/products"
                            className="group/btn w-full sm:w-auto min-w-[220px] rounded-2xl border border-yellow-400/40 bg-yellow-400/5 px-8 py-4 text-center font-bold text-yellow-400 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-black hover:shadow-[0_10px_30px_rgba(250,204,21,0.2)]"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Explore Products
                                <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                                    →
                                </span>
                            </span>
                        </Link>

                    </div>

                    {/* Bottom Stats */}
                    <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">

                        <div>
                            <h3 className="text-xl sm:text-2xl font-black text-yellow-400">
                                500+
                            </h3>
                            <p className="mt-1 text-xs sm:text-sm text-zinc-500">
                                Articles
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl sm:text-2xl font-black text-yellow-400">
                                300+
                            </h3>
                            <p className="mt-1 text-xs sm:text-sm text-zinc-500">
                                Products
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl sm:text-2xl font-black text-yellow-400">
                                25K+
                            </h3>
                            <p className="mt-1 text-xs sm:text-sm text-zinc-500">
                                Users
                            </p>
                        </div>

                    </div>

                </div>

                {/* Border Glow */}
                <div className="pointer-events-none absolute inset-0 rounded-[40px] border border-transparent transition-all duration-500 group-hover:border-yellow-400/10" />

            </motion.div>

        </section>
    );
}

export default CTASection;