import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';

import BlogModel from './models/blog.model.js';
import ProductModel from "./models/product.model.js";


const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// ----- PORT -----
const port = 3000

// ----- CONNECT DB FUNCTION -----
const connectDB = async () => {
    try {

        await mongoose.connect('mongodb+srv://snehabarnwal984_db_user:rrmNQXf3lleFvWzS@blogifycluster.9k1bl9h.mongodb.net/blog-product')

        console.log("MongoDB connected successfully")

    } catch (error) {

        console.log("MongoDB not connected");
    }
}

connectDB()


// ----- HOME ROUTE -----
app.get('/', (req, res) => {
    res.send('Welcome to blog-product')
})

// =========================================================
// BLOG API
// =========================================================

// ----- ADD BLOG -----

// ----- ADD BLOG -----

app.post('/addblog', async (req, res) => {
    try {

        let {
            title,
            shortDescription,
            longDescription,
            image,
            date,
            author,
            category,
            tags,
            status
        } = req.body;

        console.log("BODY => ", req.body);

        let newBlog = await BlogModel.create({
            title,
            shortDescription,
            longDescription,
            image,
            date,
            author,
            category,
            tags,
            status
        });

        if (!newBlog) {
            return res.status(500).json({
                success: false,
                message: "Blog Not Added"
            });
        }

        res.status(200).json({
            success: true,
            message: "Blog Added Successfully",
            newBlog
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Add Blog API Error",
            error: error.message
        });
    }
});




// ----- ALL BLOG -----
app.get('/allblog', async (req, res) => {
    try {

        let allBlogs = await BlogModel.find()

        let blogCount = await BlogModel.find().countDocuments()

        res.status(200).json({
            success: true,
            message: "Blog Fetched Successfully",
            blogCount,
            allBlogs
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            success: false,
            message: "All Blog API Error",
            error
        })
    }
})



// ----- FETCH BLOG VIA ID -----
app.get('/getblogbyid/:id', async (req, res) => {
    try {

        const { id } = req.params

        let blogDetails = await BlogModel.findOne({ _id: id })

        res.status(200).json({
            success: true,
            message: "Blog Fetched Successfully",
            blogDetails
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            success: false,
            message: "Single Blog Fetch API Error",
            error
        })
    }
})



// ----- EDIT BLOG -----
// ----- EDIT BLOG -----

app.patch('/editblog/:id', async (req, res) => {
    try {

        let {
            title,
            shortDescription,
            longDescription,
            image,
            date,
            author,
            category,
            tags,
            status
        } = req.body;

        const { id } = req.params;

        console.log("BODY => ", req.body);

        let updatedBlog = await BlogModel.findOneAndUpdate(
            { _id: id },
            {
                title,
                shortDescription,
                longDescription,
                image,
                date,
                author,
                category,
                tags,
                status
            },
            { new: true }
        );

        if (!updatedBlog) {
            return res.status(404).json({
                success: false,
                message: "Blog Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Blog Updated Successfully",
            updatedBlog
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Update Blog API Error",
            error: error.message
        });
    }
});


// ----- DELETE BLOG -----
app.delete('/deleteblog/:id', async (req, res) => {
    try {

        const { id } = req.params

        let deletedBlog = await BlogModel.findByIdAndDelete(id)

        if (!deletedBlog) {
            return res.status(404).json({
                success: false,
                message: "Blog Not Found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Blog Deleted Successfully",
            deletedBlog
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            success: false,
            message: "Delete Blog API Error",
            error
        })
    }
})



//-------------ADD PRODUCT---------------
app.post('/addproduct', async (req, res) => {
    try {

        const {
            name,
            shortDescription,
            longDescription,
            image,
            price,
            category,
            brand,
            stock,
            tags,
            status
        } = req.body;

        const newProduct =
            await ProductModel.create({
                name,
                shortDescription,
                longDescription,
                image,
                price,
                category,
                brand,
                stock,
                tags,
                status
            });

        res.status(200).json({
            success: true,
            message:
                "Product Added Successfully",
            newProduct
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message:
                "Add Product API Error",
            error: error.message
        });
    }
});


//---------------ALL PRODUCT-----------------
app.get('/allproduct', async (req, res) => {
    try {

        const allProducts =
            await ProductModel.find();

        const productCount =
            await ProductModel.countDocuments();

        res.status(200).json({
            success: true,
            message:
                "Products Fetched Successfully",
            productCount,
            allProducts
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message:
                "All Product API Error",
            error: error.message
        });
    }
});

//Fetch product via id----------------------
app.get('/getproductbyid/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const productDetails =
            await ProductModel.findById(id);

        res.status(200).json({
            success: true,
            message:
                "Product Fetched Successfully",
            productDetails
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message:
                "Single Product Fetch API Error",
            error: error.message
        });
    }
});


//-------------------EDIT PRODUCT----------------
app.patch('/editproduct/:id', async (req, res) => {
    try {

        const {
            name,
            shortDescription,
            longDescription,
            image,
            price,
            category,
            brand,
            stock,
            tags,
            status
        } = req.body;

        const { id } = req.params;

        const updatedProduct =
            await ProductModel.findByIdAndUpdate(
                id,
                {
                    name,
                    shortDescription,
                    longDescription,
                    image,
                    price,
                    category,
                    brand,
                    stock,
                    tags,
                    status
                },
                { new: true }
            );

        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message:
                    "Product Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message:
                "Product Updated Successfully",
            updatedProduct
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message:
                "Edit Product API Error",
            error: error.message
        });
    }
});



//------------------------DELETE PRODUCT-------------
app.delete('/deleteproduct/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const deletedProduct =
            await ProductModel.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                message:
                    "Product Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message:
                "Product Deleted Successfully",
            deletedProduct
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message:
                "Delete Product API Error",
            error: error.message
        });
    }
});



app.listen(port, () => {
    console.log(
        `Server Running On Port ${port}`
    );
});