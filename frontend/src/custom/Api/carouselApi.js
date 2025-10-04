import axios from "axios";

const BASE_URL = "http://localhost:3005/carousel";  

 
export const getCarousel = () => axios.get(BASE_URL);
