import { Route, Routes, Navigate } from "react-router";

import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

/* Admin Pages */
import Dashboard from "./Admin Dashboard/pages/Dashboard";

import AllBlog from "./Admin Dashboard/pages/AllBlog";
import AddBlog from "./Admin Dashboard/pages/AddBlog";
import EditBlog from "./Admin Dashboard/pages/EditBlog";
import BlogDetail from "./Admin Dashboard/pages/BlogDetail";

import AllProduct from "./Admin Dashboard/pages/AllProduct";
import AddProduct from "./Admin Dashboard/pages/AddProduct";
import EditProduct from "./Admin Dashboard/pages/EditProduct";
import ProductDetail from "./Admin Dashboard/pages/ProductDetail";

import Setting from "./Admin Dashboard/pages/Setting";
import Logout from "./Admin Dashboard/pages/Logout";
import Topbar from "./components/Topbar";


function App() {
    return (
        <>
        <Topbar />
        <Routes>

            {/* ================= WEBSITE ROUTES ================= */}

            <Route path="/" element={<HomePage />} />

            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />

            <Route path="/products" element={<ProductPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />

            {/* ================= ADMIN ROUTES ================= */}

            <Route
                path="/admin"
                element={<Navigate to="/admin/dashboard" replace />}
            />

            <Route
                path="/admin/dashboard"
                element={<Dashboard />}
            />

            {/* Blog Management */}

            <Route
                path="/admin/all-blogs"
                element={<AllBlog />}
            />

            <Route
                path="/admin/add-blog"
                element={<AddBlog />}
            />

            <Route
                path="/admin/edit-blog/:id"
                element={<EditBlog />}
            />

            <Route
                path="/admin/blog-detail/:id"
                element={<BlogDetail />}
            />

            {/* Product Management */}

            <Route
                path="/admin/all-products"
                element={<AllProduct />}
            />

            <Route
                path="/admin/add-product"
                element={<AddProduct />}
            />

            <Route
                path="/admin/edit-product/:id"
                element={<EditProduct />}
            />

            <Route
                path="/admin/product-detail/:id"
                element={<ProductDetail />}
            />

            {/* Settings */}

            <Route
                path="/admin/settings"
                element={<Setting />}
            />

            <Route
                path="/admin/logout"
                element={<Logout />}
            />

            {/* ================= 404 ================= */}

            <Route
                path="*"
                element={<NotFoundPage />}
            />

        </Routes>
   </> );
} 

export default App;