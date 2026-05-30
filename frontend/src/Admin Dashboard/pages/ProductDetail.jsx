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
    FaTag,
    FaBoxes,
    FaRupeeSign,
    FaStar,
} from "react-icons/fa";

import { useNavigate, useParams } from "react-router";

import { getSingleProductDetails } from "../../service/product";

function ProductDetail() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [product, setProduct] = useState(null);

    const [loading, setLoading] = useState(true);

    const fetchProductDetails = async () => {
        try {

            setLoading(true);

            const response =
                await getSingleProductDetails(id);

            if (response?.data?.success) {

                setProduct(
                    response.data.productDetails
                );

            }

        } catch (error) {

            console.log(error);

            message.error(
                "Failed To Fetch Product Details"
            );

        } finally {

            setLoading(false);

        }
    };

    useEffect(() => {
        fetchProductDetails();
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

    if (!product) {
        return (
            <Layout>
                <div className="text-center py-20 text-white">
                    Product Not Found
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
                                navigate("/admin/all-products")
                            }
                            className="mb-4"
                        >
                            Back
                        </Button>

                        <h1 className="text-4xl font-black text-white">
                            Product Detail
                        </h1>

                        <p className="text-zinc-400 mt-2">
                            View complete product information
                        </p>

                    </div>

                    <Button
                        type="primary"
                        icon={<FaEdit />}
                        onClick={() =>
                            navigate(
                                `/admin/edit-product/${product._id}`
                            )
                        }
                    >
                        Edit Product
                    </Button>

                </div>

                {/* Product Card */}

                <Card className="!bg-[#140824] !border-[#3F2463]">

                    {/* Image */}

                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-[350px] object-cover rounded-2xl mb-6"
                    />

                    {/* Name */}

                    <h2 className="text-4xl font-black text-white mb-4">
                        {product.name}
                    </h2>

                    {/* Category + Status */}

                    <div className="flex flex-wrap gap-4 mb-6">

                        <Tag color="gold">
                            {product.category}
                        </Tag>

                        <Tag color="blue">
                            {product.brand}
                        </Tag>

                        <Tag
                            color={
                                product.status === "in-stock"
                                    ? "green"
                                    : "red"
                            }
                        >
                            {product.status}
                        </Tag>

                    </div>

                    {/* Stats */}

                    <div className="grid md:grid-cols-3 gap-4 mb-8">

                        <div className="flex items-center gap-2 text-zinc-300">
                            <FaRupeeSign />
                            <span>
                                ₹{product.price}
                            </span>
                        </div>

                        <div className="flex items-center gap-2 text-zinc-300">
                            <FaBoxes />
                            <span>
                                {product.stock} In Stock
                            </span>
                        </div>

                        <div className="flex items-center gap-2 text-zinc-300">
                            <FaStar />
                            <span>
                                {product.rating || 0}
                            </span>
                        </div>

                    </div>

                    {/* Tags */}

                    <div className="mb-8">

                        <h3 className="text-xl font-bold text-white mb-3">
                            Tags
                        </h3>

                        <div className="flex flex-wrap gap-2">

                            {product.tags?.map(
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
                            {product.shortDescription}
                        </p>

                    </div>

                    {/* Long Description */}

                    <div>

                        <h3 className="text-xl font-bold text-white mb-3">
                            Long Description
                        </h3>

                        <p className="text-zinc-300 leading-8 whitespace-pre-line">
                            {product.longDescription}
                        </p>

                    </div>

                </Card>

            </div>

        </Layout>
    );
}

export default ProductDetail;