import axios from "axios";
import { base_url, config } from "../../utils/axiosconfig";


const registerUser = async(userData) => {
    const response = await axios.post(`${base_url}user/register`, userData);
    if(response.data){
       
          return response.data;
    }
};

const emailVerify = async(email) => {
    console.log(email);
    const response = await axios.post(`${base_url}user/verification`, email);
    if(response.data){
        return response.data;
       
  }
}

const loginUser = async(userData) => {
    const response = await axios.post(`${base_url}user/login`, userData);
    if(response.data){
        if (response.data) {
            localStorage.setItem("customer", JSON.stringify(response.data));
          }
        return response.data;
    }
};





const getUserWishlist = async () => {
    const response = await axios.get(`${base_url}user/wishlist`, config);
    if(response.data){
        return response.data;
       
  }
};


const addToCart = async (cartData) => {
    const response = await axios.post(`${base_url}user/cart`, cartData, config);
    if(response.data){
        return response.data;
       
  }
}

const getCart = async () => {
    const response = await axios.get(`${base_url}user/cart`, config);
    if(response.data){
        return response.data;
       
  }
}


const removeProductFromCart = async (cartItemId) => {
    const response = await axios.delete(`${base_url}user/delete-product-cart/${cartItemId}`, config);
    if(response.data){
        return response.data;
       
  }
}
const updateProductFromCart = async (cartDetail) => {
    const response = await axios.put(`${base_url}user/update-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`, config);
    if(response.data){
        return response.data;
       
  }
}


const order = async(data) => {
    const response = await axios.post(`${base_url}user/order`, data, config);
    if(response.data){
        console.log(response.data);
        window.location.replace(response.data.url)
          return response.data;
          
    }
};






export const authService = {
    registerUser,
    loginUser,
    getUserWishlist,
    addToCart,
    getCart,
    removeProductFromCart,
    updateProductFromCart,
    emailVerify,
    order
}