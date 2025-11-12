import { useEffect, useState } from "react";
import { deleteProductById, getAllProducts } from "../../services/productService";
import Button from '@mui/material/Button';

const Products = () => {

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
    try {
      const response = await deleteProductById(id);
      if (response.status === 200) {
        getData();
      }
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <h2>Our Products</h2>
      <p>Explore our range of products designed to meet your needs.</p>

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(product => (
              <tr key={product.id}>
                <td><img src={product.image} alt={product.title} width="50" /></td>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td>
                  {/* <button className="!text-red-600" onClick={() => handleDelete(product.id)}>delete</button> */}
                  <Button variant="contained" color="error" onClick={()=>handleDelete(product.id)}>Delete</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Products