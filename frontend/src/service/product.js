import axios from "axios";

// ADD PRODUCT

export const addProduct = async (data) => {
    const response = await axios.post(
        "http://localhost:3000/addproduct",
        data
    );

    return response;
};

// ALL PRODUCTS

export const getAllProduct = async () => {
    const response = await axios.get(
        "http://localhost:3000/allproduct"
    );

    return response;
};

// SINGLE PRODUCT

export const getSingleProductDetails = async (
    id
) => {
    const response = await axios.get(
        `http://localhost:3000/getproductbyid/${id}`
    );

    return response;
};

// EDIT PRODUCT

export const editProduct = async (
    id,
    data
) => {
    const response = await axios.patch(
        `http://localhost:3000/editproduct/${id}`,
        data
    );

    return response;
};

// DELETE PRODUCT

export const deleteSingleProductDetails =
    async (id) => {
        const response = await axios.delete(
            `http://localhost:3000/deleteproduct/${id}`
        );

        return response;
    };