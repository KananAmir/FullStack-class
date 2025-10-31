import { useEffect, useState } from "react"
import { deleteProductById, getAllProducts } from "../services/productService";
import { Link } from "react-router-dom";

function Products() {
    const [products, setProducts] = useState([])


    const getData = async () => {
        try {
            const data = await getAllProducts();
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }


    const handleDelete = async (id) => {
        try{
            const response = await deleteProductById(id);
            if(response.status === 200){
                getData();
            }
        }catch(error){
            console.log('Failed to delete the product', error);
        }
    }

    useEffect(() => { 
        getData();
    }, [])
    return (
        <div>
            <h1>Products</h1>
                <table className="table-auto border-collapse border border-slate-400 w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th>Photo</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody >
                    {products.map(product => (
                        <tr key={product.id} className="odd:bg-white even:bg-gray-100">
                            <td>
                                <img src={product.image} alt={product.title} />
                            </td>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td >
                                <button className="text-red-500"
                                onClick={()=>{
                                    handleDelete(product.id)
                                }}
                                >delete</button>
                                <Link className="text-blue-500 ml-2" to={`/products/${product.id}`}
                                >View</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Products