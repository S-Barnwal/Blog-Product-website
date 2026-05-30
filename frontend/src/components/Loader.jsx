import React from "react";
import { motion } from "framer-motion";

function Loader() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#0F0A1F]">

            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full"
            />

        </div>
    );
}

export default Loader;