import axios from "axios";

const API_URL = "http://localhost:3005/users";

export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || "Failed to fetch users");
  }
};

export const addUser = async (newUser) => {
  try {
    const response = await axios.post(API_URL, newUser);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || "Failed to register user");
  }
};
