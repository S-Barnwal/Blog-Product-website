// models/blog.model.js

import mongoose from "mongoose";

const { Schema } = mongoose;

const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        shortDescription: {
            type: String,
            required: true,
            trim: true,
        },

        longDescription: {
            type: String,
            required: true,
            trim: true,
        },

        image: {
            type: String,
            required: true,
            trim: true,
        },

        date: {
            type: Date,
            required: true,
        },

        author: {
            type: String,
            required: true,
            trim: true,
        },

        category: {
            type: String,
            required: true,
            trim: true,
        },

        tags: [
            {
                type: String,
                trim: true,
            },
        ],

        likes: {
            type: Number,
            default: 0,
        },

        status: {
            type: String,
            enum: ["draft", "published"],
            default: "draft",
        },
    },
    {
        timestamps: true,
    }
);

const BlogModel = mongoose.model("Blog", blogSchema);

export default BlogModel;