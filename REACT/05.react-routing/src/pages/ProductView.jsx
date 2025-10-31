import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import { useEffect, useState } from "react";

const ProductView = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const nav = useNavigate();

  const getData = async () => {
    try {
      const data = await getProductById(id);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-3xl font-semibold text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-md overflow-hidden p-6 md:flex md:items-center md:gap-10">
        {/* Product Image */}
        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain h-64 w-64 rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between gap-4 mt-6 md:mt-0 md:w-2/3">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {product.title}
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              {product.description}
            </p>
            <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
              {product.category}
            </span>
          </div>

          {/* Rating & Price */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-lg">★</span>
              <span className="text-gray-700 font-medium">
                {product.rating?.rate} / 5
              </span>
              <span className="text-gray-500 text-sm">
                ({product.rating?.count} reviews)
              </span>
            </div>
            <span className="text-2xl font-semibold text-green-600">
              ${product.price}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-6">
            <button
              onClick={() => nav(-1)}
              className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              ← Go Back
            </button>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
