import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import {
    Form,
    Input,
    Select,
    Button,
    Card,
    DatePicker,
    message,
    Spin,
} from "antd";
import {
    SaveOutlined,
    ReloadOutlined,
} from "@ant-design/icons";

import dayjs from "dayjs";
import { useNavigate, useParams } from "react-router";

import {
    getSingleBlogDetails,
    editBlog,
} from "../../service/blog";

const { TextArea } = Input;


function EditBlog() {
    const { id } = useParams();

    const navigate = useNavigate();

    const [form] = Form.useForm();

    const [loading, setLoading] = useState(false);

    const [fetchLoading, setFetchLoading] =
        useState(true);

    const fetchBlogDetails = async () => {
        try {
            setFetchLoading(true);

            const response =
                await getSingleBlogDetails(id);

            if (response?.data?.success) {
                const blog =
                    response.data.blogDetails;

                form.setFieldsValue({
                    title: blog.title,
                    shortDescription:
                        blog.shortDescription,
                    longDescription:
                        blog.longDescription,
                    image: blog.image,
                    author: blog.author,
                    category: blog.category,
                    status: blog.status,
                    tags:
                        blog.tags?.join(", ") || "",
                    date: blog.date
                        ? dayjs(blog.date)
                        : null,
                });
            }
        } catch (error) {
            console.log(error);

            message.error(
                "Failed To Fetch Blog Details"
            );
        } finally {
            setFetchLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogDetails();
    }, []);

    const handleSubmit = async (values) => {
        try {
            setLoading(true);

            const blogData = {
                title: values.title,
                shortDescription:
                    values.shortDescription,
                longDescription:
                    values.longDescription,
                image: values.image,
                date: values.date
                    ? values.date.format(
                          "YYYY-MM-DD"
                      )
                    : null,
                author: values.author,
                category: values.category,
                tags: values.tags
                    ? values.tags
                          .split(",")
                          .map((tag) =>
                              tag.trim()
                          )
                          .filter(Boolean)
                    : [],
                status: values.status,
            };

            const response = await editBlog(
                id,
                blogData
            );

            if (response?.data?.success) {
                message.success(
                    response.data.message ||
                        "Blog Updated Successfully"
                );

                navigate("/admin/all-blogs");
            }
        } catch (error) {
            console.log(error);

            message.error(
                error?.response?.data?.message ||
                    "Update Failed"
            );
        } finally {
            setLoading(false);
        }
    };

    if (fetchLoading) {
        return (
            <Layout>
                <div className="h-[70vh] flex justify-center items-center">
                    <Spin size="large" />
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="space-y-6">

                <div>
                    <h1 className="text-4xl font-black text-white">
                        Edit Blog
                    </h1>

                    <p className="text-zinc-400 mt-2">
                        Update your blog information.
                    </p>
                </div>

                <Card className="!bg-[#140824] !border-[#3F2463]">

                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={handleSubmit}
                    >

                        {/* Image URL */}

                        <Form.Item
                            label="Blog Image URL"
                            name="image"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Please enter image URL",
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                placeholder="https://example.com/image.jpg"
                            />
                        </Form.Item>

                        {/* Title */}

                        <Form.Item
                            label="Blog Title"
                            name="title"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                placeholder="Enter blog title"
                            />
                        </Form.Item>

                        {/* Author + Date */}

                        <div className="grid md:grid-cols-2 gap-4">

                            <Form.Item
                                label="Author"
                                name="author"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Author Name"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Date"
                                name="date"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <DatePicker
                                    size="large"
                                    className="w-full"
                                />
                            </Form.Item>

                        </div>

                        {/* Category + Status */}

                        <div className="grid md:grid-cols-2 gap-4">

                            <Form.Item
                                label="Category"
                                name="category"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Select
                                    size="large"
                                    options={[
                                        {
                                            label:
                                                "Technology",
                                            value:
                                                "Technology",
                                        },
                                        {
                                            label:
                                                "Development",
                                            value:
                                                "Development",
                                        },
                                        {
                                            label:
                                                "Business",
                                            value:
                                                "Business",
                                        },
                                        {
                                            label:
                                                "Lifestyle",
                                            value:
                                                "Lifestyle",
                                        },
                                    ]}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Status"
                                name="status"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Select
                                    size="large"
                                    options={[
                                        {
                                            label:
                                                "Published",
                                            value:
                                                "published",
                                        },
                                        {
                                            label:
                                                "Draft",
                                            value:
                                                "draft",
                                        },
                                    ]}
                                />
                            </Form.Item>

                        </div>

                        {/* Tags */}

                        <Form.Item
                            label="Tags"
                            name="tags"
                        >
                            <Input
                                size="large"
                                placeholder="react,node,mongodb"
                            />
                        </Form.Item>

                        {/* Short Description */}

                        <Form.Item
                            label="Short Description"
                            name="shortDescription"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <TextArea rows={4} />
                        </Form.Item>

                        {/* Long Description */}

                        <Form.Item
                            label="Long Description"
                            name="longDescription"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <TextArea rows={10} />
                        </Form.Item>

                        {/* Buttons */}

                        <div className="flex gap-4">

                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                                loading={loading}
                                icon={<SaveOutlined />}
                            >
                                Update Blog
                            </Button>

                            <Button
                                size="large"
                                icon={<ReloadOutlined />}
                                onClick={() =>
                                    fetchBlogDetails()
                                }
                            >
                                Reset
                            </Button>

                        </div>

                    </Form>

                </Card>

            </div>
        </Layout>
    );
}

export default EditBlog;