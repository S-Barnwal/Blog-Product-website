import React from "react";
import { Input, Avatar, Badge } from "antd";
import {
    FaBell,
    FaSearch,
    FaUserCircle,
} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

function Header({ setSidebarOpen }) {
    return (
        <header
            className="
                sticky
                top-0
                z-40
                backdrop-blur-xl
                bg-[#140b29]/80
                border-b
                border-yellow-500/10
            "
        >
            <div className="h-20 px-4 md:px-8 flex items-center justify-between">

                {/* Left Section */}
                <div className="flex items-center gap-4">

                    {/* Mobile Menu */}
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="
                            lg:hidden
                            h-11
                            w-11
                            rounded-xl
                            bg-white/5
                            border
                            border-white/10
                            flex
                            items-center
                            justify-center
                            text-white
                            hover:border-yellow-400/40
                            transition
                        "
                    >
                        <FiMenu size={22} />
                    </button>

                    {/* Heading */}
                    <div>
                        <h1 className="text-2xl md:text-3xl font-black text-white">
                            Dashboard
                        </h1>

                        <p className="text-zinc-400 text-sm">
                            Welcome back, Sneha 👋
                        </p>
                    </div>

                </div>

                {/* Right Section */}
                <div className="flex items-center gap-3 md:gap-5">

                    {/* Search */}
                    <div className="hidden md:block w-80">
                        <div
                            className="
                                flex
                                items-center
                                gap-3
                                px-4
                                py-3
                                rounded-2xl
                                bg-white/5
                                border
                                border-white/10
                                backdrop-blur-xl
                            "
                        >
                            <FaSearch className="text-yellow-400" />

                            <Input
                                bordered={false}
                                placeholder="Search anything..."
                                className="!bg-transparent"
                            />
                        </div>
                    </div>

                    {/* Notification */}
                    <Badge count={3} size="small">
                        <button
                            className="
                                h-12
                                w-12
                                rounded-2xl
                                bg-white/5
                                border
                                border-white/10
                                flex
                                items-center
                                justify-center
                                text-white
                                hover:text-yellow-400
                                hover:border-yellow-400/30
                                transition
                            "
                        >
                            <FaBell size={18} />
                        </button>
                    </Badge>

                    {/* Profile */}
                    <div
                        className="
                            flex
                            items-center
                            gap-3
                            px-3
                            py-2
                            rounded-2xl
                            bg-white/5
                            border
                            border-white/10
                        "
                    >
                        <Avatar
                            size={45}
                            icon={<FaUserCircle />}
                            className="bg-yellow-500"
                        />

                        <div className="hidden md:block">
                            <h4 className="text-white font-semibold leading-none">
                                Sneha
                            </h4>

                            <p className="text-zinc-400 text-xs mt-1">
                                Administrator
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </header>
    );
}

export default Header;