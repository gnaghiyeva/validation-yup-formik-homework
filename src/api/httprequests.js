import axios from "axios";
import { BASE_URL } from "./base_url";

export const getAllProducts = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/products`)
    .then(res=>{
        globalData = res.data;
    });

    return globalData;
}

export const postProduct = (newProduct)=>{
    axios.post(`${BASE_URL}/products`,newProduct);
}