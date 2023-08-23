import axios from "axios";
import { base_url, config } from "../../utils/axiosconfig";


const getCourses = async(data) => {
    const response = await axios.get(`${base_url}course`);
    if(response.data){
        return response.data;
    }
};


const getSingleCourse = async(id) => {
    const response = await axios.get(`${base_url}course/${id}`);
    if(response.data){
        return response.data;
    }
};


const addToWishlist = async(productId) => {
    const response = await axios.put(`${base_url}product/wishlist`, {productId}, config);
    if(response.data){
        return response.data;
    }
};


const rateCourse = async(data) => {
    console.log(data);
    const response = await axios.put(`${base_url}course/rating`, data, config);
    if(response.data){
        return response.data;
    }
};


export const courseService = { 
    getCourses,
    addToWishlist,
    getSingleCourse,
    rateCourse,
}