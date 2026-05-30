import React from "react";
import {
    FaChartPie,
    FaBlog,
    FaBoxOpen,
    FaPlusCircle,
    FaCog,
    FaSignOutAlt,
    FaSearch,
    FaStar,
    FaHistory,
    FaMoon,
    FaChevronRight,
    FaUserCircle,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";

function Sidebar({
    sidebarOpen,
    setSidebarOpen,
}) {
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        {
            key: "/admin/dashboard",
            icon: <FaChartPie />,
            label: "Dashboard",
        },
        {
            key: "blogs",
            icon: <FaBlog />,
            label: "Blogs",
            children: [
                {
                    key: "/admin/all-blogs",
                    label: "All Blogs",
                },
                {
                    key: "/admin/add-blog",
                    label: "Add Blog",
                },
            ],
        },
        {
            key: "products",
            icon: <FaBoxOpen />,
            label: "Products",
            children: [
                {
                    key: "/admin/all-products",
                    label: "All Products",
                },
                {
                    key: "/admin/add-product",
                    label: "Add Product",
                },
            ],
        },
        {
            key: "/admin/settings",
            icon: <FaCog />,
            label: "Settings",
        },
        {
            key: "/admin/logout",
            icon: <FaSignOutAlt />,
            label: "Logout",
        },
    ];

    return (
        <aside
            className={`
        fixed lg:sticky
        top-0 left-0
        z-50
        w-80
        h-screen
        bg-white/5
        backdrop-blur-xl
        border-r
        border-yellow-400/10
        flex
        flex-col
        text-white
        transition-transform
        duration-300
        ease-in-out
        ${sidebarOpen
                    ? "translate-x-0"
                    : "-translate-x-full lg:translate-x-0"
                }
    `}
        >
            {/* Logo */}
            <div className="px-6 py-8 border-b border-yellow-400/10">
                <h1 className="text-4xl font-black tracking-tight">
                    <span className="text-yellow-400">
                        Smart
                    </span>
                    <span className="text-white">
                        Admin
                    </span>
                </h1>

                <p className="text-gray-400 text-sm mt-1">
                    Premium Dashboard
                </p>
            </div>

            {/* Search */}
            <div className="p-5">
                <div
                    className="
                        flex
                        items-center
                        gap-3
                        bg-white/5
                        border
                        border-white/10
                        rounded-2xl
                        px-4
                        py-3
                    "
                >
                    <FaSearch className="text-yellow-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="
                            bg-transparent
                            outline-none
                            w-full
                            text-sm
                        "
                    />
                </div>
            </div>

            {/* Create Button */}
            <div className="px-5">
                <button
                    className="
                        w-full
                        py-3
                        rounded-2xl
                        bg-gradient-to-r
                        from-yellow-400
                        to-orange-500
                        text-black
                        font-bold
                        flex
                        items-center
                        justify-center
                        gap-2
                        hover:scale-[1.02]
                        transition
                    "
                >
                    <FaPlusCircle />
                    Create New
                </button>
            </div>

            {/* Main Menu */}
            <div className="flex-1 px-4 mt-8 overflow-y-auto">
                <p className="text-xs uppercase tracking-widest text-gray-500 px-3 mb-3">
                    Main Menu
                </p>

                <div className="space-y-2">
                    {menuItems.map((item) => (
                        <div key={item.key}>
                            {!item.children ? (
                                <button
                                    onClick={() => {
                                        navigate(item.key);

                                        if (window.innerWidth < 1024) {
                                            setSidebarOpen(false);
                                        }
                                    }}
                                    className={`
                                        w-full
                                        flex
                                        items-center
                                        gap-4
                                        px-4
                                        py-4
                                        rounded-2xl
                                        transition-all
                                        duration-300
                                        ${location.pathname === item.key
                                            ? "bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 text-yellow-300"
                                            : "hover:bg-white/5"
                                        }
                                    `}
                                >
                                    <span className="text-lg">
                                        {item.icon}
                                    </span>

                                    <span className="font-medium">
                                        {item.label}
                                    </span>
                                </button>
                            ) : (
                                <div
                                    className="
                                        bg-white/5
                                        rounded-2xl
                                        border
                                        border-white/5
                                        overflow-hidden
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-4
                                            px-4
                                            py-4
                                        "
                                    >
                                        {item.icon}
                                        <span>
                                            {item.label}
                                        </span>
                                    </div>

                                    <div className="pb-2">
                                        {item.children.map((child) => (
                                            <button
                                                key={child.key}
                                                onClick={() => {
                                                    navigate(child.key);

                                                    if (window.innerWidth < 1024) {
                                                        setSidebarOpen(false);
                                                    }
                                                }}
                                                className={`
                                                    w-full
                                                    flex
                                                    items-center
                                                    gap-3
                                                    px-10
                                                    py-3
                                                    text-sm
                                                    transition
                                                    ${location.pathname ===
                                                        child.key
                                                        ? "text-yellow-400"
                                                        : "text-gray-400 hover:text-white"
                                                    }
                                                `}
                                            >
                                                <FaChevronRight
                                                    size={10}
                                                />
                                                {child.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Extras */}
                <div className="mt-10">
                    <p className="text-xs uppercase tracking-widest text-gray-500 px-3 mb-3">
                        Extras
                    </p>

                    <div className="space-y-2">
                        <button className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-white/5">
                            <FaStar />
                            Favorites
                        </button>

                        <button className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-white/5">
                            <FaHistory />
                            Recent
                        </button>

                        <button className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-white/5">
                            <FaMoon />
                            Theme
                        </button>
                    </div>
                </div>
            </div>

            {/* Profile */}
            <div className="p-5 border-t border-yellow-400/10">
                <div
                    className="
                        bg-white/5
                        border
                        border-white/10
                        rounded-2xl
                        p-4
                        flex
                        items-center
                        gap-3
                    "
                >
                    <FaUserCircle
                        size={45}
                        className="text-yellow-400"
                    />

                    <div>
                        <h4 className="font-semibold">
                            Sneha
                        </h4>

                        <p className="text-xs text-gray-400">
                            Administrator
                        </p>
                    </div>
                </div>
            </div>
        </aside >
    );
}

export default Sidebar;