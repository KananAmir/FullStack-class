
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function Products() {
  const [products, setProducts] = useState(null);

  const [debounceTimer, setDebounceTimer] = useState(null);

  const getAllProducts = async () => {
    try {
      const response = await axios('http://localhost:3000/api/products')
      // console.log(response.data);
      setProducts(response.data.data);

    }
    catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/products/${id}`);
      console.log(response.data);
      if (response.status === 200) {
        // remove the deleted product from the products state
        setProducts(products.filter((p) => p.id !== id));
      }
    } catch (error) {
      console.log("Error deleting product:", error);
    }
  }

  // debouncing 


  const handleSearch = (e) => {
    clearTimeout(debounceTimer);
    const query = e.target.value;
    try {
      setDebounceTimer(setTimeout(async () => {
        const response = await axios.get(`http://localhost:3000/api/products?search=${query}`);
        setProducts(response.data.data);
      }, 500)
      );

    } catch (error) {
      console.log("Error searching products:", error);
    }
  }

  useEffect(() => {
    getAllProducts()
  }, [])



  if (!products) {
    return <div className='text-center mt-5'>
      <h2 className='text-3xl'>Loading...</h2>
    </div>
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-center my-3 text-3xl'>Products</h1>
      <div className='my-4'>
        <input type="search" name="search" id="search" className='border p-2' placeholder='search product..' onChange={handleSearch} />
      </div>
      <table className='w-full table-auto border border-gray-300'>
        <thead className='bg-gray-200'>
          <tr>
            <th>Photo</th>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody className='border border-gray-300'>
          {products.map((p) => {
            return (
              <tr key={p.id}>
                <td><img src={p.image} alt={p.title} className='w-20 h-20 object-contain' /></td>
                <td>{p.id}</td>
                <td>{p.title.slice(0, 20)}...</td>
                <td>${p.price}</td>
                <td>{p.description.slice(0, 50)}...</td>
                <td>{p.category}</td>
                <td>
                  <button className='bg-red-500 text-white px-3 py-1 rounded cursor-pointer' onClick={() => handleDelete(p.id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Products
