import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router";

import {
    Card,
    Statistic,
    Row,
    Col,
    Spin,
} from "antd";

import {
    FileTextOutlined,
    ShoppingCartOutlined,
    CheckCircleOutlined,
    ClockCircleOutlined,
    InboxOutlined,
    WarningOutlined,
} from "@ant-design/icons";

import {
    Pie, Area,

} from "@ant-design/charts";

import { getDashboardData } from "../../service/dashboard";

function Dashboard() {
    const [loading, setLoading] =
        useState(true);

    const [blogs, setBlogs] = useState(
        []
    );

    const blogGrowthData = blogs.map((blog, index) => ({
        month: `Blog ${index + 1}`,
        count: index + 1,
    }));

    const navigate = useNavigate();
    const [products, setProducts] =
        useState([]);

    const fetchDashboard =
        async () => {
            try {
                setLoading(true);

                const data =
                    await getDashboardData();

                console.log(data);

                setBlogs(data.blogs);

                setProducts(
                    data.products
                );
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

    useEffect(() => {
        fetchDashboard();
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

    // BLOG DATA

    const totalBlogs =
        blogs.length;

    const publishedBlogs =
        blogs.filter(
            (blog) =>
                blog.status ===
                "published"
        ).length;

    const draftBlogs =
        blogs.filter(
            (blog) =>
                blog.status ===
                "draft"
        ).length;

    const blogStatusData = [
        {
            type: "Published",
            value: publishedBlogs,
        },
        {
            type: "Draft",
            value: draftBlogs,
        },
    ];

    // PRODUCT DATA

    const totalProducts =
        products.length;

    const inStockProducts =
        products.filter(
            (product) =>
                product.status ===
                "in-stock"
        ).length;

    const outStockProducts =
        products.filter(
            (product) =>
                product.status ===
                "out-of-stock"
        ).length;


    const stats = [
        {
            title: "Total Blogs",
            value: totalBlogs,
            icon: "📝",
        },
        {
            title: "Published",
            value: publishedBlogs,
            icon: "✅",
        },
        {
            title: "Drafts",
            value: draftBlogs,
            icon: "📄",
        },
        {
            title: "Products",
            value: totalProducts,
            icon: "🛍️",
        },
        {
            title: "In Stock",
            value: inStockProducts,
            icon: "📦",
        },
        {
            title: "Out Of Stock",
            value: outStockProducts,
            icon: "⚠️",
        },
    ];

    // BLOG CATEGORY CHART

    const blogCategoryMap = {};

    blogs.forEach((blog) => {
        blogCategoryMap[
            blog.category
        ] =
            (blogCategoryMap[
                blog.category
            ] || 0) + 1;
    });

    const blogCategoryData =
        Object.entries(
            blogCategoryMap
        ).map(
            ([type, value]) => ({
                type,
                value,
            })
        );

    // PRODUCT CATEGORY CHART

    const productCategoryMap = {};

    products.forEach(
        (product) => {
            productCategoryMap[
                product.category
            ] =
                (productCategoryMap[
                    product.category
                ] || 0) + 1;
        }
    );

    const productCategoryData =
        Object.entries(
            productCategoryMap
        ).map(
            ([type, value]) => ({
                type,
                value,
            })
        );


    const hour = new Date().getHours();

    let greeting = "Good Morning";

    if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon";
    } else if (hour >= 17 && hour < 21) {
        greeting = "Good Evening";
    } else if (hour >= 21 || hour < 5) {
        greeting = "Good Night";
    }

    return (
        <Layout>
            <div className="space-y-8">

                {/* HEADER */}

                <div>
                    <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-[#0F172A] via-[#1E1B4B] to-[#0F172A] p-8">

                        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

                        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/10 blur-3xl rounded-full" />

                        <div className="relative z-10">

                            <div className="space-y-2">
                                <p className="text-yellow-400 font-medium">
                                    {greeting}, Sneha 👋
                                </p>

                                <h1 className="text-5xl font-black text-white">
                                    Dashboard Overview
                                </h1>

                                <p className="text-slate-300 text-lg">
                                    Monitor blogs, products and platform activity
                                </p>
                            </div>



                        </div>

                    </div>

                    <div className="mt-6 flex flex-wrap gap-4">

                        <button
                            onClick={() => navigate("/admin/add-blog")}
                            className="
        px-6 py-3
        rounded-2xl
        bg-gradient-to-r
        from-yellow-400
        to-orange-500
        text-black
        font-semibold
        hover:scale-105
        transition
    "
                        >
                            + Add Blog
                        </button>

                        <button
                            onClick={() => navigate("/admin/add-product")}
                            className="
        px-6 py-3
        rounded-2xl
        border
        border-white/10
        bg-white/5
        text-white
        hover:bg-white/10
        transition
    "
                        >
                            + Add Product
                        </button>

                    </div>
                </div>

                {/* STATS */}

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                    {stats.map((item) => (
                        <div
                            key={item.title}
                            className="
                rounded-3xl
                p-6
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                hover:border-yellow-400/30
                hover:-translate-y-1
                transition-all
                duration-300
            "
                        >
                            <div className="flex justify-between items-center">

                                <p className="text-zinc-400">
                                    {item.title}
                                </p>

                                <span className="text-3xl">
                                    {item.icon}
                                </span>

                            </div>

                            <h2 className="text-5xl font-black text-white mt-4">
                                {item.value}
                            </h2>

                        </div>
                    ))}

                </div>

                {/* CHARTS */}

                <Row gutter={[24, 24]}>

                    <Col xs={24} xl={14}>

                        <Card
                            title={
                                <span className="text-white font-bold">
                                    📈 Blog Growth Analytics
                                </span>
                            }
                            className="!bg-[#111827] !border-slate-700"
                        >

                            <Area
                                data={blogGrowthData}
                                xField="month"
                                yField="count"
                                smooth
                            />

                        </Card>

                    </Col>

                    <Col xs={24} xl={10}>

                        <Card
                            title={
                                <span className="text-white font-bold">
                                    📊 Blog Status
                                </span>
                            }
                            className="!bg-[#111827] !border-slate-700"
                        >

                            <Pie
                                data={blogStatusData}
                                angleField="value"
                                colorField="type"
                                innerRadius={0.6}
                            />

                        </Card>

                    </Col>

                </Row>



                <Row gutter={[24, 24]}>

                    <Col span={24}>

                        <Card
                            title={
                                <span className="text-white font-bold">
                                    🛍 Product Categories
                                </span>
                            }
                            className="!bg-[#111827] !border-slate-700"
                        >

                            <Pie
                                data={productCategoryData}
                                angleField="value"
                                colorField="type"
                                radius={0.8}
                                innerRadius={0.6}
                            />

                        </Card>

                    </Col>

                </Row>

                <Row gutter={[24, 24]}>




                    <Col xs={24} xl={12}>

                        <Card
                            title="⚡ Quick Actions"
                            className="!bg-[#111827] !border-slate-700"
                        >
                            <div className="grid grid-cols-2 gap-4">

                                <button
                                    onClick={() => navigate("/admin/add-blog")}
                                    className="
        p-4
        rounded-2xl
        bg-yellow-500
        text-black
        font-bold
        hover:scale-105
        transition
    "
                                >
                                    Add Blog
                                </button>

                                <button
                                    onClick={() => navigate("/admin/add-product")}
                                    className="
        p-4
        rounded-2xl
        bg-purple-500
        text-white
        font-bold
        hover:scale-105
        transition
    "
                                >
                                    Add Product
                                </button>

                                <button
                                    onClick={() => navigate("/admin/all-blogs")}
                                    className="
        p-4
        rounded-2xl
        bg-white/5
        text-white
        hover:bg-white/10
        transition
    "
                                >
                                    All Blogs
                                </button>

                                <button
                                    onClick={() => navigate("/admin/all-products")}
                                    className="
        p-4
        rounded-2xl
        bg-white/5
        text-white
        hover:bg-white/10
        transition
    "
                                >
                                    All Products
                                </button>

                            </div>
                        </Card>

                    </Col>

                    <Col xs={24} xl={12}>

                        <Card
                            title="📈 Recent Activity"
                            className="!bg-[#111827] !border-slate-700"
                        >

                            <div className="space-y-4">

                                <div className="text-white">
                                    📝 Latest Blog:
                                    <p className="text-zinc-400">
                                        {blogs[0]?.title}
                                    </p>
                                </div>

                                <div className="text-white">
                                    🛍 Latest Product:
                                    <p className="text-zinc-400">
                                        {products[0]?.name}
                                    </p>
                                </div>

                                <div className="text-green-400">
                                    Published Blogs: {publishedBlogs}
                                </div>

                                <div className="text-yellow-400">
                                    Draft Blogs: {draftBlogs}
                                </div>

                            </div>

                        </Card>

                    </Col>

                </Row>

                <Row gutter={[24, 24]}>

                    {/* Recent Blogs */}

                    <Col xs={24} xl={12}>

                        <Card
                            title="Recent Blogs"
                            className="!bg-[#111827] !border-slate-700"
                        >

                            <div className="space-y-4">

                                {blogs.slice(0, 5).map((blog) => (

                                    <div
                                        key={blog._id}
                                        className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all"
                                    >

                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-16 h-16 rounded-xl object-cover"
                                        />

                                        <div>

                                            <h4 className="text-white font-semibold">
                                                {blog.title}
                                            </h4>

                                            <div className="flex items-center gap-2 mt-2">

                                                <p className="text-slate-400 text-sm">
                                                    {blog.category}
                                                </p>

                                                <span
                                                    className={`
                px-2 py-1
                rounded-full
                text-xs
                ${blog.status === "published"
                                                            ? "bg-green-500/20 text-green-400"
                                                            : "bg-yellow-500/20 text-yellow-400"
                                                        }
            `}
                                                >
                                                    {blog.status}
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </Card>

                    </Col>

                    {/* Recent Products */}

                    <Col xs={24} xl={12}>

                        <Card
                            title="Recent Products"
                            className="!bg-[#111827] !border-slate-700"
                        >

                            <div className="space-y-4">

                                {products.slice(0, 5).map((product) => (

                                    <div
                                        key={product._id}
                                        className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all"
                                    >

                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-16 h-16 rounded-xl object-cover"
                                        />

                                        <div>

                                            <h4 className="text-white font-semibold">
                                                {product.name}
                                            </h4>

                                            <p className="text-cyan-400 font-semibold">
                                                ₹{product.price}
                                            </p>
                                            <p className="text-zinc-400 text-sm">
                                                {product.category}
                                            </p>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </Card>

                    </Col>

                </Row>

            </div>
        </Layout>
    );
}

export default Dashboard;