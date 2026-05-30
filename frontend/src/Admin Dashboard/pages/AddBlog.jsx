import React, { useState } from "react";
import Layout from "../components/Layout";
import {
  Form,
  Input,
  Select,
  Button,
  Card,
  DatePicker,
  message,
} from "antd";
import {
  SaveOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

import { addBlog } from "../../service/blog";

const { TextArea } = Input;

function AddBlog() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  const handleSubmit = async (values) => {
    try {
      setLoading(true);

      const blogData = {
        title: values.title,
        shortDescription: values.shortDescription,
        longDescription: values.longDescription,
        image: values.image,
        date: values.date
          ? values.date.format("YYYY-MM-DD")
          : null,
        author: values.author,
        category: values.category,
        tags: values.tags
          ? values.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean)
          : [],
        status: values.status,
      };

      const response = await addBlog(blogData);

      if (response?.data?.success) {
        message.success(
          response.data.message ||
          "Blog Added Successfully"
        );

        form.resetFields();
      } else {
        message.error("Failed To Add Blog");
      }
    } catch (error) {

      console.log("ERROR => ", error);

      console.log(
        "RESPONSE => ",
        error?.response
      );

      console.log(
        "DATA => ",
        error?.response?.data
      );

      message.error(
        error?.response?.data?.message ||
        "Something Went Wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="space-y-6">

        {/* Header */}

        <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-[#0F172A] via-[#1E1B4B] to-[#0F172A] p-8">

          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full" />

          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/10 blur-3xl rounded-full" />

          <div className="relative z-10">

            <p className="text-yellow-400 font-medium mb-3">
              Content Management
            </p>

            <h1 className="text-5xl font-black text-white">
              ✨ Create New Blog
            </h1>

            <p className="text-slate-300 mt-3 text-lg max-w-2xl">
              Write, organize and publish engaging content
              that keeps your audience coming back.
            </p>

          </div>

        </div>

        {/* Form Card */}

        <div className="grid xl:grid-cols-3 gap-6">


          <Card
            className="
    !bg-[#140824]
    !border-[#3F2463]
    xl:sticky
    top-28
    h-fit
  "
          >

            <div className="mb-5">

              <h3 className="text-white text-xl font-bold">
                🖼 Blog Preview
              </h3>

              <p className="text-zinc-400 text-sm mt-1">
                Paste an image URL to see live preview
              </p>

            </div>

            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="
        w-full
        h-72
        object-cover
        rounded-2xl
      "
              />
            ) : (
              <div
                className="
        h-72
        rounded-2xl
        border-2
        border-dashed
        border-white/10
        flex
        items-center
        justify-center
        text-zinc-500
      "
              >
                Image Preview
              </div>
            )}

          </Card>

          <div className="xl:col-span-2">

            <Card className="!bg-[#140824] !border-[#3F2463]">

              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
              >

                {/* Image URL */}

                <Form.Item
                  label="Blog Image URL"
                  name="image"
                  rules={[
                    {
                      required: true,
                      message:
                        "Please enter image URL",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="https://example.com/image.jpg"
                    onChange={(e) =>
                      setImagePreview(e.target.value)
                    }
                  />
                </Form.Item>

                {/* Title */}

                <Form.Item
                  label="Blog Title"
                  name="title"
                  rules={[
                    {
                      required: true,
                      message:
                        "Please enter blog title",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Enter blog title"
                  />
                </Form.Item>

                {/* Author + Date */}

                <div className="grid md:grid-cols-2 gap-4">

                  <Form.Item
                    label="Author"
                    name="author"
                    rules={[
                      {
                        required: true,
                        message:
                          "Please enter author name",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter author name"
                    />
                  </Form.Item>

                  <Form.Item
                    label="Date"
                    name="date"
                    rules={[
                      {
                        required: true,
                        message:
                          "Please select date",
                      },
                    ]}
                  >
                    <DatePicker
                      size="large"
                      className="w-full"
                    />
                  </Form.Item>

                </div>

                {/* Category + Status */}

                <div className="grid md:grid-cols-2 gap-4">

                  <Form.Item
                    label="Category"
                    name="category"
                    rules={[
                      {
                        required: true,
                        message:
                          "Please select category",
                      },
                    ]}
                  >
                    <Select
                      size="large"
                      placeholder="Select category"
                      options={[
                        {
                          label: "Technology",
                          value: "Technology",
                        },
                        {
                          label: "Development",
                          value: "Development",
                        },
                        {
                          label: "Business",
                          value: "Business",
                        },
                        {
                          label: "Lifestyle",
                          value: "Lifestyle",
                        },
                        {
                          label: "Fashion",
                          value: "Fashion"
                        }
                      ]}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Status"
                    name="status"
                    rules={[
                      {
                        required: true,
                        message:
                          "Please select status",
                      },
                    ]}
                  >
                    <Select
                      size="large"
                      placeholder="Select status"
                      options={[
                        {
                          label: "Published",
                          value: "published",
                        },
                        {
                          label: "Draft",
                          value: "draft",
                        },
                      ]}
                    />
                  </Form.Item>

                </div>

                {/* Tags */}

                <Form.Item
                  label="Tags"
                  name="tags"
                >
                  <Input
                    size="large"
                    placeholder="react,nodejs,mongodb,express"
                  />
                </Form.Item>

                {/* Short Description */}

                <Form.Item
                  label="Short Description"
                  name="shortDescription"
                  rules={[
                    {
                      required: true,
                      message:
                        "Please enter short description",
                    },
                  ]}
                >
                  <TextArea
                    rows={4}
                    placeholder="Enter short description"
                  />
                </Form.Item>

                {/* Long Description */}

                <Form.Item
                  label="Long Description"
                  name="longDescription"
                  rules={[
                    {
                      required: true,
                      message:
                        "Please enter long description",
                    },
                  ]}
                >
                  <TextArea
                    rows={10}
                    placeholder="Enter full blog content"
                  />
                </Form.Item>

                {/* Buttons */}

                <div className="flex flex-wrap gap-4 pt-4">

                  <Button
                    htmlType="submit"
                    loading={loading}
                    className="
    !h-14
    !px-10
    !rounded-2xl
    !border-0
    !font-bold
    !text-black
    bg-gradient-to-r
    from-yellow-400
    to-orange-500
    hover:scale-105
    transition-all
  "
                  >
                    🚀 Publish Blog
                  </Button>

                  <Button
                    size="large"
                    icon={<ReloadOutlined />}
                    onClick={() =>
                      form.resetFields()
                    }
                  >
                    Reset
                  </Button>

                </div>

              </Form>

            </Card>

          </div>

        </div>

      </div>

    </Layout>
  );
}

export default AddBlog;