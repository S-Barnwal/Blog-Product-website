import axios from 'axios';


export const addBlog = async (data) => {
    let response = await axios.post('http://localhost:3000/addblog', data)
    return response;
}


export const getAllBlog = async () => {
    let response = await axios.get('http://localhost:3000/allblog')
    return response;
}

export const getSingleBlogDetails = async (id) => {
    let response = await axios.get(`http://localhost:3000/getblogbyid/${id}`)
    return response;
}

export const editBlog = async (id, data) => {
    let response = await axios.patch(`http://localhost:3000/editblog/${id}`, data)
    return response;
}
export const getBlogDetail = async (id, data) => {
    let response = await axios.get(`http://localhost:3000/detailblog/${id}`, data)
    return response;
}

export const deleteSingleBlogDetails = async (id) => {
    let response = await axios.delete(`http://localhost:3000/deleteblog/${id}`)
    return response;
}
