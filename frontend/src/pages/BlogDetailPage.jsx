import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import RelatedBlogs from "../components/RelatedBlogs";

import { getSingleBlogDetails } from "../service/blog";

function BlogDetailPage() {
    const { id } = useParams();

    const [blog, setBlog] = useState(null);

    const fetchBlog = async () => {
        try {
            const response =
                await getSingleBlogDetails(id);

            if (response?.data?.success) {
                setBlog(
                    response.data.blogDetails
                );
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchBlog();
    }, []);

    if (!blog) {
        return (
            <div className="min-h-screen bg-[#0F0A1F] flex justify-center items-center text-white text-xl">
                Loading...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0F0A1F] text-white">

            <Topbar />

            {/* Hero Banner */}

            <section className="relative">

                <div className="h-[500px] overflow-hidden">

                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="h-full w-full object-cover"
                    />

                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A1F] via-[#0F0A1F]/50 to-transparent" />

                <div className="absolute bottom-10 left-0 right-0">

                    <div className="max-w-5xl mx-auto px-6">

                        <span className="inline-block rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-yellow-400 text-sm uppercase tracking-widest">
                            {blog.category}
                        </span>

                        <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
                            {blog.title}
                        </h1>

                        <p className="mt-4 text-zinc-300">
                            {new Date(
                                blog.date
                            ).toLocaleDateString()}
                        </p>

                    </div>

                </div>

            </section>

            {/* Blog Content */}

            <section className="max-w-4xl mx-auto px-6 py-20">

                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12">

                    <div className="prose prose-invert max-w-none">

                        <p className="text-lg text-zinc-300 leading-9 whitespace-pre-line">
                            {blog.longDescription}
                        </p>

                    </div>

                </div>

            </section>

            {/* Related Blogs */}

            <RelatedBlogs
                currentBlogId={blog._id}
            />

            <Footer />

        </div>
    );
}

export default BlogDetailPage;