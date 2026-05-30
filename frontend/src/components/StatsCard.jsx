import React from "react";
import { motion } from "framer-motion";

function StatsCard({ number, label }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{
                y: -10,
                scale: 1.03,
            }}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-6 lg:p-8 text-center transition-all duration-500 hover:border-yellow-400/20 hover:shadow-[0_20px_60px_rgba(250,204,21,0.15)]"
        >
            {/* Gradient Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.04] via-transparent to-purple-500/[0.08] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Glow Effect */}
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">

                {/* Number */}
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-yellow-400 transition-all duration-300 group-hover:scale-110">
                    {number}
                </h3>

                {/* Divider */}
                <div className="mx-auto mt-4 h-[2px] w-12 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent transition-all duration-500 group-hover:w-20" />

                {/* Label */}
                <p className="mt-4 text-sm sm:text-base lg:text-lg font-medium text-zinc-300 transition-colors duration-300 group-hover:text-white">
                    {label}
                </p>

            </div>

            {/* Border Glow */}
            <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-transparent transition-all duration-500 group-hover:border-yellow-400/10" />
        </motion.div>
    );
}

export default StatsCard;