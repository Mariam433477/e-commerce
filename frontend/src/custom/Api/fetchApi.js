import axios from "axios";

const Base_URL = "https://dummyjson.com/products";
export const getAllProducts = () => axios.get(Base_URL);
export const getProductById = (id) => axios.get(`${Base_URL}/${id}`);
// export const addProduct = (product) => axios.post(Base_URL, product);

// export const updateProduct = (id, product) =>
//   axios.put(`${Base_URL}/${id}`, product);
// export const deleteProduct = (id) => axios.delete(`${Base_URL}/${id}`);
