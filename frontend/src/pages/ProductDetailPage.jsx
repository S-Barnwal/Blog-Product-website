import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import RelatedProducts from "../components/RelatedProducts";

import { getSingleProductDetails } from "../service/product";

function ProductDetailPage() {

    const { id } = useParams();

    const [product, setProduct] =
        useState(null);

    const fetchProduct = async () => {
        try {

            const response =
                await getSingleProductDetails(
                    id
                );

            if (
                response?.data?.success
            ) {
                setProduct(
                    response.data.productDetails
                );
            }

        } catch (error) {

            console.log(error);

        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    if (!product) {
        return (
            <div className="min-h-screen bg-[#0F0A1F] flex justify-center items-center text-white text-xl">
                Loading...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0F0A1F] text-white">

            <Topbar />

            <section className="max-w-7xl mx-auto px-6 py-20">

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Product Image */}

                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover"
                        />

                    </div>

                    {/* Product Details */}

                    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

                        <span className="inline-block rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs uppercase tracking-widest text-yellow-400">

                            {product.category}

                        </span>

                        <h1 className="mt-5 text-4xl md:text-5xl font-black">

                            {product.name}

                        </h1>

                        <h2 className="mt-6 text-5xl font-black text-yellow-400">

                            ₹{product.price}

                        </h2>

                        <p className="mt-6 text-zinc-300 leading-8">

                            {product.longDescription}

                        </p>

                        <div className="mt-8 space-y-4">

                            <div className="flex items-center gap-3">
                                <span className="text-yellow-400">✓</span>
                                <p>Premium Quality Product</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-yellow-400">✓</span>
                                <p>Fast Delivery Available</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-yellow-400">✓</span>
                                <p>Secure Payment Support</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-yellow-400">✓</span>
                                <p>Easy Return Policy</p>
                            </div>

                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4">

                            <button
                                className="flex-1 rounded-xl bg-yellow-400 py-4 font-bold text-black transition-all duration-300 hover:scale-[1.02]"
                            >
                                Add To Cart
                            </button>

                            <button
                                className="flex-1 rounded-xl border border-yellow-400 py-4 font-bold text-yellow-400 transition-all duration-300 hover:bg-yellow-400 hover:text-black"
                            >
                                Buy Now
                            </button>

                        </div>

                    </div>

                </div>

            </section>

            <RelatedProducts
                currentProductId={
                    product._id
                }
            />

            <Footer />

        </div>
    );
}

export default ProductDetailPage;