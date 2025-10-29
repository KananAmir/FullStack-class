import React from "react";

const ProductCard = ({ title, description, price, image }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Image */}
      <div className="w-full h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-indigo-600">${price}</span>
          <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
