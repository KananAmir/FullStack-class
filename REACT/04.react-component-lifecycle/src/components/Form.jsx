import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../constants";

const Form = ({ setCategories, categories }) => {

    const [category, setCategory] = useState({
        name: "",
        description: ""
    })

    const handleSubmit = async(e) => {
        e.preventDefault();
        // console.log(category);
        try {
            const response = await axios.post(`${BASE_URL}categories`, category);
            console.log(response);
            if (response.status === 201) {
                setCategories([...categories, response.data]);
                setCategory({
                    name: "",
                    description: ""
                })
            }
        } catch (error) {
            console.log(error.message);  
        }
    }
  return (
    <form className="flex flex-col max-w-sm mx-auto my-4" onSubmit={handleSubmit}>
        <input value={category.name} type="text" name="name" id="name" placeholder="name" className="border border-gray-300 p-2 rounded mb-4" 
        onChange={(e)=>{
            setCategory({
                ...category,
                name: e.target.value
            })
        }}
        />
        <input value={category.description} type="text" name="description" id="description" placeholder="description" className="border border-gray-300 p-2 rounded mb-4" 
        onChange={(e)=>{
            setCategory({
                ...category,
                description: e.target.value
            })
        }}
        />
        <button type="submit" className="!bg-blue-500 !text-white p-2 rounded !border !border-blue-500">Submit</button>
    </form>
  )
}

export default Form