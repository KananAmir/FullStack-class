import { getAllCategories, getAllCategoryById } from "./api.js";
import { instance } from "./constants.js";

// console.log(axios.get("https://northwind.vercel.app/api/categories"));


// axios("https://northwind.vercel.app/api/categories")
//     .then((res)=>{
//         console.log(res.data);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
//     .finally()


// async function getCategories() {
//     try {
//         const response = await axios.get("https://northwind.vercel.app/api/categories")
//         console.log(response.data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getCategories()


// getAllCategories().then((data)=>{
//     console.log(data);
// })


async function  getAllData() {
    try {
        const data = await getAllCategories()
        console.log(data);
        
    } catch (error) {
        console.log(error);   
    }
}

async function  getSingleData() {
    try {
        const data = await getAllCategoryById(3)
        console.log(data);
        
    } catch (error) {
        console.log(error);   
    }
}

getAllData()
getSingleData()



const getCategories = async () => {
    try {
       const res = await instance.get("categories")
       console.log(res.data);
       
    } catch (error) {
        console.log(error.message);   
    }
}

getCategories()