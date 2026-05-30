import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import {
    Card,
    Tag,
    Spin,
    Button,
    message,
} from "antd";
import {
    FaEdit,
    FaArrowLeft,
    FaCalendarAlt,
    FaUser,
    FaTag,
    FaHeart,
} from "react-icons/fa";

import { useNavigate, useParams } from "react-router";

import { getSingleBlogDetails } from "../../service/blog";

function BlogDetail() {
    const { id } = useParams();

    const navigate = useNavigate();

    const [blog, setBlog] = useState(null);

    const [loading, setLoading] = useState(true);

    const fetchBlogDetails = async () => {
        try {

            setLoading(true);

            const response =
                await getSingleBlogDetails(id);

            if (response?.data?.success) {
                setBlog(
                    response.data.blogDetails
                );
            }

        } catch (error) {

            console.log(error);

            message.error(
                "Failed To Fetch Blog Details"
            );

        } finally {

            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogDetails();
    }, []);

    if (loading) {
        return (
            <Layout>
                <div className="h-[70vh] flex justify-center items-center">
                    <Spin size="large" />
                </div>
            </Layout>
        );
    }

    if (!blog) {
        return (
            <Layout>
                <div className="text-center py-20 text-white">
                    Blog Not Found
                </div>
            </Layout>
        );
    }

    return (
        <Layout>

            <div className="space-y-6">

                {/* Header */}

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    <div>

                        <Button
                            icon={<FaArrowLeft />}
                            onClick={() =>
                                navigate("/admin/all-blogs")
                            }
                            className="mb-4"
                        >
                            Back
                        </Button>

                        <h1 className="text-4xl font-black text-white">
                            Blog Detail
                        </h1>

                        <p className="text-zinc-400 mt-2">
                            View complete blog information
                        </p>

                    </div>

                    <Button
                        type="primary"
                        icon={<FaEdit />}
                        onClick={() =>
                            navigate(
                                `/admin/edit-blog/${blog._id}`
                            )
                        }
                    >
                        Edit Blog
                    </Button>

                </div>

                {/* Main Card */}

                <Card className="!bg-[#140824] !border-[#3F2463]">

                    {/* Image */}

                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-[350px] object-cover rounded-2xl mb-6"
                    />

                    {/* Title */}

                    <h2 className="text-4xl font-black text-white mb-4">
                        {blog.title}
                    </h2>

                    {/* Meta */}

                    <div className="flex flex-wrap gap-4 mb-6">

                        <Tag color="gold">
                            {blog.category}
                        </Tag>

                        <Tag
                            color={
                                blog.status === "published"
                                    ? "green"
                                    : "orange"
                            }
                        >
                            {blog.status}
                        </Tag>

                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-8">

                        <div className="flex items-center gap-2 text-zinc-300">
                            <FaUser />
                            <span>{blog.author}</span>
                        </div>

                        <div className="flex items-center gap-2 text-zinc-300">
                            <FaCalendarAlt />
                            <span>
                                {new Date(
                                    blog.date
                                ).toLocaleDateString()}
                            </span>
                        </div>

                        <div className="flex items-center gap-2 text-zinc-300">
                            <FaHeart />
                            <span>
                                {blog.likes || 0} Likes
                            </span>
                        </div>

                    </div>

                    {/* Tags */}

                    <div className="mb-8">

                        <h3 className="text-xl font-bold text-white mb-3">
                            Tags
                        </h3>

                        <div className="flex flex-wrap gap-2">

                            {blog.tags?.map(
                                (tag, index) => (
                                    <Tag
                                        key={index}
                                        icon={<FaTag />}
                                        color="purple"
                                    >
                                        {tag}
                                    </Tag>
                                )
                            )}

                        </div>

                    </div>

                    {/* Short Description */}

                    <div className="mb-8">

                        <h3 className="text-xl font-bold text-white mb-3">
                            Short Description
                        </h3>

                        <p className="text-zinc-300 leading-8">
                            {blog.shortDescription}
                        </p>

                    </div>

                    {/* Long Description */}

                    <div>

                        <h3 className="text-xl font-bold text-white mb-3">
                            Long Description
                        </h3>

                        <p className="text-zinc-300 leading-8 whitespace-pre-line">
                            {blog.longDescription}
                        </p>

                    </div>

                </Card>

            </div>

        </Layout>
    );
}

export default BlogDetail;