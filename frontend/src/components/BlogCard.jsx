import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

function BlogCard({ blog }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{
                y: -12,
            }}
            className="group relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-yellow-400/20 hover:shadow-[0_25px_80px_rgba(250,204,21,0.12)]"
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.03] via-transparent to-purple-500/[0.08] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Image Section */}
            <div className="relative overflow-hidden">

                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0f0a1f] via-transparent to-transparent opacity-70" />

                <img
                    src={blog.image}
                    alt={blog.title}
                    className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Floating Category */}
                <div className="absolute left-4 top-4 z-20">
                    <span className="inline-flex items-center rounded-full border border-yellow-400/20 bg-black/30 backdrop-blur-xl px-4 py-1.5 text-[10px] sm:text-xs uppercase tracking-[2px] text-yellow-400">
                        {blog.category}
                    </span>
                </div>

            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-col p-5 sm:p-6 lg:p-7">

                {/* Date */}
                <p className="text-xs sm:text-sm font-medium tracking-wide text-zinc-500">
                    {blog.date}
                </p>

                {/* Title */}
                <h3 className="mt-3 line-clamp-2 text-xl sm:text-2xl font-bold leading-tight text-white transition-all duration-300 group-hover:text-yellow-400">
                    {blog.title}
                </h3>

                {/* Description */}
                <p className="mt-4 line-clamp-3 text-sm sm:text-base leading-7 text-zinc-400">
                    {blog.shortDescription}
                </p>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Bottom Section */}
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

                    <Link
                        to={`/blog/${blog._id}`}
                        className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-yellow-400 transition-all duration-300 hover:gap-4"
                    >
                        Read More

                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </Link>

                    {/* Decorative Glow */}
                    <div className="h-10 w-10 rounded-full bg-yellow-400/10 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                </div>

            </div>

            {/* Border Glow */}
            <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-transparent transition-all duration-500 group-hover:border-yellow-400/10" />
        </motion.article>
    );
}

export default BlogCard;