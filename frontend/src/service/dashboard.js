import { getAllBlog } from "./blog";
import { getAllProduct } from "./product";

export const getDashboardData = async () => {
    const [blogResponse, productResponse] =
        await Promise.all([
            getAllBlog(),
            getAllProduct(),
        ]);

    return {
        blogs:
            blogResponse?.data?.allBlogs || [],
        products:
            productResponse?.data?.allProducts ||
            [],
    };
};