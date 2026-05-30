import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema(
    {
        name: {
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

        price: {
            type: Number,
            required: true,
        },

        category: {
            type: String,
            required: true,
            trim: true,
        },

        brand: {
            type: String,
            required: true,
            trim: true,
        },

        stock: {
            type: Number,
            required: true,
            default: 0,
        },

        rating: {
            type: Number,
            default: 0,
        },

        tags: [
            {
                type: String,
                trim: true,
            },
        ],

        status: {
            type: String,
            enum: ["out-of-stock", "in-stock"],
            default: "in-stock",
        },
    },
    {
        timestamps: true,
    }
);

const ProductModel = mongoose.model(
    "Product",
    productSchema
);

export default ProductModel;