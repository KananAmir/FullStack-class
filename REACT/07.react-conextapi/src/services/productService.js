import axios from 'axios';
import { BASE_URL } from '../constants';

const getAllProducts = async () => {
    try {
        const response = await axios(`${BASE_URL}products`);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}

const getProductById = async (id) => {
    try {
        const response = await axios(`${BASE_URL}products/${id}`);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}


const deleteProductById = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}products/${id}`);
        return response;
    }
    catch (error) {
        console.log(error.message);
    }
}

const createProduct = async (payload) => {
    try {
        const response = await axios.post(`${BASE_URL}products`, payload);
        return response;
    } catch (error) {
        console.log(error.message);
        
    }
}
const updateProduct = async (id, payload) => {
    try {
        const response = await axios.put(`${BASE_URL}products/${id}`, payload);
        return response;
    } catch (error) {
        console.log(error.message);
        
    }
}


export { getAllProducts, getProductById, deleteProductById, createProduct, updateProduct };