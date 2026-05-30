import React from "react";
import { motion } from "framer-motion";

function NewsletterSection() {
    return (
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative overflow-hidden rounded-[32px] sm:rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
            >

                {/* Background Effects */}
                <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />

                <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />

                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.04] via-transparent to-purple-500/[0.08] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Content */}
                <div className="relative z-10 px-6 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center rounded-full border border-yellow-400/20 bg-yellow-400/5 px-4 py-2 text-xs sm:text-sm uppercase tracking-[3px] text-yellow-400 backdrop-blur-xl">
                        Newsletter
                    </div>

                    {/* Heading */}
                    <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                        <span className="text-white">
                            Stay
                        </span>

                        <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                            Updated
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-zinc-400">
                        Get the latest blogs, premium products, industry
                        insights, and exclusive updates delivered directly
                        to your inbox.
                    </p>

                    {/* Newsletter Form */}
                    <form className="mx-auto mt-10 max-w-3xl">

                        <div className="flex flex-col sm:flex-row gap-4">

                            <div className="relative flex-1">

                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="h-14 sm:h-16 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 sm:px-6 text-white placeholder:text-zinc-500 backdrop-blur-xl outline-none transition-all duration-300 focus:border-yellow-400/50 focus:bg-white/[0.05]"
                                />

                            </div>

                            <button
                                type="submit"
                                className="group/btn h-14 sm:h-16 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 sm:px-10 font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(250,204,21,0.35)]"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    Subscribe

                                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                                        →
                                    </span>
                                </span>
                            </button>

                        </div>

                    </form>

                    {/* Benefits */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">

                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/20 hover:bg-white/[0.05]">
                            <h4 className="font-bold text-yellow-400">
                                Weekly Updates
                            </h4>

                            <p className="mt-2 text-sm text-zinc-400">
                                Fresh articles every week.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/20 hover:bg-white/[0.05]">
                            <h4 className="font-bold text-yellow-400">
                                Premium Products
                            </h4>

                            <p className="mt-2 text-sm text-zinc-400">
                                Early access to featured items.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/20 hover:bg-white/[0.05]">
                            <h4 className="font-bold text-yellow-400">
                                Exclusive Insights
                            </h4>

                            <p className="mt-2 text-sm text-zinc-400">
                                Industry trends and expert tips.
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

export default NewsletterSection;