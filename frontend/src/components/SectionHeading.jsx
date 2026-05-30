import React from "react";
import { motion } from "framer-motion";

function SectionHeading({
    badge,
    title,
    highlight,
    description,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
        >
            {badge && (
                <span className="inline-block px-4 py-2 rounded-full border border-yellow-400/30 text-yellow-400 text-xs uppercase tracking-[4px] backdrop-blur-md">
                    {badge}
                </span>
            )}

            <h2 className="mt-6 text-4xl md:text-5xl font-black">
                <span className="text-white">{title}</span>{" "}
                <span className="text-yellow-400">{highlight}</span>
            </h2>

            {description && (
                <p className="mt-5 text-zinc-400 text-lg leading-relaxed">
                    {description}
                </p>
            )}
        </motion.div>
    );
}

export default SectionHeading;