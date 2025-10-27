import { BASE_URL, ENDPOINTS } from "./constants.js";

//get all categories
const getAllCategories = async () => {
    try {
        const response = await axios(`${BASE_URL}${ENDPOINTS.CATEGORIES}`)
        return response.data
    } catch (error) {
        console.log(error.message);
    }
}

// get category by id
const getAllCategoryById = async (id) => {
    try {
        const response = await axios(`${BASE_URL}${ENDPOINTS.CATEGORIES}/${id}`)
        return response.data
    } catch (error) {
        console.log(error.message);
    }
}

// delete category by id
const deleteCategoryById = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}${ENDPOINTS.CATEGORIES}/${id}`)
        return response
    } catch (error) {
        console.log(error.message)
    }
}

// post new category
const addNewCategory = async (payload) => {
    try {
        const response = await axios.post(`${BASE_URL}${ENDPOINTS.CATEGORIES}`, payload)
        return response
    } catch (error) {
        console.log(error.message)
    }
}

// update category by id
const updateCategoryById = async (payload, id) => {
    try {
        const response = await axios.put(`${BASE_URL}${ENDPOINTS.CATEGORIES}/${id}`, payload)
        return response
    } catch (error) {
        console.log(error.message)
    }
}

export { getAllCategories, getAllCategoryById, deleteCategoryById, addNewCategory, updateCategoryById }