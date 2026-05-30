import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getAllBlog, deleteSingleBlogDetails } from "../../service/blog";
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

function AllBlog() {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBlogs = async () => {
    try {

      setLoading(true);

      const response = await getAllBlog();

      if (response?.data?.success) {
        setBlogs(response.data.allBlogs);
      }

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {

      const response =
        await deleteSingleBlogDetails(id);

      if (response?.data?.success) {

        message.success(
          response.data.message
        );

        fetchBlogs();
      }

    } catch (error) {

      console.log(error);

      message.error(
        error?.response?.data?.message ||
        "Delete Failed"
      );
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title
      .toLowerCase()
      .includes(searchText.toLowerCase())
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
          alt="blog"
          className="w-20 h-14 rounded-xl object-cover border border-yellow-500/20"
        />
      ),
    },

    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (title) => (
        <span className="font-medium text-white">
          {title}
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
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag
          color={
            status === "published"
              ? "green"
              : "orange"
          }
        >
          {status}
        </Tag>
      ),
    },

    {
      title: "Actions",
      key: "actions",
      width: 180,
      render: (_, record) => (
        <Space>

          <Button
            shape="circle"
            type="primary"
            icon={<FaEye />}
            onClick={() =>
              navigate(
                `/admin/blog-detail/${record._id}`
              )
            }
          />

          <Button
            shape="circle"
            icon={<FaEdit />}
            onClick={() =>
              navigate(
                `/admin/edit-blog/${record._id}`
              )
            }
          />

          <Popconfirm
            title="Delete Blog"
            description="Are you sure you want to delete this blog?"
            okText="Yes"
            cancelText="No"
            onConfirm={() =>
              handleDelete(record._id)
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
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          <div>
            <h1 className="text-5xl font-black text-white">
              All Blogs
            </h1>

            <p className="text-zinc-400 mt-3 text-lg">
              Manage all blog posts from one place.
            </p>
          </div>

          <Button
            size="large"
            onClick={() =>
              navigate("/admin/add-blog")
            }
            className="!bg-yellow-400 !text-black !border-none !font-semibold hover:!bg-yellow-300"
          >
            + Add Blog
          </Button>

        </div>

        {/* Search */}
        <div className="max-w-md">
          <Input
            size="large"
            prefix={
              <FaSearch className="text-zinc-400" />
            }
            placeholder="Search blogs..."
            value={searchText}
            onChange={(e) =>
              setSearchText(e.target.value)
            }
          />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex justify-between items-center">

              <div>
                <p className="text-zinc-400">
                  Total Blogs
                </p>

                <h2 className="text-4xl font-black text-white mt-2">
                  {blogs.length}
                </h2>
              </div>

              <span className="text-5xl">
                📝
              </span>

            </div>

            <h2 className="text-4xl font-black text-white mt-2">
              {blogs.length}
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex justify-between items-center">

              <div>
                <p className="text-zinc-400">
                  Published Blogs
                </p>

                <h2 className="text-4xl font-black text-white mt-2">
                  {blogs.length}
                </h2>
              </div>

              <span className="text-5xl">
                ✅
              </span>

            </div>

            <h2 className="text-4xl font-black text-green-400 mt-2">
              {
                blogs.filter(
                  (blog) =>
                    blog.status === "published"
                ).length
              }
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex justify-between items-center">

              <div>
                <p className="text-zinc-400">
                  Draft Blogs
                </p>

                <h2 className="text-4xl font-black text-white mt-2">
                  {blogs.length}
                </h2>
              </div>

              <span className="text-5xl">
                📄
              </span>

            </div>

            <h2 className="text-4xl font-black text-yellow-400 mt-2">
              {
                blogs.filter(
                  (blog) =>
                    blog.status === "draft"
                ).length
              }
            </h2>
          </div>

        </div>

        {/* Table */}
        <div className="rounded-3xl overflow-hidden border border-[#2A1845] bg-[#140824]">

          <Table
            columns={columns}
            dataSource={filteredBlogs}
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

export default AllBlog;