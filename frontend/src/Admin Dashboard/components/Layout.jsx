import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#0A0118] flex">

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="
                        fixed
                        inset-0
                        z-40
                        bg-black/70
                        backdrop-blur-md
                        lg:hidden
                    "
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            {/* Main Area */}
            <div className="flex-1 flex flex-col min-w-0">

                {/* Header */}
                <Header
                    setSidebarOpen={setSidebarOpen}
                />

                {/* Page Content */}
                <main
                    className="
                        flex-1
                        overflow-y-auto
                        p-4
                        md:p-6
                        xl:p-8
                    "
                >
                    <div
                        className="
                            max-w-[1700px]
                            mx-auto
                            animate-in
                            fade-in
                            duration-300
                        "
                    >
                        {children}
                    </div>
                </main>

            </div>

        </div>
    );
}

export default Layout;