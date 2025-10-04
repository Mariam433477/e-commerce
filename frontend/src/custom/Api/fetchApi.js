import axios from "axios";

const Base_URL = "https://dummyjson.com/products";
export const getAllProducts = () => axios.get(Base_URL);
export const getProductById = (id) => axios.get(`${Base_URL}/${id}`);
 
