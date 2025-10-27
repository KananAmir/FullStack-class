const BASE_URL = 'https://northwind.vercel.app/api/'

const ENDPOINTS = {
    CATEGORIES: "categories",
    PRODUCTS: "products",
    ORDERS: "orders",
}

const instance = axios.create({
  baseURL: 'https://northwind.vercel.app/api/',
  timeout: 1000,
  headers: {'Content-type': 'application/json'}
});


export {BASE_URL, ENDPOINTS, instance}