import React, { useEffect, useState } from "react";

import BlogCard from "./BlogCard";
import SectionHeading from "./SectionHeading";

import { getAllBlog } from "../service/blog";

function RelatedBlogs({ currentBlogId }) {

    const [relatedBlogs, setRelatedBlogs] =
        useState([]);

    const fetchRelatedBlogs =
        async () => {
            try {

                const response =
                    await getAllBlog();

                if (
                    response?.data?.success
                ) {

                    const blogs =
                        response.data
                            .allBlogs;

                    const filteredBlogs =
                        blogs
                            .filter(
                                (
                                    blog
                                ) =>
                                    blog._id !==
                                    currentBlogId
                            )
                            .slice(
                                0,
                                3
                            );

                    setRelatedBlogs(
                        filteredBlogs
                    );
                }

            } catch (error) {

                console.log(error);

            }
        };

    useEffect(() => {
        fetchRelatedBlogs();
    }, [currentBlogId]);

    if (
        relatedBlogs.length === 0
    ) {
        return null;
    }

    return (
        <section className="max-w-7xl mx-auto px-6 py-20">

            <SectionHeading
                badge="You May Also Like"
                title="Related"
                highlight="Blogs"
                description="Continue exploring more articles and insights."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {relatedBlogs.map(
                    (blog) => (

                        <BlogCard
                            key={blog._id}
                            blog={blog}
                        />

                    )
                )}

            </div>

        </section>
    );
}

export default RelatedBlogs;