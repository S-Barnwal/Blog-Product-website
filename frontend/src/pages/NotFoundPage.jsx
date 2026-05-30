import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

function NotFoundPage() {
    return (
        <div className="min-h-screen bg-[#0F0A1F] flex items-center justify-center px-6">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h1 className="text-8xl md:text-9xl font-black text-yellow-400">
                    404
                </h1>

                <h2 className="mt-6 text-3xl md:text-5xl font-bold text-white">
                    Page Not Found
                </h2>

                <p className="mt-4 text-zinc-400 max-w-lg mx-auto">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="inline-block mt-8 px-8 py-4 rounded-2xl bg-yellow-400 text-black font-bold hover:scale-105 transition-all duration-300"
                >
                    Back To Home
                </Link>
            </motion.div>

        </div>
    );
}

export default NotFoundPage;