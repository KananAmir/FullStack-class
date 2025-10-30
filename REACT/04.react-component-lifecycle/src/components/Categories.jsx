import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../constants"

const Categories = ({ setCategories, categories }) => {
    const [selectedCategory, setSelectedCategory] = useState(null)

    console.log("rendering");


    const getCategories = async () => {
        try {
            const response = await axios(`${BASE_URL}categories`)
            // console.log(response.data);
            setCategories(response.data)

        }
        catch (error) {
            console.log(error.message)
        }
    }

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`${BASE_URL}categories/${id}`)
            console.log(response);
            if (response.status === 200) {
                await getCategories();
                // setCategories(categories.filter(category => category.id !== id))
            }
        }
        catch (error) {
            console.log(error.message)
        }
    }

    const getDetails = async (id) => {
        try {
            const response = await axios(`${BASE_URL}categories/${id}`)
            // console.log(response.data);
            setSelectedCategory(response.data)
        }
        catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getCategories()
    }, [])


    if (categories.length === 0) {
        return <div className="text-3xl">Loading categories...</div>
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Categories List</h2>

            <table className="table-auto border-collapse border border-slate-400 w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody >
                    {categories.map(category => (
                        <tr key={category.id} className="odd:bg-white even:bg-gray-100">
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                            <td >
                                <button className="text-red-500"
                                    onClick={() => {
                                        handleDelete(category.id)
                                    }}
                                >delete</button>
                                <button className="text-blue-500 ml-2"
                                    onClick={() => {
                                        getDetails(category.id)
                                    }}
                                >View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <hr />
            <div className="mt-4">
                <h3 className="text-xl font-bold mb-2">Selected Category: {selectedCategory ? selectedCategory.name : "no selected"}</h3>
            </div>
        </div>
    )
}

export default Categories