import React, { useState } from "react";
import Layout from "../components/Layout";

import {
    Form,
    Input,
    Select,
    Button,
    Card,
    InputNumber,
    message,
} from "antd";

import {
    SaveOutlined,
    ReloadOutlined,
} from "@ant-design/icons";

import { addProduct } from "../../service/product";

const { TextArea } = Input;

function AddProduct() {
    const [form] = Form.useForm();

    const [loading, setLoading] =
        useState(false);

    const [imagePreview, setImagePreview] =
        useState("");

    const handleSubmit = async (
        values
    ) => {
        try {
            setLoading(true);

            const productData = {
                name: values.name,
                shortDescription:
                    values.shortDescription,
                longDescription:
                    values.longDescription,
                image: values.image,
                price: values.price,
                category: values.category,
                brand: values.brand,
                stock: values.stock,
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

            const response =
                await addProduct(
                    productData
                );

            if (
                response?.data?.success
            ) {
                message.success(
                    response.data.message ||
                    "Product Added Successfully"
                );

                form.resetFields();
            }
        } catch (error) {
            console.log(error);

            message.error(
                error?.response?.data
                    ?.message ||
                "Add Product Failed"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className="space-y-6">

                {/* Header */}

                <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-[#0F172A] via-[#1E1B4B] to-[#0F172A] p-8">

                    <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full" />

                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/10 blur-3xl rounded-full" />

                    <div className="relative z-10">

                        <p className="text-yellow-400 font-medium mb-3">
                            Product Management
                        </p>

                        <h1 className="text-5xl font-black text-white">
                            🛍 Create New Product
                        </h1>

                        <p className="text-slate-300 mt-3 text-lg max-w-2xl">
                            Add products, manage inventory and grow your store.
                        </p>

                    </div>

                </div>

                {/* Form */}

                <div className="grid xl:grid-cols-3 gap-6">

                    <Card
                        className="
        !bg-[#140824]
        !border-[#3F2463]
        xl:sticky
        top-28
        h-fit
    "
                    >

                        <div className="mb-5">

                            <h3 className="text-white text-xl font-bold">
                                🖼 Product Preview
                            </h3>

                            <p className="text-zinc-400 text-sm mt-1">
                                Paste image URL to preview product
                            </p>

                        </div>

                        {imagePreview ? (
                            <img
                                src={imagePreview}
                                alt="Preview"
                                className="
                w-full
                h-72
                object-cover
                rounded-2xl
            "
                            />
                        ) : (
                            <div
                                className="
                h-72
                rounded-2xl
                border-2
                border-dashed
                border-white/10
                flex
                items-center
                justify-center
                text-zinc-500
            "
                            >
                                Product Preview
                            </div>
                        )}

                    </Card>

                    <div className="xl:col-span-2">

                        <Card className="!bg-[#140824] !border-[#3F2463]">

                            <Form
                                form={form}
                                layout="vertical"
                                onFinish={
                                    handleSubmit
                                }
                            >

                                {/* Image */}

                                <Form.Item
                                    label="Product Image URL"
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
                                        placeholder="https://example.com/product.jpg"
                                        onChange={(e) =>
                                            setImagePreview(e.target.value)
                                        }
                                    />
                                </Form.Item>

                                {/* Name */}

                                <Form.Item
                                    label="Product Name"
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please enter product name",
                                        },
                                    ]}
                                >
                                    <Input
                                        size="large"
                                        placeholder="Enter product name"
                                    />
                                </Form.Item>

                                {/* Price + Stock */}

                                <div className="grid md:grid-cols-2 gap-4">

                                    <Form.Item
                                        label="Price"
                                        name="price"
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >
                                        <InputNumber
                                            size="large"
                                            className="w-full"
                                            placeholder="Enter price"
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        label="Stock"
                                        name="stock"
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >
                                        <InputNumber
                                            size="large"
                                            className="w-full"
                                            placeholder="Enter stock quantity"
                                        />
                                    </Form.Item>

                                </div>

                                {/* Brand + Category */}

                                <div className="grid md:grid-cols-2 gap-4">

                                    <Form.Item
                                        label="Brand"
                                        name="brand"
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >
                                        <Input
                                            size="large"
                                            placeholder="Apple, Samsung..."
                                        />
                                    </Form.Item>

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
                                            placeholder="Select category"
                                            options={[
                                                {
                                                    label:
                                                        "Electronics",
                                                    value:
                                                        "Electronics",
                                                },
                                                {
                                                    label:
                                                        "Fashion",
                                                    value:
                                                        "Fashion",
                                                },
                                                {
                                                    label:
                                                        "Home",
                                                    value:
                                                        "Home",
                                                },
                                                {
                                                    label:
                                                        "Sports",
                                                    value:
                                                        "Sports",
                                                },
                                            ]}
                                        />
                                    </Form.Item>

                                </div>

                                {/* Status */}

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
                                        placeholder="Select status"
                                        options={[
                                            {
                                                label:
                                                    "In Stock",
                                                value:
                                                    "in-stock",
                                            },
                                            {
                                                label:
                                                    "Out Of Stock",
                                                value:
                                                    "out-of-stock",
                                            },
                                        ]}
                                    />
                                </Form.Item>

                                {/* Tags */}

                                <Form.Item
                                    label="Tags"
                                    name="tags"
                                >
                                    <Input
                                        size="large"
                                        placeholder="mobile,smartphone,ios"
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
                                    <TextArea
                                        rows={4}
                                        placeholder="Short description"
                                    />
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
                                    <TextArea
                                        rows={10}
                                        placeholder="Full product details"
                                    />
                                </Form.Item>

                                {/* Buttons */}

                                <div className="flex gap-4">

                                    <Button
                                        htmlType="submit"
                                        loading={loading}
                                        className="
            !h-14
            !px-10
            !rounded-2xl
            !border-0
            !font-bold
            !text-black
            bg-gradient-to-r
            from-yellow-400
            to-orange-500
            hover:scale-105
            transition-all
        "
                                    >
                                        🚀 Publish Product
                                    </Button>

                                    <Button
                                        size="large"
                                        icon={<ReloadOutlined />}
                                        onClick={() => {
                                            form.resetFields();
                                            setImagePreview("");
                                        }}
                                    >
                                        Reset
                                    </Button>

                                </div>


                            </Form>

                        </Card>

                    </div>

                </div>

            </div>

        </Layout >
    );
}

export default AddProduct;