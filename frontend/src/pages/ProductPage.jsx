import React, { useEffect, useState } from "react";


import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import SectionHeading from "../components/SectionHeading";

import { getAllProduct } from "../service/product";

function ProductPage() {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {

            const response =
                await getAllProduct();

            if (
                response?.data?.success
            ) {
                setProducts(
                    response.data.allProducts
                );
            }

        } catch (error) {

            console.log(error);

        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="min-h-screen bg-[#0F0A1F]">

         

            <section className="max-w-7xl mx-auto px-6 py-20">

                <SectionHeading
                    badge="Premium Collection"
                    title="Explore All"
                    highlight="Products"
                    description="Discover premium products carefully curated for modern users."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {products.map((product) => (

                        <ProductCard
                            key={product._id}
                            product={product}
                        />

                    ))}

                </div>

            </section>

            <Footer />

        </div>
    );
}

export default ProductPage;