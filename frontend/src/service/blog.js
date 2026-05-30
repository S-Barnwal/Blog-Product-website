import axios from 'axios';


export const addBlog = async (data) => {
    let response = await axios.post('https://blogify-26hj.onrender.com/addblog', data)
    return response;
}


export const getAllBlog = async () => {
    let response = await axios.get('https://blogify-26hj.onrender.com/allblog')
    return response;
}

export const getSingleBlogDetails = async (id) => {
    let response = await axios.get(`https://blogify-26hj.onrender.com/getblogbyid/${id}`)
    return response;
}

export const editBlog = async (id, data) => {
    let response = await axios.patch(`https://blogify-26hj.onrender.com/editblog/${id}`, data)
    return response;
}
export const getBlogDetail = async (id, data) => {
    let response = await axios.get(`https://blogify-26hj.onrender.com/detailblog/${id}`, data)
    return response;
}

export const deleteSingleBlogDetails = async (id) => {
    let response = await axios.delete(`https://blogify-26hj.onrender.com/deleteblog/${id}`)
    return response;
}
