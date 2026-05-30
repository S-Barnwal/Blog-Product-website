import React, { useEffect, useState } from "react";


import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import SectionHeading from "../components/SectionHeading";

import { getAllBlog } from "../service/blog";

function BlogPage() {

    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        try {

            const response =
                await getAllBlog();

            if (
                response?.data?.success
            ) {
                setBlogs(
                    response.data.allBlogs
                );
            }

        } catch (error) {

            console.log(error);

        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className="min-h-screen bg-[#0F0A1F]">

           

            <section className="max-w-7xl mx-auto px-6 py-20">

                <SectionHeading
                    badge="Knowledge Hub"
                    title="Explore All"
                    highlight="Blogs"
                    description="Discover insightful articles, tutorials, trends, and stories from various domains."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {blogs.map((blog) => (

                        <BlogCard
                            key={blog._id}
                            blog={blog}
                        />

                    ))}

                </div>

            </section>

            <Footer />

        </div>
    );
}

export default BlogPage;