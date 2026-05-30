import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

import {
  getAllProduct,
  deleteSingleProductDetails,
} from "../../service/product";

import {
  Table,
  Input,
  Space,
  Button,
  Tag,
  Popconfirm,
  message,
} from "antd";

import {
  FaEye,
  FaEdit,
  FaTrash,
  FaSearch,
} from "react-icons/fa";

import { useNavigate } from "react-router";

function AllProduct() {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await getAllProduct();

      if (response?.data?.success) {
        setProducts(response.data.allProducts);
      }
    } catch (error) {
      console.log(error);

      message.error(
        error?.response?.data?.message ||
        "Failed To Fetch Products"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response =
        await deleteSingleProductDetails(id);

      if (response?.data?.success) {
        message.success(
          response.data.message
        );

        fetchProducts();
      }
    } catch (error) {
      console.log(error);

      message.error(
        error?.response?.data?.message ||
        "Delete Failed"
      );
    }
  };

  const filteredProducts =
    products.filter((product) =>
      product.name
        ?.toLowerCase()
        .includes(
          searchText.toLowerCase()
        )
    );

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      width: 140,
      render: (image) => (
        <img
          src={image}
          alt="product"
          className="w-20 h-14 rounded-xl object-cover border border-yellow-500/20"
        />
      ),
    },

    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => (
        <span className="font-medium text-white">
          {name}
        </span>
      ),
    },

    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => (
        <span className="text-green-400 font-semibold">
          ₹{price}
        </span>
      ),
    },

    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category) => (
        <Tag color="gold">
          {category}
        </Tag>
      ),
    },

    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      render: (stock) => (
        <Tag
          color={
            stock > 0
              ? "green"
              : "red"
          }
        >
          {stock}
        </Tag>
      ),
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag
          color={
            status === "in-stock"
              ? "green"
              : "red"
          }
        >
          {status}
        </Tag>
      ),
    },

    {
      title: "Actions",
      key: "actions",
      width: 200,

      render: (_, record) => (
        <Space>

          <Button
            shape="circle"
            type="primary"
            icon={<FaEye />}
            onClick={() =>
              navigate(
                `/admin/product-detail/${record._id}`
              )
            }
          />

          <Button
            shape="circle"
            icon={<FaEdit />}
            onClick={() =>
              navigate(
                `/admin/edit-product/${record._id}`
              )
            }
          />

          <Popconfirm
            title="Delete Product"
            description="Are you sure you want to delete this product?"
            okText="Yes"
            cancelText="No"
            onConfirm={() =>
              handleDelete(
                record._id
              )
            }
          >
            <Button
              shape="circle"
              danger
              icon={<FaTrash />}
            />
          </Popconfirm>

        </Space>
      ),
    },
  ];

  return (
    <Layout>
      <div className="space-y-8">

        {/* Header */}

        <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-[#0F172A] via-[#1E1B4B] to-[#0F172A] p-8">

          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full" />

          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/10 blur-3xl rounded-full" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            <div>

              <p className="text-yellow-400 font-medium mb-3">
                Product Management
              </p>

              <h1 className="text-5xl font-black text-white">
                🛍 All Products
              </h1>

              <p className="text-slate-300 mt-3 text-lg max-w-2xl">
                Manage inventory, stock and product listings from one place.
              </p>

            </div>

            <Button
              size="large"
              onClick={() =>
                navigate("/admin/add-product")
              }
              className="
        !h-14
        !px-8
        !rounded-2xl
        !border-0
        !font-bold
        !text-black
      "
              style={{
                background:
                  "linear-gradient(90deg,#facc15,#f97316)"
              }}
            >
              + Create Product
            </Button>

          </div>

        </div>

        {/* Search */}

        <div className="max-w-xl">

          <Input
            size="large"
            prefix={
              <FaSearch className="text-zinc-400" />
            }
            placeholder="Search products..."
            value={searchText}
            onChange={(e) =>
              setSearchText(
                e.target.value
              )
            }
          />

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">

            <div className="flex justify-between items-center">

              <div>
                <p className="text-zinc-400">
                  Total Products
                </p>

                <h2 className="text-4xl font-black text-white mt-2">
                  {products.length}
                </h2>
              </div>

              <span className="text-5xl">
                🛍
              </span>

            </div>

          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">

            <div className="flex justify-between items-center">

              <div>
                <p className="text-zinc-400">
                  In Stock
                </p>

                <h2 className="text-4xl font-black text-green-400 mt-2">
                  {
                    products.filter(
                      (p) => p.stock > 0
                    ).length
                  }
                </h2>
              </div>

              <span className="text-5xl">
                📦
              </span>

            </div>

          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">

            <div className="flex justify-between items-center">

              <div>
                <p className="text-zinc-400">
                  Out Of Stock
                </p>

                <h2 className="text-4xl font-black text-red-400 mt-2">
                  {
                    products.filter(
                      (p) => p.stock <= 0
                    ).length
                  }
                </h2>
              </div>

              <span className="text-5xl">
                ⚠️
              </span>

            </div>

          </div>

        </div>

        {/* Table */}

        <div
          className="
    rounded-3xl
    overflow-hidden
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
  "
        >

          <Table
            columns={columns}
            dataSource={
              filteredProducts
            }
            rowKey="_id"
            loading={loading}
            pagination={{
              pageSize: 5,
            }}
          />

        </div>

      </div>
    </Layout>
  );
}

export default AllProduct;