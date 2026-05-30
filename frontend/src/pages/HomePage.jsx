import React, { useEffect, useState } from "react";


import HeroSection from "../components/HeroSection";
import SectionHeading from "../components/SectionHeading";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import StatsCard from "../components/StatsCard";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import NewsletterSection from "../components/NewsletterSection";

import { getAllBlog } from "../service/blog";
import { getAllProduct } from "../service/product";

function HomePage() {
    const [blogs, setBlogs] = useState([]);
    const [products, setProducts] = useState([]);

    const fetchHomeData = async () => {
        try {
            const blogResponse = await getAllBlog();
            const productResponse = await getAllProduct();

            if (blogResponse?.data?.success) {
                setBlogs(blogResponse.data.allBlogs);
            }

            if (productResponse?.data?.success) {
                setProducts(productResponse.data.allProducts);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchHomeData();
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0B0618] via-[#130C2E] to-[#090414]">
            {/* Background Effects */}
            <div className="pointer-events-none absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[120px]" />

            <div className="pointer-events-none absolute right-0 top-[30%] h-[350px] w-[350px] rounded-full bg-yellow-500/10 blur-[120px]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

           

            <HeroSection />

            {/* Blogs */}
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-24">
                <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-6 md:p-8 lg:p-12">
                    <SectionHeading
                        badge="Latest Articles"
                        title="Featured"
                        highlight="Blogs"
                        description="Explore insightful articles, tutorials, and industry trends written by experts."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                        {blogs.slice(0, 3).map((blog) => (
                            <BlogCard
                                key={blog._id}
                                blog={blog}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            {/* Products */}
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-24">
                <div className="overflow-hidden rounded-[32px] border border-yellow-500/10 bg-gradient-to-br from-yellow-500/[0.03] via-white/[0.02] to-purple-500/[0.05] backdrop-blur-xl p-5 sm:p-6 md:p-8 lg:p-12">
                    <SectionHeading
                        badge="Premium Collection"
                        title="Featured"
                        highlight="Products"
                        description="Discover premium products curated for modern users."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                        {products.slice(0, 3).map((product) => (
                            <ProductCard
                                key={product._id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            {/* Stats */}
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-24">
                <div className="rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 sm:p-6 md:p-8 lg:p-12">
                    <SectionHeading
                        badge="Community Growth"
                        title="User"
                        highlight="Statistics"
                        description="Our growing community continues to explore, learn, and discover every day."
                    />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        <StatsCard
                            number="25K+"
                            label="Active Users"
                        />

                        <StatsCard
                            number={blogs.length}
                            label="Blogs"
                        />

                        <StatsCard
                            number={products.length}
                            label="Products"
                        />

                        <StatsCard
                            number="1M+"
                            label="Views"
                        />
                    </div>
                </div>
            </section>

            <CTASection />

            <NewsletterSection />

            <Footer />
        </div>
    );
}

export default HomePage;