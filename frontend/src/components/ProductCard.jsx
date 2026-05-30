import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

function ProductCard({ product }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{
                y: -12,
            }}
            className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-yellow-400/20 hover:shadow-[0_25px_80px_rgba(250,204,21,0.12)]"
        >
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.03] via-transparent to-purple-500/[0.08] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Product Image */}
            <div className="relative overflow-hidden">

                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0F0A1F] via-transparent to-transparent opacity-70" />

                <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Category */}
                <div className="absolute left-4 top-4 z-20">
                    <span className="inline-flex items-center rounded-full border border-yellow-400/20 bg-black/30 backdrop-blur-xl px-4 py-1.5 text-[10px] sm:text-xs uppercase tracking-[2px] text-yellow-400">
                        {product.category}
                    </span>
                </div>

            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-1 flex-col p-5 sm:p-6 lg:p-7">

                {/* Title */}
                <h3 className="line-clamp-2 text-xl sm:text-2xl font-bold leading-tight text-white transition-all duration-300 group-hover:text-yellow-400">
                    {product.name}
                </h3>

                {/* Description */}
                <p className="mt-4 line-clamp-3 text-sm sm:text-base leading-7 text-zinc-400">
                    {product.description}
                </p>

                {/* Price */}
                <div className="mt-5 flex items-center justify-between">

                    <h4 className="text-3xl sm:text-4xl font-black text-yellow-400">
                        ₹{product.price}
                    </h4>

                    <div className="h-10 w-10 rounded-full bg-yellow-400/10 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                </div>

                {/* Push Buttons Bottom */}
                <div className="flex-1" />

                {/* Actions */}
                <div className="mt-6 border-t border-white/10 pt-5 space-y-3">

                    {/* Add To Cart */}
                    <button
                        className="w-full h-14 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(250,204,21,0.35)] cursor-pointer"
                    >
                        Add To Cart
                    </button>

                    {/* Buy Now */}
                    <button
                        className="w-full h-14 rounded-2xl border border-yellow-400/40 bg-yellow-400/5 font-bold text-yellow-400 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-black hover:shadow-[0_10px_30px_rgba(250,204,21,0.2)] cursor-pointer"
                    >
                        Buy Now
                    </button>

                    {/* Details */}
                    <Link
                        to={`/product/${product._id}`}
                        className="flex h-14 w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-white/[0.06] hover:text-yellow-400"
                    >
                        Product Details →
                    </Link>

                </div>

            </div>

            {/* Hover Border */}
            <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-transparent transition-all duration-500 group-hover:border-yellow-400/10" />
        </motion.article>
    );
}

export default ProductCard;