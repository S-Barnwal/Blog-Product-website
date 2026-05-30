import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

import {
    Form,
    Input,
    Select,
    Button,
    Card,
    InputNumber,
    message,
    Spin,
} from "antd";

import {
    SaveOutlined,
    ReloadOutlined,
} from "@ant-design/icons";

import {
    getSingleProductDetails,
    editProduct,
} from "../../service/product";

import {
    useNavigate,
    useParams,
} from "react-router";

const { TextArea } = Input;

function EditProduct() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [form] = Form.useForm();

    const [loading, setLoading] =
        useState(false);

    const [fetchLoading, setFetchLoading] =
        useState(true);

    const fetchProductDetails =
        async () => {
            try {

                setFetchLoading(true);

                const response =
                    await getSingleProductDetails(
                        id
                    );

                if (
                    response?.data?.success
                ) {

                    const product =
                        response.data
                            .productDetails;

                    form.setFieldsValue({
                        image:
                            product.image,
                        name:
                            product.name,
                        price:
                            product.price,
                        stock:
                            product.stock,
                        brand:
                            product.brand,
                        category:
                            product.category,
                        status:
                            product.status,
                        tags:
                            product.tags?.join(
                                ", "
                            ) || "",
                        shortDescription:
                            product.shortDescription,
                        longDescription:
                            product.longDescription,
                    });
                }

            } catch (error) {

                console.log(error);

                message.error(
                    "Failed To Fetch Product"
                );

            } finally {

                setFetchLoading(false);

            }
        };

    useEffect(() => {
        fetchProductDetails();
    }, []);

    const handleSubmit = async (
        values
    ) => {
        try {

            setLoading(true);

            const productData = {
                image: values.image,
                name: values.name,
                price: values.price,
                stock: values.stock,
                brand: values.brand,
                category: values.category,
                status: values.status,
                shortDescription:
                    values.shortDescription,
                longDescription:
                    values.longDescription,
                tags: values.tags
                    ? values.tags
                          .split(",")
                          .map((tag) =>
                              tag.trim()
                          )
                          .filter(Boolean)
                    : [],
            };

            const response =
                await editProduct(
                    id,
                    productData
                );

            if (
                response?.data?.success
            ) {

                message.success(
                    response.data.message ||
                        "Product Updated Successfully"
                );

                navigate(
                    "/admin/all-products"
                );
            }

        } catch (error) {

            console.log(error);

            message.error(
                error?.response?.data
                    ?.message ||
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

                {/* Header */}

                <div>

                    <h1 className="text-4xl font-black text-white">
                        Edit Product
                    </h1>

                    <p className="text-zinc-400 mt-2">
                        Update product information
                    </p>

                </div>

                {/* Form */}

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
                                },
                            ]}
                        >
                            <Input
                                size="large"
                            />
                        </Form.Item>

                        {/* Name */}

                        <Form.Item
                            label="Product Name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input
                                size="large"
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
                            />
                        </Form.Item>

                        {/* Buttons */}

                        <div className="flex gap-4">

                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={
                                    loading
                                }
                                icon={
                                    <SaveOutlined />
                                }
                            >
                                Update Product
                            </Button>

                            <Button
                                icon={
                                    <ReloadOutlined />
                                }
                                onClick={() =>
                                    fetchProductDetails()
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

export default EditProduct;