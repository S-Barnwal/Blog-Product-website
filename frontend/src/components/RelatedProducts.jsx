import React, { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import SectionHeading from "./SectionHeading";

import { getAllProduct } from "../service/product";

function RelatedProducts({ currentProductId }) {

    const [relatedProducts, setRelatedProducts] =
        useState([]);

    const fetchRelatedProducts =
        async () => {
            try {

                const response =
                    await getAllProduct();

                if (
                    response?.data?.success
                ) {

                    const products =
                        response.data
                            .allProducts;

                    const filteredProducts =
                        products
                            .filter(
                                (
                                    product
                                ) =>
                                    product._id !==
                                    currentProductId
                            )
                            .slice(
                                0,
                                3
                            );

                    setRelatedProducts(
                        filteredProducts
                    );
                }

            } catch (error) {

                console.log(error);

            }
        };

    useEffect(() => {
        fetchRelatedProducts();
    }, [currentProductId]);

    if (
        relatedProducts.length === 0
    ) {
        return null;
    }

    return (
        <section className="max-w-7xl mx-auto px-6 py-20">

            <SectionHeading
                badge="You May Also Like"
                title="Related"
                highlight="Products"
                description="Discover more premium products curated for you."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {relatedProducts.map(
                    (product) => (

                        <ProductCard
                            key={product._id}
                            product={product}
                        />

                    )
                )}

            </div>

        </section>
    );
}

export default RelatedProducts;